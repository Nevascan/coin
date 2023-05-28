import type { StorybookConfig } from "@storybook/nextjs";
const path = require("node:path");

const config: StorybookConfig = {
  stories: [
    "../app/components/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../app/features/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-styling",
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: async (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      lib: path.resolve(__dirname, "../lib"),
      styles: path.resolve(__dirname, "../styles"),
      app: path.resolve(__dirname, "../app"),
      props: path.resolve(__dirname, "../props"),
    };
    return config;
  },
};

export default config;
