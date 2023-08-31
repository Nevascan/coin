import { FC, useState } from "react";

import { Typography } from "app/components/Typography";
import { StyledCheckBox, StyledContainer } from "./CheckBox.styles";
import { CheckboxProps } from "props/inputs";

export const CheckBox: FC<CheckboxProps> = ({
  size = "medium",
  margin = 0,
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
  label,
  checked,
  onChange,
}) => {
  const [checkedState, setCheckedState] = useState(checked);
  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setCheckedState(isChecked);

    return onChange && onChange(isChecked);
  };

  return (
    <StyledContainer>
      <StyledCheckBox
        margin={margin}
        mt={mt}
        mb={mb}
        mr={mr}
        ml={ml}
        sizeType={size}
        type="checkbox"
        checked={checkedState}
        onChange={handleChange}
      />
      <Typography
        variant="body2"
        style={{ fontSize: size === "medium" ? "15px" : "" }}
      >
        {label}
      </Typography>
    </StyledContainer>
  );
};
