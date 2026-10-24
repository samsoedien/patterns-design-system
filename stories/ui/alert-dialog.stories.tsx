// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BluetoothIcon, CircleFadingPlusIcon, Trash2Icon } from 'lucide-react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

function DemoExample() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>Show Dialog</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account from our
            servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

function BasicExample() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline">Show Dialog</Button>} />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

function SmallExample() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline">Show Dialog</Button>} />
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
          <AlertDialogDescription>
            Do you want to allow the USB accessory to connect to this device?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Don&apos;t allow</AlertDialogCancel>
          <AlertDialogAction>Allow</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

function MediaExample() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline">Share Project</Button>} />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <CircleFadingPlusIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Share this project?</AlertDialogTitle>
          <AlertDialogDescription>
            Anyone with the link will be able to view and edit this project.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Share</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

function SmallMediaExample() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline">Show Dialog</Button>} />

      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia>
            <BluetoothIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
          <AlertDialogDescription>
            Do you want to allow the USB accessory to connect to this device?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Don&apos;t allow</AlertDialogCancel>
          <AlertDialogAction>Allow</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

function DestructiveExample() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive">Delete Chat</Button>} />
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="cuoio:bg-destructive/10 cuoio:text-destructive cuoio:dark:bg-destructive/20 cuoio:dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Delete chat?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete this chat conversation. View <a href="#">Settings</a>{' '}
            delete any memories saved during this chat.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

const meta = {
  title: 'UI/Alert Dialog',
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

export const SmallStory: Story = {
  name: 'Small',
  render: () => <SmallExample />,
}

export const MediaStory: Story = {
  name: 'Media',
  render: () => <MediaExample />,
}

export const SmallMediaStory: Story = {
  name: 'Small Media',
  render: () => <SmallMediaExample />,
}

export const DestructiveStory: Story = {
  name: 'Destructive',
  render: () => <DestructiveExample />,
}
