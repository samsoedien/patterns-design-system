// @ts-nocheck
"use client"

import type { Meta, StoryObj } from '@storybook/react-vite'
import { CheckIcon, ChevronDownIcon, InfoIcon } from "lucide-react"
import * as React from "react"
import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

function DemoExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-8 cuoio:py-12">
      <Bubble align="end">
        <BubbleContent>Hey there! what&apos;s up?</BubbleContent>
      </Bubble>
      <BubbleGroup>
        <Bubble variant="muted">
          <BubbleContent>Hey! Want to see chat bubbles?</BubbleContent>
        </Bubble>
        <Bubble variant="muted">
          <BubbleContent>
            I can group messages, switch sides, and keep the whole thread easy
            to scan.
          </BubbleContent>
          <BubbleReactions role="img" aria-label="Reaction: thumbs up">
            <span>👍</span>
          </BubbleReactions>
        </Bubble>
      </BubbleGroup>
      <Bubble align="end">
        <BubbleContent>Sure. Hit me with your best demo.</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>
          Yes. You are reading a demo that is demoing itself. Very meta. Very
          on-brand.
        </BubbleContent>
        <BubbleReactions
          role="img"
          aria-label="Reactions: thumbs up, fire, eyes, and 2 more"
        >
          <span>👍</span>
          <span>🔥</span>
          <span>👀</span>
          <span>+2</span>
        </BubbleReactions>
      </Bubble>
    </div>
  )
}

function AlignmentExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-8 cuoio:py-12">
      <Bubble variant="muted">
        <BubbleContent>
          This bubble is aligned to the start. This is the default alignment.
        </BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>
          This bubble is aligned to the end. Use this for user messages.
        </BubbleContent>
      </Bubble>
    </div>
  )
}

function GroupDemoExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-8 cuoio:py-12">
      <Bubble variant="muted">
        <BubbleContent>Can you tell me what&apos;s the issue?</BubbleContent>
      </Bubble>
      <BubbleGroup>
        <Bubble align="end">
          <BubbleContent>You tell me!</BubbleContent>
        </Bubble>
        <Bubble align="end">
          <BubbleContent>It worked yesterday. You broke it!</BubbleContent>
        </Bubble>
        <Bubble align="end">
          <BubbleContent>Find the bug and fix it.</BubbleContent>
          <BubbleReactions aria-label="Reactions: eyes" align="start">
            <span>👀</span>
          </BubbleReactions>
        </Bubble>
      </BubbleGroup>
      <Bubble variant="muted">
        <BubbleContent>
          Want me to diff yesterday&apos;s you against today&apos;s you?
          It&apos;s a bit embarrassing.
        </BubbleContent>
      </Bubble>
    </div>
  )
}

const Collapsible_text = `The accessibility review found two focus states that were visually too subtle in dark mode.

I checked the dialog, menu, and drawer paths because each one renders focusable controls inside a layered surface.

The dialog and drawer are fine. The menu needs the hover and focus tokens split so keyboard focus stays visible when the pointer is not involved.

I also recommend keeping the change in the style file instead of the primitive so the other themes can choose their own focus treatment later.`

const Collapsible_previewLength = 180

function CollapsibleExample() {
  const [open, setOpen] = React.useState(false)
  const isLong = Collapsible_text.length > Collapsible_previewLength
  const preview = `${Collapsible_text.slice(0, Collapsible_previewLength)}...`

  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-8 cuoio:py-12">
      <Bubble variant="muted">
        <BubbleContent>How can I help you today?</BubbleContent>
      </Bubble>

      <Bubble variant="muted" align="end">
        <BubbleContent className="cuoio:whitespace-pre-line">
          <Collapsible open={open} onOpenChange={setOpen}>
            <div>{open || !isLong ? Collapsible_text : preview}</div>
            {isLong ? (
              <CollapsibleTrigger
                render={
                  <Button
                    variant="link"
                    className="cuoio:gap-1 cuoio:p-0 cuoio:Collapsible_text-muted-foreground"
                  />
                }
              >
                {open ? "Show less" : "Show more"}
                <ChevronDownIcon
                  data-icon="inline-end"
                  className="cuoio:group-data-panel-open/button:rotate-180"
                />
              </CollapsibleTrigger>
            ) : null}
          </Collapsible>
        </BubbleContent>
      </Bubble>
    </div>
  )
}

function TooltipExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-4 cuoio:py-12">
      <Bubble variant="secondary">
        <BubbleContent>Did you remove the stale route?</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>Yes, removed it from the registry.</BubbleContent>
        <BubbleReactions>
          <Tooltip>
            <TooltipTrigger render={<Button variant="ghost" size="icon-xs" />}>
              <CheckIcon />
            </TooltipTrigger>
            <TooltipContent>Read on Jan 5, 2026 at 4:32 PM</TooltipContent>
          </Tooltip>
        </BubbleReactions>
      </Bubble>
    </div>
  )
}

function PopoverExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-4 cuoio:py-12">
      <Bubble align="end">
        <BubbleContent>Run the build script.</BubbleContent>
      </Bubble>
      <Bubble variant="destructive">
        <BubbleContent>Failed to run the command.</BubbleContent>
        <BubbleReactions>
          <Popover>
            <PopoverTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-xs"
                  aria-label="Show error details"
                  className="cuoio:aria-expanded:text-destructive"
                />
              }
            >
              <InfoIcon />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle className="cuoio:text-sm">
                  Command failed with exit code 1
                </PopoverTitle>
                <PopoverDescription className="cuoio:text-sm">
                  ENOENT: no such file or directory, open pnpm-lock.yaml
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </BubbleReactions>
      </Bubble>
    </div>
  )
}

const meta = {
  title: 'UI/Bubble',
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

export const AlignmentStory: Story = {
  name: 'Alignment',
  render: () => <AlignmentExample />,
}

export const GroupDemoStory: Story = {
  name: 'Group Demo',
  render: () => <GroupDemoExample />,
}

export const CollapsibleStory: Story = {
  name: 'Collapsible',
  render: () => <CollapsibleExample />,
}

export const TooltipStory: Story = {
  name: 'Tooltip',
  render: () => <TooltipExample />,
}

export const PopoverStory: Story = {
  name: 'Popover',
  render: () => <PopoverExample />,
}
