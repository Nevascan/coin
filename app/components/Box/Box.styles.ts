import styled from "styled-components";
import { breakpoints, spacing } from "styles/defaultTheme";

const Styled = styled.div(({}) => ({
  position: "relative",
  boxSizing: "border-box",
  maxWidth: 1440,
  width: "100%",
  margin: "auto",
  height: "100%",
}));

export const StyledBox = styled(Styled)`
  padding: ${spacing(8, 4)};
  @media ${breakpoints.md} {
    padding: ${spacing(10, 8)};
  }
`;
