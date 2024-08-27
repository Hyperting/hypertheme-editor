/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@hypertheme/eslint-config/base.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
};
