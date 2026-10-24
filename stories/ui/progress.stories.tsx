// @ts-nocheck
'use client'

import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Progress, ProgressLabel, ProgressValue } from '@/components/ui/progress'
import { Slider } from '@/components/ui/slider'

function DemoExample() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="cuoio:w-[60%]" />
}

function LabelExample() {
  return (
    <Progress value={56} className="cuoio:w-full cuoio:max-w-sm">
      <ProgressLabel>Upload progress</ProgressLabel>
      <ProgressValue />
    </Progress>
  )
}

function ControlledExample() {
  const [value, setValue] = React.useState(50)

  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-4">
      <Progress value={value} className="cuoio:w-full" />
      <Slider
        value={value}
        onValueChange={(value) => setValue(value as number)}
        min={0}
        max={100}
        step={1}
      />
    </div>
  )
}

const meta = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['value'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
  args: {
    value: 56,
  },
} satisfies Meta<typeof Progress>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Progress value={args.value} className="cuoio:w-64">
      <ProgressLabel>Upload progress</ProgressLabel>
      <ProgressValue />
    </Progress>
  ),
}

export const DemoStory: Story = {
  name: 'Demo',
  render: () => <DemoExample />,
}

export const LabelStory: Story = {
  name: 'Label',
  render: () => <LabelExample />,
}

export const ControlledStory: Story = {
  name: 'Controlled',
  render: () => <ControlledExample />,
}
