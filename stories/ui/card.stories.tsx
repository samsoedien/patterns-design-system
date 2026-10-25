// @ts-nocheck
'use client'

import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronRightIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

function DemoExample() {
  return (
    <Card className="cuoio:w-full cuoio:max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="cuoio:flex cuoio:flex-col cuoio:gap-6">
            <div className="cuoio:grid cuoio:gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="cuoio:grid cuoio:gap-2">
              <div className="cuoio:flex cuoio:items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="cuoio:ml-auto cuoio:inline-block cuoio:text-sm cuoio:underline-offset-4 cuoio:hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="cuoio:flex-col cuoio:gap-2">
        <Button type="submit" className="cuoio:w-full">
          Login
        </Button>
        <Button variant="outline" className="cuoio:w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  )
}

function SmallExample() {
  const featureName = 'Scheduled reports'

  return (
    <Card size="sm" className="cuoio:mx-auto cuoio:w-full cuoio:max-w-xs">
      <CardHeader>
        <CardTitle>{featureName}</CardTitle>
        <CardDescription>Weekly snapshots. No more manual exports.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="cuoio:grid cuoio:gap-2 cuoio:py-2 cuoio:text-sm">
          <li className="cuoio:flex cuoio:gap-2">
            <ChevronRightIcon className="cuoio:mt-0.5 cuoio:size-4 cuoio:shrink-0 cuoio:text-muted-foreground" />
            <span>Choose a schedule (daily, or weekly).</span>
          </li>
          <li className="cuoio:flex cuoio:gap-2">
            <ChevronRightIcon className="cuoio:mt-0.5 cuoio:size-4 cuoio:shrink-0 cuoio:text-muted-foreground" />
            <span>Send to channels or specific teammates.</span>
          </li>
          <li className="cuoio:flex cuoio:gap-2">
            <ChevronRightIcon className="cuoio:mt-0.5 cuoio:size-4 cuoio:shrink-0 cuoio:text-muted-foreground" />
            <span>Include charts, tables, and key metrics.</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter className="cuoio:flex-col cuoio:gap-2">
        <Button size="sm" className="cuoio:w-full">
          Set up scheduled reports
        </Button>
        <Button variant="outline" size="sm" className="cuoio:w-full">
          See what&apos;s new
        </Button>
      </CardFooter>
    </Card>
  )
}

const Spacing_spacingOptions = [
  {
    className: '[--card-spacing:--spacing(4)]',
    label: '16px',
    value: '4',
  },
  {
    className: '[--card-spacing:--spacing(5)]',
    label: '20px',
    value: '5',
  },
  {
    className: '[--card-spacing:--spacing(6)]',
    label: '24px',
    value: '6',
  },
  {
    className: '[--card-spacing:--spacing(8)]',
    label: '32px',
    value: '8',
  },
]

function SpacingExample() {
  const [spacing, setSpacing] = React.useState('4')
  const selectedSpacing = Spacing_spacingOptions.find((option) => option.value === spacing)

  return (
    <div className="cuoio:mx-auto cuoio:grid cuoio:w-full cuoio:max-w-sm cuoio:gap-4">
      <ToggleGroup
        value={[spacing]}
        onValueChange={(value) => {
          if (value[0]) {
            setSpacing(value[0])
          }
        }}
        variant="outline"
        size="sm"
        className="cuoio:justify-center"
      >
        {Spacing_spacingOptions.map((option) => (
          <ToggleGroupItem key={option.value} value={option.value}>
            {option.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <Card className={selectedSpacing?.className}>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="cuoio:flex cuoio:flex-col cuoio:gap-6">
              <div className="cuoio:grid cuoio:gap-2">
                <Label htmlFor="email-spacing">Email</Label>
                <Input id="email-spacing" type="email" placeholder="m@example.com" required />
              </div>
              <div className="cuoio:grid cuoio:gap-2">
                <div className="cuoio:flex cuoio:items-center">
                  <Label htmlFor="password-spacing">Password</Label>
                  <a
                    href="#"
                    className="cuoio:ml-auto cuoio:inline-block cuoio:text-sm cuoio:underline-offset-4 cuoio:hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password-spacing" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="cuoio:flex-col cuoio:gap-2">
          <Button type="submit" className="cuoio:w-full">
            Login
          </Button>
          <Button variant="outline" className="cuoio:w-full">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function EdgeToEdgeExample() {
  return (
    <Card className="cuoio:mx-auto cuoio:w-full cuoio:max-w-sm">
      <CardHeader>
        <CardTitle>Terms of Service</CardTitle>
        <CardDescription>Review the terms before accepting the agreement.</CardDescription>
      </CardHeader>
      <CardContent className="cuoio:-mb-(--card-spacing)">
        <div className="cuoio:-mx-(--card-spacing) cuoio:max-h-48 cuoio:space-y-4 cuoio:overflow-y-scroll cuoio:border-t cuoio:bg-muted/50 cuoio:px-(--card-spacing) cuoio:py-4 cuoio:text-sm cuoio:leading-relaxed">
          <p>
            These terms govern your use of the workspace, including access to shared documents,
            project files, and collaboration tools.
          </p>
          <p>
            You are responsible for the content you upload and for ensuring that your team has the
            appropriate permissions to view or edit it.
          </p>
          <p>
            We may update features or limits as the service evolves. When those changes materially
            affect your workflow, we will notify your workspace administrators.
          </p>
          <p>
            By continuing, you agree to keep your account credentials secure and to follow your
            organization&apos;s acceptable use policies.
          </p>
        </div>
      </CardContent>
      <CardFooter className="cuoio:justify-end cuoio:gap-2">
        <Button variant="outline">Decline</Button>
        <Button>Accept</Button>
      </CardFooter>
    </Card>
  )
}

function ImageExample() {
  return (
    <Card className="cuoio:relative cuoio:mx-auto cuoio:w-full cuoio:max-w-sm cuoio:pt-0">
      <div className="cuoio:absolute cuoio:inset-0 cuoio:z-30 cuoio:aspect-video cuoio:bg-black/35" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="cuoio:relative cuoio:z-20 cuoio:aspect-video cuoio:w-full cuoio:object-cover cuoio:brightness-60 cuoio:grayscale cuoio:dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping faster.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="cuoio:w-full">View Event</Button>
      </CardFooter>
    </Card>
  )
}

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['size', 'title', 'description'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['default', 'sm'],
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
  args: {
    size: 'default',
    title: 'Login to your account',
    description: 'Enter your email below to login to your account',
  },
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Card size={args.size} className="cuoio:w-80">
      <CardHeader>
        <CardTitle>{args.title}</CardTitle>
        <CardDescription>{args.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content</p>
      </CardContent>
    </Card>
  ),
}

export const DemoStory: Story = {
  name: 'Demo',
  render: () => <DemoExample />,
}

export const SmallStory: Story = {
  name: 'Small',
  render: () => <SmallExample />,
}

export const SpacingStory: Story = {
  name: 'Spacing',
  render: () => <SpacingExample />,
}

export const EdgeToEdgeStory: Story = {
  name: 'Edge To Edge',
  render: () => <EdgeToEdgeExample />,
}

export const ImageStory: Story = {
  name: 'Image',
  render: () => <ImageExample />,
}
