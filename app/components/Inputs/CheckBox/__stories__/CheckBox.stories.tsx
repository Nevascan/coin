import type { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from "../CheckBox";

const storyCheckBox: Meta<typeof CheckBox> = {
  title: "Components/CheckBox",
  component: CheckBox,
};

export default storyCheckBox;
type Story = StoryObj<typeof CheckBox>;

export const StoryCheckBox: Story = {
  args: {
    color: "red",
    text: 'Criando um parágrafo'
  },
};

