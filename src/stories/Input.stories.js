import Input from '../components/Input';
import { fn } from '@storybook/test';

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Large = {
  args : {
    size:"large",
    placeholder:"large",
  }
}

export const Middle = {
  args : {
    size: 'middle',
    placeholder: 'middle',
  }
}

export const Small = {
  args : {
    size: 'small',
    placeholder: 'small',
  }
}