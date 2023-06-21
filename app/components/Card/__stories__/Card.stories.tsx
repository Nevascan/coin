import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "app/components/Box";
import { spacing } from "styles/defaultTheme";
import { Card } from "../Card";

const storyCard: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
};
export default storyCard;
type Story = StoryObj<typeof Card>;

export const StoryCard: Story = {
  render: (args) => (
    <Box>
      <Card {...args}>
        <div
          style={{ padding: spacing([3]), height: 100, textAlign: "center" }}
        >
          <h1>Card</h1>
        </div>
      </Card>
    </Box>
  ),
};
