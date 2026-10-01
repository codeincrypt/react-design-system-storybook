import Table from '../components/Table';

const meta = {
  title: "Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    columns: [
      { title: "Name", dataIndex: "name" },
      { title: "Age", dataIndex: "age" },
      { title: "City", dataIndex: "city" },
      { title: "Role", dataIndex: "role" },
    ],
    dataSource: [
      { key: 1, name: "John", age: 32, city: "New York", role: "Engineer" },
      { key: 2, name: "Jane", age: 28, city: "London", role: "Designer" },
      { key: 3, name: "Michael", age: 41, city: "Toronto", role: "Product Manager" },
      { key: 4, name: "Emily", age: 25, city: "Sydney", role: "QA Analyst" },
      { key: 5, name: "David", age: 37, city: "Berlin", role: "DevOps Engineer" },
      { key: 6, name: "Sophia", age: 30, city: "Paris", role: "Data Analyst" },
      { key: 7, name: "Daniel", age: 45, city: "Mumbai", role: "Tech Lead" },
      { key: 8, name: "Olivia", age: 27, city: "Singapore", role: "Frontend Developer" },
    ],
  },
};
