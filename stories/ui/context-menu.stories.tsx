// @ts-nocheck
'use client'

import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  ArchiveIcon,
  ClipboardPasteIcon,
  CopyIcon,
  PencilIcon,
  ScissorsIcon,
  ShareIcon,
  TrashIcon,
} from 'lucide-react'

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

function DemoExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="cuoio:flex cuoio:aspect-video cuoio:w-full cuoio:max-w-xs cuoio:items-center cuoio:justify-center cuoio:rounded-xl cuoio:border cuoio:border-dashed cuoio:text-sm">
        <span className="cuoio:hidden cuoio:pointer-fine:inline-block">Right click here</span>
        <span className="cuoio:hidden cuoio:pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="cuoio:w-48">
        <ContextMenuGroup>
          <ContextMenuItem>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className="cuoio:w-44">
              <ContextMenuGroup>
                <ContextMenuItem>Save Page...</ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                <ContextMenuItem>Name Window...</ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuCheckboxItem checked>Show Bookmarks</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuRadioGroup value="pedro">
            <ContextMenuLabel>People</ContextMenuLabel>
            <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

function BasicExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="cuoio:flex cuoio:aspect-video cuoio:w-full cuoio:max-w-xs cuoio:items-center cuoio:justify-center cuoio:rounded-xl cuoio:border cuoio:border-dashed cuoio:text-sm">
        <span className="cuoio:hidden cuoio:pointer-fine:inline-block">Right click here</span>
        <span className="cuoio:hidden cuoio:pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>Back</ContextMenuItem>
          <ContextMenuItem disabled>Forward</ContextMenuItem>
          <ContextMenuItem>Reload</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

function SubmenuExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="cuoio:flex cuoio:aspect-video cuoio:w-full cuoio:max-w-xs cuoio:items-center cuoio:justify-center cuoio:rounded-xl cuoio:border cuoio:border-dashed cuoio:text-sm">
        <span className="cuoio:hidden cuoio:pointer-fine:inline-block">Right click here</span>
        <span className="cuoio:hidden cuoio:pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Cut
            <ContextMenuShortcut>⌘X</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSub>
          <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuGroup>
              <ContextMenuItem>Save Page...</ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  )
}

function ShortcutsExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="cuoio:flex cuoio:aspect-video cuoio:w-full cuoio:max-w-xs cuoio:items-center cuoio:justify-center cuoio:rounded-xl cuoio:border cuoio:border-dashed cuoio:text-sm">
        <span className="cuoio:hidden cuoio:pointer-fine:inline-block">Right click here</span>
        <span className="cuoio:hidden cuoio:pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            Save
            <ContextMenuShortcut>⌘S</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Save As...
            <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

function GroupsExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="cuoio:flex cuoio:aspect-video cuoio:w-full cuoio:max-w-xs cuoio:items-center cuoio:justify-center cuoio:rounded-xl cuoio:border cuoio:border-dashed cuoio:text-sm">
        <span className="cuoio:hidden cuoio:pointer-fine:inline-block">Right click here</span>
        <span className="cuoio:hidden cuoio:pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuLabel>File</ContextMenuLabel>
          <ContextMenuItem>
            New File
            <ContextMenuShortcut>⌘N</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Open File
            <ContextMenuShortcut>⌘O</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Save
            <ContextMenuShortcut>⌘S</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>Edit</ContextMenuLabel>
          <ContextMenuItem>
            Undo
            <ContextMenuShortcut>⌘Z</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Redo
            <ContextMenuShortcut>⇧⌘Z</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            Cut
            <ContextMenuShortcut>⌘X</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Paste
            <ContextMenuShortcut>⌘V</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive">
            Delete
            <ContextMenuShortcut>⌫</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

function IconsExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="cuoio:flex cuoio:aspect-video cuoio:w-full cuoio:max-w-xs cuoio:items-center cuoio:justify-center cuoio:rounded-xl cuoio:border cuoio:border-dashed cuoio:text-sm">
        <span className="cuoio:hidden cuoio:pointer-fine:inline-block">Right click here</span>
        <span className="cuoio:hidden cuoio:pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>
            <CopyIcon />
            Copy
          </ContextMenuItem>
          <ContextMenuItem>
            <ScissorsIcon />
            Cut
          </ContextMenuItem>
          <ContextMenuItem>
            <ClipboardPasteIcon />
            Paste
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive">
            <TrashIcon />
            Delete
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

function CheckboxesExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="cuoio:flex cuoio:aspect-video cuoio:w-full cuoio:max-w-xs cuoio:items-center cuoio:justify-center cuoio:rounded-xl cuoio:border cuoio:border-dashed cuoio:text-sm">
        <span className="cuoio:hidden cuoio:pointer-fine:inline-block">Right click here</span>
        <span className="cuoio:hidden cuoio:pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuCheckboxItem defaultChecked>Show Bookmarks Bar</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem defaultChecked>Show Developer Tools</ContextMenuCheckboxItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

function RadioExample() {
  const [user, setUser] = React.useState('pedro')
  const [theme, setTheme] = React.useState('light')

  return (
    <ContextMenu>
      <ContextMenuTrigger className="cuoio:flex cuoio:aspect-video cuoio:w-full cuoio:max-w-xs cuoio:items-center cuoio:justify-center cuoio:rounded-xl cuoio:border cuoio:border-dashed cuoio:text-sm">
        <span className="cuoio:hidden cuoio:pointer-fine:inline-block">Right click here</span>
        <span className="cuoio:hidden cuoio:pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuLabel>People</ContextMenuLabel>
          <ContextMenuRadioGroup value={user} onValueChange={setUser}>
            <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>Theme</ContextMenuLabel>
          <ContextMenuRadioGroup value={theme} onValueChange={setTheme}>
            <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
            <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
            <ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

function DestructiveExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="cuoio:flex cuoio:aspect-video cuoio:w-full cuoio:max-w-xs cuoio:items-center cuoio:justify-center cuoio:rounded-xl cuoio:border cuoio:border-dashed cuoio:text-sm">
        <span className="cuoio:hidden cuoio:pointer-fine:inline-block">Right click here</span>
        <span className="cuoio:hidden cuoio:pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>
            <PencilIcon />
            Edit
          </ContextMenuItem>
          <ContextMenuItem>
            <ShareIcon />
            Share
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive">
            <TrashIcon />
            Delete
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

function SidesExample() {
  return (
    <div className="cuoio:grid cuoio:w-full cuoio:max-w-sm cuoio:grid-cols-2 cuoio:gap-4">
      <ContextMenu>
        <ContextMenuTrigger className="cuoio:flex cuoio:aspect-video cuoio:w-full cuoio:max-w-xs cuoio:items-center cuoio:justify-center cuoio:rounded-xl cuoio:border cuoio:border-dashed cuoio:text-sm">
          <span className="cuoio:hidden cuoio:pointer-fine:inline-block">Right click (top)</span>
          <span className="cuoio:hidden cuoio:pointer-coarse:inline-block">Long press (top)</span>
        </ContextMenuTrigger>
        <ContextMenuContent side="top">
          <ContextMenuGroup>
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem>Forward</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      <ContextMenu>
        <ContextMenuTrigger className="cuoio:flex cuoio:aspect-video cuoio:w-full cuoio:max-w-xs cuoio:items-center cuoio:justify-center cuoio:rounded-xl cuoio:border cuoio:border-dashed cuoio:text-sm">
          <span className="cuoio:hidden cuoio:pointer-fine:inline-block">Right click (right)</span>
          <span className="cuoio:hidden cuoio:pointer-coarse:inline-block">Long press (right)</span>
        </ContextMenuTrigger>
        <ContextMenuContent side="right">
          <ContextMenuGroup>
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem>Forward</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      <ContextMenu>
        <ContextMenuTrigger className="cuoio:flex cuoio:aspect-video cuoio:w-full cuoio:max-w-xs cuoio:items-center cuoio:justify-center cuoio:rounded-xl cuoio:border cuoio:border-dashed cuoio:text-sm">
          <span className="cuoio:hidden cuoio:pointer-fine:inline-block">Right click (bottom)</span>
          <span className="cuoio:hidden cuoio:pointer-coarse:inline-block">
            Long press (bottom)
          </span>
        </ContextMenuTrigger>
        <ContextMenuContent side="bottom">
          <ContextMenuGroup>
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem>Forward</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      <ContextMenu>
        <ContextMenuTrigger className="cuoio:flex cuoio:aspect-video cuoio:w-full cuoio:max-w-xs cuoio:items-center cuoio:justify-center cuoio:rounded-xl cuoio:border cuoio:border-dashed cuoio:text-sm">
          <span className="cuoio:hidden cuoio:pointer-fine:inline-block">Right click (left)</span>
          <span className="cuoio:hidden cuoio:pointer-coarse:inline-block">Long press (left)</span>
        </ContextMenuTrigger>
        <ContextMenuContent side="left">
          <ContextMenuGroup>
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem>Forward</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}

const meta = {
  title: 'UI/Context Menu',
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

export const BasicStory: Story = {
  name: 'Basic',
  render: () => <BasicExample />,
}

export const SubmenuStory: Story = {
  name: 'Submenu',
  render: () => <SubmenuExample />,
}

export const ShortcutsStory: Story = {
  name: 'Shortcuts',
  render: () => <ShortcutsExample />,
}

export const GroupsStory: Story = {
  name: 'Groups',
  render: () => <GroupsExample />,
}

export const IconsStory: Story = {
  name: 'Icons',
  render: () => <IconsExample />,
}

export const CheckboxesStory: Story = {
  name: 'Checkboxes',
  render: () => <CheckboxesExample />,
}

export const RadioStory: Story = {
  name: 'Radio',
  render: () => <RadioExample />,
}

export const DestructiveStory: Story = {
  name: 'Destructive',
  render: () => <DestructiveExample />,
}

export const SidesStory: Story = {
  name: 'Sides',
  render: () => <SidesExample />,
}
