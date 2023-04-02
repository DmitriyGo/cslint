import { promises as fs } from "fs";
import {
  createStyleString,
  parseStyledComponent,
  sortStyles,
  splitStyledComponentsFile,
} from "./utils";

// Constants
const INPUT_FILE_PATH = "./input/SpotlightCarouselItemStyles.ts";
const OUTPUT_FILE_PATH = "./output/SpotlightCarouselItemStyles.ts";

async function processStyles() {
  try {
    // Read input file
    const data = await fs.readFile(INPUT_FILE_PATH, "utf-8");

    // Split file into header and content
    const [header, content] = splitStyledComponentsFile(data);

    // Parse styled components
    const components = parseStyledComponent(content);

    // Sort styles in each component
    components.forEach(sortStyles);

    console.log(components);

    // Create style strings for each component
    const styleStrings = components.map(createStyleString);

    // Write output file
    await fs.writeFile(
      OUTPUT_FILE_PATH,
      `${header}${styleStrings.join("\n\n")}`,
      {
        encoding: "utf-8",
      }
    );
    console.log(`Processed styles written to ${OUTPUT_FILE_PATH}.`);
  } catch (error) {
    console.error("An error occurred while processing styles:", error);
  }
}

// Run main function
processStyles();
