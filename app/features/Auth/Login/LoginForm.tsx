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
import { ValidationSchema } from "./LoginForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";

type LoginFormProps = z.infer<typeof ValidationSchema>;

export const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    resolver: zodResolver(ValidationSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<LoginFormProps> = (data) => {
    console.log("data", data);
  };
  console.log("errors", errors);

  return (
    <Box>
      <StyledLogin>
        <Card padding={3}>
          <Typography color="" mb={1} align="center">
            Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* mudar a margin do input para uma flexivel */}
            <InputField
              type="email"
              placeholder="Email"
              fullWidth
              margin
              {...register("email")}
            />
            <Typography variant="body2" align="right" colorType="error">
              {errors.email?.message}
            </Typography>
            <InputField
              type="password"
              placeholder="Senha"
              fullWidth
              margin
              {...register("password")}
            />
            {/* classes em styled components */}
            <div className="typographys">
              <Link href={Routes.recoverPassword}>Esqueceu senha?</Link>
              <Typography variant="body2" colorType="error">
                {errors.password?.message}
              </Typography>
            </div>
            <Button type="submit" margin={[2, 0]} fullWidth>
              Entrar
            </Button>
          </form>
          <Link align="center" href={Routes.register}>
            Não possui uma conta?
          </Link>
        </Card>
      </StyledLogin>
    </Box>
  );
};
