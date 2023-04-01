import { promises as fs } from "fs";
import {
  convertArrayToObject,
  convertStyleObjectToString,
  minifyCSS,
  sortCssProperties,
  splitStyles,
} from "./utils";

const delimiter = "`;";
const filePath = "./input/SpotlightCarouselStyles.ts";
const outputFile = "./output/SpotlightCarouselStyles.ts";

const processStyles = async () => {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    const minifiedCss = minifyCSS(content);

    const extractSubstrings = (minifiedCss, delimiter) =>
      minifiedCss
        .split(delimiter)
        .map((substring, index, substrings) => {
          if (index < substrings.length - 1) {
            return substring + delimiter;
          } else {
            return substring;
          }
        })
        .map((substring) => substring.trim())
        .filter((substring) => substring);

    const substrings = extractSubstrings(minifiedCss, delimiter);

    const styles = convertArrayToObject(substrings);

    for (const styleKey in styles) {
      const styleArray = splitStyles(styles[styleKey])
        .split(";")
        .filter((line) => line.trim())
        .map((property) => property.trim().split(":"))
        .reduce((acc, [key, value]) => ({ ...acc, [key]: `${value};` }), {});

      styles[styleKey] = `\`\n  ${sortCssProperties(styleArray)}\n\`;`;
    }

    const resultStyles = convertStyleObjectToString(styles);
    await fs.writeFile(outputFile, resultStyles, {
      encoding: "utf-8",
    });
    console.log(`Processed styles written to ${outputFile}.`);
  } catch (error) {
    console.error("An error occurred while processing styles:", error);
  }
};

processStyles();
