import styled from "styled-components";
import { breakpoints } from "styles/defaultTheme";

export type TypographyProps = {
  variant: string;
  color: string;
  children: any;
};

export const StyledTypography = styled.p<TypographyProps>`
  @media ${breakpoints.sm} {
    font-size: ${({ theme, variant }) => theme.typography.small[variant].size};
    font-weight: ${({ theme, variant }) =>
      theme.typography.small[variant].weight};
    color: ${({ theme, color }) => theme.palette.text[color]};
  }
  @media ${breakpoints.md} {
    font-size: ${({ theme, variant }) =>
      theme?.typography.medium[variant]?.size};
    font-weight: ${({ theme, variant }) =>
      theme?.typography.medium[variant]?.weight};
    color: ${({ theme, color }) => theme?.palette.text[color]};
  }
  @media ${breakpoints.lg} {
    font-size: ${({ theme, variant }) =>
      theme?.typography.large[variant]?.size};
    font-weight: ${({ theme, variant }) =>
      theme?.typography.large[variant]?.weight};
    color: ${({ theme, color }) => theme?.palette.text[color]};
  }
`;
