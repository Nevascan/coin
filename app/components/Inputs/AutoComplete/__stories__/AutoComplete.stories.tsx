import type { Meta, StoryObj } from "@storybook/react";
import { AutoComplete } from "../AutoComplete";
import { spacing } from "styles/defaultTheme";

const storyAutocomplete: Meta<typeof AutoComplete> = {
  title: "Components/Inputs/AutoComplete",
  component: AutoComplete,
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

export default storyAutocomplete;
type Story = StoryObj<typeof AutoComplete>;

const options = [
  "banana",
  "laranja",
  "abacaxi",
  "abacate",
  "limão",
  "uva",
  "morango",
  "mexirica",
  "melão",
];

export const StoryAutocomplete: Story = {
  render: (args) => (
    <div style={{ margin: spacing(2, 1) }}>
      <AutoComplete onChange={(ev) => console.log("ev", ev)} {...args} />
    </div>
  ),
  args: {
    name: "autocomplete",
    size: "large",
    fullWidth: false,
    placeholder: "Digite aqui",
    options: options,
  },
};
