import DataTable from '../components/DataTable';
import Tag from '../components/Tag';
import Button from '../components/Button';

const meta = {
  title: "Blocks/DataTable",
  component: DataTable,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;

const roles = ["Admin", "Editor", "Viewer"];
const dataSource = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: roles[i % 3],
  age: 20 + ((i * 7) % 30),
}));

const columns = [
  { title: "Name", dataIndex: "name", sorter: (a, b) => a.name.localeCompare(b.name) },
  { title: "Email", dataIndex: "email" },
  { title: "Role", dataIndex: "role", filters: roles.map((r) => ({ text: r, value: r })), onFilter: (v, r) => r.role === v, render: (r) => <Tag color="blue">{r}</Tag> },
  { title: "Age", dataIndex: "age", sorter: (a, b) => a.age - b.age },
];

export const Default = { args: { columns, dataSource } };

export const WithToolbar = { args: { columns, dataSource, toolbar: <Button type="primary">Add user</Button> } };

export const NoSearch = { args: { columns, dataSource, searchable: false, pageSize: 10 } };
