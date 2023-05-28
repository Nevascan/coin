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
};

export default preview;
