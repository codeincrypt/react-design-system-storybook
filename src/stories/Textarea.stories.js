import Textarea from '../components/Textarea';

const meta = {
  title: "Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: { rows: 4, placeholder: "Write something..." },
};
