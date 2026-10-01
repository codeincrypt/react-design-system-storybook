import React from 'react';
import Form from './Form';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import Switch from './Switch';
import Button from './Button';
import Card from './Card';

const SettingsForm = ({ initialValues, onSubmit, loading = false, style, ...props }) => {
  return (
    <Card title="Account settings" style={{ width: 480, ...style }} {...props}>
      <Form initialValues={initialValues} onFinish={onSubmit}>
        <Form.Item label="Display name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Language" name="language">
          <Select
            options={[
              { value: 'en', label: 'English' },
              { value: 'hi', label: 'Hindi' },
              { value: 'es', label: 'Spanish' },
            ]}
          />
        </Form.Item>
        <Form.Item label="Bio" name="bio">
          <Textarea rows={3} />
        </Form.Item>
        <Form.Item label="Email notifications" name="notifications" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>Save changes</Button>
      </Form>
    </Card>
  );
};

export default SettingsForm;
