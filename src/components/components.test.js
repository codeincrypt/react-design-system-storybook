import React from 'react';
import { render } from '@testing-library/react';
import * as DS from './index';

beforeAll(() => {
  // jsdom's selector engine throws on some antd cssinjs rules; fall back to an empty style.
  const getComputedStyle = window.getComputedStyle;
  window.getComputedStyle = (...args) => {
    try {
      return getComputedStyle(...args);
    } catch (e) {
      return {};
    }
  };
  window.matchMedia = window.matchMedia || (() => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} }));
});

const renderable = {
  Alert: { message: 'a' },
  Avatar: {},
  Badge: { count: 1 },
  Button: { children: 'b' },
  Card: { children: 'c' },
  Checkbox: { children: 'c' },
  Empty: {},
  Input: {},
  Paragraph: { children: 'p' },
  Radio: { children: 'r' },
  Skeleton: {},
  Spinner: {},
  Switch: {},
  Tag: { children: 't' },
  Textarea: {},
  Heading: { children: 'h' },
  Text: { children: 't' },
  Pagination: { total: 10 },
  Table: { columns: [], dataSource: [] },
  Tabs: { items: [{ key: '1', label: 'one', children: 'x' }] },
  Stepper: { items: [{ title: 'a' }] },
  Menu: { items: [{ key: '1', label: 'one' }] },
  Sidebar: { items: [{ key: '1', label: 'one' }] },
  Icon: { name: 'HomeOutlined' },
  LoginForm: {},
  SignupForm: {},
  SettingsForm: {},
  StatCard: { title: 'x', value: 1, trend: 2 },
  PageHeader: { title: 'x' },
  ProfileCard: { name: 'Kartik', role: 'dev' },
  DataTable: { columns: [{ title: 'a', dataIndex: 'a' }], dataSource: [{ key: 1, a: 'x' }] },
  Dashboard: {},
};

describe('design system components', () => {
  Object.entries(renderable).forEach(([name, props]) => {
    test(`${name} renders`, () => {
      const Component = DS[name];
      const { container } = render(<Component {...props} />);
      expect(container).toBeTruthy();
    });
  });

  test('DashboardLayout renders', () => {
    const { getByText } = render(<DS.ThemeProvider><DS.DashboardLayout logo="Acme">body</DS.DashboardLayout></DS.ThemeProvider>);
    expect(getByText('body')).toBeTruthy();
  });

  test('ThemeProvider renders children', () => {
    const { getByText } = render(<DS.ThemeProvider><span>hi</span></DS.ThemeProvider>);
    expect(getByText('hi')).toBeTruthy();
  });

  test('every export is defined', () => {
    Object.entries(DS).forEach(([name, value]) => expect([name, value === undefined]).toEqual([name, false]));
  });
});
