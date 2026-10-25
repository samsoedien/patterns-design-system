// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowUpRightIcon, BadgeCheck, BookmarkIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Spinner } from '@/components/ui/spinner'

function DemoExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:flex-wrap cuoio:justify-center cuoio:gap-2">
      <Badge>Badge</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}

function VariantsExample() {
  return (
    <div className="cuoio:flex cuoio:flex-wrap cuoio:gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  )
}

function IconExample() {
  return (
    <div className="cuoio:flex cuoio:flex-wrap cuoio:gap-2">
      <Badge variant="secondary">
        <BadgeCheck data-icon="inline-start" />
        Verified
      </Badge>
      <Badge variant="outline">
        Bookmark
        <BookmarkIcon data-icon="inline-end" />
      </Badge>
    </div>
  )
}

function SpinnerExample() {
  return (
    <div className="cuoio:flex cuoio:flex-wrap cuoio:gap-2">
      <Badge variant="destructive">
        <Spinner data-icon="inline-start" />
        Deleting
      </Badge>
      <Badge variant="secondary">
        Generating
        <Spinner data-icon="inline-end" />
      </Badge>
    </div>
  )
}

function LinkExample() {
  return (
    <Badge render={<a href="#link" />}>
      Open Link <ArrowUpRightIcon data-icon="inline-end" />
    </Badge>
  )
}

function ColorsExample() {
  return (
    <div className="cuoio:flex cuoio:flex-wrap cuoio:gap-2">
      <Badge className="cuoio:bg-blue-50 cuoio:text-blue-700 cuoio:dark:bg-blue-950 cuoio:dark:text-blue-300">
        Blue
      </Badge>
      <Badge className="cuoio:bg-green-50 cuoio:text-green-700 cuoio:dark:bg-green-950 cuoio:dark:text-green-300">
        Green
      </Badge>
      <Badge className="cuoio:bg-sky-50 cuoio:text-sky-700 cuoio:dark:bg-sky-950 cuoio:dark:text-sky-300">
        Sky
      </Badge>
      <Badge className="cuoio:bg-purple-50 cuoio:text-purple-700 cuoio:dark:bg-purple-950 cuoio:dark:text-purple-300">
        Purple
      </Badge>
      <Badge className="cuoio:bg-red-50 cuoio:text-red-700 cuoio:dark:bg-red-950 cuoio:dark:text-red-300">
        Red
      </Badge>
    </div>
  )
}

const meta = {
  title: 'UI/Badge',
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

export const VariantsStory: Story = {
  name: 'Variants',
  render: () => <VariantsExample />,
}

export const IconStory: Story = {
  name: 'Icon',
  render: () => <IconExample />,
}

export const SpinnerStory: Story = {
  name: 'Spinner',
  render: () => <SpinnerExample />,
}

export const LinkStory: Story = {
  name: 'Link',
  render: () => <LinkExample />,
}

export const ColorsStory: Story = {
  name: 'Colors',
  render: () => <ColorsExample />,
}
