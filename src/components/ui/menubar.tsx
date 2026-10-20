"use client"

import * as React from "react"
import { Menu as MenuPrimitive } from "@base-ui/react/menu"
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar"
import { cn } from "cn"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CheckIcon } from "lucide-react"

function Menubar({ className, ...props }: MenubarPrimitive.Props) {
  return (
    <MenubarPrimitive
      data-slot="menubar"
      className={cn("pttrn:flex pttrn:h-9 pttrn:items-center pttrn:rounded-lg pttrn:border pttrn:p-1", className)}
      {...props}
    />
  )
}

function MenubarMenu({ ...props }: React.ComponentProps<typeof DropdownMenu>) {
  return <DropdownMenu data-slot="menubar-menu" {...props} />
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuGroup>) {
  return <DropdownMenuGroup data-slot="menubar-group" {...props} />
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPortal>) {
  return <DropdownMenuPortal data-slot="menubar-portal" {...props} />
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuTrigger>) {
  return (
    <DropdownMenuTrigger
      data-slot="menubar-trigger"
      className={cn(
        "pttrn:flex pttrn:items-center pttrn:rounded-[calc(var(--radius-md)-2px)] pttrn:px-2 pttrn:py-[calc(--spacing(0.85))] pttrn:text-xs/relaxed pttrn:font-medium pttrn:outline-hidden pttrn:select-none pttrn:hover:bg-muted pttrn:aria-expanded:bg-muted",
        className
      )}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent
      data-slot="menubar-content"
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn("pttrn: pttrn: pttrn:min-w-32 pttrn:rounded-lg pttrn:bg-popover pttrn:p-1 pttrn:text-popover-foreground pttrn:shadow-md pttrn:ring-1 pttrn:ring-foreground/10 pttrn:duration-100 pttrn:data-[side=bottom]:slide-in-from-top-2 pttrn:data-[side=inline-end]:slide-in-from-start-2 pttrn:data-[side=inline-start]:slide-in-from-end-2 pttrn:data-[side=left]:slide-in-from-right-2 pttrn:data-[side=right]:slide-in-from-left-2 pttrn:data-[side=top]:slide-in-from-bottom-2 pttrn:data-open:animate-in pttrn:data-open:fade-in-0 pttrn:data-open:zoom-in-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!", className )}
      {...props}
    />
  )
}

function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuItem>) {
  return (
    <DropdownMenuItem
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "pttrn:group/menubar-item pttrn:min-h-7 pttrn:gap-2 pttrn:rounded-md pttrn:px-2 pttrn:py-1 pttrn:text-xs/relaxed pttrn:focus:bg-accent pttrn:focus:text-accent-foreground pttrn:not-data-[variant=destructive]:focus:**:text-accent-foreground pttrn:data-inset:ps-7.5 pttrn:data-[variant=destructive]:text-destructive pttrn:data-[variant=destructive]:focus:bg-destructive/10 pttrn:data-[variant=destructive]:focus:text-destructive pttrn:dark:data-[variant=destructive]:focus:bg-destructive/20 pttrn:data-disabled:opacity-50 pttrn:[&_svg:not([class*=size-])]:size-3.5 pttrn:data-[variant=destructive]:*:[svg]:text-destructive!",
        className
      )}
      {...props}
    />
  )
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: MenuPrimitive.CheckboxItem.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      data-inset={inset}
      className={cn(
        "pttrn:relative pttrn:flex pttrn:min-h-7 pttrn:cursor-default pttrn:items-center pttrn:gap-2 pttrn:rounded-md pttrn:py-1.5 pttrn:pe-2 pttrn:ps-7.5 pttrn:text-xs pttrn:outline-hidden pttrn:select-none pttrn:focus:bg-accent pttrn:focus:text-accent-foreground pttrn:focus:**:text-accent-foreground pttrn:data-inset:ps-7.5 pttrn:data-disabled:pointer-events-none pttrn:data-disabled:opacity-50 pttrn:[&_svg]:pointer-events-none pttrn:[&_svg]:shrink-0",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pttrn:pointer-events-none pttrn:absolute pttrn:start-2 pttrn:flex pttrn:size-4 pttrn:items-center pttrn:justify-center pttrn:[&_svg:not([class*=size-])]:size-4">
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon
          />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  )
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuRadioGroup>) {
  return <DropdownMenuRadioGroup data-slot="menubar-radio-group" {...props} />
}

function MenubarRadioItem({
  className,
  children,
  inset,
  ...props
}: MenuPrimitive.RadioItem.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="menubar-radio-item"
      data-inset={inset}
      className={cn(
        "pttrn:relative pttrn:flex pttrn:min-h-7 pttrn:cursor-default pttrn:items-center pttrn:gap-2 pttrn:rounded-md pttrn:py-1.5 pttrn:pe-2 pttrn:ps-7.5 pttrn:text-xs pttrn:outline-hidden pttrn:select-none pttrn:focus:bg-accent pttrn:focus:text-accent-foreground pttrn:focus:**:text-accent-foreground pttrn:data-inset:ps-7.5 pttrn:data-disabled:pointer-events-none pttrn:data-disabled:opacity-50 pttrn:[&_svg]:pointer-events-none pttrn:[&_svg]:shrink-0 pttrn:[&_svg:not([class*=size-])]:size-3.5",
        className
      )}
      {...props}
    >
      <span className="pttrn:pointer-events-none pttrn:absolute pttrn:start-2 pttrn:flex pttrn:size-4 pttrn:items-center pttrn:justify-center pttrn:[&_svg:not([class*=size-])]:size-4">
        <MenuPrimitive.RadioItemIndicator>
          <CheckIcon
          />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  )
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuLabel> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuLabel
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        "pttrn:px-2 pttrn:py-1.5 pttrn:text-xs pttrn:text-muted-foreground pttrn:data-inset:ps-7.5",
        className
      )}
      {...props}
    />
  )
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuSeparator>) {
  return (
    <DropdownMenuSeparator
      data-slot="menubar-separator"
      className={cn("pttrn:-mx-1 pttrn:my-1 pttrn:h-px pttrn:bg-border/50", className)}
      {...props}
    />
  )
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuShortcut>) {
  return (
    <DropdownMenuShortcut
      data-slot="menubar-shortcut"
      className={cn(
        "pttrn:ms-auto pttrn:text-[0.625rem] pttrn:tracking-widest pttrn:text-muted-foreground pttrn:group-focus/menubar-item:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuSub>) {
  return <DropdownMenuSub data-slot="menubar-sub" {...props} />
}

function MenubarSubTrigger({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuSubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuSubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        "pttrn:min-h-7 pttrn:gap-2 pttrn:rounded-md pttrn:px-2 pttrn:py-1 pttrn:text-xs pttrn:focus:bg-accent pttrn:focus:text-accent-foreground pttrn:not-data-[variant=destructive]:focus:**:text-accent-foreground pttrn:data-inset:ps-7.5 pttrn:data-open:bg-accent pttrn:data-open:text-accent-foreground pttrn:[&_svg:not([class*=size-])]:size-3.5",
        className
      )}
      {...props}
    />
  )
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuSubContent>) {
  return (
    <DropdownMenuSubContent
      data-slot="menubar-sub-content"
      className={cn("pttrn: pttrn: pttrn:min-w-32 pttrn:rounded-lg pttrn:bg-popover pttrn:p-1 pttrn:text-popover-foreground pttrn:shadow-md pttrn:ring-1 pttrn:ring-foreground/10 pttrn:duration-100 pttrn:data-[side=bottom]:slide-in-from-top-2 pttrn:data-[side=left]:slide-in-from-right-2 pttrn:data-[side=right]:slide-in-from-left-2 pttrn:data-[side=top]:slide-in-from-bottom-2 pttrn:data-open:animate-in pttrn:data-open:fade-in-0 pttrn:data-open:zoom-in-95 pttrn:data-closed:animate-out pttrn:data-closed:fade-out-0 pttrn:data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!", className )}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}
