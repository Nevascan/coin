import styled from "styled-components";
import { breakpoints } from "styles/defaultTheme";

type TypographyProps = {
  variant: string;
  color: string;
  align: string;
  margin: number | number[];
  colorType: string;
};

export const StyledTypography = styled.p<TypographyProps>`
  text-align: ${({ align }) => align};
  margin: ${({ theme, margin }) =>
    margin > 0 ? theme.spacing(margin) : "0px !important"};
  color: ${({ theme, color, colorType }) => theme.palette[colorType][color]};

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
