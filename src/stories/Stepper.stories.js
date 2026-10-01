import Stepper from '../components/Stepper';

const meta = {
  title: "Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: { current: 1, items: [{ title: "Step 1" }, { title: "Step 2" }, { title: "Step 3" }] },
};
