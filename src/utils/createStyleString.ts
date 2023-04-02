import { INode } from "./parseStyledComponent";

const createStyleString = (node: INode): string => {
  let result = `${node.name} ${
    !node.name.includes("styled") ? "{\n  " : "`\n  "
  }`;
  result += node.content + "\n";

  if (node.children.length > 0) {
    node.children.forEach((child) => {
      result += "\n  ";
      result += createStyleString(child);
    });
  }

  result += !node.name.includes("styled") ? "  }\n" : "`;";
  return result;
};

export default createStyleString;
