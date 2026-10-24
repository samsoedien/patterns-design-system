// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

function DemoExample() {
  return (
    <div className="cuoio:flex cuoio:items-center cuoio:space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}

function DescriptionExample() {
  return (
    <Field orientation="horizontal" className="cuoio:max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="switch-focus-mode">
          Share across devices
        </FieldLabel>
        <FieldDescription>
          Focus is shared across devices, and turns off when you leave the app.
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-focus-mode" />
    </Field>
  )
}

function ChoiceCardExample() {
  return (
    <FieldGroup className="cuoio:w-full cuoio:max-w-sm">
      <FieldLabel htmlFor="switch-share">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Share across devices</FieldTitle>
            <FieldDescription>
              Focus is shared across devices, and turns off when you leave the
              app.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-share" />
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="switch-notifications">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Enable notifications</FieldTitle>
            <FieldDescription>
              Receive notifications when focus mode is enabled or disabled.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-notifications" defaultChecked />
        </Field>
      </FieldLabel>
    </FieldGroup>
  )
}

function DisabledExample() {
  return (
    <Field orientation="horizontal" data-disabled className="cuoio:w-fit">
      <Switch id="switch-disabled-unchecked" disabled />
      <FieldLabel htmlFor="switch-disabled-unchecked">Disabled</FieldLabel>
    </Field>
  )
}

function InvalidExample() {
  return (
    <Field orientation="horizontal" className="cuoio:max-w-sm" data-invalid>
      <FieldContent>
        <FieldLabel htmlFor="switch-terms">
          Accept terms and conditions
        </FieldLabel>
        <FieldDescription>
          You must accept the terms and conditions to continue.
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-terms" aria-invalid />
    </Field>
  )
}

function SizesExample() {
  return (
    <FieldGroup className="cuoio:w-full cuoio:max-w-[10rem]">
      <Field orientation="horizontal">
        <Switch id="switch-size-sm" size="sm" />
        <FieldLabel htmlFor="switch-size-sm">Small</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Switch id="switch-size-default" size="default" />
        <FieldLabel htmlFor="switch-size-default">Default</FieldLabel>
      </Field>
    </FieldGroup>
  )
}

const meta = {
  title: 'UI/Switch',
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

export const DescriptionStory: Story = {
  name: 'Description',
  render: () => <DescriptionExample />,
}

export const ChoiceCardStory: Story = {
  name: 'Choice Card',
  render: () => <ChoiceCardExample />,
}

export const DisabledStory: Story = {
  name: 'Disabled',
  render: () => <DisabledExample />,
}

export const InvalidStory: Story = {
  name: 'Invalid',
  render: () => <InvalidExample />,
}

export const SizesStory: Story = {
  name: 'Sizes',
  render: () => <SizesExample />,
}
