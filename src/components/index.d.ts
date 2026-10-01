import * as React from 'react';
import type * as Antd from 'antd';

export const Alert: React.FC<Antd.AlertProps>;
export const Avatar: React.FC<Antd.AvatarProps>;
export const Badge: React.FC<Antd.BadgeProps>;
export const Breadcrumb: React.FC<Antd.BreadcrumbProps>;
export const Button: React.FC<Antd.ButtonProps>;
export const Card: React.FC<Antd.CardProps>;
export const Checkbox: React.FC<Antd.CheckboxProps> & { Group: typeof Antd.Checkbox.Group };
export const DatePicker: React.FC<any>;
export const Drawer: React.FC<Antd.DrawerProps>;
export const Dropdown: React.FC<Antd.DropdownProps>;
export const Empty: React.FC<Antd.EmptyProps>;
export const Form: React.FC<Antd.FormProps> & { Item: React.FC<Antd.FormItemProps>; useForm: typeof Antd.Form.useForm };
export const FormItem: React.FC<Antd.FormItemProps>;
export const Heading: React.FC<{ level?: 1 | 2 | 3 | 4 | 5 } & Record<string, any>>;
export const Icon: React.FC<{ name: string } & Record<string, any>>;
export const Input: React.FC<Antd.InputProps>;
export const Menu: React.FC<Antd.MenuProps>;
export const Modal: React.FC<Antd.ModalProps>;
export const Pagination: React.FC<Antd.PaginationProps>;
export const Paragraph: React.FC<Record<string, any>>;
export const Popconfirm: React.FC<Antd.PopconfirmProps>;
export const Radio: React.FC<Antd.RadioProps> & { Group: typeof Antd.Radio.Group; Button: typeof Antd.Radio.Button };
export const Select: React.FC<Antd.SelectProps & { options: { value: string | number; label: React.ReactNode }[] }>;
export const Sidebar: React.FC<Antd.MenuProps>;
export const Skeleton: React.FC<Antd.SkeletonProps>;
export const Spinner: React.FC<Antd.SpinProps>;
export const Stepper: React.FC<Antd.StepsProps>;
export const Switch: React.FC<Antd.SwitchProps>;
export const Table: React.FC<Antd.TableProps<any>>;
export const Tabs: React.FC<Antd.TabsProps>;
export const Tag: React.FC<Antd.TagProps>;
export const Text: React.FC<Record<string, any>>;
export const Textarea: React.FC<any>;
export const Tooltip: React.FC<Antd.TooltipProps>;
export const Upload: React.FC<Antd.UploadProps>;

export const Toast: {
  success(content: React.ReactNode, options?: { duration?: number }): void;
  error(content: React.ReactNode, options?: { duration?: number }): void;
  warning(content: React.ReactNode, options?: { duration?: number }): void;
  info(content: React.ReactNode, options?: { duration?: number }): void;
  loading(content: React.ReactNode, options?: { duration?: number }): void;
  notify(config: Record<string, any>): void;
  destroy(): void;
};

export const ThemeProvider: React.FC<{
  mode?: 'light' | 'dark';
  defaultMode?: 'light' | 'dark';
  tokens?: Record<string, any>;
  children?: React.ReactNode;
}>;
export function useThemeMode(): { mode: 'light' | 'dark'; setMode(m: 'light' | 'dark'): void; toggleMode(): void };

export const tokens: Record<string, any>;
export const colors: Record<string, string>;
export const spacing: Record<string, number>;
export const typography: Record<string, any>;
export const radius: Record<string, number>;
export const antTokens: Record<string, any>;

// Blocks
export const Dashboard: React.FC<Record<string, any>>;
export const DashboardLayout: React.FC<Record<string, any>>;
export const DataTable: React.FC<Record<string, any>>;
export const LoginForm: React.FC<Record<string, any>>;
export const PageHeader: React.FC<Record<string, any>>;
export const ProfileCard: React.FC<Record<string, any>>;
export const SettingsForm: React.FC<Record<string, any>>;
export const SignupForm: React.FC<Record<string, any>>;
export const StatCard: React.FC<Record<string, any>>;
