// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Separator } from '@/components/ui/separator'

function DemoExample() {
  return (
    <div className="cuoio:flex cuoio:max-w-sm cuoio:flex-col cuoio:gap-4 cuoio:text-sm">
      <div className="cuoio:flex cuoio:flex-col cuoio:gap-1.5">
        <div className="cuoio:leading-none cuoio:font-medium">shadcn/ui</div>
        <div className="cuoio:text-muted-foreground">The Foundation for your Design System</div>
      </div>
      <Separator />
      <div>
        A set of beautifully designed components that you can customize, extend, and build on.
      </div>
    </div>
  )
}

function VerticalExample() {
  return (
    <div className="cuoio:flex cuoio:h-5 cuoio:items-center cuoio:gap-4 cuoio:text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  )
}

function MenuExample() {
  return (
    <div className="cuoio:flex cuoio:items-center cuoio:gap-2 cuoio:text-sm cuoio:md:gap-4">
      <div className="cuoio:flex cuoio:flex-col cuoio:gap-1">
        <span className="cuoio:font-medium">Settings</span>
        <span className="cuoio:text-xs cuoio:text-muted-foreground">Manage preferences</span>
      </div>
      <Separator orientation="vertical" />
      <div className="cuoio:flex cuoio:flex-col cuoio:gap-1">
        <span className="cuoio:font-medium">Account</span>
        <span className="cuoio:text-xs cuoio:text-muted-foreground">Profile & security</span>
      </div>
      <Separator orientation="vertical" className="cuoio:hidden cuoio:md:block" />
      <div className="cuoio:hidden cuoio:flex-col cuoio:gap-1 cuoio:md:flex">
        <span className="cuoio:font-medium">Help</span>
        <span className="cuoio:text-xs cuoio:text-muted-foreground">Support & docs</span>
      </div>
    </div>
  )
}

function ListExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-2 cuoio:text-sm">
      <dl className="cuoio:flex cuoio:items-center cuoio:justify-between">
        <dt>Item 1</dt>
        <dd className="cuoio:text-muted-foreground">Value 1</dd>
      </dl>
      <Separator />
      <dl className="cuoio:flex cuoio:items-center cuoio:justify-between">
        <dt>Item 2</dt>
        <dd className="cuoio:text-muted-foreground">Value 2</dd>
      </dl>
      <Separator />
      <dl className="cuoio:flex cuoio:items-center cuoio:justify-between">
        <dt>Item 3</dt>
        <dd className="cuoio:text-muted-foreground">Value 3</dd>
      </dl>
    </div>
  )
}

const meta = {
  title: 'UI/Separator',
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

export const VerticalStory: Story = {
  name: 'Vertical',
  render: () => <VerticalExample />,
}

export const MenuStory: Story = {
  name: 'Menu',
  render: () => <MenuExample />,
}

export const ListStory: Story = {
  name: 'List',
  render: () => <ListExample />,
}
