import styled from "styled-components";

type StyleProps = {
  variant: string;
  typeofSize: string;
  fullWidth: boolean;
  color: string;
};

const type = {
  small: [0.5, 1.25],
  medium: [0.75, 2],
  large: [1, 2.5],
};

export const StyledButton = styled.button<StyleProps>(
  ({ theme, variant, typeofSize, fullWidth, color }) => ({
    background: theme.palette[variant][color],
    borderRadius: theme.spacing([0.5]),
    border: `1px solid ${theme.palette[variant].main}`,
    fontSize: theme.typography.small.label.size,
    fontWeight: theme.typography.medium.label.weight,
    color: theme.palette.text[color],
    letterSpacing: 0.7,
    textTransform: "uppercase",
    padding: theme.spacing(type[typeofSize]),
    cursor: "pointer",
    width: fullWidth ? "100%" : "",

    "&:hover": {
      opacity: 0.9,
      boxShadow:
        "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
    },
    "&:active": {
      transform: "scale(0.98)",
    },
  })
);
