import type { Meta, StoryObj } from "@storybook/react";
import { spacing } from "styles/defaultTheme";
import { RadioButton } from "../RadioButton";

const storyRadioButton: Meta<typeof RadioButton> = {
  title: "Components/Inputs/RadioButton",
  component: RadioButton,
  argTypes: {
    size: {
      options: ["small", "medium"],
      control: { type: "inline-radio" },
    },
  },
};

export default storyRadioButton;
type Story = StoryObj<typeof RadioButton>;

export const StoryRadioButton: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 2, margin: spacing(2, 1) }}>
      <RadioButton
        id="yes"
        name="radio"
        label="Yes"
        value="Yes"
        checked={true}
        size="medium"
      />
      <RadioButton id="no" name="radio" label="No" value="No" size="medium" />
    </div>
  ),
};
