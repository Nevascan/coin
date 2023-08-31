import { ChangeEventHandler } from "react";

export type RadioButtonProps = {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  margin?: number | number[];
  value?: string;
  id: string;
  label: string;
  checked?: boolean;
  name: string;
  size?: "small" | "medium";
};
