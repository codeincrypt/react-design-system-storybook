import Alert from '../components/Alert';

const meta = {
  title: "Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: { message: "Alert message", type: "info", showIcon: true },
};
