import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "../Layout";

const storyLayout: Meta<typeof Layout> = {
  title: "Components/Layout",
  component: Layout,
  argTypes: {
    background: { control: "color" },
  },
};

export default storyLayout;
type Story = StoryObj<typeof Layout>;

export const StoryLayout: Story = {
  args: {
    background: "primary",
  },
};
