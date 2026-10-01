import React, { createContext, useContext, useMemo, useState } from 'react';
import { ConfigProvider, theme as antTheme } from 'antd';
import { antTokens } from './tokens';

const ThemeModeContext = createContext({ mode: 'light', setMode: () => {}, toggleMode: () => {} });

export const useThemeMode = () => useContext(ThemeModeContext);

const ThemeProvider = ({ mode: controlledMode, defaultMode = 'light', tokens, children, ...props }) => {
  const [internalMode, setMode] = useState(defaultMode);
  const mode = controlledMode ?? internalMode;

  const value = useMemo(
    () => ({ mode, setMode, toggleMode: () => setMode(mode === 'dark' ? 'light' : 'dark') }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={value}>
      <ConfigProvider
        {...props}
        theme={{
          algorithm: mode === 'dark' ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
          token: { ...antTokens, ...tokens },
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeModeContext.Provider>
  );
};

export default ThemeProvider;
