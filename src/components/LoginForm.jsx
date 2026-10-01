import React from 'react';
import Form from './Form';
import Input from './Input';
import Button from './Button';
import Checkbox from './Checkbox';
import Card from './Card';
import { Heading, Text } from './Typography';

const LoginForm = ({
  title = 'Welcome back',
  subtitle = 'Sign in to your account',
  loading = false,
  onSubmit,
  onForgotPassword,
  onSignUp,
  style,
  ...props
}) => {
  return (
    <Card style={{ width: 380, ...style }} {...props}>
      <Heading level={3} style={{ marginBottom: 4 }}>{title}</Heading>
      <Text type="secondary">{subtitle}</Text>
      <Form style={{ marginTop: 24 }} onFinish={onSubmit} initialValues={{ remember: true }}>
        <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Enter a valid email' }]}>
          <Input size="large" placeholder="you@example.com" />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Enter your password' }]}>
          <Input.Password size="large" placeholder="Password" />
        </Form.Item>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a onClick={onForgotPassword}>Forgot password?</a>
        </div>
        <Button type="primary" htmlType="submit" size="large" block loading={loading}>Sign in</Button>
      </Form>
      {onSignUp && (
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <Text type="secondary">Don't have an account? </Text><a onClick={onSignUp}>Sign up</a>
        </div>
      )}
    </Card>
  );
};

export default LoginForm;
