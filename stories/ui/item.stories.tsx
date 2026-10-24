// @ts-nocheck
'use client'

import * as React from 'react'
import Image from 'next/image'

import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  BadgeCheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  InboxIcon,
  Plus,
  PlusIcon,
  ShieldAlertIcon,
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from '@/components/ui/item'

function DemoExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-md cuoio:flex-col cuoio:gap-6">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>A simple item with title and description.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" render={<a href="#" />}>
        <ItemMedia>
          <BadgeCheckIcon className="cuoio:size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Your profile has been verified.</ItemTitle>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="cuoio:size-4" />
        </ItemActions>
      </Item>
    </div>
  )
}

function VariantExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-md cuoio:flex-col cuoio:gap-6">
      <Item>
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Default Variant</ItemTitle>
          <ItemDescription>Transparent background with no border.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>Outlined style with a visible border.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Muted Variant</ItemTitle>
          <ItemDescription>Muted background for secondary content.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}

function SizeExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-md cuoio:flex-col cuoio:gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Default Size</ItemTitle>
          <ItemDescription>The standard size for most use cases.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" size="sm">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Small Size</ItemTitle>
          <ItemDescription>A compact size for dense layouts.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" size="xs">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Extra Small Size</ItemTitle>
          <ItemDescription>The most compact size available.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}

function IconExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-lg cuoio:flex-col cuoio:gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <ShieldAlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Security Alert</ItemTitle>
          <ItemDescription>New login detected from unknown device.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Review
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}

function AvatarExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-lg cuoio:flex-col cuoio:gap-6">
      <Item variant="outline">
        <ItemMedia>
          <Avatar className="cuoio:size-10">
            <AvatarImage src="https://github.com/evilrabbit.png" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Evil Rabbit</ItemTitle>
          <ItemDescription>Last seen 5 months ago</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button
            size="icon-sm"
            variant="outline"
            className="cuoio:rounded-full"
            aria-label="Invite"
          >
            <Plus />
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <div className="cuoio:flex cuoio:-space-x-2 cuoio:*:data-[slot=avatar]:ring-2 cuoio:*:data-[slot=avatar]:ring-background cuoio:*:data-[slot=avatar]:grayscale">
            <Avatar className="cuoio:hidden cuoio:sm:flex">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="cuoio:hidden cuoio:sm:flex">
              <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>No Team Members</ItemTitle>
          <ItemDescription>Invite your team to collaborate on this project.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Invite
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}

const Image_music = [
  {
    title: 'Midnight City Lights',
    artist: 'Neon Dreams',
    album: 'Electric Nights',
    duration: '3:45',
  },
  {
    title: 'Coffee Shop Conversations',
    artist: 'The Morning Brew',
    album: 'Urban Stories',
    duration: '4:05',
  },
  {
    title: 'Digital Rain',
    artist: 'Cyber Symphony',
    album: 'Binary Beats',
    duration: '3:30',
  },
]

function ImageExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-md cuoio:flex-col cuoio:gap-6">
      <ItemGroup className="cuoio:gap-4">
        {Image_music.map((song) => (
          <Item key={song.title} variant="outline" render={<a href="#" />} role="listitem">
            <ItemMedia variant="image">
              <Image
                src={`https://avatar.vercel.sh/${song.title}`}
                alt={song.title}
                width={32}
                height={32}
                className="cuoio:object-cover cuoio:grayscale"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="cuoio:line-clamp-1">
                {song.title} - <span className="cuoio:text-muted-foreground">{song.album}</span>
              </ItemTitle>
              <ItemDescription>{song.artist}</ItemDescription>
            </ItemContent>
            <ItemContent className="cuoio:flex-none cuoio:text-center">
              <ItemDescription>{song.duration}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}

const Group_people = [
  {
    username: 'shadcn',
    avatar: 'https://github.com/shadcn.png',
    email: 'shadcn@vercel.com',
  },
  {
    username: 'maxleiter',
    avatar: 'https://github.com/maxleiter.png',
    email: 'maxleiter@vercel.com',
  },
  {
    username: 'evilrabbit',
    avatar: 'https://github.com/evilrabbit.png',
    email: 'evilrabbit@vercel.com',
  },
]

function GroupExample() {
  return (
    <ItemGroup className="cuoio:max-w-sm">
      {Group_people.map((person, index) => (
        <Item key={person.username} variant="outline">
          <ItemMedia>
            <Avatar>
              <AvatarImage src={person.avatar} className="cuoio:grayscale" />
              <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent className="cuoio:gap-1">
            <ItemTitle>{person.username}</ItemTitle>
            <ItemDescription>{person.email}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="icon" className="cuoio:rounded-full">
              <PlusIcon />
            </Button>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}

const Header_models = [
  {
    name: 'v0-1.5-sm',
    description: 'Everyday tasks and UI generation.',
    image:
      'https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop',
    credit: 'Valeria Reverdo on Unsplash',
  },
  {
    name: 'v0-1.5-lg',
    description: 'Advanced thinking or reasoning.',
    image:
      'https://images.unsplash.com/photo-1610280777472-54133d004c8c?q=80&w=640&auto=format&fit=crop',
    credit: 'Michael Oeser on Unsplash',
  },
  {
    name: 'v0-2.0-mini',
    description: 'Open Source model for everyone.',
    image:
      'https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop',
    credit: 'Cherry Laithang on Unsplash',
  },
]

function HeaderExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-xl cuoio:flex-col cuoio:gap-6">
      <ItemGroup className="cuoio:grid cuoio:grid-cols-3 cuoio:gap-4">
        {Header_models.map((model) => (
          <Item key={model.name} variant="outline">
            <ItemHeader>
              <Image
                src={model.image}
                alt={model.name}
                width={128}
                height={128}
                className="cuoio:aspect-square cuoio:w-full cuoio:rounded-sm cuoio:object-cover"
              />
            </ItemHeader>
            <ItemContent>
              <ItemTitle>{model.name}</ItemTitle>
              <ItemDescription>{model.description}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}

function LinkExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-md cuoio:flex-col cuoio:gap-4">
      <Item render={<a href="#" />}>
        <ItemContent>
          <ItemTitle>Visit our documentation</ItemTitle>
          <ItemDescription>Learn how to get started with our components.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="cuoio:size-4" />
        </ItemActions>
      </Item>
      <Item variant="outline" render={<a href="#" target="_blank" rel="noopener noreferrer" />}>
        <ItemContent>
          <ItemTitle>External resource</ItemTitle>
          <ItemDescription>Opens in a new tab with security attributes.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ExternalLinkIcon className="cuoio:size-4" />
        </ItemActions>
      </Item>
    </div>
  )
}

const Dropdown_people = [
  {
    username: 'shadcn',
    avatar: 'https://github.com/shadcn.png',
    email: 'shadcn@vercel.com',
  },
  {
    username: 'maxleiter',
    avatar: 'https://github.com/maxleiter.png',
    email: 'maxleiter@vercel.com',
  },
  {
    username: 'evilrabbit',
    avatar: 'https://github.com/evilrabbit.png',
    email: 'evilrabbit@vercel.com',
  },
]

function DropdownExample() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Select <ChevronDownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="cuoio:w-48" align="end">
        <DropdownMenuGroup>
          {Dropdown_people.map((person) => (
            <DropdownMenuItem key={person.username}>
              <Item size="xs" className="cuoio:w-full cuoio:p-2">
                <ItemMedia>
                  <Avatar className="cuoio:size-[--spacing(6.5)]">
                    <AvatarImage src={person.avatar} className="cuoio:grayscale" />
                    <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="cuoio:gap-0">
                  <ItemTitle>{person.username}</ItemTitle>
                  <ItemDescription className="cuoio:leading-none">{person.email}</ItemDescription>
                </ItemContent>
              </Item>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const meta = {
  title: 'UI/Item',
  component: Item,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['variant', 'size', 'title', 'description'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'muted'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'xs'],
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
  args: {
    variant: 'outline',
    size: 'default',
    title: 'Design System',
    description: 'A collection of components.',
  },
} satisfies Meta<typeof Item>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Item variant={args.variant} size={args.size} className="cuoio:w-80">
      <ItemContent>
        <ItemTitle>{args.title}</ItemTitle>
        <ItemDescription>{args.description}</ItemDescription>
      </ItemContent>
    </Item>
  ),
}

export const DemoStory: Story = {
  name: 'Demo',
  render: () => <DemoExample />,
}

export const VariantStory: Story = {
  name: 'Variant',
  render: () => <VariantExample />,
}

export const SizeStory: Story = {
  name: 'Size',
  render: () => <SizeExample />,
}

export const IconStory: Story = {
  name: 'Icon',
  render: () => <IconExample />,
}

export const AvatarStory: Story = {
  name: 'Avatar',
  render: () => <AvatarExample />,
}

export const ImageStory: Story = {
  name: 'Image',
  render: () => <ImageExample />,
}

export const GroupStory: Story = {
  name: 'Group',
  render: () => <GroupExample />,
}

export const HeaderStory: Story = {
  name: 'Header',
  render: () => <HeaderExample />,
}

export const LinkStory: Story = {
  name: 'Link',
  render: () => <LinkExample />,
}

export const DropdownStory: Story = {
  name: 'Dropdown',
  render: () => <DropdownExample />,
}
