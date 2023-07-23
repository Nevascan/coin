import {
  Box,
  Button,
  Card,
  InputField,
  Link,
  Typography,
} from "app/components";
import { FC } from "react";
import { Routes } from "routes";
import { StyledLogin } from "./LoginForm.styles";

export const LoginForm: FC = () => {
  return (
    <Box>
      <StyledLogin>
        <Card padding={3}>
          <Typography color="" mb={1} align="center">
            Login
          </Typography>
          <form>
            <InputField
              name="email"
              type="email"
              onChange={() => {}}
              placeholder="Email"
              fullWidth
              margin
            />
            <InputField
              name="password"
              type="password"
              onChange={() => {}}
              placeholder="Senha"
              fullWidth
            />
            <Link mt={0.5} href={Routes.recoverPassword}>
              Esqueceu senha?
            </Link>
          </form>
          <Button margin={[2, 0]} onClick={() => {}} fullWidth>
            Entrar
          </Button>
          <Link align="center" href={Routes.register}>
            Não possui uma conta?
          </Link>
        </Card>
      </StyledLogin>
    </Box>
  );
};
