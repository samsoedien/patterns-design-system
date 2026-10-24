// @ts-nocheck
'use client'

import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'

function DemoExample() {
  return (
    <Slider
      defaultValue={[75]}
      max={100}
      step={1}
      className="cuoio:mx-auto cuoio:w-full cuoio:max-w-xs"
    />
  )
}

function RangeExample() {
  return (
    <Slider
      defaultValue={[25, 50]}
      max={100}
      step={5}
      className="cuoio:mx-auto cuoio:w-full cuoio:max-w-xs"
    />
  )
}

function MultipleExample() {
  return (
    <Slider
      defaultValue={[10, 20, 70]}
      max={100}
      step={10}
      className="cuoio:mx-auto cuoio:w-full cuoio:max-w-xs"
    />
  )
}

function VerticalExample() {
  return (
    <div className="cuoio:mx-auto cuoio:flex cuoio:w-full cuoio:max-w-xs cuoio:items-center cuoio:justify-center cuoio:gap-6">
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        orientation="vertical"
        className="cuoio:h-40"
      />
      <Slider
        defaultValue={[25]}
        max={100}
        step={1}
        orientation="vertical"
        className="cuoio:h-40"
      />
    </div>
  )
}

function ControlledExample() {
  const [value, setValue] = React.useState([0.3, 0.7])

  return (
    <div className="cuoio:mx-auto cuoio:grid cuoio:w-full cuoio:max-w-xs cuoio:gap-3">
      <div className="cuoio:flex cuoio:items-center cuoio:justify-between cuoio:gap-2">
        <Label htmlFor="slider-demo-temperature">Temperature</Label>
        <span className="cuoio:text-sm cuoio:text-muted-foreground">{value.join(', ')}</span>
      </div>
      <Slider
        id="slider-demo-temperature"
        value={value}
        onValueChange={(value) => setValue(value as number[])}
        min={0}
        max={1}
        step={0.1}
      />
    </div>
  )
}

function DisabledExample() {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      disabled
      className="cuoio:mx-auto cuoio:w-full cuoio:max-w-xs"
    />
  )
}

const meta = {
  title: 'UI/Slider',
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

export const RangeStory: Story = {
  name: 'Range',
  render: () => <RangeExample />,
}

export const MultipleStory: Story = {
  name: 'Multiple',
  render: () => <MultipleExample />,
}

export const VerticalStory: Story = {
  name: 'Vertical',
  render: () => <VerticalExample />,
}

export const ControlledStory: Story = {
  name: 'Controlled',
  render: () => <ControlledExample />,
}

export const DisabledStory: Story = {
  name: 'Disabled',
  render: () => <DisabledExample />,
}
