import Checkbox from '../components/Checkbox';

const meta = {
  title: "Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: { children: "Checkbox" },
};

export const Group = {
  render: () => <Checkbox.Group options={["Apple", "Pear", "Orange"]} defaultValue={["Apple"]} />,
};
