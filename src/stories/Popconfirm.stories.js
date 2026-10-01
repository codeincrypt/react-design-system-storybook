import Button from '../components/Button';
import Popconfirm from '../components/Popconfirm';
import React from 'react';

const meta = {
  title: "Popconfirm",
  component: Popconfirm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: { title: "Are you sure?", children: <Button danger>Delete</Button> },
};
