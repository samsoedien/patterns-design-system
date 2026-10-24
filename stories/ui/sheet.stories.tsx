// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

function DemoExample() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="cuoio:grid cuoio:flex-1 cuoio:auto-rows-min cuoio:gap-6 cuoio:px-4">
          <div className="cuoio:grid cuoio:gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="cuoio:grid cuoio:gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
            <Input id="sheet-demo-username" defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose render={<Button variant="outline" />}>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

const Side_SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const

function SideExample() {
  return (
    <div className="cuoio:flex cuoio:flex-wrap cuoio:gap-2">
      {Side_SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger render={<Button variant="outline" className="cuoio:capitalize" />}>
            {side}
          </SheetTrigger>
          <SheetContent
            side={side}
            className="cuoio:data-[side=bottom]:max-h-[50vh] cuoio:data-[side=top]:max-h-[50vh]"
          >
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you&apos;re done.
              </SheetDescription>
            </SheetHeader>
            <div className="cuoio:no-scrollbar cuoio:overflow-y-auto cuoio:px-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <p key={index} className="cuoio:mb-2 cuoio:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              ))}
            </div>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
              <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}

function NoCloseButtonExample() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Open Sheet</SheetTrigger>
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>No Close Button</SheetTitle>
          <SheetDescription>
            This sheet doesn&apos;t have a close button in the top-right corner. Click outside to
            close.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

const meta = {
  title: 'UI/Sheet',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const DemoStory: Story = {
  name: 'Demo',
  render: () => <DemoExample />,
}

export const SideStory: Story = {
  name: 'Side',
  render: () => <SideExample />,
}

export const NoCloseButtonStory: Story = {
  name: 'No Close Button',
  render: () => <NoCloseButtonExample />,
}
