import styled, { StyledComponent } from "styled-components";
import ReactInputMask from "react-input-mask";

type StyleProps = {
  typeofsize: string;
  fullwidth: boolean;
  margin: boolean;
};

const type = {
  small: [1, 2],
  medium: [1.25, 2],
  large: [1.5, 2],
};

export const StyledInputField: StyledComponent<
  typeof ReactInputMask,
  any,
  StyleProps
> = styled(ReactInputMask)<StyleProps>(
  ({ theme, typeofsize, fullwidth, margin }) => ({
    borderRadius: theme.spacing(0.5),
    border: "none",
    outline: `${theme.palette.label.secondary} solid 1px`,
    fontSize: theme.typography.medium.label.size,
    color: theme.palette.label.main,
    padding: theme.spacing(type[typeofsize]),
    width: fullwidth ? "100%" : "",
    boxSizing: "border-box",
    margin: margin ? theme.spacing(1.5, 0) : theme.spacing(1.5, 0, 0.5, 0),

    "&:hover": {
      outlineColor: theme.palette.label.main,
    },
    "&:focus": {
      outlineColor: theme.palette.label.main,
    },
  })
);
