import React from 'react';
import Form from './Form';
import Input from './Input';
import Button from './Button';
import Checkbox from './Checkbox';
import Card from './Card';
import { Heading, Text } from './Typography';

const SignupForm = ({
  title = 'Create account',
  subtitle = 'Start your free trial',
  loading = false,
  onSubmit,
  onLogin,
  style,
  ...props
}) => {
  return (
    <Card style={{ width: 400, ...style }} {...props}>
      <Heading level={3} style={{ marginBottom: 4 }}>{title}</Heading>
      <Text type="secondary">{subtitle}</Text>
      <Form style={{ marginTop: 24 }} onFinish={onSubmit}>
        <Form.Item label="Full name" name="name" rules={[{ required: true, message: 'Enter your name' }]}>
          <Input size="large" placeholder="Jane Doe" />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Enter a valid email' }]}>
          <Input size="large" placeholder="you@example.com" />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, min: 8, message: 'At least 8 characters' }]} hasFeedback>
          <Input.Password size="large" placeholder="Password" />
        </Form.Item>
        <Form.Item
          label="Confirm password"
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            { required: true, message: 'Confirm your password' },
            ({ getFieldValue }) => ({
              validator: (_, value) =>
                !value || getFieldValue('password') === value
                  ? Promise.resolve()
                  : Promise.reject(new Error('Passwords do not match')),
            }),
          ]}
        >
          <Input.Password size="large" placeholder="Confirm password" />
        </Form.Item>
        <Form.Item
          name="terms"
          valuePropName="checked"
          rules={[{ validator: (_, v) => (v ? Promise.resolve() : Promise.reject(new Error('Accept the terms'))) }]}
        >
          <Checkbox>I agree to the terms and conditions</Checkbox>
        </Form.Item>
        <Button type="primary" htmlType="submit" size="large" block loading={loading}>Create account</Button>
      </Form>
      {onLogin && (
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <Text type="secondary">Already have an account? </Text><a onClick={onLogin}>Sign in</a>
        </div>
      )}
    </Card>
  );
};

export default SignupForm;
