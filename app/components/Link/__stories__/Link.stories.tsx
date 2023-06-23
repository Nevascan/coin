import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../Link";
import { palette } from "styles/defaultTheme";

const storyLink: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  argTypes: {
    variant: {
      options: ["labelSmall", "labelMedium", "labelLarge"],
      control: { type: "inline-radio" },
    },
    color: {
      options: ["main", "secondary"],
      control: { type: "inline-radio" },
    },
  },
};

export default storyLink;
type Story = StoryObj<typeof Link>;

export const StoryLink: Story = {
  args: {
    variant: "labelLarge",
    color: "main",
    children: "Sample link",
    background: palette.primary.main,
  },
};
