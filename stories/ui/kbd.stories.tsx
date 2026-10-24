// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'
import { SearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Kbd, KbdGroup } from '@/components/ui/kbd'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

function DemoExample() {
  return (
    <div className="cuoio:flex cuoio:flex-col cuoio:items-center cuoio:gap-4">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>B</Kbd>
      </KbdGroup>
    </div>
  )
}

function GroupExample() {
  return (
    <div className="cuoio:flex cuoio:flex-col cuoio:items-center cuoio:gap-4">
      <p className="cuoio:text-sm cuoio:text-muted-foreground">
        Use{' '}
        <KbdGroup>
          <Kbd>Ctrl + B</Kbd>
          <Kbd>Ctrl + K</Kbd>
        </KbdGroup>{' '}
        to open the command palette
      </p>
    </div>
  )
}

function ButtonExample() {
  return (
    <Button variant="outline">
      Accept{' '}
      <Kbd data-icon="inline-end" className="cuoio:translate-x-0.5">
        ⏎
      </Kbd>
    </Button>
  )
}

function TooltipExample() {
  return (
    <div className="cuoio:flex cuoio:flex-wrap cuoio:gap-4">
      <ButtonGroup>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>Save</TooltipTrigger>
          <TooltipContent>
            Save Changes <Kbd>S</Kbd>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>Print</TooltipTrigger>
          <TooltipContent>
            Print Document{' '}
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>P</Kbd>
            </KbdGroup>
          </TooltipContent>
        </Tooltip>
      </ButtonGroup>
    </div>
  )
}

function InputGroupExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-xs cuoio:flex-col cuoio:gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

const meta = {
  title: 'UI/Kbd',
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

export const GroupStory: Story = {
  name: 'Group',
  render: () => <GroupExample />,
}

export const ButtonStory: Story = {
  name: 'Button',
  render: () => <ButtonExample />,
}

export const TooltipStory: Story = {
  name: 'Tooltip',
  render: () => <TooltipExample />,
}

export const InputGroupStory: Story = {
  name: 'Input Group',
  render: () => <InputGroupExample />,
}
