import { INode } from "./parseStyledComponent";

const createStyleString = (node: INode, spaces: number = 2): string => {
  let result = `${node.name} ${!node.name.includes("styled") ? "{\n" : "`\n"}`;

  // add two spaces for each nested block
  const indentation = " ".repeat(spaces);

  // split node.content into lines
  const lines = node.content.trim().split("\n");

  // indent each line of node.content
  lines.forEach((line) => {
    result += `${indentation}${line.trim()}\n`;
  });

  if (node.children.length > 0) {
    node.children.forEach((child) => {
      result += `\n${indentation}`;
      result += createStyleString(child, spaces + 2);
    });
  }

  result += !node.name.includes("styled") ? `${indentation}}\n` : "`;";
  return result;
};

export default createStyleString;
