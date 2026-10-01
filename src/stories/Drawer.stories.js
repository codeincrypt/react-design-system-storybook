import Drawer from '../components/Drawer';

const meta = {
  title: "Drawer",
  component: Drawer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: { title: "Drawer", open: true, children: "Drawer content" },
};
