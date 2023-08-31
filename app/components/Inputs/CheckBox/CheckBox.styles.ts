import styled from "styled-components";

type StyleProps = {
  sizeType: string;
  margin: number | number[];
  mt: number;
  mb: number;
  mr: number;
  ml: number;
};

export const StyledContainer = styled.div({
  display: "flex",
  alignItems: "center",
});

const type = {
  small: 2,
  medium: 2.25,
};

export const StyledCheckBox = styled.input<StyleProps>(
  ({ theme, sizeType, margin, mt, mb, mr, ml }) => ({
    cursor: "pointer",
    outline: "none",
    accentColor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    height: theme.spacing(type[sizeType]),
    width: theme.spacing(type[sizeType]),
    borderRadius: theme.spacing(0.5),
    margin: theme.spacing(margin),
    marginTop: !margin ? theme.spacing(mt) : "",
    marginBottom: !margin ? theme.spacing(mb) : "",
    marginLeft: !margin ? theme.spacing(ml) : "",
    marginRight: !margin ? theme.spacing(mr) : "",
  })
);
