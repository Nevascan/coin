import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "../Layout";
import { palette } from "styles/defaultTheme";
import { Card, Typography } from "app/components";

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
    background: palette.primary.main,
    children: (
      <>
        <Card padding={4} mb={2}>
          <Typography variant="body1" align="center">
            Content 1
          </Typography>
        </Card>
        <Card padding={4} mb={2}>
          <Typography variant="body1" align="center">
            Content 2
          </Typography>
        </Card>
        <Card padding={4}>
          <Typography variant="body1" align="center">
            Content 3
          </Typography>
        </Card>
      </>
    ),
  },
};
