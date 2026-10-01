import SignupForm from '../components/SignupForm';
import { fn } from 'storybook/test';

const meta = {
  title: "Blocks/SignupForm",
  component: SignupForm,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { onSubmit: fn(), onLogin: fn() },
};

export default meta;

export const Default = {};
