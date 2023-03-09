module.exports = {
  stories: [
    "../app/components/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../app/features/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    storyStoreV7: true,
  },
};
