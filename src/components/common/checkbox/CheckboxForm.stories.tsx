import type { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';
import CheckboxForm from './CheckboxForm';
import { CheckboxFormProps } from './type';

const meta: Meta<typeof CheckboxForm> = {
  title: '공통/CheckboxForm',
  component: CheckboxForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '100%', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryFn<typeof CheckboxForm>;

function Template(args: CheckboxFormProps) {
  const { register } = useForm();
  return <CheckboxForm {...args} formKey="check" register={register} />;
}

export const Primary: Story = Template.bind({});
Primary.args = {
  label: 'Checkbox',
  formKey: 'checkbox',
};
