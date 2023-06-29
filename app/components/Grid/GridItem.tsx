import { FC } from "react";
import { StyledGridItem } from "./GridItem.styles";
import { GridItemProps } from "./GridItem.styles";

export const GridItem: FC<GridItemProps> = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  style,
}) => {
  return (
    <StyledGridItem xs={xs} sm={sm} md={md} lg={lg} xl={xl} style={style}>
      {children}
    </StyledGridItem>
  );
};
