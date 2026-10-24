// @ts-nocheck
"use client"

import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  ChevronRightIcon,
  ChevronsUpDown,
  FileIcon,
  FolderIcon,
  MaximizeIcon,
  MinimizeIcon,
} from "lucide-react"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

function DemoExample() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="cuoio:flex cuoio:w-[350px] cuoio:flex-col cuoio:gap-2"
    >
      <div className="cuoio:flex cuoio:items-center cuoio:justify-between cuoio:gap-4 cuoio:px-4">
        <h4 className="cuoio:text-sm cuoio:font-semibold">Order #4189</h4>
        <CollapsibleTrigger
          render={<Button variant="ghost" size="icon" className="cuoio:size-8" />}
        >
          <ChevronsUpDown />
          <span className="cuoio:sr-only">Toggle details</span>
        </CollapsibleTrigger>
      </div>
      <div className="cuoio:flex cuoio:items-center cuoio:justify-between cuoio:rounded-md cuoio:border cuoio:px-4 cuoio:py-2 cuoio:text-sm">
        <span className="cuoio:text-muted-foreground">Status</span>
        <span className="cuoio:font-medium">Shipped</span>
      </div>
      <CollapsibleContent className="cuoio:flex cuoio:flex-col cuoio:gap-2">
        <div className="cuoio:rounded-md cuoio:border cuoio:px-4 cuoio:py-2 cuoio:text-sm">
          <p className="cuoio:font-medium">Shipping address</p>
          <p className="cuoio:text-muted-foreground">100 Market St, San Francisco</p>
        </div>
        <div className="cuoio:rounded-md cuoio:border cuoio:px-4 cuoio:py-2 cuoio:text-sm">
          <p className="cuoio:font-medium">Items</p>
          <p className="cuoio:text-muted-foreground">2x Studio Headphones</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

function SettingsExample() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Card className="cuoio:mx-auto cuoio:w-full cuoio:max-w-xs" size="sm">
      <CardHeader>
        <CardTitle>Radius</CardTitle>
        <CardDescription>Set the corner radius of the element.</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="cuoio:flex cuoio:items-start cuoio:gap-2"
        >
          <FieldGroup className="cuoio:grid cuoio:w-full cuoio:grid-cols-2 cuoio:gap-2">
            <Field>
              <FieldLabel htmlFor="radius-x" className="cuoio:sr-only">
                Radius X
              </FieldLabel>
              <Input id="radius" placeholder="0" defaultValue={0} />
            </Field>
            <Field>
              <FieldLabel htmlFor="radius-y" className="cuoio:sr-only">
                Radius Y
              </FieldLabel>
              <Input id="radius" placeholder="0" defaultValue={0} />
            </Field>
            <CollapsibleContent className="cuoio:col-span-full cuoio:grid cuoio:grid-cols-subgrid cuoio:gap-2">
              <Field>
                <FieldLabel htmlFor="radius-x" className="cuoio:sr-only">
                  Radius X
                </FieldLabel>
                <Input id="radius" placeholder="0" defaultValue={0} />
              </Field>
              <Field>
                <FieldLabel htmlFor="radius-y" className="cuoio:sr-only">
                  Radius Y
                </FieldLabel>
                <Input id="radius" placeholder="0" defaultValue={0} />
              </Field>
            </CollapsibleContent>
          </FieldGroup>
          <CollapsibleTrigger render={<Button variant="outline" size="icon" />}>
            {isOpen ? <MinimizeIcon /> : <MaximizeIcon />}
          </CollapsibleTrigger>
        </Collapsible>
      </CardContent>
    </Card>
  )
}

type FileTreeItem = { name: string } | { name: string; items: FileTreeItem[] }

function FileTreeExample() {
  const fileTree: FileTreeItem[] = [
    {
      name: "components",
      items: [
        {
          name: "ui",
          items: [
            { name: "button.tsx" },
            { name: "card.tsx" },
            { name: "dialog.tsx" },
            { name: "input.tsx" },
            { name: "select.tsx" },
            { name: "table.tsx" },
          ],
        },
        { name: "login-form.tsx" },
        { name: "register-form.tsx" },
      ],
    },
    {
      name: "lib",
      items: [{ name: "utils.ts" }, { name: "cn.ts" }, { name: "api.ts" }],
    },
    {
      name: "hooks",
      items: [
        { name: "use-media-query.ts" },
        { name: "use-debounce.ts" },
        { name: "use-local-storage.ts" },
      ],
    },
    {
      name: "types",
      items: [{ name: "index.d.ts" }, { name: "api.d.ts" }],
    },
    {
      name: "public",
      items: [
        { name: "favicon.ico" },
        { name: "logo.svg" },
        { name: "images" },
      ],
    },
    { name: "app.tsx" },
    { name: "layout.tsx" },
    { name: "globals.css" },
    { name: "package.json" },
    { name: "tsconfig.json" },
    { name: "README.md" },
    { name: ".gitignore" },
  ]

  const renderItem = (fileItem: FileTreeItem) => {
    if ("items" in fileItem) {
      return (
        <Collapsible key={fileItem.name}>
          <CollapsibleTrigger
            render={
              <Button
                variant="ghost"
                size="sm"
                className="cuoio:group cuoio:w-full cuoio:justify-start cuoio:transition-none cuoio:hover:bg-accent cuoio:hover:text-accent-foreground"
              />
            }
          >
            <ChevronRightIcon className="cuoio:transition-transform cuoio:group-data-[state=open]:rotate-90" />
            <FolderIcon />
            {fileItem.name}
          </CollapsibleTrigger>
          <CollapsibleContent className="cuoio:mt-1 cuoio:ml-5 cuoio:style-lyra:ml-4">
            <div className="cuoio:flex cuoio:flex-col cuoio:gap-1">
              {fileItem.items.map((child) => renderItem(child))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )
    }
    return (
      <Button
        key={fileItem.name}
        variant="link"
        size="sm"
        className="cuoio:w-full cuoio:justify-start cuoio:gap-2 cuoio:text-foreground"
      >
        <FileIcon />
        <span>{fileItem.name}</span>
      </Button>
    )
  }

  return (
    <Card className="cuoio:mx-auto cuoio:w-full cuoio:max-w-[16rem] cuoio:gap-2" size="sm">
      <CardHeader>
        <Tabs defaultValue="explorer">
          <TabsList className="cuoio:w-full">
            <TabsTrigger value="explorer">Explorer</TabsTrigger>
            <TabsTrigger value="settings">Outline</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="cuoio:flex cuoio:flex-col cuoio:gap-1">
          {fileTree.map((item) => renderItem(item))}
        </div>
      </CardContent>
    </Card>
  )
}

const meta = {
  title: 'UI/Collapsible',
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

export const SettingsStory: Story = {
  name: 'Settings',
  render: () => <SettingsExample />,
}

export const FileTreeStory: Story = {
  name: 'File Tree',
  render: () => <FileTreeExample />,
}
