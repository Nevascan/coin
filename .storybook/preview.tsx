import React from "react";

import { Preview } from "@storybook/react";
import { GlobalStyle, ThemeProvider } from "../styles";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
        <GlobalStyle />
      </ThemeProvider>
    ),
  ],
  parameters: {
    options: {
      storySort: (a, b) =>
        a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
  },
};

export default preview;
