import styled from "styled-components";

type StyleProps = {
  color: string;
  variant: string;
  background: string;
};

export const StyledLink = styled.div<StyleProps>(
  ({ theme, color, variant, background }) => ({
    "& a": {
      color: theme.palette.text[color],
      background: background,
      fontSize: theme.typography[variant].label.size,
      fontWeight: theme.typography[variant].label.weight,
      textDecoration: "none",

      "&:hover": {
        textDecoration: "underline",
      },
    },
  })
);
