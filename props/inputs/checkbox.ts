export type CheckboxProps = {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: "small" | "medium";
  margin?: number | number[];
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
};
