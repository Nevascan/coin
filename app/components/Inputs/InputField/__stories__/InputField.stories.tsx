import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "../InputField";
import { spacing } from "styles/defaultTheme";

const storyInputField: Meta<typeof InputField> = {
  title: "Components/Inputs/InputField",
  component: InputField,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "inline-radio" },
    },
    type: {
      options: ["email", "password", "text", "radio", "checkbox"],
      control: { type: "select" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
  },
};

export default storyInputField;
type Story = StoryObj<typeof InputField>;

export const StoryInput: Story = {
  render: (args) => (
    <div style={{ margin: spacing(2, 1) }}>
      <InputField {...args} />
    </div>
  ),
  args: {
    name: "email",
    size: "medium",
    type: "email",
    fullWidth: false,
    placeholder: "Digite aqui",
  },
};
