const splitStyledComponentsFile = (fileString: string): string[] => {
  const exportConstRegex = /^export const/gm;
  const exportConstMatch = exportConstRegex.exec(fileString);
  if (!exportConstMatch) {
    throw new Error("File string does not contain export const");
  }

  const exportConstIndex = exportConstMatch.index;
  const firstExportConstString = fileString.slice(0, exportConstIndex);
  const restOfFileString = fileString.slice(exportConstIndex);

  return [firstExportConstString, restOfFileString];
};

export default splitStyledComponentsFile;
