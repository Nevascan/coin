import styled from "styled-components";
import { breakpoints } from "styles/defaultTheme";

type props = {
  row?: string;
  column?: string;
  justifySelf?: string;
  alignSelf?: string;
  placeSelf?: string;
};

export type GridItemProps = {
  xs?: props;
  sm?: props;
  md?: props;
  lg?: props;
  xl?: props;
  children: any;
  style?: any;
};

export const StyledGridItem = styled.div<GridItemProps>`
  grid-column: ${({ xs }) => xs?.column};
  grid-row: ${({ xs }) => xs?.row};
  justify-self: ${({ xs }) => xs?.justifySelf};
  align-self: ${({ xs }) => xs?.alignSelf};
  place-self: ${({ xs }) => xs?.placeSelf};

  @media ${breakpoints.sm} {
    grid-column: ${({ sm }) => sm?.column};
    grid-row: ${({ sm }) => sm?.row};
    justify-self: ${({ sm }) => sm?.justifySelf};
    align-self: ${({ sm }) => sm?.alignSelf};
    place-self: ${({ sm }) => sm?.placeSelf};
  }
  @media ${breakpoints.md} {
    grid-column: ${({ md }) => md?.column};
    grid-row: ${({ md }) => md?.row};
    justify-self: ${({ md }) => md?.justifySelf};
    align-self: ${({ md }) => md?.alignSelf};
    place-self: ${({ md }) => md?.placeSelf};
  }
  @media ${breakpoints.lg} {
    grid-column: ${({ lg }) => lg?.column};
    grid-row: ${({ lg }) => lg?.row};
    justify-self: ${({ lg }) => lg?.justifySelf};
    align-self: ${({ lg }) => lg?.alignSelf};
    place-self: ${({ lg }) => lg?.placeSelf};
  }
  @media ${breakpoints.xl} {
    grid-column: ${({ xl }) => xl?.column};
    grid-row: ${({ xl }) => xl?.row};
    justify-self: ${({ xl }) => xl?.justifySelf};
    align-self: ${({ xl }) => xl?.alignSelf};
    place-self: ${({ xl }) => xl?.placeSelf};
  }
`;
