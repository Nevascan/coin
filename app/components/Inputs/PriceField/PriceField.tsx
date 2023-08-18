import { FC } from "react";
import { InputField } from "../InputField";

export const PriceField: FC = ({ props }: any) => {
  return (
    <InputField
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$"
      {...props}
    />
  );
};
