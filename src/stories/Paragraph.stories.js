import Paragraph from '../components/Paragraph';

const meta = {
  title: "Paragraph",
  component: Paragraph,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: { children: "A paragraph of text." },
};

export const Ellipsis = {
  args: {
    ellipsis: { rows: 2, expandable: true },
    style: { width: 300 },
    children: "Design systems keep interfaces consistent by sharing reusable components, tokens and guidelines across a team. ".repeat(4),
  },
};
