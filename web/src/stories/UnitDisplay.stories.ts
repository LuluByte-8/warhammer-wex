import type { Meta, StoryObj } from "@storybook/react";
import { UnitDisplay } from "@/components/unitdisplay";

const meta = {
  title: "Example/UnitDisplay",
  component: UnitDisplay,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof UnitDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    unitId: 2,
    imageURL: "https://placehold.co/600x400",
    name: "Test Unit",
    armyId: 2,
  },
};
