import type { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';
import TextField from './TextField';
import { TextFieldProps } from './type';

const meta: Meta<typeof TextField> = {
  title: '공통/TextField',
  component: TextField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryFn<typeof TextField>;

function Template(args: TextFieldProps) {
  const { register } = useForm();
  return <TextField {...args} register={register} />;
}

export const Primary: Story = Template.bind({});
Primary.args = {
  label: 'TextField',
  formKey: 'textfield',
};
