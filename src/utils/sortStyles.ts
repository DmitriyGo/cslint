import { INode } from "./parseStyledComponent";
import { sortCssProperties, splitStyles } from "./index";

const sortStyles = (node: INode) => {
  const styleArray = splitStyles(node.content)
    .split(";")
    .filter((line) => line.trim())
    .map((property) => property.trim().split(":"))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: `${value};` }), {});

  node.content = sortCssProperties(styleArray);

  for (const child of node.children) {
    sortStyles(child);
  }
};

export default sortStyles;
