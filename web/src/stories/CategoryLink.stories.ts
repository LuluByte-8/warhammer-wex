import type { Meta, StoryObj } from "@storybook/react";

import { CategoryLink } from "@/components/categorylink";

const meta = {
  title: "Example/CategoryLink",
  component: CategoryLink,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof CategoryLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "primary",
    categoryId: "testId",
    imageURL: "https://placehold.co/600x400",
  },
};
