import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "../RadioGroup";

const storyRadioGroup: Meta<typeof RadioGroup> = {
  title: "Components/Inputs/RadioGroup",
  component: RadioGroup,
  argTypes: {
    size: {
      options: ["small", "medium"],
      control: { type: "inline-radio" },
    },
  },
};

export default storyRadioGroup;
type Story = StoryObj<typeof RadioGroup>;

export const StoryRadioGroup: Story = {
  render: (args) => (
    // mudar o margin para spacing
    <div style={{ margin: 16, display: "flex", gap: 2 }}>
      <RadioGroup
        id="yes"
        name="radio"
        label="Yes"
        value="Yes"
        checked={true}
      />
      <RadioGroup id="no" name="radio" label="No" value="No" />
    </div>
  ),

  args: {
    size: "medium",
  },
};
