// @ts-nocheck
'use client'

import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { RotateCwIcon } from 'lucide-react'

import { Bubble, BubbleContent } from '@/components/ui/bubble'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Marker, MarkerContent } from '@/components/ui/marker'
import { Message, MessageContent, MessageHeader } from '@/components/ui/message'
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScroller,
} from '@/components/ui/message-scroller'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const GroupChat_currentUser = 'Grace'

const GroupChat_initialItems = [
  {
    id: 'group-1',
    type: 'message',
    sender: 'Grace',
    role: 'participant',
    text: '@mary, the astrophage line keeps matching Venus energy output. Can you check my math?',
  },
  {
    id: 'group-2',
    type: 'message',
    sender: 'Mary (Agent)',
    role: 'assistant',
    text: 'Yes. Confirmed. The curve points to a microorganism harvesting stellar energy and breeding near carbon dioxide. If @rocky agrees, this is the clue we need.',
  },
  {
    id: 'group-3',
    type: 'message',
    sender: 'Grace',
    role: 'participant',
    text: 'ping @rocky',
    scrollAnchor: true,
  },
] satisfies GroupChatItem[]

const GroupChat_rockyMarker = {
  id: 'group-4',
  type: 'event',
  text: 'Rocky has joined the chat',
  scrollAnchor: true,
} satisfies GroupChatItem

const GroupChat_rockyMessage = {
  id: 'group-5',
  type: 'message',
  sender: 'Rocky',
  role: 'participant',
  text: 'Amaze. Astrophage eats light, makes heat, goes to carbon dioxide. Rocky has fuel model. Grace is smart.',
} satisfies GroupChatItem

type GroupChatItem =
  | {
      id: string
      type: 'event'
      text: string
      scrollAnchor?: boolean
    }
  | {
      id: string
      type: 'message'
      sender: string
      role: 'assistant' | 'participant'
      text: string
      scrollAnchor?: boolean
    }

function GroupChatExample() {
  const [demoKey, setDemoKey] = React.useState(0)
  const [rockyTurn, setRockyTurn] = React.useState<'idle' | 'marker' | 'message'>('idle')
  const items =
    rockyTurn === 'message'
      ? [...GroupChat_initialItems, GroupChat_rockyMarker, GroupChat_rockyMessage]
      : rockyTurn === 'marker'
        ? [...GroupChat_initialItems, GroupChat_rockyMarker]
        : GroupChat_initialItems
  const buttonLabel = rockyTurn === 'idle' ? 'Add Rocky' : 'Send Message as Rocky'
  const isComplete = rockyTurn === 'message'

  return (
    <MessageScrollerProvider>
      <div className="cuoio:relative cuoio:flex cuoio:flex-col cuoio:gap-4">
        <Card className="cuoio:mx-auto cuoio:h-140 cuoio:w-full cuoio:max-w-sm cuoio:gap-0">
          <CardHeader className="cuoio:gap-1 cuoio:border-b">
            <CardTitle>Group Chat</CardTitle>
            <CardDescription>
              A group chat with several participants and an assistant. The Marker is marked as a
              turn.
            </CardDescription>
            <CardAction>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      aria-label="Reset conversation"
                      disabled={rockyTurn === 'idle'}
                      onClick={() => {
                        setRockyTurn('idle')
                        setDemoKey((key) => key + 1)
                      }}
                    />
                  }
                >
                  <RotateCwIcon />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reset</p>
                </TooltipContent>
              </Tooltip>
            </CardAction>
          </CardHeader>
          <CardContent className="cuoio:min-h-0 cuoio:flex-1 cuoio:p-0">
            <MessageScrollerProvider>
              <MessageScroller key={demoKey}>
                <MessageScrollerViewport>
                  <MessageScrollerContent className="cuoio:p-(--card-spacing)">
                    {items.map((item) =>
                      item.type === 'message' ? (
                        <GroupChat_GroupChatMessage key={item.id} item={item} />
                      ) : (
                        <GroupChat_GroupChatMarker
                          key={item.id}
                          item={item}
                          scrollAnchor={item.scrollAnchor}
                        />
                      ),
                    )}
                  </MessageScrollerContent>
                </MessageScrollerViewport>
                <MessageScrollerButton />
              </MessageScroller>
            </MessageScrollerProvider>
          </CardContent>
          <CardFooter className="cuoio:flex cuoio:flex-col cuoio:items-center cuoio:gap-2 cuoio:border-t">
            <Button
              type="button"
              disabled={isComplete}
              onClick={() => setRockyTurn((turn) => (turn === 'idle' ? 'marker' : 'message'))}
              className="cuoio:w-full"
              variant="secondary"
            >
              {buttonLabel}
            </Button>
            <p className="cuoio:text-xs cuoio:text-muted-foreground">
              {rockyTurn === 'idle'
                ? 'This will create a marker and make it the anchor'
                : "Now send Rocky's reply into the conversation"}
            </p>
          </CardFooter>
        </Card>
        <div className="cuoio:mx-auto cuoio:max-w-sm cuoio:px-0.5 cuoio:text-center cuoio:text-xs cuoio:text-balance cuoio:text-muted-foreground">
          When a user joins, a marker is created. scrollAnchor on the marker marks it as the next
          turn
        </div>
      </div>
    </MessageScrollerProvider>
  )
}

function GroupChat_GroupChatMessage({
  item,
}: {
  item: Extract<GroupChatItem, { type: 'message' }>
}) {
  const isCurrentUser = item.sender === GroupChat_currentUser
  const variant = isCurrentUser ? 'muted' : item.role === 'assistant' ? 'ghost' : 'tinted'

  return (
    <MessageScrollerItem messageId={item.id} scrollAnchor={item.scrollAnchor}>
      <Message align={isCurrentUser ? 'end' : 'start'}>
        <MessageContent>
          {!isCurrentUser && <MessageHeader>{item.sender}</MessageHeader>}
          <Bubble variant={variant}>
            <BubbleContent>{item.text}</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageScrollerItem>
  )
}

function GroupChat_GroupChatMarker({
  item,
  scrollAnchor = false,
}: {
  item: Extract<GroupChatItem, { type: 'event' }>
  scrollAnchor?: boolean
}) {
  return (
    <MessageScrollerItem scrollAnchor={scrollAnchor}>
      <Marker variant="separator">
        <MarkerContent>{item.text}</MarkerContent>
      </Marker>
    </MessageScrollerItem>
  )
}

const OpeningPosition_messages = [
  {
    id: 'open-1',
    role: 'user',
    text: 'This is the first message the user sent in the conversation.',
  },
  {
    id: 'open-2',
    role: 'assistant',
    text: 'Workspace creation rose 8%, but first invite completion only rose 2%.',
  },
  {
    id: 'open-3',
    role: 'user',
    text: 'This is the last message the user sent in the conversation.',
  },
  {
    id: 'open-4',
    role: 'assistant',
    text: 'Start with the invite step. Teams are creating workspaces but waiting to add collaborators.\n\nRecommended follow-up:\n\n1. Compare invite drop-off by account size.\n2. Check whether users who skip invites still return within 24 hours.\n3. Review the empty-state copy on the first project screen.\n4. Segment activation by template, since template users may not need invites right away.\n\nIf that pattern holds, the next experiment should make collaboration useful earlier instead of prompting for invites harder.',
  },
] satisfies Array<{
  id: string
  role: 'user' | 'assistant'
  text: string
}>

const OpeningPosition_positions = [
  { value: 'start', label: 'start' },
  { value: 'end', label: 'end' },
  { value: 'last-anchor', label: 'last-anchor' },
] satisfies Array<{
  value: 'start' | 'end' | 'last-anchor'
  label: string
}>

function OpeningPositionExample() {
  const [positionKey, setPositionKey] = React.useState(0)
  const [position, setPosition] = React.useState<'start' | 'end' | 'last-anchor'>('last-anchor')

  return (
    <div className="cuoio:relative cuoio:flex cuoio:flex-col cuoio:gap-4">
      <Card className="cuoio:mx-auto cuoio:h-140 cuoio:w-full cuoio:max-w-sm cuoio:gap-0">
        <CardHeader className="cuoio:gap-1 cuoio:border-b">
          <CardTitle>Opening Position</CardTitle>
          <CardDescription>Choose where a saved transcript opens.</CardDescription>
        </CardHeader>
        <CardContent className="cuoio:flex-1 cuoio:overflow-hidden cuoio:p-0">
          <MessageScrollerProvider>
            <OpeningPosition_OpeningPositionScroller
              position={position}
              positionKey={positionKey}
            />
          </MessageScrollerProvider>
        </CardContent>
        <CardFooter className="cuoio:flex cuoio:items-center cuoio:justify-center cuoio:border-t">
          <Tabs
            value={position}
            onValueChange={(value) => {
              if (value === 'start' || value === 'end' || value === 'last-anchor') {
                setPosition(value)
                setPositionKey((key) => key + 1)
              }
            }}
            className="cuoio:w-full"
          >
            <TabsList className="cuoio:w-full">
              {OpeningPosition_positions.map((option) => (
                <TabsTrigger key={option.value} value={option.value}>
                  {option.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </CardFooter>
      </Card>
      <div className="cuoio:mx-auto cuoio:max-w-sm cuoio:px-0.5 cuoio:text-center cuoio:text-xs cuoio:text-muted-foreground">
        Toggle the defaultScrollPosition to see where the transcript starts when you open the thread
      </div>
    </div>
  )
}

function OpeningPosition_OpeningPositionScroller({
  position,
  positionKey,
}: {
  position: 'start' | 'end' | 'last-anchor'
  positionKey: number
}) {
  const { scrollToEnd, scrollToMessage, scrollToStart } = useMessageScroller()

  React.useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (position === 'start') {
        scrollToStart({ behavior: 'auto' })
        return
      }

      if (position === 'end') {
        scrollToEnd({ behavior: 'auto' })
        return
      }

      scrollToMessage('open-3', {
        align: 'start',
        behavior: 'auto',
        scrollMargin: 64,
      })
    })

    return () => {
      cancelAnimationFrame(frame)
    }
  }, [position, positionKey, scrollToEnd, scrollToMessage, scrollToStart])

  return (
    <MessageScroller>
      <MessageScrollerViewport>
        <MessageScrollerContent className="cuoio:p-(--card-spacing)">
          {OpeningPosition_messages.map((message) => {
            const isUserMessage = message.role === 'user'

            return (
              <MessageScrollerItem
                key={message.id}
                messageId={message.id}
                scrollAnchor={isUserMessage}
              >
                <Message align={isUserMessage ? 'end' : 'start'}>
                  <MessageContent>
                    <Bubble variant={isUserMessage ? 'muted' : 'ghost'}>
                      <BubbleContent className="cuoio:space-y-2">
                        {message.text
                          .split(/\n\s*\n/)
                          .map((paragraph) => paragraph.trim())
                          .filter(Boolean)
                          .map((paragraph, index) => (
                            <p key={index} className="cuoio:whitespace-pre-wrap">
                              {paragraph}
                            </p>
                          ))}
                      </BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            )
          })}
        </MessageScrollerContent>
      </MessageScrollerViewport>
      <MessageScrollerButton />
    </MessageScroller>
  )
}

const meta = {
  title: 'UI/Message Scroller',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const GroupChatStory: Story = {
  name: 'Group Chat',
  render: () => <GroupChatExample />,
}

export const OpeningPositionStory: Story = {
  name: 'Opening Position',
  render: () => <OpeningPositionExample />,
}
