import styled from "styled-components";

export type GridContainerProps = {
  spacing?: number[];
  justifyContent?: string;
  justifyItems?: string;
  alignContent?: string;
  alignItems?: string;
  placeContent?: string;
  placeItems?: string;
  children: any;
  style?: any;
};

export const StyledGridContainer = styled.div<GridContainerProps>(
  ({
    theme,
    spacing,
    justifyContent,
    justifyItems,
    alignContent,
    alignItems,
    placeContent,
    placeItems,
  }) => ({
    display: "grid",
    gap: theme.spacing(spacing || []),
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: "repeat(12, 1fr)",

    justifyContent: justifyContent,
    justifyItems: justifyItems,
    alignContent: alignContent,
    alignItems: alignItems,
    placeContent: placeContent,
    placeItems: placeItems,
  })
);
