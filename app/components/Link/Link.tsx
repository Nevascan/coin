import { FC } from "react";
import NextLink from "next/link";
import { Typography } from "../Typography";

type LinkProps = {
  children: any;
  href: string;
  variant?: string;
  style?: any;
  align?: string;
  color?: string;
  colorType?: string;
  margin?: number | number[];
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
};

export const Link: FC<LinkProps> = ({
  variant = "body2",
  align = "initial",
  margin = 0,
  mb = 0,
  mt = 0,
  mr = 0,
  ml = 0,
  href = "",
  colorType = "label",
  color = "main",
  style,
  children,
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
