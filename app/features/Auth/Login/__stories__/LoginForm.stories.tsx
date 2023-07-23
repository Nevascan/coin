import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "../LoginForm";

const storyLoginForm: Meta<typeof LoginForm> = {
  title: "Features/LoginForm",
  component: LoginForm,
};

export default storyLoginForm;
type Story = StoryObj<typeof LoginForm>;

export const StoryLoginForm: Story = {
  args: {},
};
