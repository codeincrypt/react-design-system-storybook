import React from 'react';
import ThemeProvider from '../src/theme/ThemeProvider';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  globalTypes: {
    theme: {
      description: 'Theme mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => (
      <ThemeProvider mode={context.globals.theme}>
        <Story />
      </ThemeProvider>
    ),
  ],

  tags: ["autodocs"]
};

export default preview;
