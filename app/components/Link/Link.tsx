import { FC } from "react";
import NextLink from "next/link";
import { Typography, TypographyProps } from "../Typography";

type LinkProps = TypographyProps;

export const Link: FC<LinkProps> = ({
  variant = "body2",
  align = "initial",
  margin = 0,
  mb = 0,
  mt = 0,
  mr = 0,
  ml = 0,
  colorType = "label",
  color = "main",
  style,
  children,
  href = "",
}) => {
  return (
    <Typography
      color={color}
      colorType={colorType}
      style={style}
      align={align}
      variant={variant}
      margin={margin}
      mb={mb}
      mt={mt}
      mr={mr}
      ml={ml}
    >
      <NextLink href={href}>{children}</NextLink>
    </Typography>
  );
};
