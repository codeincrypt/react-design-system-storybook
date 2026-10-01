import { Input as AntInput } from "antd";

const Input= (props) => {
  return (
    <AntInput {...props} />
  )
};

Input.Password = AntInput.Password;
Input.Search = AntInput.Search;
Input.TextArea = AntInput.TextArea;

export default Input;
