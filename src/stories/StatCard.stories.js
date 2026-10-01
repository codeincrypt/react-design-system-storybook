import StatCard from '../components/StatCard';
import { DollarOutlined } from '@ant-design/icons';

const meta = {
  title: "Blocks/StatCard",
  component: StatCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

export const Up = { args: { title: "Revenue", value: 128430, prefix: "$", trend: 12.5, icon: <DollarOutlined />, style: { width: 240 } } };

export const Down = { args: { title: "Orders", value: 1286, trend: -2.1, style: { width: 240 } } };
