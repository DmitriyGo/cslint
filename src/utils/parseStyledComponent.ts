import transformStyledComponents from "./transformStyledComponents";

export interface INode {
  name: string;
  content: string;
  children: INode[] | null;
}

const parseStyledComponent = (input: string): INode[] => {
  const items = transformStyledComponents(input);
  const result = [];

  for (const item of items) {
    const lines = item.content.trim().split("\n");
    const root: INode = { name: item.name, content: "", children: [] };
    let currentNode = root;
    let stack: INode[] = [];

    for (const line of lines) {
      if (line.endsWith("{")) {
        const name = line.trim().replace("{", "");
        const newNode: INode = { name, content: "", children: [] };
        currentNode.children?.push(newNode);
        stack.push(currentNode);
        currentNode = newNode;
      } else if (line.endsWith("}")) {
        currentNode.content += line.slice(0, line.indexOf("}")).trim();
        currentNode = stack.pop() ?? root;
      } else {
        currentNode.content += line.trim();
      }
    }

    result.push(root);
  }

  return result;
};

export default parseStyledComponent;
