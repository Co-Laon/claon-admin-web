import type { Meta, StoryObj } from '@storybook/react';
import PostCodeModal from './PostCodeModal';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof PostCodeModal> = {
  title: 'Example/PostCodeModal',
  component: PostCodeModal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PostCodeModal>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    open: true,
  },
};
