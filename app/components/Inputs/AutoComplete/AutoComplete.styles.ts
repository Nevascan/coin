import styled from "styled-components";

export const StyledContainer = styled.div<{ width: string }>(({ width }) => ({
  position: "relative",
  display: "inline-block",
  width: width,
}));

export const StyledList = styled.ul(({ theme }) => ({
  borderSizing: "border-box",
  position: "absolute",
  top: 57,
  left: 0,
  width: "100%",
  maxHeight: 200,
  overflowY: "auto",
  padding: 0,
  margin: 0,
  listStyle: "none",
  border: `1px solid ${theme.palette.label.secondary}`,
  borderTop: "none",
  borderBottomLeftRadius: theme.spacing(0.5),
  borderBottomRightRadius: theme.spacing(0.5),
  background: theme.palette.secondary.light,
}));

export const StyledItem = styled.li(({ theme }) => ({
  padding: 8,
  cursor: "pointer",

  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));
