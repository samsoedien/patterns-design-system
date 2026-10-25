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
        "cuoio:flex cuoio:size-full cuoio:flex-col cuoio:overflow-hidden cuoio:rounded-xl! cuoio:bg-popover cuoio:p-1 cuoio:text-popover-foreground",
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
      <DialogHeader className="cuoio:sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn(
          "cuoio:top-1/3 cuoio:translate-y-0 cuoio:overflow-hidden cuoio:rounded-xl! cuoio:p-0",
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
    <div data-slot="command-input-wrapper" className="cuoio:p-1 cuoio:pb-0">
      <InputGroup className="cuoio:h-8! cuoio:rounded-lg! cuoio:border-input/30 cuoio:bg-input/30 cuoio:shadow-none! cuoio:*:data-[slot=input-group-addon]:ps-2!">
        <CommandPrimitive.Input
          data-slot="command-input"
          className={cn(
            "cuoio:w-full cuoio:text-sm cuoio:outline-hidden cuoio:disabled:cursor-not-allowed cuoio:disabled:opacity-50",
            className
          )}
          {...props}
        />
        <InputGroupAddon>
          <SearchIcon className="cuoio:size-4 cuoio:shrink-0 cuoio:opacity-50" />
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
        "cuoio:no-scrollbar cuoio:max-h-72 cuoio:scroll-py-1 cuoio:overflow-x-hidden cuoio:overflow-y-auto cuoio:outline-none",
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
      className={cn("cuoio:py-6 cuoio:text-center cuoio:text-sm", className)}
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
        "cuoio:overflow-hidden cuoio:p-1 cuoio:text-foreground cuoio:**:[[cmdk-group-heading]]:px-2 cuoio:**:[[cmdk-group-heading]]:py-1.5 cuoio:**:[[cmdk-group-heading]]:text-xs cuoio:**:[[cmdk-group-heading]]:font-medium cuoio:**:[[cmdk-group-heading]]:text-muted-foreground",
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
      className={cn("cuoio:-mx-1 cuoio:h-px cuoio:bg-border", className)}
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
        "cuoio:group/command-item cuoio:relative cuoio:flex cuoio:cursor-default cuoio:items-center cuoio:gap-2 cuoio:rounded-sm cuoio:px-2 cuoio:py-1.5 cuoio:text-sm cuoio:outline-hidden cuoio:select-none cuoio:in-data-[slot=dialog-content]:rounded-lg! cuoio:data-[disabled=true]:pointer-events-none cuoio:data-[disabled=true]:opacity-50 cuoio:data-selected:bg-muted cuoio:data-selected:text-foreground cuoio:[&_svg]:pointer-events-none cuoio:[&_svg]:shrink-0 cuoio:[&_svg:not([class*=size-])]:size-4 cuoio:data-selected:*:[svg]:text-foreground",
        className
      )}
      {...props}
    >
      {children}
      <CheckIcon className="cuoio:ms-auto cuoio:opacity-0 cuoio:group-has-data-[slot=command-shortcut]/command-item:hidden cuoio:group-data-[checked=true]/command-item:opacity-100" />
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
        "cuoio:ms-auto cuoio:text-xs cuoio:tracking-widest cuoio:text-muted-foreground cuoio:group-data-selected/command-item:text-foreground",
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
