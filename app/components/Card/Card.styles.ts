import styled from "styled-components";

type StyleProps = {
  padding: number | number[];
  margin: number | number[];
  mt: number | number[];
  mb: number | number[];
  mr: number | number[];
  ml: number | number[];
};

export const StyledCard = styled.div<StyleProps>(
  ({ theme, padding, margin, mt, mb, mr, ml }) => ({
    background: theme.palette.secondary,
    borderRadius: theme.spacing(1),
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
    padding: theme.spacing(padding),
    margin: theme.spacing(margin),
    marginTop: !margin ? theme.spacing(mt) : "",
    marginBottom: !margin ? theme.spacing(mb) : "",
    marginLeft: !margin ? theme.spacing(ml) : "",
    marginRight: !margin ? theme.spacing(mr) : "",
  })
);
