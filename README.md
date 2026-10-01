# @codeincrypt/design-system

A React design system built as thin wrappers around [Ant Design](https://ant.design/) (v5), documented and visually tested with [Storybook](https://storybook.js.org/) and [Chromatic](https://www.chromatic.com/).

Every component forwards all of its props to the underlying Ant Design component, so the full Ant Design API is available while the design system remains the single place to customise behaviour and styling.

## Installation

```bash
npm install @codeincrypt/design-system
```

Peer requirements: `react` and `react-dom` ^18, and `antd` ^5.

## Usage

```jsx
import { Button, Input, Select } from '@codeincrypt/design-system';

export default function Example() {
  return (
    <>
      <Input placeholder="Your name" />
      <Button type="primary">Submit</Button>
    </>
  );
}
```

## Components

Components live in [src/components/](src/components/), each with a matching Storybook story in [src/stories/](src/stories/).

| Component | Component | Component | Component |
| --- | --- | --- | --- |
| Alert | Avatar | Badge | Breadcrumb |
| Button | Card | Checkbox | DatePicker |
| Drawer | Dropdown | Empty | Input |
| Menu | Modal | Pagination | Paragraph |
| Popconfirm | Radio | Select | Sidebar |
| Skeleton | Spinner | Stepper | Switch |
| Table | Tabs | Tag | Textarea |
| Tooltip | Upload | | |

> **Note:** the package entry ([src/components/index.ts](src/components/index.ts)) currently exports only `Button`, `Breadcrumb`, `Input`, `Paragraph` and `Select`. The remaining components are available in Storybook and need to be added to `index.ts` before they can be imported from the package.

## Adding a component

1. Create `src/components/MyComponent.jsx`, wrapping the Ant Design equivalent:

   ```jsx
   import { Button as AntButton } from 'antd';

   const Button = (props) => <AntButton {...props} />;

   export default Button;
   ```

2. Add a story at `src/stories/MyComponent.stories.js` (the `autodocs` tag is enabled globally in [.storybook/preview.js](.storybook/preview.js), so a docs page is generated automatically).
3. Export it from [src/components/index.ts](src/components/index.ts).

## Scripts

| Command | Description |
| --- | --- |
| `npm run storybook` | Start Storybook on [http://localhost:6006](http://localhost:6006) |
| `npm run build-storybook` | Build the static Storybook site |
| `npm run chromatic` | Publish Storybook to Chromatic for visual review |
| `npm start` | Run the Create React App dev server on [http://localhost:3000](http://localhost:3000) |
| `npm test` | Run tests in watch mode |
| `npm run build` | Production build into `build/` |

## Tech stack

- React 18
- Ant Design 5 and `@ant-design/icons`
- Storybook 8 (React + Webpack 5, essentials, interactions, links)
- Chromatic for visual regression testing
- Create React App (`react-scripts` 5)

## Publishing

The package is published publicly to npm as `@codeincrypt/design-system`:

```bash
npm version <patch|minor|major>
npm publish
```
