import React, { useState } from 'react';
import { Layout } from 'antd';
import Menu from './Menu';
import Avatar from './Avatar';
import Switch from './Switch';
import { useThemeMode } from '../theme/ThemeProvider';

const { Header, Sider, Content } = Layout;

const DashboardLayout = ({
  logo = 'Design System',
  menuItems = [],
  selectedKey,
  onMenuSelect,
  user,
  children,
  ...props
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const { mode, toggleMode } = useThemeMode();

  return (
    <Layout style={{ minHeight: '100vh' }} {...props}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} theme={mode}>
        <div style={{ height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden' }}>
          {collapsed ? logo[0] : logo}
        </div>
        <Menu
          mode="inline"
          theme={mode}
          items={menuItems}
          selectedKeys={selectedKey ? [selectedKey] : undefined}
          onSelect={({ key }) => onMenuSelect?.(key)}
        />
      </Sider>
      <Layout>
        <Header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 16, padding: '0 24px' }}>
          <Switch checkedChildren="Dark" unCheckedChildren="Light" checked={mode === 'dark'} onChange={toggleMode} />
          {user && <Avatar>{user.name?.[0]}</Avatar>}
        </Header>
        <Content style={{ margin: 24 }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
