# @codeincrypt/design-system

A React component library built as thin wrappers around [Ant Design](https://ant.design/) (v5).

Every component forwards all of its props to the underlying Ant Design component, so the full Ant Design API is available.

## Installation

```bash
npm install @codeincrypt/design-system antd react react-dom
```

```bash
yarn add @codeincrypt/design-system antd react react-dom
```

```bash
pnpm add @codeincrypt/design-system antd react react-dom
```

Peer requirements: `react` and `react-dom` ^18, and `antd` ^5.

Ant Design v5 uses CSS-in-JS, so no stylesheet import is needed.

## Usage

### Basic components

```jsx
import { Button, Input, Select } from '@codeincrypt/design-system';

export default function Example() {
  return (
    <>
      <Input placeholder="Your name" />
      <Select
        placeholder="Role"
        options={[
          { value: 'admin', label: 'Admin' },
          { value: 'user', label: 'User' },
        ]}
      />
      <Button type="primary">Submit</Button>
    </>
  );
}
```

All props are forwarded to the underlying Ant Design component.

### Theming and dark mode

Wrap your app in `ThemeProvider`. Use `useThemeMode` to read or toggle the mode, and pass `tokens` to override design tokens.

```jsx
import { ThemeProvider, useThemeMode, Button } from '@codeincrypt/design-system';

function ThemeToggle() {
  const { mode, toggleMode } = useThemeMode();
  return <Button onClick={toggleMode}>Switch to {mode === 'dark' ? 'light' : 'dark'}</Button>;
}

export default function App() {
  return (
    <ThemeProvider defaultMode="light" tokens={{ colorPrimary: '#6366f1' }}>
      <ThemeToggle />
    </ThemeProvider>
  );
}
```

### Forms

```jsx
import { Form, FormItem, Input, Button } from '@codeincrypt/design-system';

export default function ContactForm() {
  return (
    <Form layout="vertical" onFinish={(values) => console.log(values)}>
      <FormItem name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
        <Input />
      </FormItem>
      <Button type="primary" htmlType="submit">Send</Button>
    </Form>
  );
}
```

### Ready-made blocks

Composite components such as `LoginForm`, `SignupForm`, `SettingsForm`, `StatCard`, `DataTable`, and `DashboardLayout` cover common screens.

```jsx
import { LoginForm } from '@codeincrypt/design-system';

export default function LoginPage() {
  return (
    <LoginForm
      title="Welcome back"
      subtitle="Sign in to your account"
      onSubmit={(values) => console.log(values)} // { email, password, remember }
      onForgotPassword={() => console.log('forgot password')}
      onSignUp={() => console.log('sign up')}
    />
  );
}
```

### Feedback and overlays

```jsx
import { useState } from 'react';
import { Button, Modal } from '@codeincrypt/design-system';

export default function ConfirmDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Modal title="Confirm" open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
        Are you sure?
      </Modal>
    </>
  );
}
```

### Next.js (App Router)

Components use client-side state, so import them from a file marked `'use client'`.

```jsx
'use client';
import { Button } from '@codeincrypt/design-system';

export default function ClientButton() {
  return <Button type="primary">Click</Button>;
}
```

## Available components

**Core**

Alert, Avatar, Badge, Breadcrumb, Button, Card, Checkbox, DatePicker, Drawer, Dropdown, Empty, Form (and `FormItem`), Icon, Input, Menu, Modal, Pagination, Paragraph, Popconfirm, Radio, Select, Sidebar, Skeleton, Spinner, Stepper, Switch, Table, Tabs, Tag, Textarea, Toast, Tooltip, Typography (`Heading`, `Text`), Upload

**Composite**

Dashboard, DashboardLayout, DataTable, LoginForm, PageHeader, ProfileCard, SettingsForm, SignupForm, StatCard

Example (a login block):

```jsx
import { LoginForm } from '@codeincrypt/design-system';

export default function LoginPage() {
  return (
    <LoginForm
      title="Welcome back"
      subtitle="Sign in to your account"
      onSubmit={(values) => console.log(values)} // { email, password, remember }
      onForgotPassword={() => console.log('forgot password')}
      onSignUp={() => console.log('sign up')}
    />
  );
}
```

**Theming**

`ThemeProvider`, `useThemeMode`, and the design tokens `tokens`, `colors`, `spacing`, `typography`, `radius`, `antTokens`.
