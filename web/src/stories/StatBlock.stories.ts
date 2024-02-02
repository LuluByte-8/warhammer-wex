import type { Meta, StoryObj } from "@storybook/react";

import { StatBlock } from "@/components/statblock";

const meta = {
  title: "Example/StatBlock",
  component: StatBlock,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof StatBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Test Name",
    movement: 0,
    toughness: 0,
    savingThrow: 0,
    wounds: 0,
    leadership: 0,
    objectiveControl: 0,
    invulnSave: 0,
  },
};
