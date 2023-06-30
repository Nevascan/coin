import type { Meta, StoryObj } from "@storybook/react";
import { NumericInputField } from "../NumericInputField";
import { spacing } from "styles/defaultTheme";

const storyNumericInputField: Meta<typeof NumericInputField> = {
  title: "Components/NumericInputField",
  component: NumericInputField,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "inline-radio" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    name: {
      options: ["cellPhone", "date"],
      control: { type: "inline-radio" },
    },
  },
};

export default storyNumericInputField;
type Story = StoryObj<typeof NumericInputField>;

export const StoryNumericField: Story = {
  render: (args) => (
    <div style={{ margin: spacing([2, 1]) }}>
      <NumericInputField {...args} />
    </div>
  ),
  args: {
    name: "cellPhone",
    size: "medium",
    fullWidth: false,
    placeholder: "Digite aqui",
  },
};
