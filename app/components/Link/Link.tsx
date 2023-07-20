import { FC } from "react";
import NextLink from "next/link";
import { StyledLink } from "./Link.styles";
import { Typography } from "../Typography";

type LinkProps = {
  children: any;
  color?: string;
  href: string;
  variant?: string;
  margin?: number | number[];
  style?: any;
  align?: string;
};

export const Link: FC<LinkProps> = ({
  children,
  color = "secondary",
  variant = "body1",
  align = "initial",
  margin = 0,
  href = "",
  style,
}) => {
  return (
    <StyledLink color={color}>
      <Typography style={style} align={align} variant={variant} margin={margin}>
        <NextLink href={href}>{children}</NextLink>
      </Typography>
    </StyledLink>
  );
};
