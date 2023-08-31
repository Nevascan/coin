import { ChangeEventHandler } from "react";

export type InputProps = {
  size?: "small" | "medium" | "large";
  type?: "text" | "email" | "password" | "date" | "number";
  value?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  fullWidth?: boolean;
  margin?: boolean;
};

export type FormInputProps = {
  size?: "small" | "medium" | "large";
  type?: "text" | "email" | "password" | "date" | "number";
  name?: string;
  placeholder: string;
  fullWidth?: boolean;
  margin?: boolean;
  message: string | undefined;
  control: any;
};
