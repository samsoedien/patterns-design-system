// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  ArrowUpRightIcon,
  BellIcon,
  CloudIcon,
  FolderCodeIcon,
  PlusIcon,
  RefreshCcwIcon,
  SearchIcon,
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Kbd } from '@/components/ui/kbd'

function DemoExample() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderCodeIcon />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="cuoio:flex-row cuoio:justify-center cuoio:gap-2">
        <Button>Create Project</Button>
        <Button variant="outline">Import Project</Button>
      </EmptyContent>
      <Button
        variant="link"
        render={<a href="#" />}
        className="cuoio:text-muted-foreground"
        size="sm"
        nativeButton={false}
      >
        Learn More <ArrowUpRightIcon />
      </Button>
    </Empty>
  )
}

function OutlineExample() {
  return (
    <Empty className="cuoio:border cuoio:border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconCloud />
        </EmptyMedia>
        <EmptyTitle>Cloud Storage Empty</EmptyTitle>
        <EmptyDescription>
          Upload files to your cloud storage to access them anywhere.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Upload Files
        </Button>
      </EmptyContent>
    </Empty>
  )
}

function BackgroundExample() {
  return (
    <Empty className="cuoio:h-full cuoio:bg-muted/30">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconBell />
        </EmptyMedia>
        <EmptyTitle>No Notifications</EmptyTitle>
        <EmptyDescription className="cuoio:max-w-xs cuoio:text-pretty">
          You&apos;re all caught up. New notifications will appear here.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">
          <RefreshCcwIcon data-icon="inline-start" />
          Refresh
        </Button>
      </EmptyContent>
    </Empty>
  )
}

function AvatarExample() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="default">
          <Avatar className="cuoio:size-12">
            <AvatarImage src="https://github.com/shadcn.png" className="cuoio:grayscale" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
        </EmptyMedia>
        <EmptyTitle>User Offline</EmptyTitle>
        <EmptyDescription>
          This user is currently offline. You can leave a message to notify them or try again later.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Leave Message</Button>
      </EmptyContent>
    </Empty>
  )
}

function AvatarGroupExample() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <div className="cuoio:flex cuoio:-space-x-2 cuoio:*:data-[slot=avatar]:size-12 cuoio:*:data-[slot=avatar]:ring-2 cuoio:*:data-[slot=avatar]:ring-background cuoio:*:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </EmptyMedia>
        <EmptyTitle>No Team Members</EmptyTitle>
        <EmptyDescription>Invite your team to collaborate on this project.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">
          <PlusIcon />
          Invite Members
        </Button>
      </EmptyContent>
    </Empty>
  )
}

function InputGroupExample() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The page you&apos;re looking for doesn&apos;t exist. Try searching for what you need
          below.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup className="cuoio:sm:w-3/4">
          <InputGroupInput placeholder="Try searching for pages..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>/</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <EmptyDescription>
          Need help? <a href="#">Contact support</a>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  )
}

const meta = {
  title: 'UI/Empty',
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

export const OutlineStory: Story = {
  name: 'Outline',
  render: () => <OutlineExample />,
}

export const BackgroundStory: Story = {
  name: 'Background',
  render: () => <BackgroundExample />,
}

export const AvatarStory: Story = {
  name: 'Avatar',
  render: () => <AvatarExample />,
}

export const AvatarGroupStory: Story = {
  name: 'Avatar Group',
  render: () => <AvatarGroupExample />,
}

export const InputGroupStory: Story = {
  name: 'Input Group',
  render: () => <InputGroupExample />,
}
