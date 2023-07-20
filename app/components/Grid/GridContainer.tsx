import { FC } from "react";
import { StyledGridContainer } from "./GridContainer.styles";
import { GridContainerProps } from "./GridContainer.styles";

export const GridContainer: FC<GridContainerProps> = ({
  spacing,
  justifyContent,
  alignContent,
  placeContent,
  alignItems,
  justifyItems,
  placeItems,
  children,
  style,
}) => {
  return (
    <StyledGridContainer
      justifyContent={justifyContent}
      alignContent={alignContent}
      placeContent={placeContent}
      alignItems={alignItems}
      justifyItems={justifyItems}
      placeItems={placeItems}
      spacing={spacing}
      style={style}
    >
      {children}
    </StyledGridContainer>
  );
};
