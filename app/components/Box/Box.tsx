import { FC } from "react";
import { StyledBox } from "./Box.styles";

type BoxProps = {
  children: any;
  background?: string;
  device?: string;
};

export const Box: FC<BoxProps> = ({
  children,
  background = "",
  device = "medium",
}) => {
  return (
    <StyledBox typeofSize={device} background={background}>
      {children}
    </StyledBox>
  );
};
