import React from 'react';
import Dashboard from '../components/Dashboard';
import DashboardLayout from '../components/DashboardLayout';
import { DashboardOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

const meta = {
  title: "Blocks/Dashboard",
  component: Dashboard,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;

export const Content = {
  render: () => <div style={{ padding: 24 }}><Dashboard /></div>,
};

export const WithLayout = {
  render: () => (
    <DashboardLayout
      logo="Acme"
      user={{ name: "Kartik" }}
      selectedKey="dashboard"
      menuItems={[
        { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
        { key: "users", icon: <UserOutlined />, label: "Users" },
        { key: "settings", icon: <SettingOutlined />, label: "Settings" },
      ]}
    >
      <Dashboard />
    </DashboardLayout>
  ),
};
