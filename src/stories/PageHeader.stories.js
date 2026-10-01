import PageHeader from '../components/PageHeader';
import Button from '../components/Button';

const meta = {
  title: "Blocks/PageHeader",
  component: PageHeader,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    title: "Users",
    subtitle: "Manage your team members",
    breadcrumb: [{ title: "Home" }, { title: "Users" }],
    actions: <Button type="primary">Add user</Button>,
  },
};
