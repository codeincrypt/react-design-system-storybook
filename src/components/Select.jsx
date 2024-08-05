import React from "react";
import { Select as AntSelect } from "antd";

const { Option } = AntSelect;

const Select = ({ options, ...props }) => {
  return (
    <AntSelect {...props}>
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </AntSelect>
  );
};

export default Select;
