import { FC } from "react";
import { StyledHeader, StyledFooter } from "./Layout.styles";
import { Link } from "../Link";
import { Routes } from "routes";
import { Box } from "../Box";

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
        <h3 style={{ color: "white", opacity: 0.9 }}>Anycorn</h3>
        <Link color="main" href={Routes.login}>
          Sign in
        </Link>
      </StyledHeader>
      <Box>{children}</Box>
      <StyledFooter background={background}>
        <h4>&copy; Copyright 2023 - Anycorn</h4>
        <Link color="main" href="https://www.linkedin.com/in/samira-grossi/">
          Acesse meu likedin
        </Link>
      </StyledFooter>
    </>
  );
};
