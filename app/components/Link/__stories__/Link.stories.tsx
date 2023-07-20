import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../Link";

const storyLink: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  argTypes: {
    variant: {
      options: ["body1", "body2", "label"],
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

export default storyLink;
type Story = StoryObj<typeof Link>;

export const StoryLink: Story = {
  render: (args) => (
    <Link
      style={{ background: args.color == "secondary" ? "#16146f" : "" }}
      margin={2}
      {...args}
    />
  ),
  args: {
    variant: "body1",
    align: "left",
    color: "main",
    children: "Sample link",
  },
};
