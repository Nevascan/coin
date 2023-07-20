import styled from "styled-components";

type StyleProps = {
  margin: number | number[];
  size: string;
};

const type = {
  small: [2.25],
  medium: [2.75],
};

export const StyledRadioGroup = styled.div<StyleProps>(
  ({ theme, margin, size }) => ({
    "& label": {
      cursor: "pointer",
    },

    // adicionar
    // aumentar o padding e tirar o px
    "& input": {
      margin: theme.spacing(margin),
      height: theme.spacing(...type[size]),
      width: theme.spacing(...type[size]),
      padding: "100px",
      cursor: "pointer",
      accentColor: theme.palette.primary.main,
      userSelect: "none", // ?
      verticalAlign: "bottom",
    },
  })
);
