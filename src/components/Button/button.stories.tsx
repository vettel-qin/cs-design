import type { StoryObj } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

import Button from "./button";

const meta = {
  title: "Button 按钮",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      control: "string",
    },
    children: {
      control: "string",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    onClick: () => alert(1),
  },
};

export const Primary: Story = {
  args: {
    children: "Button",
    btnType: "primary",
    onClick: () => alert(1),
  },
};
