import { FC } from "react";
import NextLink from "next/link";
import { StyledLink } from "./Link.styles";

type LinkProps = {
  children: any;
  color?: string;
  href: string;
  variant?: string;
  background?: string;
};

export const Link: FC<LinkProps> = ({
  children,
  color = "secondary",
  variant = "labelLarge",
  href = "",
  background = "",
}) => {
  return (
    <StyledLink
      background={color == "main" ? background : ""}
      variant={variant}
      color={color}
    >
      <NextLink href={href}>{children}</NextLink>
    </StyledLink>
  );
};
