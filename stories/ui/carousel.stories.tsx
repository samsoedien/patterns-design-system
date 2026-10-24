// @ts-nocheck
'use client'

import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

function DemoExample() {
  return (
    <Carousel className="cuoio:w-full cuoio:max-w-[12rem] cuoio:sm:max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="cuoio:p-1">
              <Card>
                <CardContent className="cuoio:flex cuoio:aspect-square cuoio:items-center cuoio:justify-center cuoio:p-6">
                  <span className="cuoio:text-4xl cuoio:font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

function SizeExample() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="cuoio:w-full cuoio:max-w-[12rem] cuoio:sm:max-w-xs cuoio:md:max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="cuoio:basis-1/2 cuoio:lg:basis-1/3">
            <div className="cuoio:p-1">
              <Card>
                <CardContent className="cuoio:flex cuoio:aspect-square cuoio:items-center cuoio:justify-center cuoio:p-6">
                  <span className="cuoio:text-3xl cuoio:font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

function SpacingExample() {
  return (
    <Carousel className="cuoio:w-full cuoio:max-w-[12rem] cuoio:sm:max-w-xs cuoio:md:max-w-sm">
      <CarouselContent className="cuoio:-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="cuoio:basis-1/2 cuoio:pl-1 cuoio:lg:basis-1/3">
            <div className="cuoio:p-1">
              <Card>
                <CardContent className="cuoio:flex cuoio:aspect-square cuoio:items-center cuoio:justify-center cuoio:p-6">
                  <span className="cuoio:text-2xl cuoio:font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

function OrientationExample() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      orientation="vertical"
      className="cuoio:w-full cuoio:max-w-xs"
    >
      <CarouselContent className="cuoio:-mt-1 cuoio:h-[270px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="cuoio:basis-1/2 cuoio:pt-1">
            <div className="cuoio:p-1">
              <Card>
                <CardContent className="cuoio:flex cuoio:items-center cuoio:justify-center cuoio:p-6">
                  <span className="cuoio:text-3xl cuoio:font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

function ApiExample() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="cuoio:mx-auto cuoio:max-w-[10rem] cuoio:sm:max-w-xs">
      <Carousel setApi={setApi} className="cuoio:w-full cuoio:max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="cuoio:m-px">
                <CardContent className="cuoio:flex cuoio:aspect-square cuoio:items-center cuoio:justify-center cuoio:p-6">
                  <span className="cuoio:text-4xl cuoio:font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="cuoio:py-2 cuoio:text-center cuoio:text-sm cuoio:text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  )
}

const meta = {
  title: 'UI/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['orientation'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
    },
  },
  args: {
    orientation: 'horizontal',
  },
} satisfies Meta<typeof Carousel>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Carousel orientation={args.orientation} className="cuoio:w-full cuoio:max-w-xs">
      <CarouselContent className={args.orientation === 'vertical' ? 'cuoio:h-48' : undefined}>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="cuoio:p-1">
              <Card>
                <CardContent className="cuoio:flex cuoio:aspect-square cuoio:items-center cuoio:justify-center cuoio:p-6">
                  <span className="cuoio:text-4xl cuoio:font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

export const DemoStory: Story = {
  name: 'Demo',
  render: () => <DemoExample />,
}

export const SizeStory: Story = {
  name: 'Size',
  render: () => <SizeExample />,
}

export const SpacingStory: Story = {
  name: 'Spacing',
  render: () => <SpacingExample />,
}

export const OrientationStory: Story = {
  name: 'Orientation',
  render: () => <OrientationExample />,
}

export const ApiStory: Story = {
  name: 'Api',
  render: () => <ApiExample />,
}
