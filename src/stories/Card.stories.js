import Card from '../components/Card';

const meta = {
  title: "Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: { title: "Card title", children: "Card content", style: { width: 300 } },
};
