import React from 'react';
import { Radio as AntRadio } from 'antd';

const Radio = (props) => {
  return (
    <AntRadio {...props} />
  );
};

Radio.Group = AntRadio.Group;
Radio.Button = AntRadio.Button;

export default Radio;
