import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../Typography";

const storyTypography: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    variant: {
      options: ["display", "headline", "body", "label"],
      control: { type: "inline-radio" },
    },
    color: {
      options: ["main", "secondary"],
      control: { type: "select" },
    },
  },
};

export default storyTypography;
type Story = StoryObj<typeof Typography>;

export const StoryTypography: Story = {
  args: {
    color: "secondary",
    variant: "headline",
    children: "Headline",
  },
};
