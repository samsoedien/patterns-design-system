// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"

function DemoExample() {
  return (
    <AspectRatio ratio={16 / 9} className="cuoio:w-full cuoio:max-w-sm cuoio:rounded-lg cuoio:bg-muted">
      <Image
        src="https://avatar.vercel.sh/shadcn1"
        alt="Photo"
        fill
        className="cuoio:rounded-lg cuoio:object-cover cuoio:grayscale cuoio:dark:brightness-20"
      />
    </AspectRatio>
  )
}

function SquareExample() {
  return (
    <AspectRatio
      ratio={1 / 1}
      className="cuoio:w-full cuoio:max-w-[12rem] cuoio:rounded-lg cuoio:bg-muted"
    >
      <Image
        src="https://avatar.vercel.sh/shadcn1"
        alt="Photo"
        fill
        className="cuoio:rounded-lg cuoio:object-cover cuoio:grayscale cuoio:dark:brightness-20"
      />
    </AspectRatio>
  )
}

function PortraitExample() {
  return (
    <AspectRatio
      ratio={9 / 16}
      className="cuoio:w-full cuoio:max-w-[10rem] cuoio:rounded-lg cuoio:bg-muted"
    >
      <Image
        src="https://avatar.vercel.sh/shadcn1"
        alt="Photo"
        fill
        className="cuoio:rounded-lg cuoio:object-cover cuoio:grayscale cuoio:dark:brightness-20"
      />
    </AspectRatio>
  )
}

const meta = {
  title: 'UI/Aspect Ratio',
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

export const SquareStory: Story = {
  name: 'Square',
  render: () => <SquareExample />,
}

export const PortraitStory: Story = {
  name: 'Portrait',
  render: () => <PortraitExample />,
}
