import React from 'react';
import { Input } from 'antd';
const AntTextarea = Input.TextArea;

const Textarea = (props) => {
  return (
    <AntTextarea {...props} />
  );
};

export default Textarea;
