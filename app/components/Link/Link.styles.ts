import styled from "styled-components";

type StyleProps = {
  color: string;
};

export const StyledLink = styled.a<StyleProps>(({ theme, color }) => ({
  "& a": {
    color: theme.palette.text[color],
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
