// @ts-nocheck
'use client'

import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
import { RefreshCwIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'

function DemoExample() {
  return (
    <InputOTP maxLength={6} defaultValue="123456">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}

function PatternExample() {
  return (
    <Field className="cuoio:w-fit">
      <FieldLabel htmlFor="digits-only">Digits Only</FieldLabel>
      <InputOTP id="digits-only" maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </Field>
  )
}

function SeparatorExample() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}

function DisabledExample() {
  return (
    <InputOTP id="disabled" maxLength={6} disabled value="123456">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}

function ControlledExample() {
  const [value, setValue] = React.useState('')

  return (
    <div className="cuoio:space-y-2">
      <InputOTP maxLength={6} value={value} onChange={(value) => setValue(value)}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="cuoio:text-center cuoio:text-sm">
        {value === '' ? <>Enter your one-time password.</> : <>You entered: {value}</>}
      </div>
    </div>
  )
}

function InvalidExample() {
  const [value, setValue] = React.useState('000000')

  return (
    <InputOTP maxLength={6} value={value} onChange={setValue}>
      <InputOTPGroup>
        <InputOTPSlot index={0} aria-invalid />
        <InputOTPSlot index={1} aria-invalid />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={2} aria-invalid />
        <InputOTPSlot index={3} aria-invalid />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={4} aria-invalid />
        <InputOTPSlot index={5} aria-invalid />
      </InputOTPGroup>
    </InputOTP>
  )
}

function FourDigitsExample() {
  return (
    <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  )
}

function AlphanumericExample() {
  return (
    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}

function FormExample() {
  return (
    <Card className="cuoio:mx-auto cuoio:max-w-md">
      <CardHeader>
        <CardTitle>Verify your login</CardTitle>
        <CardDescription>
          Enter the verification code we sent to your email address:{' '}
          <span className="cuoio:font-medium">m@example.com</span>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Field>
          <div className="cuoio:flex cuoio:items-center cuoio:justify-between">
            <FieldLabel htmlFor="otp-verification">Verification code</FieldLabel>
            <Button variant="outline" size="xs">
              <RefreshCwIcon />
              Resend Code
            </Button>
          </div>
          <InputOTP maxLength={6} id="otp-verification" required>
            <InputOTPGroup className="cuoio:*:data-[slot=input-otp-slot]:h-12 cuoio:*:data-[slot=input-otp-slot]:w-11 cuoio:*:data-[slot=input-otp-slot]:text-xl">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator className="cuoio:mx-2" />
            <InputOTPGroup className="cuoio:*:data-[slot=input-otp-slot]:h-12 cuoio:*:data-[slot=input-otp-slot]:w-11 cuoio:*:data-[slot=input-otp-slot]:text-xl">
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <FieldDescription>
            <a href="#">I no longer have access to this email address.</a>
          </FieldDescription>
        </Field>
      </CardContent>
      <CardFooter>
        <Field>
          <Button type="submit" className="cuoio:w-full">
            Verify
          </Button>
          <div className="cuoio:text-sm cuoio:text-muted-foreground">
            Having trouble signing in?{' '}
            <a
              href="#"
              className="cuoio:underline cuoio:underline-offset-4 cuoio:transition-colors cuoio:hover:text-primary"
            >
              Contact support
            </a>
          </div>
        </Field>
      </CardFooter>
    </Card>
  )
}

const meta = {
  title: 'UI/Input Otp',
  component: InputOTP,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['maxLength', 'disabled'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    maxLength: {
      control: { type: 'range', min: 4, max: 8, step: 1 },
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    maxLength: 6,
    disabled: false,
  },
} satisfies Meta<typeof InputOTP>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <InputOTP maxLength={args.maxLength} disabled={args.disabled} key={args.maxLength}>
      <InputOTPGroup>
        {Array.from({ length: args.maxLength }, (_, index) => (
          <InputOTPSlot key={index} index={index} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const DemoStory: Story = {
  name: 'Demo',
  render: () => <DemoExample />,
}

export const PatternStory: Story = {
  name: 'Pattern',
  render: () => <PatternExample />,
}

export const SeparatorStory: Story = {
  name: 'Separator',
  render: () => <SeparatorExample />,
}

export const DisabledStory: Story = {
  name: 'Disabled',
  render: () => <DisabledExample />,
}

export const ControlledStory: Story = {
  name: 'Controlled',
  render: () => <ControlledExample />,
}

export const InvalidStory: Story = {
  name: 'Invalid',
  render: () => <InvalidExample />,
}

export const FourDigitsStory: Story = {
  name: 'Four Digits',
  render: () => <FourDigitsExample />,
}

export const AlphanumericStory: Story = {
  name: 'Alphanumeric',
  render: () => <AlphanumericExample />,
}

export const FormStory: Story = {
  name: 'Form',
  render: () => <FormExample />,
}
