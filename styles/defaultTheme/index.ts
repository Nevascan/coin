export * from "./palette";
export * from "./typography";
export * from "./breakpoints";

import { palette } from "./palette";
import { typography } from "./typography";
import { breakpoints } from "./breakpoints";
import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  palette,
  typography,
  breakpoints,
};
