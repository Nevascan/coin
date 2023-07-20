import { FC } from "react";
import { StyledHeader, StyledFooter } from "./Layout.styles";
import { Link } from "../Link";
import { Routes } from "routes";
import { Box } from "../Box";
import { Typography } from "../Typography";

type LayoutProps = {
  background?: string;
  children: any;
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
        <Link href={Routes.login}>Sign in</Link>
      </StyledHeader>
      <Box>{children}</Box>
      <StyledFooter background={background}>
        <Typography color="secondary" variant="body1">
          &copy; Copyright 2023 - Anycorn
        </Typography>
        <Link href="https://www.linkedin.com/in/samira-grossi/">
          Acesse meu likedin
        </Link>
      </StyledFooter>
    </>
  );
};
