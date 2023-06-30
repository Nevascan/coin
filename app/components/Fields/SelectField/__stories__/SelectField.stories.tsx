import type { Meta, StoryObj } from "@storybook/react";
import { SelectField } from "../SelectField";
import { spacing } from "styles/defaultTheme";

const storySelectField: Meta<typeof SelectField> = {
  title: "Components/Fields/SelectField",
  component: SelectField,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "inline-radio" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
  },
};

export default storySelectField;
type Story = StoryObj<typeof SelectField>;

const example = [
  "São Paulo",
  "Paraná",
  "Bahia",
  "Rio Grande do Sul",
  "Fortaleza",
];

export const StorySelectField: Story = {
  render: (args) => (
    <div style={{ margin: spacing([2, 1]) }}>
      <SelectField value={example} {...args} />
    </div>
  ),
  args: {
    size: "medium",
    fullWidth: false,
  },
};
