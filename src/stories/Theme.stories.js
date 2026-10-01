import ThemeProvider, { useThemeMode } from '../theme/ThemeProvider';
import { tokens } from '../theme/tokens';
import Button from '../components/Button';
import Card from '../components/Card';

const meta = {
  title: "Foundations/Theme",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

const Toggle = () => {
  const { mode, toggleMode } = useThemeMode();
  return <Button onClick={toggleMode}>Mode: {mode}</Button>;
};

export const DarkMode = {
  render: () => (
    <ThemeProvider>
      <Card title="Themed card"><Toggle /></Card>
    </ThemeProvider>
  ),
};

export const Tokens = {
  render: () => (
    <div>
      <h3>Colors</h3>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {Object.entries(tokens.colors).map(([name, value]) => (
          <div key={name} style={{ width: 90, textAlign: "center", fontSize: 12 }}>
            <div style={{ height: 40, background: value, border: "1px solid #d9d9d9", borderRadius: 4 }} />
            {name}<br />{value}
          </div>
        ))}
      </div>
      <h3>Spacing</h3>
      {Object.entries(tokens.spacing).map(([name, value]) => (
        <div key={name} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12 }}>
          <div style={{ width: value, height: 8, background: tokens.colors.primary }} />{name} ({value}px)
        </div>
      ))}
    </div>
  ),
};
