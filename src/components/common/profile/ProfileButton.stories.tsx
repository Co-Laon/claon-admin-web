import type { Meta, StoryFn } from '@storybook/react';
import ProfileButton from './ProfileButton';

const meta: Meta<typeof ProfileButton> = {
  title: '공통/ProfileButton',
  component: ProfileButton,
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
type Story = StoryFn<typeof ProfileButton>;

function Template() {
  return <ProfileButton onChange={() => {}} />;
}

export const Primary: Story = Template.bind({});
Primary.args = {};
