import { FC } from "react";
import NextLink from "next/link";
import { Typography } from "../Typography";

type LinkProps = {
  children: any;
  href: string;
  variant?: string;
  margin?: number | number[];
  style?: any;
  align?: string;
  color?: string;
  colorType?: string;
};

export const Link: FC<LinkProps> = ({
  children,
  variant = "body1",
  align = "initial",
  margin = 0,
  href = "",
  style,
  color = "main",
  colorType = "label",
}) => {
  return (
    <>
      <Typography
        color={color}
        colorType={colorType}
        style={style}
        align={align}
        variant={variant}
        margin={margin}
      >
        <NextLink href={href}>{children}</NextLink>
      </Typography>
    </>
  );
};
