import LoginForm from '../components/LoginForm';
import { fn } from 'storybook/test';

const meta = {
  title: "Blocks/LoginForm",
  component: LoginForm,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { onSubmit: fn(), onForgotPassword: fn(), onSignUp: fn() },
};

export default meta;

export const Default = {};

export const Loading = { args: { loading: true } };
