// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

function DemoExample() {
  return (
    <HoverCard>
      <HoverCardTrigger delay={10} closeDelay={100} render={<Button variant="link" />}>
        Hover Here
      </HoverCardTrigger>
      <HoverCardContent className="cuoio:flex cuoio:w-64 cuoio:flex-col cuoio:gap-0.5">
        <div className="cuoio:font-semibold">@nextjs</div>
        <div>The React Framework – created and maintained by @vercel.</div>
        <div className="cuoio:mt-1 cuoio:text-xs cuoio:text-muted-foreground">
          Joined December 2021
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

const Sides_HOVER_CARD_SIDES = ['left', 'top', 'bottom', 'right'] as const

function SidesExample() {
  return (
    <div className="cuoio:flex cuoio:flex-wrap cuoio:justify-center cuoio:gap-2">
      {Sides_HOVER_CARD_SIDES.map((side) => (
        <HoverCard key={side}>
          <HoverCardTrigger
            delay={100}
            closeDelay={100}
            render={<Button variant="outline" className="cuoio:capitalize" />}
          >
            {side}
          </HoverCardTrigger>
          <HoverCardContent side={side}>
            <div className="cuoio:flex cuoio:flex-col cuoio:gap-1">
              <h4 className="cuoio:font-medium">Hover Card</h4>
              <p>This hover card appears on the {side} side of the trigger.</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}

const meta = {
  title: 'UI/Hover Card',
  component: HoverCard,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['side'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
  },
  args: {
    side: 'bottom',
  },
} satisfies Meta<typeof HoverCard>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <HoverCard>
      <HoverCardTrigger delay={10} closeDelay={100} render={<Button variant="link" />}>
        Hover Here
      </HoverCardTrigger>
      <HoverCardContent
        side={args.side}
        className="cuoio:flex cuoio:w-64 cuoio:flex-col cuoio:gap-0.5"
      >
        <div className="cuoio:font-semibold">@nextjs</div>
        <div>The React Framework – created and maintained by @vercel.</div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const DemoStory: Story = {
  name: 'Demo',
  render: () => <DemoExample />,
}

export const SidesStory: Story = {
  name: 'Sides',
  render: () => <SidesExample />,
}
