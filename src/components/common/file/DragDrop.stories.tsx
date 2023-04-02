import type { Meta, StoryFn } from '@storybook/react';
import DragDrop from './DragDrop';
import { DragDropProps } from './type';

const meta: Meta<typeof DragDrop> = {
  title: '공통/DragDrop',
  component: DragDrop,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryFn<typeof DragDrop>;

function Template(args: DragDropProps) {
  return <DragDrop {...args} onChange={() => {}} />;
}

export const Primary: Story = Template.bind({});
Primary.args = {};
