import { promises as fs } from "fs";
import { sortCssProperties } from "./utils";
import splitStyles from "./utils/splitStyles";

const regex = /`([^`]*)`/g;
const filePath = "./input/SpotlightCarouselStyles.ts";
const outputFile = "./output/SpotlightCarouselStyles.txt";

async function processStyles() {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    const matched = content.match(regex);

    if (!matched) {
      console.log("No styles found in the file.");
      return;
    }

    const unpreparedString = matched.join("\n");
    const styles = unpreparedString
      .trim()
      .split("`")
      .filter((i) => i.trim())
      .map((str) => str.replace(/^\s*$[\n\r]{1,}/gm, ""))
      .join("\n");

    const styleArray = splitStyles(styles).map((styleBlock) =>
      styleBlock
        .split("\n")
        .filter((line) => line.trim())
        .map((line) => line.trim().split(":"))
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value.trim() }), {})
    );

    const sortedStyles = styleArray.map(sortCssProperties);
    await fs.writeFile(outputFile, sortedStyles.join("\n\n"), {
      encoding: "utf-8",
    });
    console.log(`Processed styles written to ${outputFile}.`);
  } catch (error) {
    console.error("An error occurred while processing styles:", error);
  }
}

processStyles();
