import React from 'react';
import { Breadcrumb as AntBreadcrumb } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const Breadcrumb = ({items}, props) => (
  <AntBreadcrumb 
    {...props}
    separator={<RightOutlined />}
    items={items} 
  />
);

export default Breadcrumb;