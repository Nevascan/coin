import { ReactNode } from "react";
import { DefaultTheme, ThemeProvider as Theme } from "styled-components";
import { defaultTheme } from "./defaultTheme";

type ThemeProviderProps = {
  children: ReactNode;
  theme?: DefaultTheme;
};

export const ThemeProvider = ({
  children,
  theme = defaultTheme,
}: ThemeProviderProps) => {
  return <Theme theme={theme}>{children}</Theme>;
};
