interface StyledComponent {
  name: string;
  content: string;
}

const transformStyledComponents = (input: string): StyledComponent[] => {
  const regex = /export const (\w+) = styled\.div(?:<\{([^}]+)}>)?`([^`]+)`;/g;
  const components: StyledComponent[] = [];

  let match;
  while ((match = regex.exec(input)) !== null) {
    const name = `export const ${match[1]} = styled.div${
      match[2] ? `<{${match[2]}}>` : ""
    }`;
    const content = match[3];

    components.push({
      name,
      content,
    });
  }

  return components;
};

export default transformStyledComponents;
