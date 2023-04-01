const minifyCSS = (css) => {
  // Remove comments
  css = css.replace(/\/\*[\s\S]*?\*\//g, "");

  // Remove newlines, tabs, and multiple spaces
  css = css.replace(/\s+/g, " ");

  // Remove space around certain characters
  css = css.replace(/\s*([:;,{}])\s*/g, "$1");

  return css;
};

export default minifyCSS;
