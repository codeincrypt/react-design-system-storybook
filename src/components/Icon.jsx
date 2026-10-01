import React from 'react';
import * as AntIcons from '@ant-design/icons';

const Icon = ({ name, ...props }) => {
  const Component = AntIcons[name];
  return Component ? <Component {...props} /> : null;
};

export * from '@ant-design/icons';
export default Icon;
