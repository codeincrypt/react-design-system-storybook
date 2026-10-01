import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';

const meta = {
  title: "Form",
  component: Form,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  render: () => (
    <Form style={{ width: 320 }}>
      <Form.Item label="Email" name="email" rules={[{ required: true, type: "email" }]}>
        <Input placeholder="you@example.com" />
      </Form.Item>
      <Form.Item label="Name" name="name" rules={[{ required: true }]}>
        <Input placeholder="Your name" />
      </Form.Item>
      <Button type="primary" htmlType="submit">Submit</Button>
    </Form>
  ),
};
