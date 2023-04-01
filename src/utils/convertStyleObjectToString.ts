type StyleObject = {
  [key: string]: string;
};

const convertStyleObjectToString = (styleObject: StyleObject): string => {
  let result = "";

  for (const styleObjectKey in styleObject) {
    const styleString = styleObject[styleObjectKey].trim();

    result += `${styleObjectKey}\n${styleString}\n\n`;
  }

  return result.trim();
};

export default convertStyleObjectToString;
