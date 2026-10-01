import React from 'react';
import Breadcrumb from './Breadcrumb';
import { Heading, Text } from './Typography';

const PageHeader = ({ title, subtitle, breadcrumb, actions, style }) => {
  return (
    <div style={{ marginBottom: 24, ...style }}>
      {breadcrumb && <Breadcrumb items={breadcrumb} />}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <div>
          <Heading level={3} style={{ margin: 0 }}>{title}</Heading>
          {subtitle && <Text type="secondary">{subtitle}</Text>}
        </div>
        {actions && <div style={{ display: 'flex', gap: 8 }}>{actions}</div>}
      </div>
    </div>
  );
};

export default PageHeader;
