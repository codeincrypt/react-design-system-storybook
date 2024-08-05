import Breadcrumb from "../components/Breadcrumb"

const meta = {
  title: "Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const items = [
  { title: "Home" },
  { title: "Categories" }
]

export const Default = {
  args: {
    items: items,
  },
};

const items2 = [
  { title: "Home" },
  { title: "Categories" },
  { title: "Electronics" }
]

export const Multiple = {
  args: {
    items: items2,
  },
};