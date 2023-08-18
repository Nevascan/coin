import styled from "styled-components";
import { breakpoints, spacing } from "styles/defaultTheme";

type StyleProps = { background: string };

const StyledLayout = styled.div<StyleProps>(({ theme, background }) => ({
  width: "100%",
  background: theme.palette[background]?.main || background,
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const StyledMedia = styled(StyledLayout)`
  padding: ${spacing(0, 4)};
  @media ${breakpoints.md} {
    padding: ${spacing(0, 8)};
  }
`;
export const StyledHeader = styled(StyledMedia)`
  height: 70px;
  position: sticky;
  top: 0px;
  z-index: 1;
`;

export const StyledFooter = styled(StyledMedia)`
  height: 100px;
  position: sticky;
  bottom: 0px;
`;
