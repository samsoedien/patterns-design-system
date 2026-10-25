// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'

function DemoExample() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="cuoio:max-w-sm cuoio:rounded-lg cuoio:border"
    >
      <ResizablePanel defaultSize="50%">
        <div className="cuoio:flex cuoio:h-[200px] cuoio:items-center cuoio:justify-center cuoio:p-6">
          <span className="cuoio:font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="25%">
            <div className="cuoio:flex cuoio:h-full cuoio:items-center cuoio:justify-center cuoio:p-6">
              <span className="cuoio:font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="75%">
            <div className="cuoio:flex cuoio:h-full cuoio:items-center cuoio:justify-center cuoio:p-6">
              <span className="cuoio:font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

function VerticalExample() {
  return (
    <ResizablePanelGroup
      orientation="vertical"
      className="cuoio:min-h-[200px] cuoio:max-w-sm cuoio:rounded-lg cuoio:border"
    >
      <ResizablePanel defaultSize="25%">
        <div className="cuoio:flex cuoio:h-full cuoio:items-center cuoio:justify-center cuoio:p-6">
          <span className="cuoio:font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="75%">
        <div className="cuoio:flex cuoio:h-full cuoio:items-center cuoio:justify-center cuoio:p-6">
          <span className="cuoio:font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

function HandleExample() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="cuoio:min-h-[200px] cuoio:max-w-sm cuoio:rounded-lg cuoio:border"
    >
      <ResizablePanel defaultSize="25%">
        <div className="cuoio:flex cuoio:h-full cuoio:items-center cuoio:justify-center cuoio:p-6">
          <span className="cuoio:font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="75%">
        <div className="cuoio:flex cuoio:h-full cuoio:items-center cuoio:justify-center cuoio:p-6">
          <span className="cuoio:font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

const meta = {
  title: 'UI/Resizable',
  component: ResizablePanelGroup,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['orientation', 'withHandle'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
    },
    withHandle: {
      control: 'boolean',
    },
  },
  args: {
    orientation: 'horizontal',
    withHandle: true,
  },
} satisfies Meta<typeof ResizablePanelGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <ResizablePanelGroup
      orientation={args.orientation}
      className="cuoio:min-h-48 cuoio:max-w-sm cuoio:rounded-lg cuoio:border"
    >
      <ResizablePanel defaultSize="50%">
        <div className="cuoio:flex cuoio:h-48 cuoio:items-center cuoio:justify-center cuoio:p-6">
          <span className="cuoio:font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle={args.withHandle} />
      <ResizablePanel defaultSize="50%">
        <div className="cuoio:flex cuoio:h-48 cuoio:items-center cuoio:justify-center cuoio:p-6">
          <span className="cuoio:font-semibold">Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const DemoStory: Story = {
  name: 'Demo',
  render: () => <DemoExample />,
}

export const VerticalStory: Story = {
  name: 'Vertical',
  render: () => <VerticalExample />,
}

export const HandleStory: Story = {
  name: 'Handle',
  render: () => <HandleExample />,
}
