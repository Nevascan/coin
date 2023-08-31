import { ChangeEventHandler } from "react";

export type AutoCompleteProps = {
  size?: "small" | "medium" | "large";
  value?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  fullWidth?: boolean;
  margin?: boolean;
  options: string[];
};

export type FormAutoCompleteProps = {
  size?: "small" | "medium" | "large";
  name?: string;
  placeholder: string;
  fullWidth?: boolean;
  margin?: boolean;
  message: string | undefined;
  control: any;
  options: string[];
};
