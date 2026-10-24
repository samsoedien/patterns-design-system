// @ts-nocheck
'use client'

import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bold, BoldIcon, Italic, ItalicIcon, Underline, UnderlineIcon } from 'lucide-react'

import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

function DemoExample() {
  return (
    <ToggleGroup variant="outline" multiple>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

function OutlineExample() {
  return (
    <ToggleGroup variant="outline" defaultValue={['all']}>
      <ToggleGroupItem value="all" aria-label="Toggle all">
        All
      </ToggleGroupItem>
      <ToggleGroupItem value="missed" aria-label="Toggle missed">
        Missed
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

function SizesExample() {
  return (
    <div className="cuoio:flex cuoio:flex-col cuoio:gap-4">
      <ToggleGroup size="sm" defaultValue={['top']} variant="outline">
        <ToggleGroupItem value="top" aria-label="Toggle top">
          Top
        </ToggleGroupItem>
        <ToggleGroupItem value="bottom" aria-label="Toggle bottom">
          Bottom
        </ToggleGroupItem>
        <ToggleGroupItem value="left" aria-label="Toggle left">
          Left
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Toggle right">
          Right
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup defaultValue={['top']} variant="outline">
        <ToggleGroupItem value="top" aria-label="Toggle top">
          Top
        </ToggleGroupItem>
        <ToggleGroupItem value="bottom" aria-label="Toggle bottom">
          Bottom
        </ToggleGroupItem>
        <ToggleGroupItem value="left" aria-label="Toggle left">
          Left
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Toggle right">
          Right
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

function SpacingExample() {
  return (
    <ToggleGroup size="sm" defaultValue={['top']} variant="outline" spacing={2}>
      <ToggleGroupItem value="top" aria-label="Toggle top">
        Top
      </ToggleGroupItem>
      <ToggleGroupItem value="bottom" aria-label="Toggle bottom">
        Bottom
      </ToggleGroupItem>
      <ToggleGroupItem value="left" aria-label="Toggle left">
        Left
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Toggle right">
        Right
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

function VerticalExample() {
  return (
    <ToggleGroup multiple orientation="vertical" spacing={1} defaultValue={['bold', 'italic']}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

function DisabledExample() {
  return (
    <ToggleGroup disabled>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

function FontWeightSelectorExample() {
  const [fontWeight, setFontWeight] = React.useState('normal')
  return (
    <Field>
      <FieldLabel>Font Weight</FieldLabel>
      <ToggleGroup
        value={[fontWeight]}
        onValueChange={(value) => setFontWeight(value[0])}
        variant="outline"
        spacing={2}
        size="lg"
      >
        <ToggleGroupItem
          value="light"
          aria-label="Light"
          className="cuoio:flex cuoio:size-16 cuoio:flex-col cuoio:items-center cuoio:justify-center cuoio:rounded-xl"
        >
          <span className="cuoio:text-2xl cuoio:leading-none cuoio:font-light">Aa</span>
          <span className="cuoio:text-xs cuoio:text-muted-foreground">Light</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="normal"
          aria-label="Normal"
          className="cuoio:flex cuoio:size-16 cuoio:flex-col cuoio:items-center cuoio:justify-center cuoio:rounded-xl"
        >
          <span className="cuoio:text-2xl cuoio:leading-none cuoio:font-normal">Aa</span>
          <span className="cuoio:text-xs cuoio:text-muted-foreground">Normal</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="medium"
          aria-label="Medium"
          className="cuoio:flex cuoio:size-16 cuoio:flex-col cuoio:items-center cuoio:justify-center cuoio:rounded-xl"
        >
          <span className="cuoio:text-2xl cuoio:leading-none cuoio:font-medium">Aa</span>
          <span className="cuoio:text-xs cuoio:text-muted-foreground">Medium</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="bold"
          aria-label="Bold"
          className="cuoio:flex cuoio:size-16 cuoio:flex-col cuoio:items-center cuoio:justify-center cuoio:rounded-xl"
        >
          <span className="cuoio:text-2xl cuoio:leading-none cuoio:font-bold">Aa</span>
          <span className="cuoio:text-xs cuoio:text-muted-foreground">Bold</span>
        </ToggleGroupItem>
      </ToggleGroup>
      <FieldDescription>
        Use{' '}
        <code className="cuoio:rounded-md cuoio:bg-muted cuoio:px-1 cuoio:py-0.5 cuoio:font-mono">
          font-{fontWeight}
        </code>{' '}
        to set the font weight.
      </FieldDescription>
    </Field>
  )
}

const meta = {
  title: 'UI/Toggle Group',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['variant', 'size', 'orientation', 'spacing', 'multiple'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    orientation: {
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
    },
    spacing: {
      control: { type: 'range', min: 0, max: 8, step: 1 },
    },
    multiple: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'outline',
    size: 'default',
    orientation: 'horizontal',
    spacing: 2,
    multiple: false,
  },
} satisfies Meta<typeof ToggleGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <ToggleGroup
      variant={args.variant}
      size={args.size}
      orientation={args.orientation}
      spacing={args.spacing}
      multiple={args.multiple}
      defaultValue={['bold']}
      key={`${args.multiple}-${args.spacing}`}
    >
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const DemoStory: Story = {
  name: 'Demo',
  render: () => <DemoExample />,
}

export const OutlineStory: Story = {
  name: 'Outline',
  render: () => <OutlineExample />,
}

export const SizesStory: Story = {
  name: 'Sizes',
  render: () => <SizesExample />,
}

export const SpacingStory: Story = {
  name: 'Spacing',
  render: () => <SpacingExample />,
}

export const VerticalStory: Story = {
  name: 'Vertical',
  render: () => <VerticalExample />,
}

export const DisabledStory: Story = {
  name: 'Disabled',
  render: () => <DisabledExample />,
}

export const FontWeightSelectorStory: Story = {
  name: 'Font Weight Selector',
  render: () => <FontWeightSelectorExample />,
}
