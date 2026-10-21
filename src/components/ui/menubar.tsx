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
      className={cn("cuoio:flex cuoio:h-9 cuoio:items-center cuoio:rounded-lg cuoio:border cuoio:p-1", className)}
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
        "cuoio:flex cuoio:items-center cuoio:rounded-[calc(var(--radius-md)-2px)] cuoio:px-2 cuoio:py-[calc(--spacing(0.85))] cuoio:text-xs/relaxed cuoio:font-medium cuoio:outline-hidden cuoio:select-none cuoio:hover:bg-muted cuoio:aria-expanded:bg-muted",
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
      className={cn("cuoio: cuoio: cuoio:min-w-32 cuoio:rounded-lg cuoio:bg-popover cuoio:p-1 cuoio:text-popover-foreground cuoio:shadow-md cuoio:ring-1 cuoio:ring-foreground/10 cuoio:duration-100 cuoio:data-[side=bottom]:slide-in-from-top-2 cuoio:data-[side=inline-end]:slide-in-from-start-2 cuoio:data-[side=inline-start]:slide-in-from-end-2 cuoio:data-[side=left]:slide-in-from-right-2 cuoio:data-[side=right]:slide-in-from-left-2 cuoio:data-[side=top]:slide-in-from-bottom-2 cuoio:data-open:animate-in cuoio:data-open:fade-in-0 cuoio:data-open:zoom-in-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!", className )}
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
        "cuoio:group/menubar-item cuoio:min-h-7 cuoio:gap-2 cuoio:rounded-md cuoio:px-2 cuoio:py-1 cuoio:text-xs/relaxed cuoio:focus:bg-accent cuoio:focus:text-accent-foreground cuoio:not-data-[variant=destructive]:focus:**:text-accent-foreground cuoio:data-inset:ps-7.5 cuoio:data-[variant=destructive]:text-destructive cuoio:data-[variant=destructive]:focus:bg-destructive/10 cuoio:data-[variant=destructive]:focus:text-destructive cuoio:dark:data-[variant=destructive]:focus:bg-destructive/20 cuoio:data-disabled:opacity-50 cuoio:[&_svg:not([class*=size-])]:size-3.5 cuoio:data-[variant=destructive]:*:[svg]:text-destructive!",
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
        "cuoio:relative cuoio:flex cuoio:min-h-7 cuoio:cursor-default cuoio:items-center cuoio:gap-2 cuoio:rounded-md cuoio:py-1.5 cuoio:pe-2 cuoio:ps-7.5 cuoio:text-xs cuoio:outline-hidden cuoio:select-none cuoio:focus:bg-accent cuoio:focus:text-accent-foreground cuoio:focus:**:text-accent-foreground cuoio:data-inset:ps-7.5 cuoio:data-disabled:pointer-events-none cuoio:data-disabled:opacity-50 cuoio:[&_svg]:pointer-events-none cuoio:[&_svg]:shrink-0",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="cuoio:pointer-events-none cuoio:absolute cuoio:start-2 cuoio:flex cuoio:size-4 cuoio:items-center cuoio:justify-center cuoio:[&_svg:not([class*=size-])]:size-4">
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
        "cuoio:relative cuoio:flex cuoio:min-h-7 cuoio:cursor-default cuoio:items-center cuoio:gap-2 cuoio:rounded-md cuoio:py-1.5 cuoio:pe-2 cuoio:ps-7.5 cuoio:text-xs cuoio:outline-hidden cuoio:select-none cuoio:focus:bg-accent cuoio:focus:text-accent-foreground cuoio:focus:**:text-accent-foreground cuoio:data-inset:ps-7.5 cuoio:data-disabled:pointer-events-none cuoio:data-disabled:opacity-50 cuoio:[&_svg]:pointer-events-none cuoio:[&_svg]:shrink-0 cuoio:[&_svg:not([class*=size-])]:size-3.5",
        className
      )}
      {...props}
    >
      <span className="cuoio:pointer-events-none cuoio:absolute cuoio:start-2 cuoio:flex cuoio:size-4 cuoio:items-center cuoio:justify-center cuoio:[&_svg:not([class*=size-])]:size-4">
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
        "cuoio:px-2 cuoio:py-1.5 cuoio:text-xs cuoio:text-muted-foreground cuoio:data-inset:ps-7.5",
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
      className={cn("cuoio:-mx-1 cuoio:my-1 cuoio:h-px cuoio:bg-border/50", className)}
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
        "cuoio:ms-auto cuoio:text-[0.625rem] cuoio:tracking-widest cuoio:text-muted-foreground cuoio:group-focus/menubar-item:text-accent-foreground",
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
        "cuoio:min-h-7 cuoio:gap-2 cuoio:rounded-md cuoio:px-2 cuoio:py-1 cuoio:text-xs cuoio:focus:bg-accent cuoio:focus:text-accent-foreground cuoio:not-data-[variant=destructive]:focus:**:text-accent-foreground cuoio:data-inset:ps-7.5 cuoio:data-open:bg-accent cuoio:data-open:text-accent-foreground cuoio:[&_svg:not([class*=size-])]:size-3.5",
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
      className={cn("cuoio: cuoio: cuoio:min-w-32 cuoio:rounded-lg cuoio:bg-popover cuoio:p-1 cuoio:text-popover-foreground cuoio:shadow-md cuoio:ring-1 cuoio:ring-foreground/10 cuoio:duration-100 cuoio:data-[side=bottom]:slide-in-from-top-2 cuoio:data-[side=left]:slide-in-from-right-2 cuoio:data-[side=right]:slide-in-from-left-2 cuoio:data-[side=top]:slide-in-from-bottom-2 cuoio:data-open:animate-in cuoio:data-open:fade-in-0 cuoio:data-open:zoom-in-95 cuoio:data-closed:animate-out cuoio:data-closed:fade-out-0 cuoio:data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!", className )}
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
