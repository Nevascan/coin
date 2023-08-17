module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:storybook/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  root: true,
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-unused-expressions": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-useless-escape": "off",
  },
};
