import type { Meta, StoryObj } from "@storybook/react";
import { MaskField } from "../MaskField";
import { spacing } from "styles/defaultTheme";

const storyMaskField: Meta<typeof MaskField> = {
  title: "Components/Inputs/MaskField",
  component: MaskField,
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

export default storyMaskField;
type Story = StoryObj<typeof MaskField>;

export const StoryMaskField: Story = {
  render: (args) => (
    <div style={{ margin: spacing(2, 1) }}>
      <MaskField {...args} />
    </div>
  ),
  args: {
    name: "cellPhone",
    size: "large",
    fullWidth: false,
    placeholder: "Digite aqui",
  },
};
