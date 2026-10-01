import Sidebar from '../components/Sidebar';

const meta = {
  title: "Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: { mode: "inline", style: { width: 240 }, items: [{ key: "dash", label: "Dashboard" }, { key: "users", label: "Users" }, { key: "settings", label: "Settings" }] },
};
