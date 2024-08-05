import Button from '../components/Button';
import { fn } from '@storybook/test';

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args : {
    type: 'default',
    children: 'Default Button',
  }
}

export const Primary = {
  args : {
    type: 'primary',
    children: 'Primary Button',
  }
}

export const PrimaryOutlined = {
  args : {
    ghost:true,
    type: 'primary',
    children: 'Primary Outlined Button',
  }
}

export const Danger = {
  args : {
    danger:true,
    type: 'primary',
    children: 'Danger Button',
  }
}

export const DangerOutlined = {
  args : {
    danger:true,
    children: 'Danger Outlined Button',
  }
}

export const Block = {
  args : {
    type: 'primary',
    block:true,
    children: 'Block Button',
  }
}