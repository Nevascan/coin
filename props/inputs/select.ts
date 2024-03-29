import { ChangeEventHandler } from "react";

export type SelectProps = {
  size?: "small" | "medium" | "large";
  values: string[] | number[];
  value: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  fullWidth?: boolean;
  margin?: boolean;
  defaultValue?: string;
  placeholder: string;
};

export type FormSelectProps = {
  size?: "small" | "medium" | "large";
  values: string[] | number[];
  name: string;
  fullWidth?: boolean;
  margin?: boolean;
  control?: any;
  message?: string | undefined;
  defaultValue?: string;
  placeholder: string;
};
