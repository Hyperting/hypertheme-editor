/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@hypertheme/eslint-config/base.js", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
