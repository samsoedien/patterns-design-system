import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  ArchiveIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  CalendarPlusIcon,
  CircleFadingArrowUpIcon,
  ClockIcon,
  GitBranchIcon,
  GitForkIcon,
  ListFilterIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  PlusIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react"
import { useState } from "react"
import { fn } from "storybook/test"

import { Button, buttonVariants } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Spinner as SpinnerIndicator } from "@/components/ui/spinner"

const variants = [
  "default",
  "outline",
  "secondary",
  "ghost",
  "destructive",
  "link",
] as const

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    controls: {
      include: ["variant", "size", "disabled", "children"],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: variants,
    },
    size: {
      control: "select",
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
    },
    disabled: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: () => (
    <div className="cuoio:flex cuoio:flex-wrap cuoio:items-center cuoio:gap-2 cuoio:md:flex-row">
      <Button variant="outline">Button</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </div>
  ),
}

export const Size: Story = {
  render: () => (
    <div className="cuoio:flex cuoio:flex-col cuoio:items-start cuoio:gap-8 cuoio:sm:flex-row">
      <div className="cuoio:flex cuoio:items-start cuoio:gap-2">
        <Button size="xs" variant="outline">
          Extra Small
        </Button>
        <Button size="icon-xs" aria-label="Submit" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="cuoio:flex cuoio:items-start cuoio:gap-2">
        <Button size="sm" variant="outline">
          Small
        </Button>
        <Button size="icon-sm" aria-label="Submit" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="cuoio:flex cuoio:items-start cuoio:gap-2">
        <Button variant="outline">Default</Button>
        <Button size="icon" aria-label="Submit" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="cuoio:flex cuoio:items-start cuoio:gap-2">
        <Button variant="outline" size="lg">
          Large
        </Button>
        <Button size="icon-lg" aria-label="Submit" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
    </div>
  ),
}

export const Default: Story = {}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
}

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
}

export const Icon: Story = {
  args: {
    variant: "outline",
    size: "icon",
    "aria-label": "Submit",
    children: <CircleFadingArrowUpIcon />,
  },
}

export const WithIcon: Story = {
  render: () => (
    <div className="cuoio:flex cuoio:gap-2">
      <Button variant="outline">
        <GitBranchIcon data-icon="inline-start" /> New Branch
      </Button>
      <Button variant="outline">
        Fork
        <GitForkIcon data-icon="inline-end" />
      </Button>
    </div>
  ),
}

export const Rounded: Story = {
  render: () => (
    <div className="cuoio:flex cuoio:gap-2">
      <Button className="cuoio:rounded-full">Get Started</Button>
      <Button
        variant="outline"
        size="icon"
        className="cuoio:rounded-full"
        aria-label="Submit"
      >
        <ArrowUpIcon />
      </Button>
    </div>
  ),
}

export const Spinner: Story = {
  render: () => (
    <div className="cuoio:flex cuoio:gap-2">
      <Button variant="outline" disabled>
        <SpinnerIndicator data-icon="inline-start" />
        Generating
      </Button>
      <Button variant="secondary" disabled>
        Downloading
        <SpinnerIndicator data-icon="inline-start" />
      </Button>
    </div>
  ),
}

function ButtonGroupExample() {
  const [label, setLabel] = useState("personal")

  return (
    <ButtonGroup>
      <ButtonGroup className="cuoio:hidden cuoio:sm:flex">
        <Button variant="outline" size="icon" aria-label="Go Back">
          <ArrowLeftIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Snooze</Button>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="outline" size="icon" aria-label="More Options" />
            }
          >
            <MoreHorizontalIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="cuoio:w-40">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <MailCheckIcon />
                Mark as Read
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArchiveIcon />
                Archive
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ClockIcon />
                Snooze
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CalendarPlusIcon />
                Add to Calendar
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListFilterIcon />
                Add to List
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <TagIcon />
                  Label As...
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup
                    value={label}
                    onValueChange={setLabel}
                  >
                    <DropdownMenuRadioItem value="personal">
                      Personal
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="work">
                      Work
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="other">
                      Other
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <Trash2Icon />
                Trash
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </ButtonGroup>
  )
}

export const Group: Story = {
  name: "Button Group",
  render: () => <ButtonGroupExample />,
}

export const AsLink: Story = {
  name: "As Link",
  render: () => (
    <a
      href="#login"
      className={buttonVariants({ variant: "secondary", size: "sm" })}
    >
      Login
    </a>
  ),
}

export const Rtl: Story = {
  name: "RTL",
  render: () => (
    <div
      className="cuoio:flex cuoio:flex-wrap cuoio:items-center cuoio:gap-2 cuoio:md:flex-row"
      dir="rtl"
    >
      <Button variant="outline">زر</Button>
      <Button variant="destructive">حذف</Button>
      <Button variant="outline">
        إرسال{" "}
        <ArrowRightIcon
          className="cuoio:rtl:rotate-180"
          data-icon="inline-end"
        />
      </Button>
      <Button variant="outline" size="icon" aria-label="Add">
        <PlusIcon />
      </Button>
      <Button variant="secondary" disabled>
        <SpinnerIndicator data-icon="inline-start" /> جاري التحميل
      </Button>
    </div>
  ),
}
