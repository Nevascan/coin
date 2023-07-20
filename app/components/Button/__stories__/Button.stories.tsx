import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { spacing } from "styles/defaultTheme";

const storyButton: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["contained", "outlined"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "inline-radio" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
  },
};
export default storyButton;
type Story = StoryObj<typeof Button>;

export const StoryButton: Story = {
  render: (args) => (
    <div style={{ margin: spacing(2, 1) }}>
      <Button {...args} />
    </div>
  ),
  args: {
    children: "Button",
    variant: "contained",
    size: "small",
    fullWidth: false,
    width: "100%",
  },
};
