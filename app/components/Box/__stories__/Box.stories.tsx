import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../Box";

const storyBox: Meta<typeof Box> = {
  title: "Components/Box",
  component: Box,
  argTypes: {
    device: {
      options: ["small", "medium"],
      control: { type: "inline-radio" },
    },
  },
};

export default storyBox;
type Story = StoryObj<typeof Box>;

export const StoryBox: Story = {
  render: (args) => (
    <Box {...args}>
      <div style={{ background: "white", height: 180 }}></div>
    </Box>
  ),
  args: {
    background: "#A0EB85",
    device: "medium",
  },
};
