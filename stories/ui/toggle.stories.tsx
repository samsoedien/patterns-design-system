// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BoldIcon, BookmarkIcon, ItalicIcon } from 'lucide-react'

import { Toggle } from '@/components/ui/toggle'

function DemoExample() {
  return (
    <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
      <BookmarkIcon className="cuoio:group-aria-pressed/toggle:fill-foreground" />
      Bookmark
    </Toggle>
  )
}

function OutlineExample() {
  return (
    <div className="cuoio:flex cuoio:flex-wrap cuoio:items-center cuoio:gap-2">
      <Toggle variant="outline" aria-label="Toggle italic">
        <ItalicIcon />
        Italic
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle bold">
        <BoldIcon />
        Bold
      </Toggle>
    </div>
  )
}

function TextExample() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon />
      Italic
    </Toggle>
  )
}

function SizesExample() {
  return (
    <div className="cuoio:flex cuoio:flex-wrap cuoio:items-center cuoio:gap-2">
      <Toggle variant="outline" aria-label="Toggle small" size="sm">
        Small
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle default" size="default">
        Default
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle large" size="lg">
        Large
      </Toggle>
    </div>
  )
}

function DisabledExample() {
  return (
    <div className="cuoio:flex cuoio:flex-wrap cuoio:items-center cuoio:gap-2">
      <Toggle aria-label="Toggle disabled" disabled>
        Disabled
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle disabled outline" disabled>
        Disabled
      </Toggle>
    </div>
  )
}

const meta = {
  title: 'UI/Toggle',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const DemoStory: Story = {
  name: 'Demo',
  render: () => <DemoExample />,
}

export const OutlineStory: Story = {
  name: 'Outline',
  render: () => <OutlineExample />,
}

export const TextStory: Story = {
  name: 'Text',
  render: () => <TextExample />,
}

export const SizesStory: Story = {
  name: 'Sizes',
  render: () => <SizesExample />,
}

export const DisabledStory: Story = {
  name: 'Disabled',
  render: () => <DisabledExample />,
}
