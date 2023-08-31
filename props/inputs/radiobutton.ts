import { ChangeEventHandler } from "react";

export type RadioButtonProps = {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  id: string;
  label: string;
  checked?: boolean;
  name: string;
  size?: "small" | "medium";
  margin?: number | number[];
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
};
