// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'
import { SaveIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Kbd } from '@/components/ui/kbd'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

function DemoExample() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>Hover</TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  )
}

function SidesExample() {
  return (
    <div className="cuoio:flex cuoio:flex-wrap cuoio:gap-2">
      {(['left', 'top', 'bottom', 'right'] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger
            render={<Button variant="outline" className="cuoio:w-fit cuoio:capitalize" />}
          >
            {side}
          </TooltipTrigger>
          <TooltipContent side={side}>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}

function KeyboardExample() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" size="icon-sm" />}>
        <SaveIcon />
      </TooltipTrigger>
      <TooltipContent>
        Save Changes <Kbd>S</Kbd>
      </TooltipContent>
    </Tooltip>
  )
}

function DisabledExample() {
  return (
    <>
      <Tooltip>
        <TooltipTrigger render={<span className="cuoio:inline-block cuoio:w-fit" />}>
          <Button variant="outline" disabled>
            Disabled
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This feature is currently unavailable</p>
        </TooltipContent>
      </Tooltip>
    </>
  )
}

const meta = {
  title: 'UI/Tooltip',
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

export const SidesStory: Story = {
  name: 'Sides',
  render: () => <SidesExample />,
}

export const KeyboardStory: Story = {
  name: 'Keyboard',
  render: () => <KeyboardExample />,
}

export const DisabledStory: Story = {
  name: 'Disabled',
  render: () => <DisabledExample />,
}
