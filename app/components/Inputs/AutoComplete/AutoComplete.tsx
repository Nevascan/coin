import { FC, useState } from "react";

import { StyledContainer, StyledList, StyledItem } from "./AutoComplete.styles";
import { StyledInputField } from "../InputField/InputField.styles";
import { AutoCompleteProps } from "props/inputs";

export const AutoComplete: FC<AutoCompleteProps> = ({
  size = "large",
  fullWidth = false,
  margin = false,
  options = [],
  value = "",
  name,
  placeholder,
  onChange,
}) => {
  const [valueChanged, setValueChanged] = useState(value);
  const [filteredValue, setFilteredValue] = useState<string[]>([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setValueChanged(value);

    if (value) {
      const filter = options.filter((option) =>
        option.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
      setFilteredValue(filter);
    } else setFilteredValue([]);

    return onChange && onChange(value);
  };

  const handleClick = (e) => {
    setValueChanged(e.target.innerHTML);
    setFilteredValue([]);
  };

  return (
    <StyledContainer width={fullWidth ? "100%" : ""}>
      <StyledInputField
        margin={margin}
        fullWidth={fullWidth}
        name={name}
        type="text"
        sizeType={size}
        placeholder={placeholder}
        onChange={handleChange}
        value={valueChanged}
      />

      {filteredValue.length > 0 && (
        <StyledList>
          {filteredValue.map((item, idx) => (
            <StyledItem key={idx} onClick={handleClick}>
              {item}
            </StyledItem>
          ))}
        </StyledList>
      )}
    </StyledContainer>
  );
};
