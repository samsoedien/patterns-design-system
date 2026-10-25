"use client"

import * as React from "react"
import { Menu as MenuPrimitive } from "@base-ui/react/menu"
import { cn } from "cn"
import { ChevronRightIcon, CheckIcon } from "lucide-react"

function DropdownMenu({ ...props }: MenuPrimitive.Root.Props) {
  return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({ ...props }: MenuPrimitive.Portal.Props) {
  return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
}

function DropdownMenuTrigger({ ...props }: MenuPrimitive.Trigger.Props) {
  return <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />
}

function DropdownMenuContent({
  align = "start",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  className,
  ...props
}: MenuPrimitive.Popup.Props &
  Pick<
    MenuPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        className="cuoio:isolate cuoio:z-50 cuoio:outline-none"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-content"
          className={cn("cuoio: cuoio: cuoio:z-50 cuoio:max-h-(--available-height) cuoio:w-(--anchor-width) cuoio:min-w-32 cuoio:origin-(--transform-origin) cuoio:overflow-x-hidden cuoio:overflow-y-auto cuoio:rounded-lg cuoio:bg-popover cuoio:p-1 cuoio:text-popover-foreground cuoio:shadow-md cuoio:ring-1 cuoio:ring-foreground/10 cuoio:duration-100 cuoio:outline-none cuoio:data-[side=bottom]:slide-in-from-top-2 cuoio:data-[side=inline-end]:slide-in-from-start-2 cuoio:data-[side=inline-start]:slide-in-from-end-2 cuoio:data-[side=left]:slide-in-from-right-2 cuoio:data-[side=right]:slide-in-from-left-2 cuoio:data-[side=top]:slide-in-from-bottom-2 cuoio:data-open:animate-in cuoio:data-open:fade-in-0 cuoio:data-open:zoom-in-95 cuoio:data-closed:animate-out cuoio:data-closed:overflow-hidden cuoio:data-closed:fade-out-0 cuoio:data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!", className )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({ ...props }: MenuPrimitive.Group.Props) {
  return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: MenuPrimitive.GroupLabel.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.GroupLabel
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "cuoio:px-1.5 cuoio:py-1 cuoio:text-xs cuoio:font-medium cuoio:text-muted-foreground cuoio:data-inset:ps-7",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: MenuPrimitive.Item.Props & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <MenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "cuoio:group/dropdown-menu-item cuoio:relative cuoio:flex cuoio:cursor-default cuoio:items-center cuoio:gap-1.5 cuoio:rounded-md cuoio:px-1.5 cuoio:py-1 cuoio:text-sm cuoio:outline-hidden cuoio:select-none cuoio:focus:bg-accent cuoio:focus:text-accent-foreground cuoio:not-data-[variant=destructive]:focus:**:text-accent-foreground cuoio:data-inset:ps-7 cuoio:data-[variant=destructive]:text-destructive cuoio:data-[variant=destructive]:focus:bg-destructive/10 cuoio:data-[variant=destructive]:focus:text-destructive cuoio:dark:data-[variant=destructive]:focus:bg-destructive/20 cuoio:data-disabled:pointer-events-none cuoio:data-disabled:opacity-50 cuoio:[&_svg]:pointer-events-none cuoio:[&_svg]:shrink-0 cuoio:[&_svg:not([class*=size-])]:size-4 cuoio:data-[variant=destructive]:*:[svg]:text-destructive",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({ ...props }: MenuPrimitive.SubmenuRoot.Props) {
  return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: MenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "cuoio:flex cuoio:cursor-default cuoio:items-center cuoio:gap-1.5 cuoio:rounded-md cuoio:px-1.5 cuoio:py-1 cuoio:text-sm cuoio:outline-hidden cuoio:select-none cuoio:focus:bg-accent cuoio:focus:text-accent-foreground cuoio:not-data-[variant=destructive]:focus:**:text-accent-foreground cuoio:data-inset:ps-7 cuoio:data-popup-open:bg-accent cuoio:data-popup-open:text-accent-foreground cuoio:data-open:bg-accent cuoio:data-open:text-accent-foreground cuoio:[&_svg]:pointer-events-none cuoio:[&_svg]:shrink-0 cuoio:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="cuoio:ms-auto" />
    </MenuPrimitive.SubmenuTrigger>
  )
}

function DropdownMenuSubContent({
  align = "start",
  alignOffset = -3,
  side = "inline-end",
  sideOffset = 0,
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent
      data-slot="dropdown-menu-sub-content"
      className={cn("cuoio: cuoio: cuoio:w-auto cuoio:min-w-[96px] cuoio:rounded-lg cuoio:bg-popover cuoio:p-1 cuoio:text-popover-foreground cuoio:shadow-lg cuoio:ring-1 cuoio:ring-foreground/10 cuoio:duration-100 cuoio:data-[side=bottom]:slide-in-from-top-2 cuoio:data-[side=left]:slide-in-from-right-2 cuoio:data-[side=right]:slide-in-from-left-2 cuoio:data-[side=top]:slide-in-from-bottom-2 cuoio:data-open:animate-in cuoio:data-open:fade-in-0 cuoio:data-open:zoom-in-95 cuoio:data-closed:animate-out cuoio:data-closed:fade-out-0 cuoio:data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!", className )}
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
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
      data-slot="dropdown-menu-checkbox-item"
      data-inset={inset}
      className={cn(
        "cuoio:relative cuoio:flex cuoio:cursor-default cuoio:items-center cuoio:gap-1.5 cuoio:rounded-md cuoio:py-1 cuoio:pe-8 cuoio:ps-1.5 cuoio:text-sm cuoio:outline-hidden cuoio:select-none cuoio:focus:bg-accent cuoio:focus:text-accent-foreground cuoio:focus:**:text-accent-foreground cuoio:data-inset:ps-7 cuoio:data-disabled:pointer-events-none cuoio:data-disabled:opacity-50 cuoio:[&_svg]:pointer-events-none cuoio:[&_svg]:shrink-0 cuoio:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span
        className="cuoio:pointer-events-none cuoio:absolute cuoio:end-2 cuoio:flex cuoio:items-center cuoio:justify-center"
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon
          />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({ ...props }: MenuPrimitive.RadioGroup.Props) {
  return (
    <MenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  inset,
  ...props
}: MenuPrimitive.RadioItem.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      data-inset={inset}
      className={cn(
        "cuoio:relative cuoio:flex cuoio:cursor-default cuoio:items-center cuoio:gap-1.5 cuoio:rounded-md cuoio:py-1 cuoio:pe-8 cuoio:ps-1.5 cuoio:text-sm cuoio:outline-hidden cuoio:select-none cuoio:focus:bg-accent cuoio:focus:text-accent-foreground cuoio:focus:**:text-accent-foreground cuoio:data-inset:ps-7 cuoio:data-disabled:pointer-events-none cuoio:data-disabled:opacity-50 cuoio:[&_svg]:pointer-events-none cuoio:[&_svg]:shrink-0 cuoio:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <span
        className="cuoio:pointer-events-none cuoio:absolute cuoio:end-2 cuoio:flex cuoio:items-center cuoio:justify-center"
        data-slot="dropdown-menu-radio-item-indicator"
      >
        <MenuPrimitive.RadioItemIndicator>
          <CheckIcon
          />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: MenuPrimitive.Separator.Props) {
  return (
    <MenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("cuoio:-mx-1 cuoio:my-1 cuoio:h-px cuoio:bg-border", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "cuoio:ms-auto cuoio:text-xs cuoio:tracking-widest cuoio:text-muted-foreground cuoio:group-focus/dropdown-menu-item:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
