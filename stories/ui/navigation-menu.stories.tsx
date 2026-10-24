// @ts-nocheck
'use client'

import * as React from 'react'
import Link from 'next/link'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { CircleAlertIcon, CircleCheckIcon, CircleDashedIcon } from 'lucide-react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const Demo_components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

function DemoExample() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="cuoio:w-96">
              <Demo_ListItem href="/docs" title="Introduction">
                Re-usable Demo_components built with Tailwind CSS.
              </Demo_ListItem>
              <Demo_ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </Demo_ListItem>
              <Demo_ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </Demo_ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="cuoio:hidden cuoio:md:flex">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="cuoio:grid cuoio:w-[400px] cuoio:gap-2 cuoio:md:w-[500px] cuoio:md:grid-cols-2 cuoio:lg:w-[600px]">
              {Demo_components.map((component) => (
                <Demo_ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </Demo_ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="cuoio:grid cuoio:w-[200px]">
              <li>
                <NavigationMenuLink
                  render={
                    <Link href="#" className="cuoio:flex-row cuoio:items-center cuoio:gap-2" />
                  }
                >
                  <CircleAlertIcon />
                  Backlog
                </NavigationMenuLink>
                <NavigationMenuLink
                  render={
                    <Link href="#" className="cuoio:flex-row cuoio:items-center cuoio:gap-2" />
                  }
                >
                  <CircleDashedIcon />
                  To Do
                </NavigationMenuLink>
                <NavigationMenuLink
                  render={
                    <Link href="#" className="cuoio:flex-row cuoio:items-center cuoio:gap-2" />
                  }
                >
                  <CircleCheckIcon />
                  Done
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="/docs" />}
            className={navigationMenuTriggerStyle()}
          >
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function Demo_ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink render={<Link href={href} />}>
        <div className="cuoio:flex cuoio:flex-col cuoio:gap-1 cuoio:text-sm">
          <div className="cuoio:leading-none cuoio:font-medium">{title}</div>
          <div className="cuoio:line-clamp-2 cuoio:text-muted-foreground">{children}</div>
        </div>
      </NavigationMenuLink>
    </li>
  )
}

const meta = {
  title: 'UI/Navigation Menu',
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
