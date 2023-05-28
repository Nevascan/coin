import "styled-components";
import { DefaultThemeProps } from "props/theme";

declare module "styled-components" {
  export interface DefaultTheme extends DefaultThemeProps {}
}
