// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'
import { cn } from 'cn'
import { ArrowUpIcon, LoaderIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from '@/components/ui/input-group'
import { Item, ItemContent, ItemMedia, ItemTitle } from '@/components/ui/item'
import { Spinner } from '@/components/ui/spinner'

function DemoExample() {
  return (
    <div className="[--radius:1rem] cuoio:flex cuoio:w-full cuoio:max-w-xs cuoio:flex-col cuoio:gap-4">
      <Item variant="muted">
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="cuoio:line-clamp-1">Processing payment...</ItemTitle>
        </ItemContent>
        <ItemContent className="cuoio:flex-none cuoio:justify-end">
          <span className="cuoio:text-sm cuoio:tabular-nums">$100.00</span>
        </ItemContent>
      </Item>
    </div>
  )
}

function Custom_Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      {...props}
    />
  )
}

function CustomExample() {
  return (
    <div className="cuoio:flex cuoio:items-center cuoio:gap-4">
      <Custom_Spinner />
    </div>
  )
}

function SizeExample() {
  return (
    <div className="cuoio:flex cuoio:items-center cuoio:gap-6">
      <Spinner className="cuoio:size-3" />
      <Spinner className="cuoio:size-4" />
      <Spinner className="cuoio:size-6" />
      <Spinner className="cuoio:size-8" />
    </div>
  )
}

function ButtonExample() {
  return (
    <div className="cuoio:flex cuoio:flex-col cuoio:items-center cuoio:gap-4">
      <Button disabled size="sm">
        <Spinner data-icon="inline-start" />
        Loading...
      </Button>
      <Button variant="outline" disabled size="sm">
        <Spinner data-icon="inline-start" />
        Please wait
      </Button>
      <Button variant="secondary" disabled size="sm">
        <Spinner data-icon="inline-start" />
        Processing
      </Button>
    </div>
  )
}

function BadgeExample() {
  return (
    <div className="[--radius:1.2rem] cuoio:flex cuoio:items-center cuoio:gap-4">
      <Badge>
        <Spinner data-icon="inline-start" />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Spinner data-icon="inline-start" />
        Updating
      </Badge>
      <Badge variant="outline">
        <Spinner data-icon="inline-start" />
        Processing
      </Badge>
    </div>
  )
}

function InputGroupExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-md cuoio:flex-col cuoio:gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Send a message..." disabled />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Send a message..." disabled />
        <InputGroupAddon align="block-end">
          <Spinner /> Validating...
          <InputGroupButton className="cuoio:ml-auto" variant="default">
            <ArrowUpIcon />
            <span className="cuoio:sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

function EmptyExample() {
  return (
    <Empty className="cuoio:w-full">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner />
        </EmptyMedia>
        <EmptyTitle>Processing your request</EmptyTitle>
        <EmptyDescription>
          Please wait while we process your request. Do not refresh the page.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
      </EmptyContent>
    </Empty>
  )
}

const meta = {
  title: 'UI/Spinner',
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

export const CustomStory: Story = {
  name: 'Custom',
  render: () => <CustomExample />,
}

export const SizeStory: Story = {
  name: 'Size',
  render: () => <SizeExample />,
}

export const ButtonStory: Story = {
  name: 'Button',
  render: () => <ButtonExample />,
}

export const BadgeStory: Story = {
  name: 'Badge',
  render: () => <BadgeExample />,
}

export const InputGroupStory: Story = {
  name: 'Input Group',
  render: () => <InputGroupExample />,
}

export const EmptyStory: Story = {
  name: 'Empty',
  render: () => <EmptyExample />,
}
