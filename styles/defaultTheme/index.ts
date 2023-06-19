export * from "./palette";
export * from "./typography";
export * from "./breakpoints";
export * from "./spacing";

import { palette } from "./palette";
import { typography } from "./typography";
import { breakpoints } from "./breakpoints";
import { spacing } from "./spacing";
import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  spacing,
  palette,
  typography,
  breakpoints,
};
