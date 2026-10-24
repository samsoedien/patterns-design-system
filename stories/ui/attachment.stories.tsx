// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  CheckIcon,
  ClockIcon,
  CopyIcon,
  FileCodeIcon,
  FileSearchIcon,
  FileTextIcon,
  FileWarningIcon,
  RefreshCwIcon,
  TableIcon,
  XIcon,
  type LucideIcon,
} from "lucide-react"
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "@/components/ui/attachment"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Spinner } from "@/components/ui/spinner"

const Demo_images = [
  {
    name: "workspace.png",
    meta: "PNG · 820 KB",
    src: "https://Demo_images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80",
    alt: "Workspace",
  },
  {
    name: "desk-reference.jpg",
    meta: "JPG · 1.1 MB",
    src: "https://Demo_images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&auto=format&fit=crop&q=80",
    alt: "Desk",
  },
  {
    name: "office-reference.jpg",
    meta: "JPG · 940 KB",
    src: "https://Demo_images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&auto=format&fit=crop&q=80",
    alt: "Office",
  },
]

function DemoExample() {
  return (
    <div className="cuoio:mx-auto cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-3 cuoio:py-12">
      <AttachmentGroup>
        {Demo_images.map((image) => (
          <Attachment key={image.name} orientation="vertical">
            <AttachmentMedia variant="image">
              <img src={image.src} alt={image.alt} />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>{image.name}</AttachmentTitle>
              <AttachmentDescription>{image.meta}</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        ))}
      </AttachmentGroup>
      <Attachment state="uploading" className="cuoio:w-full">
        <AttachmentMedia>
          <Spinner />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
          <AttachmentDescription>Uploading · 64%</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Cancel upload">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment className="cuoio:w-full">
        <AttachmentMedia>
          <FileCodeIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>message-renderer.tsx</AttachmentTitle>
          <AttachmentDescription>TypeScript · 12 KB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove message-renderer.tsx">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </div>
  )
}

const Image_images = [
  {
    name: "workspace.png",
    meta: "PNG · 820 KB",
    src: "https://Image_images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80",
    alt: "Workspace",
  },
  {
    name: "desk-reference.jpg",
    meta: "JPG · 1.1 MB",
    src: "https://Image_images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&auto=format&fit=crop&q=80",
    alt: "Desk",
  },
  {
    name: "office-reference.jpg",
    meta: "JPG · 940 KB",
    src: "https://Image_images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&auto=format&fit=crop&q=80",
    alt: "Office",
  },
]

function ImageExample() {
  return (
    <div className="cuoio:mx-auto cuoio:w-full cuoio:max-w-sm cuoio:py-12">
      <AttachmentGroup className="cuoio:w-full">
        {Image_images.map((image) => (
          <Attachment key={image.name} orientation="vertical">
            <AttachmentMedia variant="image">
              <img src={image.src} alt={image.alt} />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>{image.name}</AttachmentTitle>
              <AttachmentDescription>{image.meta}</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction aria-label={`Remove ${image.name}`}>
                <XIcon />
              </AttachmentAction>
            </AttachmentActions>
            <AttachmentTrigger
              render={
                <a
                  href={image.src}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${image.name}`}
                />
              }
            />
          </Attachment>
        ))}
      </AttachmentGroup>
    </div>
  )
}

function StatesExample() {
  return (
    <div className="cuoio:mx-auto cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-2 cuoio:py-12">
      <Attachment state="idle" className="cuoio:w-full">
        <AttachmentMedia>
          <ClockIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>selected-file.pdf</AttachmentTitle>
          <AttachmentDescription>Ready to upload</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove selected-file.pdf">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="uploading" className="cuoio:w-full">
        <AttachmentMedia>
          <Spinner />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>design-system.zip</AttachmentTitle>
          <AttachmentDescription>Uploading · 64%</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Cancel upload">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="processing" className="cuoio:w-full">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>market-research.pdf</AttachmentTitle>
          <AttachmentDescription>Processing document</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove market-research.pdf">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="error" className="cuoio:w-full">
        <AttachmentMedia>
          <FileWarningIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>financial-model.xlsx</AttachmentTitle>
          <AttachmentDescription>
            Upload failed. Try again.
          </AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Retry upload">
            <RefreshCwIcon />
          </AttachmentAction>
          <AttachmentAction aria-label="Remove financial-model.xlsx">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="done" className="cuoio:w-full">
        <AttachmentMedia>
          <CheckIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>uploaded-report.pdf</AttachmentTitle>
          <AttachmentDescription>Uploaded · 1.8 MB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove uploaded-report.pdf">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </div>
  )
}

function SizesExample() {
  return (
    <div className="cuoio:mx-auto cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:gap-3 cuoio:py-12">
      <Attachment size="default" className="cuoio:w-full">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Default attachment</AttachmentTitle>
          <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment size="sm" className="cuoio:w-full">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Small attachment</AttachmentTitle>
          <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment size="xs" className="cuoio:w-full">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Extra small attachment</AttachmentTitle>
        </AttachmentContent>
      </Attachment>
    </div>
  )
}

type Item = {
  name: string
  meta: string
  icon?: LucideIcon
  src?: string
}

const Group_items: Item[] = [
  { name: "briefing-notes.pdf", meta: "PDF · 1.4 MB", icon: FileTextIcon },
  {
    name: "workspace.png",
    meta: "PNG · 820 KB",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80",
  },
  { name: "customers.csv", meta: "CSV · 18 KB", icon: TableIcon },
  { name: "renderer.tsx", meta: "TSX · 12 KB", icon: FileCodeIcon },
]

function GroupExample() {
  return (
    <div className="cuoio:mx-auto cuoio:w-full cuoio:max-w-sm cuoio:py-12">
      <AttachmentGroup className="cuoio:w-full">
        {Group_items.map((item) => {
          const Icon = item.icon

          return (
            <Attachment key={item.name} className="cuoio:w-64">
              {item.src ? (
                <AttachmentMedia variant="image">
                  <img src={item.src} alt={item.name} />
                </AttachmentMedia>
              ) : Icon ? (
                <AttachmentMedia>
                  <Icon />
                </AttachmentMedia>
              ) : null}
              <AttachmentContent>
                <AttachmentTitle>{item.name}</AttachmentTitle>
                <AttachmentDescription>{item.meta}</AttachmentDescription>
              </AttachmentContent>
              <AttachmentActions>
                <AttachmentAction aria-label={`Remove ${item.name}`}>
                  <XIcon />
                </AttachmentAction>
              </AttachmentActions>
            </Attachment>
          )
        })}
      </AttachmentGroup>
    </div>
  )
}

function TriggerExample() {
  return (
    <div className="cuoio:mx-auto cuoio:w-full cuoio:max-w-sm cuoio:py-12">
      <Dialog>
        <Attachment className="cuoio:w-full">
          <AttachmentMedia>
            <FileSearchIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>research-summary.pdf</AttachmentTitle>
            <AttachmentDescription>Open preview dialog</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Copy link">
              <CopyIcon />
            </AttachmentAction>
            <AttachmentAction aria-label="Remove research-summary.pdf">
              <XIcon />
            </AttachmentAction>
          </AttachmentActions>
          <DialogTrigger
            render={
              <AttachmentTrigger aria-label="Preview research-summary.pdf" />
            }
          />
        </Attachment>
        <DialogContent className="cuoio:sm:max-w-md">
          <DialogHeader>
            <DialogTitle>research-summary.pdf</DialogTitle>
            <DialogDescription>
              The attachment trigger fills the card and opens the dialog, while
              the actions stay independently clickable above it.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

const meta = {
  title: 'UI/Attachment',
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

export const ImageStory: Story = {
  name: 'Image',
  render: () => <ImageExample />,
}

export const StatesStory: Story = {
  name: 'States',
  render: () => <StatesExample />,
}

export const SizesStory: Story = {
  name: 'Sizes',
  render: () => <SizesExample />,
}

export const GroupStory: Story = {
  name: 'Group',
  render: () => <GroupExample />,
}

export const TriggerStory: Story = {
  name: 'Trigger',
  render: () => <TriggerExample />,
}
