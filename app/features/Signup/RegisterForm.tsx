import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../../../lib/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

type UserProps = {
  email: string;
  password: string;
  name: string;
};

export const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const initialValues: UserProps = {
    email: "",
    password: "",
    name: "",
  };

  const [values, setValues] = useState(initialValues);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = (data) => {
    try {
      createUserWithEmailAndPassword(data.email, data.password);
      setValues({
        email: data.email,
        password: data.password,
        name: data.name,
      });
    } catch {
      return error;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email", { required: true })} />
      <input type="password" {...register("password", { required: true })} />
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      <button type="submit">Enviar</button>
    </form>
  );
};
