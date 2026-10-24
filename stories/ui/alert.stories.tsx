// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'
import { AlertCircleIcon, AlertTriangleIcon, CheckCircle2Icon, InfoIcon } from 'lucide-react'

import { Alert, AlertAction, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

function DemoExample() {
  return (
    <div className="cuoio:grid cuoio:w-full cuoio:max-w-md cuoio:items-start cuoio:gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Payment successful</AlertTitle>
        <AlertDescription>
          Your payment of $29.99 has been processed. A receipt has been sent to your email address.
        </AlertDescription>
      </Alert>
      <Alert>
        <InfoIcon />
        <AlertTitle>New feature available</AlertTitle>
        <AlertDescription>
          We&apos;ve added dark mode support. You can enable it in your account settings.
        </AlertDescription>
      </Alert>
    </div>
  )
}

function BasicExample() {
  return (
    <Alert className="cuoio:max-w-md">
      <CheckCircle2Icon />
      <AlertTitle>Account updated successfully</AlertTitle>
      <AlertDescription>
        Your profile information has been saved. Changes will be reflected immediately.
      </AlertDescription>
    </Alert>
  )
}

function DestructiveExample() {
  return (
    <Alert variant="destructive" className="cuoio:max-w-md">
      <AlertCircleIcon />
      <AlertTitle>Payment failed</AlertTitle>
      <AlertDescription>
        Your payment could not be processed. Please check your payment method and try again.
      </AlertDescription>
    </Alert>
  )
}

function ActionExample() {
  return (
    <Alert className="cuoio:max-w-md">
      <AlertTitle>Dark mode is now available</AlertTitle>
      <AlertDescription>Enable it under your profile settings to get started.</AlertDescription>
      <AlertAction>
        <Button size="xs" variant="default">
          Enable
        </Button>
      </AlertAction>
    </Alert>
  )
}

function ColorsExample() {
  return (
    <Alert className="cuoio:max-w-md cuoio:border-amber-200 cuoio:bg-amber-50 cuoio:text-amber-900 cuoio:dark:border-amber-900 cuoio:dark:bg-amber-950 cuoio:dark:text-amber-50">
      <AlertTriangleIcon />
      <AlertTitle>Your subscription will expire in 3 days.</AlertTitle>
      <AlertDescription>
        Renew now to avoid service interruption or upgrade to a paid plan to continue using the
        service.
      </AlertDescription>
    </Alert>
  )
}

const meta = {
  title: 'UI/Alert',
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

export const BasicStory: Story = {
  name: 'Basic',
  render: () => <BasicExample />,
}

export const DestructiveStory: Story = {
  name: 'Destructive',
  render: () => <DestructiveExample />,
}

export const ActionStory: Story = {
  name: 'Action',
  render: () => <ActionExample />,
}

export const ColorsStory: Story = {
  name: 'Colors',
  render: () => <ColorsExample />,
}
