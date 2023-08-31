import styled from "styled-components";

type StyleProps = {
  sizeType: string;
  margin?: number | number[];
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
};

const type = {
  small: 2,
  medium: 2.25,
};

export const StyledRadioButton = styled.input<StyleProps>(
  ({ theme, margin, sizeType }) => ({
    height: theme.spacing(type[sizeType]),
    width: theme.spacing(type[sizeType]),
    accentColor: theme.palette.primary.main,
    margin: theme.spacing(margin),

    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    border: "10px solid",

    "&:hover": {
      transform: "translateY(-2px)",
    },
  })
);

export const StyledRadioContainer = styled.div({
  display: "flex",
});
