import styled from "styled-components";

type StyleProps = {
  margin?: number | number[];
  sizeType: string;
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
