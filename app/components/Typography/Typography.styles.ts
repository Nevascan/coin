import styled from "styled-components";
import { breakpoints } from "styles/defaultTheme";

type StyleProps = {
  variant: string;
  color: string;
  align: any;
  colorType: string;
  margin: number | number[];
  mt: number | number[];
  mb: number | number[];
  mr: number | number[];
  ml: number | number[];
};

export const Styled = styled.p<StyleProps>(
  ({ theme, color, colorType, margin, mt, mb, mr, ml, align }) => ({
    color: theme.palette[colorType][color],
    margin: theme.spacing(margin),
    marginTop: !margin ? theme.spacing(mt) : "",
    marginBottom: !margin ? theme.spacing(mb) : "",
    marginLeft: !margin ? theme.spacing(ml) : "",
    marginRight: !margin ? theme.spacing(mr) : "",
    textAlign: align,
  })
);

export const StyledTypography = styled(Styled)`
  @media ${breakpoints.xs} {
    font-size: ${({ theme, variant }) => theme.typography.small[variant].size};
    font-weight: ${({ theme, variant }) =>
      theme.typography.small[variant].weight};
  }
  @media ${breakpoints.md} {
    font-size: ${({ theme, variant }) => theme.typography.medium[variant].size};
    font-weight: ${({ theme, variant }) =>
      theme.typography.medium[variant].weight};
  }
  @media ${breakpoints.lg} {
    font-size: ${({ theme, variant }) => theme.typography.large[variant].size};
    font-weight: ${({ theme, variant }) =>
      theme.typography.large[variant].weight};
  }
`;
