import Button from '../components/Button';
import Upload from '../components/Upload';
import React from 'react';

const meta = {
  title: "Upload",
  component: Upload,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: { children: <Button>Click to upload</Button> },
};
