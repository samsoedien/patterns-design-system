// @ts-nocheck
'use client'

import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  CopyIcon,
  DownloadIcon,
  FileTextIcon,
  RefreshCcwIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from 'lucide-react'

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from '@/components/ui/attachment'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from '@/components/ui/bubble'
import { Button } from '@/components/ui/button'
import { Marker, MarkerContent } from '@/components/ui/marker'
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from '@/components/ui/message'

function DemoExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-6 cuoio:py-12">
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="/avatars/10.png" alt="@me" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>Deploying to prod real quick.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="/avatars/02.png" alt="@rabbit" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>It&apos;s 4:55 PM. On a Friday.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="/avatars/10.png" alt="@me" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>It&apos;s a one-line change.</BubbleContent>
          </Bubble>
          <MessageFooter>Delivered</MessageFooter>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="/avatars/02.png" alt="@rabbit" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <BubbleGroup>
            <Bubble variant="muted">
              <BubbleContent>It&apos;s always a one-line change 😭.</BubbleContent>
            </Bubble>
            <Bubble variant="muted">
              <BubbleContent>Alright, let me take a look.</BubbleContent>
              <BubbleReactions aria-label="Reactions: thumbs up">
                <span>👍</span>
              </BubbleReactions>
            </Bubble>
          </BubbleGroup>
        </MessageContent>
      </Message>
      <Marker role="status">
        <MarkerContent className="cuoio:shimmer">
          <span className="cuoio:font-medium">Oliver</span> is typing...
        </MarkerContent>
      </Marker>
    </div>
  )
}

function AvatarExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-6 cuoio:py-12">
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="/avatars/03.png" alt="@avatar" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>The build failed during dependency installation.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="/avatars/10.png" alt="@avatar" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>Can you share the exact error?</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="/avatars/03.png" alt="@avatar" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <BubbleGroup>
            <Bubble variant="muted">
              <BubbleContent>Here&apos;s the error from the logs</BubbleContent>
            </Bubble>
            <Bubble variant="muted">
              <BubbleContent>
                Something went wrong with the build. The libraries are not installed correctly. Try
                running the build again.
              </BubbleContent>
            </Bubble>
          </BubbleGroup>
        </MessageContent>
      </Message>
    </div>
  )
}

function GroupExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-6 cuoio:py-12">
      <MessageGroup>
        <Message>
          <MessageAvatar />
          <MessageContent>
            <Bubble variant="muted">
              <BubbleContent>I checked the registry addresses.</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
        <Message>
          <MessageAvatar>
            <Avatar>
              <AvatarImage src="/avatars/02.png" alt="@avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </MessageAvatar>
          <MessageContent>
            <Bubble variant="muted">
              <BubbleContent>
                The component and example JSON now live under the UI registry.
              </BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      </MessageGroup>
    </div>
  )
}

function HeaderFooterExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-8 cuoio:py-12">
      <Message>
        <MessageContent>
          <MessageHeader>Olivia</MessageHeader>
          <Bubble variant="muted">
            <BubbleContent>I already checked the logs.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>
              Send the report to the team. Ping @shadcn if you need help.
            </BubbleContent>
          </Bubble>
          <MessageFooter>
            <div>
              Read <span className="cuoio:font-normal">Yesterday</span>
            </div>
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  )
}

function ActionsExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-8 cuoio:py-12">
      <Message>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>The install failure is coming from the workspace package.</BubbleContent>
          </Bubble>
          <MessageFooter>
            <Button variant="ghost" size="icon" aria-label="Copy" title="Copy">
              <CopyIcon />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Like" title="Like">
              <ThumbsUpIcon />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Dislike" title="Dislike">
              <ThumbsDownIcon />
            </Button>
          </MessageFooter>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>Okay drop me a link. Taking a look...</BubbleContent>
          </Bubble>
          <MessageFooter className="cuoio:gap-2">
            <span className="cuoio:font-normal cuoio:text-destructive">Failed to send</span>
            <Button variant="ghost" size="icon-xs" title="Retry" aria-label="Retry">
              <RefreshCcwIcon />
            </Button>
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  )
}

function AttachmentExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-8 cuoio:py-12">
      <Message align="end">
        <MessageContent>
          <Attachment orientation="vertical">
            <AttachmentMedia variant="image">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80"
                alt="Workspace"
              />
            </AttachmentMedia>
          </Attachment>
          <Bubble>
            <BubbleContent>
              Here&apos;s the image. Can you add it to the PDF? Use it for the cover page.
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              Done. Here&apos;s the PDF with the image added as the cover page.
            </BubbleContent>
          </Bubble>
          <Attachment>
            <AttachmentMedia>
              <FileTextIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
              <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction
                type="button"
                title="Download"
                aria-label="Download"
                size="icon-sm"
                variant="secondary"
              >
                <DownloadIcon />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>Thanks. Looks good.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </div>
  )
}

const meta = {
  title: 'UI/Message',
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

export const AvatarStory: Story = {
  name: 'Avatar',
  render: () => <AvatarExample />,
}

export const GroupStory: Story = {
  name: 'Group',
  render: () => <GroupExample />,
}

export const HeaderFooterStory: Story = {
  name: 'Header Footer',
  render: () => <HeaderFooterExample />,
}

export const ActionsStory: Story = {
  name: 'Actions',
  render: () => <ActionsExample />,
}

export const AttachmentStory: Story = {
  name: 'Attachment',
  render: () => <AttachmentExample />,
}
