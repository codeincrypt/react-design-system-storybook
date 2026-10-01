import React from 'react';
import { Checkbox as AntCheckbox } from 'antd';

const Checkbox = (props) => {
  return (
    <AntCheckbox {...props} />
  );
};

Checkbox.Group = AntCheckbox.Group;

export default Checkbox;
