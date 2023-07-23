import styled from "styled-components";
import { breakpoints, spacing } from "styles/defaultTheme";

type StyleProps = {
  background: string;
  typeofSize: string;
};

const Styled = styled.div<StyleProps>(({ background }) => ({
  position: "relative",
  boxSizing: "border-box",
  maxWidth: 1440,
  width: "100%",
  margin: "auto",
  background: background,
}));

const type = {
  small: [8, 4],
  medium: [10, 8],
};

export const StyledBox = styled(Styled)`
  padding: ${({ typeofSize }) => spacing(type[typeofSize])};
  @media ${breakpoints.md} {
    padding: ${({ typeofSize }) => spacing(type[typeofSize])};
  }
`;
