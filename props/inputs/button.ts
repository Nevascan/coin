import { MouseEventHandler, ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  variant?: "contained" | "outline";
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  fullWidth?: boolean;
  width?: number | string;
  margin?: number | number[];
  mb?: number;
  mt?: number;
  mr?: number;
  ml?: number;
  type?: "button" | "reset" | "submit";
};
