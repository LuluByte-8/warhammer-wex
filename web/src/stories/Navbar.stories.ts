import type { Meta, StoryObj } from "@storybook/react";

import { NavBar } from "@/components/navbar";

const meta = {
  title: "Example/Navbar",
  component: NavBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    loggedin: true,
  },
};
