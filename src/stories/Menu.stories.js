import Menu from '../components/Menu';

const meta = {
  title: "Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: { mode: "horizontal", items: [{ key: "home", label: "Home" }, { key: "about", label: "About" }] },
};
