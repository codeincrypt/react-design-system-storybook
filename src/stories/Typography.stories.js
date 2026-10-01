import { Heading, Text } from '../components/Typography';

const meta = {
  title: "Typography",
  component: Heading,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

export const Headings = {
  render: () => (
    <div>
      {[1, 2, 3, 4, 5].map((level) => (
        <Heading key={level} level={level}>Heading {level}</Heading>
      ))}
    </div>
  ),
};

export const TextVariants = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Text>Default</Text>
      <Text type="secondary">Secondary</Text>
      <Text type="success">Success</Text>
      <Text type="warning">Warning</Text>
      <Text type="danger">Danger</Text>
      <Text strong>Strong</Text>
      <Text code>Code</Text>
    </div>
  ),
};
