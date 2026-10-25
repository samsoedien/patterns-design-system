import type { Meta, StoryObj } from '@storybook/react'

import { HelloWorld } from './hello-world'

const meta = {
  title: 'Registry/HelloWorld',
  component: HelloWorld,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HelloWorld>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
