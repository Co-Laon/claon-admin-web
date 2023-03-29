import type { Meta, StoryFn } from '@storybook/react';
import FileList from './FileList';
import { FileListProps } from './type';

const meta: Meta<typeof FileList> = {
  title: '공통/FileList',
  component: FileList,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          width: '10%',
          height: '100%',
          padding: '20px',
          backgroundColor: '#f2f2f2',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryFn<typeof FileList>;

function Template(args: FileListProps) {
  return <FileList {...args} />;
}

export const Primary: Story = Template.bind({});
Primary.args = {};
