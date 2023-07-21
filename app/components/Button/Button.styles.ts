import styled from "styled-components";

type StyleProps = {
  variant: string;
  size: string;
  fullWidth: boolean;
  width: number | string;
  margin: number | number[];
  mt: number | number[];
  mb: number | number[];
  mr: number | number[];
  ml: number | number[];
};

const type = {
  small: [0.5, 1.25],
  medium: [0.75, 2],
  large: [1, 2.5],
};

export const StyledButton = styled.button<StyleProps>(
  ({ theme, variant, size, fullWidth, width, margin, mt, mb, mr, ml }) => ({
    background:
      variant == "contained"
        ? theme.palette.primary.main
        : theme.palette.primary.light,
    color:
      variant == "contained"
        ? theme.palette.text.secondary
        : theme.palette.text.main,

    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(0.5),
    fontSize: theme.typography.small.label.size,
    fontWeight: theme.typography.medium.label.weight,
    letterSpacing: 0.7,
    textTransform: "uppercase",
    padding: theme.spacing(...type[size]),
    cursor: "pointer",
    width: fullWidth ? "100%" : "",
    maxWidth: !fullWidth ? width : "",
    margin: theme.spacing(margin),
    marginTop: !margin ? theme.spacing(mt) : "",
    marginBottom: !margin ? theme.spacing(mb) : "",
    marginLeft: !margin ? theme.spacing(ml) : "",
    marginRight: !margin ? theme.spacing(mr) : "",

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
