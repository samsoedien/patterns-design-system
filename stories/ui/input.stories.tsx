// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'
import { InfoIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@/components/ui/input-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function DemoExample() {
  return (
    <Field>
      <FieldLabel htmlFor="input-demo-api-key">API Key</FieldLabel>
      <Input id="input-demo-api-key" type="password" placeholder="sk-..." />
      <FieldDescription>Your API key is encrypted and stored securely.</FieldDescription>
    </Field>
  )
}

function BasicExample() {
  return <Input placeholder="Enter text" />
}

function FieldExample() {
  return (
    <Field>
      <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
      <Input id="input-field-username" type="text" placeholder="Enter your username" />
      <FieldDescription>Choose a unique username for your account.</FieldDescription>
    </Field>
  )
}

function FieldgroupExample() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
        <Input id="fieldgroup-name" placeholder="Jordan Lee" />
      </Field>
      <Field>
        <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
        <Input id="fieldgroup-email" type="email" placeholder="name@example.com" />
        <FieldDescription>We&apos;ll send updates to this address.</FieldDescription>
      </Field>
      <Field orientation="horizontal">
        <Button type="reset" variant="outline">
          Reset
        </Button>
        <Button type="submit">Submit</Button>
      </Field>
    </FieldGroup>
  )
}

function DisabledExample() {
  return (
    <Field data-disabled>
      <FieldLabel htmlFor="input-demo-disabled">Email</FieldLabel>
      <Input id="input-demo-disabled" type="email" placeholder="Email" disabled />
      <FieldDescription>This field is currently disabled.</FieldDescription>
    </Field>
  )
}

function InvalidExample() {
  return (
    <Field data-invalid>
      <FieldLabel htmlFor="input-invalid">Invalid Input</FieldLabel>
      <Input id="input-invalid" placeholder="Error" aria-invalid />
      <FieldDescription>This field contains validation errors.</FieldDescription>
    </Field>
  )
}

function FileExample() {
  return (
    <Field>
      <FieldLabel htmlFor="picture">Picture</FieldLabel>
      <Input id="picture" type="file" />
      <FieldDescription>Select a picture to upload.</FieldDescription>
    </Field>
  )
}

function InlineExample() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
  )
}

function GridExample() {
  return (
    <FieldGroup className="cuoio:grid cuoio:max-w-sm cuoio:grid-cols-2">
      <Field>
        <FieldLabel htmlFor="first-name">First Name</FieldLabel>
        <Input id="first-name" placeholder="Jordan" />
      </Field>
      <Field>
        <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
        <Input id="last-name" placeholder="Lee" />
      </Field>
    </FieldGroup>
  )
}

function RequiredExample() {
  return (
    <Field>
      <FieldLabel htmlFor="input-required">
        Required Field <span className="cuoio:text-destructive">*</span>
      </FieldLabel>
      <Input id="input-required" placeholder="This field is required" required />
      <FieldDescription>This field must be filled out.</FieldDescription>
    </Field>
  )
}

function BadgeExample() {
  return (
    <Field>
      <FieldLabel htmlFor="input-badge">
        Webhook URL{' '}
        <Badge variant="secondary" className="cuoio:ml-auto">
          Beta
        </Badge>
      </FieldLabel>
      <Input id="input-badge" type="url" placeholder="https://api.example.com/webhook" />
    </Field>
  )
}

function InputGroupExample() {
  return (
    <Field>
      <FieldLabel htmlFor="input-group-url">Website URL</FieldLabel>
      <InputGroup>
        <InputGroupInput id="input-group-url" placeholder="example.com" />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InfoIcon />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}

function ButtonGroupExample() {
  return (
    <Field>
      <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
      <ButtonGroup>
        <Input id="input-button-group" placeholder="Type to search..." />
        <Button variant="outline">Search</Button>
      </ButtonGroup>
    </Field>
  )
}

function FormExample() {
  const countries = [
    { label: 'United States', value: 'us' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Canada', value: 'ca' },
  ]
  return (
    <form className="cuoio:w-full cuoio:max-w-sm">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="form-name">Name</FieldLabel>
          <Input id="form-name" type="text" placeholder="Evil Rabbit" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-email">Email</FieldLabel>
          <Input id="form-email" type="email" placeholder="john@example.com" />
          <FieldDescription>We&apos;ll never share your email with anyone.</FieldDescription>
        </Field>
        <div className="cuoio:grid cuoio:grid-cols-2 cuoio:gap-4">
          <Field>
            <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
            <Input id="form-phone" type="tel" placeholder="+1 (555) 123-4567" />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-country">Country</FieldLabel>
            <Select items={countries} defaultValue="us">
              <SelectTrigger id="form-country">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="form-address">Address</FieldLabel>
          <Input id="form-address" type="text" placeholder="123 Main St" />
        </Field>
        <Field orientation="horizontal">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['type', 'placeholder', 'disabled'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'search', 'number', 'url', 'tel', 'file'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    type: 'text',
    placeholder: 'Enter text',
    disabled: false,
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Input
      type={args.type}
      placeholder={args.placeholder}
      disabled={args.disabled}
      className="cuoio:w-64"
    />
  ),
}

export const DemoStory: Story = {
  name: 'Demo',
  render: () => <DemoExample />,
}

export const BasicStory: Story = {
  name: 'Basic',
  render: () => <BasicExample />,
}

export const FieldStory: Story = {
  name: 'Field',
  render: () => <FieldExample />,
}

export const FieldgroupStory: Story = {
  name: 'Fieldgroup',
  render: () => <FieldgroupExample />,
}

export const DisabledStory: Story = {
  name: 'Disabled',
  render: () => <DisabledExample />,
}

export const InvalidStory: Story = {
  name: 'Invalid',
  render: () => <InvalidExample />,
}

export const FileStory: Story = {
  name: 'File',
  render: () => <FileExample />,
}

export const InlineStory: Story = {
  name: 'Inline',
  render: () => <InlineExample />,
}

export const GridStory: Story = {
  name: 'Grid',
  render: () => <GridExample />,
}

export const RequiredStory: Story = {
  name: 'Required',
  render: () => <RequiredExample />,
}

export const BadgeStory: Story = {
  name: 'Badge',
  render: () => <BadgeExample />,
}

export const InputGroupStory: Story = {
  name: 'Input Group',
  render: () => <InputGroupExample />,
}

export const ButtonGroupStory: Story = {
  name: 'Button Group',
  render: () => <ButtonGroupExample />,
}

export const FormStory: Story = {
  name: 'Form',
  render: () => <FormExample />,
}
