// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

const Demo_tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

function DemoExample() {
  return (
    <ScrollArea className="cuoio:h-72 cuoio:w-48 cuoio:rounded-md cuoio:border">
      <div className="cuoio:p-4">
        <h4 className="cuoio:mb-4 cuoio:text-sm cuoio:leading-none cuoio:font-medium">Tags</h4>
        {Demo_tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="cuoio:text-sm">{tag}</div>
            <Separator className="cuoio:my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  )
}

export interface Artwork {
  artist: string
  art: string
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
]

function HorizontalDemoExample() {
  return (
    <ScrollArea className="cuoio:w-96 cuoio:rounded-md cuoio:border cuoio:whitespace-nowrap">
      <div className="cuoio:flex cuoio:w-max cuoio:space-x-4 cuoio:p-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="cuoio:shrink-0">
            <div className="cuoio:overflow-hidden cuoio:rounded-md">
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="cuoio:aspect-[3/4] cuoio:h-fit cuoio:w-fit cuoio:object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="cuoio:pt-2 cuoio:text-xs cuoio:text-muted-foreground">
              Photo by{" "}
              <span className="cuoio:font-semibold cuoio:text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

const meta = {
  title: 'UI/Scroll Area',
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

export const HorizontalDemoStory: Story = {
  name: 'Horizontal Demo',
  render: () => <HorizontalDemoExample />,
}
