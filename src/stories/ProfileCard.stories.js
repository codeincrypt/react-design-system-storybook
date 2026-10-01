import ProfileCard from '../components/ProfileCard';

const meta = {
  title: "Blocks/ProfileCard",
  component: ProfileCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: { name: "Kartik Swarnkar", role: "Frontend Engineer", email: "kartik@example.com", tags: ["React", "Node", "Design"] },
};
