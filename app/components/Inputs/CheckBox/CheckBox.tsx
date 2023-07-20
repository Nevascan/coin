import { FC } from "react";
import { StyledCheckBox } from './CheckBox.styles'

type CheckBoxProps = {
  text?: string;
  color?: string;
}

export const CheckBox:FC <CheckBoxProps> = ({ text, color = '' }) => {
  return (
    <StyledCheckBox fontColor={color}>
      {text}
    </StyledCheckBox>
  );
};
