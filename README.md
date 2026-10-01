# @codeincrypt/design-system

A React component library built as thin wrappers around [Ant Design](https://ant.design/) (v5).

Every component forwards all of its props to the underlying Ant Design component, so the full Ant Design API is available.

## Installation

```bash
npm install @codeincrypt/design-system
```

Peer requirements: `react` and `react-dom` ^18, and `antd` ^5.

## Usage

```jsx
import { Button, Input, Select } from '@codeincrypt/design-system';

export default function Example() {
  return (
    <>
      <Input placeholder="Your name" />
      <Button type="primary">Submit</Button>
    </>
  );
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
