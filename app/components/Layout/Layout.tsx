import { FC, ReactNode } from "react";
import { StyledHeader, StyledFooter } from "./Layout.styles";
import { Link } from "../Link";
import { Routes } from "routes";
import { Box } from "../Box";
import { Typography } from "../Typography";

type LayoutProps = {
  background?: string;
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({
  children,
  background = "primary",
}) => {
  return (
    <>
      <StyledHeader background={background}>
        <Typography color="secondary" variant="body1">
          Anycorn
        </Typography>
        <Link colorType="text" color="secondary" href={Routes.login}>
          Sign in
        </Link>
      </StyledHeader>
      <Box>{children}</Box>
      <StyledFooter background={background}>
        <Typography color="secondary" variant="body1">
          &copy; Copyright 2023 - Anycorn
        </Typography>
        <Link colorType="text" color="secondary" href={Routes.linkedin}>
          Acesse meu likedin
        </Link>
      </StyledFooter>
    </>
  );
};
