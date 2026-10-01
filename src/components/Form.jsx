import React from 'react';
import { Form as AntForm } from 'antd';

const Form = (props) => {
  return (
    <AntForm layout="vertical" {...props} />
  );
};

const FormItem = (props) => {
  return (
    <AntForm.Item {...props} />
  );
};

Form.Item = FormItem;
Form.useForm = AntForm.useForm;

export { FormItem };
export default Form;
