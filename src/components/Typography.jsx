import React from 'react';
import { Typography } from 'antd';

const { Title, Text: AntText } = Typography;

const Heading = ({ level = 1, ...props }) => {
  return (
    <Title level={level} {...props} />
  );
};

const Text = (props) => {
  return (
    <AntText {...props} />
  );
};

export { Heading, Text };
