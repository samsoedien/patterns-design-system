// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

function DemoExample() {
  return (
    <RadioGroup defaultValue="comfortable" className="cuoio:w-fit">
      <div className="cuoio:flex cuoio:items-center cuoio:gap-3">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="cuoio:flex cuoio:items-center cuoio:gap-3">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="cuoio:flex cuoio:items-center cuoio:gap-3">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  )
}

function DescriptionExample() {
  return (
    <RadioGroup defaultValue="comfortable" className="cuoio:w-fit">
      <Field orientation="horizontal">
        <RadioGroupItem value="default" id="desc-r1" />
        <FieldContent>
          <FieldLabel htmlFor="desc-r1">Default</FieldLabel>
          <FieldDescription>Standard spacing for most use cases.</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="comfortable" id="desc-r2" />
        <FieldContent>
          <FieldLabel htmlFor="desc-r2">Comfortable</FieldLabel>
          <FieldDescription>More space between elements.</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="compact" id="desc-r3" />
        <FieldContent>
          <FieldLabel htmlFor="desc-r3">Compact</FieldLabel>
          <FieldDescription>Minimal spacing for dense layouts.</FieldDescription>
        </FieldContent>
      </Field>
    </RadioGroup>
  )
}

function ChoiceCardExample() {
  return (
    <RadioGroup defaultValue="plus" className="cuoio:max-w-sm">
      <FieldLabel htmlFor="plus-plan">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Plus</FieldTitle>
            <FieldDescription>For individuals and small teams.</FieldDescription>
          </FieldContent>
          <RadioGroupItem value="plus" id="plus-plan" />
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="pro-plan">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Pro</FieldTitle>
            <FieldDescription>For growing businesses.</FieldDescription>
          </FieldContent>
          <RadioGroupItem value="pro" id="pro-plan" />
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="enterprise-plan">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Enterprise</FieldTitle>
            <FieldDescription>For large teams and enterprises.</FieldDescription>
          </FieldContent>
          <RadioGroupItem value="enterprise" id="enterprise-plan" />
        </Field>
      </FieldLabel>
    </RadioGroup>
  )
}

function FieldsetExample() {
  return (
    <FieldSet className="cuoio:w-full cuoio:max-w-xs">
      <FieldLegend variant="label">Subscription Plan</FieldLegend>
      <FieldDescription>Yearly and lifetime plans offer significant savings.</FieldDescription>
      <RadioGroup defaultValue="monthly">
        <Field orientation="horizontal">
          <RadioGroupItem value="monthly" id="plan-monthly" />
          <FieldLabel htmlFor="plan-monthly" className="cuoio:font-normal">
            Monthly ($9.99/month)
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="yearly" id="plan-yearly" />
          <FieldLabel htmlFor="plan-yearly" className="cuoio:font-normal">
            Yearly ($99.99/year)
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="lifetime" id="plan-lifetime" />
          <FieldLabel htmlFor="plan-lifetime" className="cuoio:font-normal">
            Lifetime ($299.99)
          </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  )
}

function DisabledExample() {
  return (
    <RadioGroup defaultValue="option2" className="cuoio:w-fit">
      <Field orientation="horizontal" data-disabled>
        <RadioGroupItem value="option1" id="disabled-1" disabled />
        <FieldLabel htmlFor="disabled-1" className="cuoio:font-normal">
          Disabled
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="option2" id="disabled-2" />
        <FieldLabel htmlFor="disabled-2" className="cuoio:font-normal">
          Option 2
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="option3" id="disabled-3" />
        <FieldLabel htmlFor="disabled-3" className="cuoio:font-normal">
          Option 3
        </FieldLabel>
      </Field>
    </RadioGroup>
  )
}

function InvalidExample() {
  return (
    <FieldSet className="cuoio:w-full cuoio:max-w-xs">
      <FieldLegend variant="label">Notification Preferences</FieldLegend>
      <FieldDescription>Choose how you want to receive notifications.</FieldDescription>
      <RadioGroup defaultValue="email">
        <Field orientation="horizontal" data-invalid>
          <RadioGroupItem value="email" id="invalid-email" aria-invalid />
          <FieldLabel htmlFor="invalid-email" className="cuoio:font-normal">
            Email only
          </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-invalid>
          <RadioGroupItem value="sms" id="invalid-sms" aria-invalid />
          <FieldLabel htmlFor="invalid-sms" className="cuoio:font-normal">
            SMS only
          </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-invalid>
          <RadioGroupItem value="both" id="invalid-both" aria-invalid />
          <FieldLabel htmlFor="invalid-both" className="cuoio:font-normal">
            Both Email & SMS
          </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  )
}

const meta = {
  title: 'UI/Radio Group',
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

export const FieldsetStory: Story = {
  name: 'Fieldset',
  render: () => <FieldsetExample />,
}

export const DisabledStory: Story = {
  name: 'Disabled',
  render: () => <DisabledExample />,
}

export const InvalidStory: Story = {
  name: 'Invalid',
  render: () => <InvalidExample />,
}
