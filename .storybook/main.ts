import type { StorybookConfig } from '@storybook/react-vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'

const storybookDir = path.dirname(fileURLToPath(import.meta.url))
const packageRoot = path.resolve(storybookDir, '..')

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-mcp',
    '@storybook/addon-themes',
    '@storybook/addon-designs',
    '@storybook/addon-storysource',
  ],
  framework: '@storybook/react-vite',
  core: {
    disableTelemetry: true,
  },
  async viteFinal(viteConfig) {
    return mergeConfig(viteConfig, {
      resolve: {
        alias: {
          '@project-cuoio/core': path.resolve(packageRoot, 'src/index.ts'),
          '@project-cuoio/icons': path.resolve(packageRoot, '../icons/src/index.ts'),
        },
      },
    })
  },
}
export default config
