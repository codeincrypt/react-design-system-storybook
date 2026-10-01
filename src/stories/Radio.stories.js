import Radio from '../components/Radio';

const meta = {
  title: "Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: { children: "Radio" },
};

export const Group = {
  render: () => (
    <Radio.Group defaultValue="a">
      <Radio value="a">A</Radio>
      <Radio value="b">B</Radio>
    </Radio.Group>
  ),
};
