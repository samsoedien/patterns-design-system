// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BookOpenCheck, FileTextIcon, GitBranchIcon, SearchIcon } from 'lucide-react'

import { Marker, MarkerContent, MarkerIcon } from '@/components/ui/marker'
import { Spinner } from '@/components/ui/spinner'

function DemoExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-8 cuoio:py-12">
      <Marker>
        <MarkerIcon>
          <GitBranchIcon />
        </MarkerIcon>
        <MarkerContent>Switched to a new branch</MarkerContent>
      </Marker>
      <Marker role="status">
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent className="cuoio:shimmer">Thinking...</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>Conversation compacted</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <SearchIcon />
        </MarkerIcon>
        <MarkerContent>Explored 4 files</MarkerContent>
      </Marker>
    </div>
  )
}

function VariantsExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-8 cuoio:py-12">
      <Marker>
        <MarkerContent>A default marker for inline notes.</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>A separator marker</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerContent>A border marker for row boundaries.</MarkerContent>
      </Marker>
    </div>
  )
}

function StatusExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-8 cuoio:py-12">
      <Marker role="status">
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent>Compacting conversation</MarkerContent>
      </Marker>
      <Marker variant="separator" role="status">
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent>Running tests</MarkerContent>
      </Marker>
    </div>
  )
}

function ShimmerExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-8 cuoio:py-12">
      <Marker role="status">
        <MarkerContent className="cuoio:shimmer">Thinking...</MarkerContent>
      </Marker>
      <Marker variant="separator" role="status">
        <MarkerContent className="cuoio:shimmer">Reading 4 files</MarkerContent>
      </Marker>
    </div>
  )
}

function SeparatorExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-8 cuoio:py-12">
      <Marker variant="separator">
        <MarkerContent>Today</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>Worked for 42s</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>Conversation compacted</MarkerContent>
      </Marker>
    </div>
  )
}

function BorderExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-3 cuoio:py-12">
      <Marker variant="border">
        <MarkerIcon>
          <GitBranchIcon />
        </MarkerIcon>
        <MarkerContent>Switched to release-candidate</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerIcon>
          <SearchIcon />
        </MarkerIcon>
        <MarkerContent>Reviewed 8 related files</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerIcon>
          <FileTextIcon />
        </MarkerIcon>
        <MarkerContent>Opened implementation notes</MarkerContent>
      </Marker>
    </div>
  )
}

function IconExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-12 cuoio:py-12">
      <Marker>
        <MarkerIcon>
          <GitBranchIcon />
        </MarkerIcon>
        <MarkerContent>Switched to a new branch</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerIcon>
          <SearchIcon />
        </MarkerIcon>
        <MarkerContent>Explored 4 files</MarkerContent>
      </Marker>
      <Marker className="cuoio:flex-col">
        <MarkerIcon>
          <BookOpenCheck />
        </MarkerIcon>
        <MarkerContent>Syncing completed</MarkerContent>
      </Marker>
    </div>
  )
}

const meta = {
  title: 'UI/Marker',
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

export const VariantsStory: Story = {
  name: 'Variants',
  render: () => <VariantsExample />,
}

export const StatusStory: Story = {
  name: 'Status',
  render: () => <StatusExample />,
}

export const ShimmerStory: Story = {
  name: 'Shimmer',
  render: () => <ShimmerExample />,
}

export const SeparatorStory: Story = {
  name: 'Separator',
  render: () => <SeparatorExample />,
}

export const BorderStory: Story = {
  name: 'Border',
  render: () => <BorderExample />,
}

export const IconStory: Story = {
  name: 'Icon',
  render: () => <IconExample />,
}
