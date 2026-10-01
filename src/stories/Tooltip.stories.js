import Tooltip from '../components/Tooltip';
import React from 'react';

const meta = {
  title: "Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: { title: "Tooltip text", children: <span>Hover me</span> },
};
