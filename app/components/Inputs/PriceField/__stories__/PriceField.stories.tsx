import type { Meta, StoryObj } from "@storybook/react";
import { PriceField } from "../PriceField";
import { spacing } from "styles/defaultTheme";

const storyPriceField: Meta<typeof PriceField> = {
  title: "Components/Inputs/PriceField",
  component: PriceField,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "inline-radio" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
  },
};

export default storyPriceField;
type Story = StoryObj<typeof PriceField>;

export const StoryPriceField: Story = {
  render: (args) => (
    <div style={{ margin: spacing(2, 1) }}>
      <PriceField {...args} />
    </div>
  ),
  args: {
    name: "price",
    size: "large",
    fullWidth: false,
    placeholder: "Digite aqui",
  },
};
