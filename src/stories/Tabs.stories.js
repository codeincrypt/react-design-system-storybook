import Tabs from '../components/Tabs';

const meta = {
  title: "Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: { items: [{ key: "1", label: "Tab 1", children: "Content 1" }, { key: "2", label: "Tab 2", children: "Content 2" }] },
};
