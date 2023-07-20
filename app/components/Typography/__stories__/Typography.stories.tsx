import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../Typography";

const storyTypography: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    variant: {
      options: ["display", "headline", "body1", "body2", "label"],
      control: { type: "inline-radio" },
    },
    color: {
      options: ["main", "secondary"],
      control: { type: "select" },
    },
    align: {
      options: ["left", "center", "right"],
      control: { type: "inline-radio" },
    },
  },
};

export default storyTypography;
type Story = StoryObj<typeof Typography>;

export const StoryTypography: Story = {
  render: (args) => (
    <Typography
      style={{ background: args.color == "secondary" ? "#16146f" : "" }}
      margin={2}
      {...args}
    />
  ),
  args: {
    color: "main",
    variant: "headline",
    align: "left",
    children: "Typography",
  },
};
