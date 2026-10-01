import SettingsForm from '../components/SettingsForm';
import { fn } from '@storybook/test';

const meta = {
  title: "Blocks/SettingsForm",
  component: SettingsForm,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    onSubmit: fn(),
    initialValues: { name: "Kartik", email: "kartik@example.com", language: "en", notifications: true },
  },
};

export default meta;

export const Default = {};
