import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import React from 'react';

const meta = {
  title: "Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: { menu: { items: [{ key: "1", label: "Item 1" }, { key: "2", label: "Item 2" }] }, children: <Button>Open</Button> },
};
