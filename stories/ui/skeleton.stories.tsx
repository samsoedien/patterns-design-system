// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

function DemoExample() {
  return (
    <div className="cuoio:flex cuoio:items-center cuoio:gap-4">
      <Skeleton className="cuoio:h-12 cuoio:w-12 cuoio:rounded-full" />
      <div className="cuoio:space-y-2">
        <Skeleton className="cuoio:h-4 cuoio:w-[250px]" />
        <Skeleton className="cuoio:h-4 cuoio:w-[200px]" />
      </div>
    </div>
  )
}

function AvatarExample() {
  return (
    <div className="cuoio:flex cuoio:w-fit cuoio:items-center cuoio:gap-4">
      <Skeleton className="cuoio:size-10 cuoio:shrink-0 cuoio:rounded-full" />
      <div className="cuoio:grid cuoio:gap-2">
        <Skeleton className="cuoio:h-4 cuoio:w-[150px]" />
        <Skeleton className="cuoio:h-4 cuoio:w-[100px]" />
      </div>
    </div>
  )
}

function CardExample() {
  return (
    <Card className="cuoio:w-full cuoio:max-w-xs">
      <CardHeader>
        <Skeleton className="cuoio:h-4 cuoio:w-2/3" />
        <Skeleton className="cuoio:h-4 cuoio:w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="cuoio:aspect-video cuoio:w-full" />
      </CardContent>
    </Card>
  )
}

function TextExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-xs cuoio:flex-col cuoio:gap-2">
      <Skeleton className="cuoio:h-4 cuoio:w-full" />
      <Skeleton className="cuoio:h-4 cuoio:w-full" />
      <Skeleton className="cuoio:h-4 cuoio:w-3/4" />
    </div>
  )
}

function FormExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-xs cuoio:flex-col cuoio:gap-7">
      <div className="cuoio:flex cuoio:flex-col cuoio:gap-3">
        <Skeleton className="cuoio:h-4 cuoio:w-20" />
        <Skeleton className="cuoio:h-8 cuoio:w-full" />
      </div>
      <div className="cuoio:flex cuoio:flex-col cuoio:gap-3">
        <Skeleton className="cuoio:h-4 cuoio:w-24" />
        <Skeleton className="cuoio:h-8 cuoio:w-full" />
      </div>
      <Skeleton className="cuoio:h-8 cuoio:w-24" />
    </div>
  )
}

function TableExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <div className="cuoio:flex cuoio:gap-4" key={index}>
          <Skeleton className="cuoio:h-4 cuoio:flex-1" />
          <Skeleton className="cuoio:h-4 cuoio:w-24" />
          <Skeleton className="cuoio:h-4 cuoio:w-20" />
        </div>
      ))}
    </div>
  )
}

const meta = {
  title: 'UI/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['size', 'rounded'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
    rounded: {
      control: 'boolean',
    },
  },
  args: {
    size: 'default',
    rounded: false,
  },
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Skeleton
      className={`${
        {
          sm: 'cuoio:h-4 cuoio:w-24',
          default: 'cuoio:h-8 cuoio:w-48',
          lg: 'cuoio:h-12 cuoio:w-64',
        }[args.size]
      } ${args.rounded ? 'cuoio:rounded-full' : ''}`}
    />
  ),
}

export const DemoStory: Story = {
  name: 'Demo',
  render: () => <DemoExample />,
}

export const AvatarStory: Story = {
  name: 'Avatar',
  render: () => <AvatarExample />,
}

export const CardStory: Story = {
  name: 'Card',
  render: () => <CardExample />,
}

export const TextStory: Story = {
  name: 'Text',
  render: () => <TextExample />,
}

export const FormStory: Story = {
  name: 'Form',
  render: () => <FormExample />,
}

export const TableStory: Story = {
  name: 'Table',
  render: () => <TableExample />,
}
