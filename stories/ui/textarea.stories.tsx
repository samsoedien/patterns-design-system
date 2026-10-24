// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/ui/button'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Textarea } from '@/components/ui/textarea'

function DemoExample() {
  return <Textarea placeholder="Type your message here." />
}

function FieldExample() {
  return (
    <Field>
      <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
      <FieldDescription>Enter your message below.</FieldDescription>
      <Textarea id="textarea-message" placeholder="Type your message here." />
    </Field>
  )
}

function DisabledExample() {
  return (
    <Field data-disabled>
      <FieldLabel htmlFor="textarea-disabled">Message</FieldLabel>
      <Textarea id="textarea-disabled" placeholder="Type your message here." disabled />
    </Field>
  )
}

function InvalidExample() {
  return (
    <Field data-invalid>
      <FieldLabel htmlFor="textarea-invalid">Message</FieldLabel>
      <Textarea id="textarea-invalid" placeholder="Type your message here." aria-invalid />
      <FieldDescription>Please enter a valid message.</FieldDescription>
    </Field>
  )
}

function ButtonExample() {
  return (
    <div className="cuoio:grid cuoio:w-full cuoio:gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['placeholder', 'disabled', 'rows'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    rows: {
      control: { type: 'number', min: 2, max: 12 },
    },
  },
  args: {
    placeholder: 'Type your message here.',
    disabled: false,
    rows: 4,
  },
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Textarea
      placeholder={args.placeholder}
      disabled={args.disabled}
      rows={args.rows}
      className="cuoio:w-80"
    />
  ),
}

export const DemoStory: Story = {
  name: 'Demo',
  render: () => <DemoExample />,
}

export const FieldStory: Story = {
  name: 'Field',
  render: () => <FieldExample />,
}

export const DisabledStory: Story = {
  name: 'Disabled',
  render: () => <DisabledExample />,
}

export const InvalidStory: Story = {
  name: 'Invalid',
  render: () => <InvalidExample />,
}

export const ButtonStory: Story = {
  name: 'Button',
  render: () => <ButtonExample />,
}
