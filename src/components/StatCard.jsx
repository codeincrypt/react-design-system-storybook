import React from 'react';
import { Statistic } from 'antd';
import Card from './Card';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const StatCard = ({ title, value, prefix, suffix, trend, icon, ...props }) => {
  const up = trend >= 0;
  return (
    <Card {...props}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Statistic title={title} value={value} prefix={prefix} suffix={suffix} />
        {icon && <span style={{ fontSize: 28, opacity: 0.6 }}>{icon}</span>}
      </div>
      {trend !== undefined && (
        <div style={{ marginTop: 8, color: up ? '#52c41a' : '#ff4d4f' }}>
          {up ? <ArrowUpOutlined /> : <ArrowDownOutlined />} {Math.abs(trend)}%
          <span style={{ opacity: 0.6, marginLeft: 6 }}>vs last period</span>
        </div>
      )}
    </Card>
  );
};

export default StatCard;
