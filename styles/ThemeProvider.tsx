import { ThemeProvider as Theme } from "styled-components";
import { defaultTheme } from "./defaultTheme";

export const ThemeProvider = ({ children, theme = defaultTheme }: any) => {
  return <Theme theme={theme}>{children}</Theme>;
};
