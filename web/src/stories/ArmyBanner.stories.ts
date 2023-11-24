import type { Meta, StoryObj } from "@storybook/react";

import { ArmyBanner } from "@/components/armybanner";

const meta = {
  title: "Example/ArmyBanner",
  component: ArmyBanner,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof ArmyBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Test Name",
    description: "Test Description",
    armyId: "testID",
    categoryId: "testID",
    imageURL: "https://placehold.co/600x400",
  },
};
