export const colors = {
  primary: '#1677ff',
  success: '#52c41a',
  warning: '#faad14',
  error: '#ff4d4f',
  info: '#1677ff',
  textLight: '#1f1f1f',
  textDark: '#f5f5f5',
  bgLight: '#ffffff',
  bgDark: '#141414',
};

export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 };

export const typography = {
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  fontSizeSm: 12,
  fontSize: 14,
  fontSizeLg: 16,
  headingSizes: { h1: 38, h2: 30, h3: 24, h4: 20, h5: 16 },
};

export const radius = { sm: 4, md: 6, lg: 8, pill: 999 };

export const tokens = { colors, spacing, typography, radius };

export const antTokens = {
  colorPrimary: colors.primary,
  colorSuccess: colors.success,
  colorWarning: colors.warning,
  colorError: colors.error,
  colorInfo: colors.info,
  fontFamily: typography.fontFamily,
  fontSize: typography.fontSize,
  borderRadius: radius.md,
};
