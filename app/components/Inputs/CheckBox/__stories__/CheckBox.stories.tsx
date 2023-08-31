import type { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from "../CheckBox";

const storyCheckBox: Meta<typeof CheckBox> = {
  title: "Components/Inputs/CheckBox",
  component: CheckBox,
  argTypes: {
    size: {
      options: ["small", "medium"],
      control: { type: "inline-radio" },
    },
  },
};

export default storyCheckBox;
type Story = StoryObj<typeof CheckBox>;

export const StoryCheckBox: Story = {
  render: (args) => <CheckBox margin={[2, 1, 2, 2]} {...args} />,
  args: {
    size: "medium",
    label: "Checkbox",
  },
};
