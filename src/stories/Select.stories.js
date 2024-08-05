import Select from '../components/Select';
import { fn } from '@storybook/test';

const meta = {
  title: "Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const options = [
  { label: "Select any", value: "" },
  { label: "Select1", value: "Select1" },
  { label: "Select2", value: "Select2" }
];

export const Default = {
  args: {
    options: options,
    placeholder:"Select any",
  },
};

export const Large = {
  args: {
    options: options,
    placeholder:"Select any",
    size:"large",
  },
};

export const Small = {
  args: {
    options: options,
    placeholder:"Select any",
    size:"small",
  },
};