// @ts-nocheck
'use client'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/toast'

function DemoExample() {
  function showToast() {
    const id = toast.add({
      title: 'Event created',
      description: 'Sunday, December 3 at 9:00 AM',
      actionProps: {
        children: 'Undo',
        onClick() {
          toast.close(id)
        },
      },
    })
  }

  return (
    <Button variant="outline" onClick={showToast}>
      Show Toast
    </Button>
  )
}

function TypesExample() {
  return (
    <div className="cuoio:flex cuoio:flex-wrap cuoio:gap-2">
      <Button
        variant="outline"
        onClick={() => toast.add({ description: 'Event has been created.' })}
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: 'success',
            description: 'Event has been created.',
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: 'info',
            description: 'Arrive 10 minutes before the event.',
          })
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: 'warning',
            description: 'The event cannot start before 8:00 AM.',
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: 'error',
            description: 'The event could not be created.',
            priority: 'high',
          })
        }
      >
        Error
      </Button>
    </div>
  )
}

function PromiseExample() {
  function showToast() {
    toast.promise(
      new Promise<{ name: string }>((resolve) => {
        window.setTimeout(() => resolve({ name: 'Event' }), 2000)
      }),
      {
        loading: 'Creating event…',
        success: (data) => `${data.name} created.`,
        error: 'Could not create event.',
      },
    )
  }

  return (
    <Button variant="outline" onClick={showToast}>
      Create Event
    </Button>
  )
}

const meta = {
  title: 'UI/Toast',
  parameters: {
    layout: 'centered',
    controls: {
      include: ['type', 'title', 'description'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'success', 'info', 'warning', 'error'],
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
  args: {
    type: 'default',
    title: 'Event created',
    description: 'Sunday, December 3 at 9:00 AM',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Button
      variant="outline"
      onClick={() =>
        toast.add({
          ...(args.type === 'default' ? {} : { type: args.type }),
          title: args.title,
          description: args.description,
        })
      }
    >
      Show Toast
    </Button>
  ),
}

export const DemoStory: Story = {
  name: 'Demo',
  render: () => <DemoExample />,
}

export const TypesStory: Story = {
  name: 'Types',
  render: () => <TypesExample />,
}

export const PromiseStory: Story = {
  name: 'Promise',
  render: () => <PromiseExample />,
}
