"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { cn } from "cn"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  InputGroup,
  InputGroupAddon,
} from "@/components/ui/input-group"
import { SearchIcon, CheckIcon } from "lucide-react"

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "pttrn:flex pttrn:size-full pttrn:flex-col pttrn:overflow-hidden pttrn:rounded-xl pttrn:bg-popover pttrn:p-1 pttrn:text-popover-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = false,
  ...props
}: Omit<React.ComponentProps<typeof Dialog>, "children"> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
  children: React.ReactNode
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="pttrn:sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn(
          "pttrn:top-1/3 pttrn:translate-y-0 pttrn:overflow-hidden pttrn:rounded-xl! pttrn:p-0",
          className
        )}
        showCloseButton={showCloseButton}
      >
        {children}
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div data-slot="command-input-wrapper" className="pttrn:p-1 pttrn:pb-0">
      <InputGroup className="pttrn:h-8! pttrn:bg-input/20 pttrn:dark:bg-input/30">
        <CommandPrimitive.Input
          data-slot="command-input"
          className={cn(
            "pttrn:w-full pttrn:text-xs/relaxed pttrn:outline-hidden pttrn:disabled:cursor-not-allowed pttrn:disabled:opacity-50",
            className
          )}
          {...props}
        />
        <InputGroupAddon>
          <SearchIcon className="pttrn:size-3.5 pttrn:shrink-0 pttrn:opacity-50" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "pttrn:no-scrollbar pttrn:max-h-72 pttrn:scroll-py-1 pttrn:overflow-x-hidden pttrn:overflow-y-auto pttrn:outline-none",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={cn("pttrn:py-6 pttrn:text-center pttrn:text-xs/relaxed", className)}
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "pttrn:overflow-hidden pttrn:p-1 pttrn:text-foreground pttrn:**:[[cmdk-group-heading]]:px-2.5 pttrn:**:[[cmdk-group-heading]]:py-1.5 pttrn:**:[[cmdk-group-heading]]:text-xs pttrn:**:[[cmdk-group-heading]]:font-medium pttrn:**:[[cmdk-group-heading]]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("pttrn:-mx-1 pttrn:my-1 pttrn:h-px pttrn:bg-border/50", className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "pttrn:group/command-item pttrn:relative pttrn:flex pttrn:min-h-7 pttrn:cursor-default pttrn:items-center pttrn:gap-2 pttrn:rounded-md pttrn:px-2.5 pttrn:py-1.5 pttrn:text-xs/relaxed pttrn:outline-hidden pttrn:select-none pttrn:in-data-[slot=dialog-content]:rounded-md pttrn:data-[disabled=true]:pointer-events-none pttrn:data-[disabled=true]:opacity-50 pttrn:data-selected:bg-muted pttrn:data-selected:text-foreground pttrn:[&_svg]:pointer-events-none pttrn:[&_svg]:shrink-0 pttrn:[&_svg:not([class*=size-])]:size-3.5 pttrn:data-selected:*:[svg]:text-foreground",
        className
      )}
      {...props}
    >
      {children}
      <CheckIcon className="pttrn:ms-auto pttrn:opacity-0 pttrn:group-has-data-[slot=command-shortcut]/command-item:hidden pttrn:group-data-[checked=true]/command-item:opacity-100" />
    </CommandPrimitive.Item>
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "pttrn:ms-auto pttrn:text-[0.625rem] pttrn:tracking-widest pttrn:text-muted-foreground pttrn:group-data-selected/command-item:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
