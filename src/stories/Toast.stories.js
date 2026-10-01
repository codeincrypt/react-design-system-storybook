import Toast from '../components/Toast';
import Button from '../components/Button';

const meta = {
  title: "Toast",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

export const Variants = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <Button onClick={() => Toast.success("Saved")}>Success</Button>
      <Button onClick={() => Toast.error("Failed")}>Error</Button>
      <Button onClick={() => Toast.warning("Careful")}>Warning</Button>
      <Button onClick={() => Toast.info("FYI")}>Info</Button>
      <Button onClick={() => Toast.notify({ message: "Notification", description: "Details here" })}>Notify</Button>
    </div>
  ),
};
