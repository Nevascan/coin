import type { Meta, StoryObj } from "@storybook/react";
import { GridContainer } from "../GridContainer";
import { GridItem } from "../GridItem";

const storyGrid: Meta<typeof GridContainer> = {
  title: "Components/Grid",
  component: GridContainer,
};

export default storyGrid;
type Story = StoryObj<typeof GridContainer>;

const items = [1];
for (let i = 2; i > 1 && i <= 30; i++) {
  items.push(i);
}

// Melhorar a visualizacao no story
export const StoryGrid: Story = {
  render: (args) => (
    <div style={{ width: 1000 }}>
      <GridContainer
        style={{ border: "1px solid red", height: 200 }}
        spacing={[2]}
        {...args}
      >
        {items.map((idx) => (
          <GridItem style={{ border: "1px solid" }}>Item {idx}</GridItem>
        ))}
      </GridContainer>
    </div>
  ),
  args: {},
};
