import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RegisterForm } from "../RegisterForm";

export default {
  title: "Features/RegisterForm",
  component: RegisterForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = (args) => (
  <RegisterForm {...args} />
);

export const User = Template.bind({});
User.args = {
  name: "Samira",
  email: "samira@gmail.com",
  password: "111111",
};
