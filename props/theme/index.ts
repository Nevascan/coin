import { BreakpointsProps } from "./breakpoints";
import { PaletteProps } from "./palette";
import { TypographyProps } from "./typography";

export type DefaultThemeProps = {
  spacing: (size: number[]) => any;
  palette: PaletteProps;
  typography: TypographyProps;
  breakpoints: BreakpointsProps;
};
