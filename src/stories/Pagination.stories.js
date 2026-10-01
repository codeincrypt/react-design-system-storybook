import Pagination from '../components/Pagination';

const meta = {
  title: "Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: { defaultCurrent: 1, total: 100 },
};
