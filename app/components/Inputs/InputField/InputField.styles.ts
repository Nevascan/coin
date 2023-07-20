import styled from "styled-components";

type StyleProps = {
  typeofSize: string;
  fullWidth: boolean;
  margin: boolean;
};

const type = {
  small: [1, 2],
  medium: [1.25, 2],
  large: [1.5, 2],
};

export const StyledInputField = styled.input<StyleProps>(
  ({ theme, typeofSize, fullWidth, margin }) => ({
    borderRadius: theme.spacing(0.5),
    border: "none",
    outline: `${theme.palette.label.secondary} solid 1px`,
    fontSize: theme.typography.medium.label.size,
    color: theme.palette.label.main,
    padding: theme.spacing(...type[typeofSize]),
    width: fullWidth ? "100%" : "",
    boxSizing: "border-box",
    margin: margin ? theme.spacing(1.5, 0) : "",

    "&:hover": {
      outlineColor: theme.palette.label.main,
    },
    "&:focus": {
      outlineColor: theme.palette.label.main,
    },
  })
);
