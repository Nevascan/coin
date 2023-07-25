import { FC } from "react";
import { StyledBox } from "./Box.styles";
import { spacing } from "styles/defaultTheme";

type BoxProps = {
  children: any;
  device?: string;
  style?: any;
};

const size = {
  small: [8, 4],
  medium: [10, 8],
};

const width = {
  small: 600,
  medium: 1000,
};

export const Box: FC<BoxProps> = ({ device = "", style, children }) => {
  return (
    <StyledBox
      style={{ width: width[device], padding: spacing(size[device]), ...style }}
    >
      {children}
    </StyledBox>
  );
};
