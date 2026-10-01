import Tag from '../components/Tag';

const meta = {
  title: "Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: { color: "blue", children: "Tag" },
};
