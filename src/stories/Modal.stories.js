import Modal from '../components/Modal';

const meta = {
  title: "Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: { title: "Modal", open: true, children: "Modal content" },
};
