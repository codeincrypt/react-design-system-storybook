import React from 'react';
import { Row, Col } from 'antd';
import { DollarOutlined, UserOutlined, ShoppingCartOutlined, LineChartOutlined } from '@ant-design/icons';
import StatCard from './StatCard';
import PageHeader from './PageHeader';
import DataTable from './DataTable';
import Card from './Card';
import Tag from './Tag';
import Button from './Button';

const defaultStats = [
  { title: 'Revenue', value: 128430, prefix: '$', trend: 12.5, icon: <DollarOutlined /> },
  { title: 'Users', value: 8423, trend: 4.2, icon: <UserOutlined /> },
  { title: 'Orders', value: 1286, trend: -2.1, icon: <ShoppingCartOutlined /> },
  { title: 'Conversion', value: 3.8, suffix: '%', trend: 0.6, icon: <LineChartOutlined /> },
];

const statusColor = { Paid: 'green', Pending: 'gold', Failed: 'red' };

const defaultColumns = [
  { title: 'Order', dataIndex: 'id' },
  { title: 'Customer', dataIndex: 'customer' },
  { title: 'Amount', dataIndex: 'amount', render: (v) => `$${v}`, sorter: (a, b) => a.amount - b.amount },
  { title: 'Status', dataIndex: 'status', render: (s) => <Tag color={statusColor[s]}>{s}</Tag> },
];

const defaultData = [
  { id: '#1001', customer: 'Alice Johnson', amount: 240, status: 'Paid' },
  { id: '#1002', customer: 'Bob Smith', amount: 120, status: 'Pending' },
  { id: '#1003', customer: 'Carol White', amount: 560, status: 'Paid' },
  { id: '#1004', customer: 'David Brown', amount: 89, status: 'Failed' },
  { id: '#1005', customer: 'Eve Davis', amount: 310, status: 'Paid' },
  { id: '#1006', customer: 'Frank Miller', amount: 75, status: 'Pending' },
];

const Dashboard = ({
  title = 'Dashboard',
  subtitle = 'Overview of your business',
  stats = defaultStats,
  columns = defaultColumns,
  dataSource = defaultData,
  tableTitle = 'Recent orders',
}) => {
  return (
    <div>
      <PageHeader title={title} subtitle={subtitle} actions={<Button type="primary">New order</Button>} />
      <Row gutter={[16, 16]}>
        {stats.map((stat) => (
          <Col key={stat.title} xs={24} sm={12} xl={6}>
            <StatCard {...stat} />
          </Col>
        ))}
      </Row>
      <Card title={tableTitle} style={{ marginTop: 16 }}>
        <DataTable columns={columns} dataSource={dataSource} />
      </Card>
    </div>
  );
};

export default Dashboard;
