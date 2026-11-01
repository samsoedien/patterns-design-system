"use client"

import * as React from "react"
import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu"
import { cn } from "cn"
import { ChevronRightIcon, CheckIcon } from "lucide-react"

function ContextMenu({ ...props }: ContextMenuPrimitive.Root.Props) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
}

function ContextMenuPortal({ ...props }: ContextMenuPrimitive.Portal.Props) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  )
}

function ContextMenuTrigger({
  className,
  ...props
}: ContextMenuPrimitive.Trigger.Props) {
  return (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      className={cn("cuoio:select-none", className)}
      {...props}
    />
  )
}

function ContextMenuContent({
  className,
  align = "start",
  alignOffset = 4,
  side = "inline-end",
  sideOffset = 0,
  ...props
}: ContextMenuPrimitive.Popup.Props &
  Pick<
    ContextMenuPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Positioner
        className="cuoio:isolate cuoio:z-50 cuoio:outline-none"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <ContextMenuPrimitive.Popup
          data-slot="context-menu-content"
          className={cn("cuoio: cuoio: cuoio:z-50 cuoio:max-h-(--available-height) cuoio:min-w-32 cuoio:origin-(--transform-origin) cuoio:overflow-x-hidden cuoio:overflow-y-auto cuoio:rounded-lg cuoio:bg-popover cuoio:p-1 cuoio:text-popover-foreground cuoio:shadow-md cuoio:ring-1 cuoio:ring-foreground/10 cuoio:duration-100 cuoio:outline-none cuoio:data-[side=bottom]:slide-in-from-top-2 cuoio:data-[side=inline-end]:slide-in-from-start-2 cuoio:data-[side=inline-start]:slide-in-from-end-2 cuoio:data-[side=left]:slide-in-from-right-2 cuoio:data-[side=right]:slide-in-from-left-2 cuoio:data-[side=top]:slide-in-from-bottom-2 cuoio:data-open:animate-in cuoio:data-open:fade-in-0 cuoio:data-open:zoom-in-95 cuoio:data-closed:animate-out cuoio:data-closed:fade-out-0 cuoio:data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!", className )}
          {...props}
        />
      </ContextMenuPrimitive.Positioner>
    </ContextMenuPrimitive.Portal>
  )
}

function ContextMenuGroup({ ...props }: ContextMenuPrimitive.Group.Props) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  )
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: ContextMenuPrimitive.GroupLabel.Props & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.GroupLabel
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "cuoio:px-2 cuoio:py-1.5 cuoio:text-xs cuoio:text-muted-foreground cuoio:data-inset:ps-7.5",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: ContextMenuPrimitive.Item.Props & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "cuoio:group/context-menu-item cuoio:relative cuoio:flex cuoio:min-h-7 cuoio:cursor-default cuoio:items-center cuoio:gap-2 cuoio:rounded-md cuoio:px-2 cuoio:py-1 cuoio:text-xs/relaxed cuoio:outline-hidden cuoio:select-none cuoio:focus:bg-accent cuoio:focus:text-accent-foreground cuoio:not-data-[variant=destructive]:focus:**:text-accent-foreground cuoio:data-inset:ps-7.5 cuoio:data-[variant=destructive]:text-destructive cuoio:data-[variant=destructive]:focus:bg-destructive/10 cuoio:data-[variant=destructive]:focus:text-destructive cuoio:dark:data-[variant=destructive]:focus:bg-destructive/20 cuoio:data-disabled:pointer-events-none cuoio:data-disabled:opacity-50 cuoio:[&_svg]:pointer-events-none cuoio:[&_svg]:shrink-0 cuoio:[&_svg:not([class*=size-])]:size-3.5 cuoio:data-[variant=destructive]:*:[svg]:text-destructive",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuSub({ ...props }: ContextMenuPrimitive.SubmenuRoot.Props) {
  return (
    <ContextMenuPrimitive.SubmenuRoot data-slot="context-menu-sub" {...props} />
  )
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: ContextMenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.SubmenuTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "cuoio:flex cuoio:min-h-7 cuoio:cursor-default cuoio:items-center cuoio:gap-2 cuoio:rounded-md cuoio:px-2 cuoio:py-1 cuoio:text-xs cuoio:outline-hidden cuoio:select-none cuoio:focus:bg-accent cuoio:focus:text-accent-foreground cuoio:not-data-[variant=destructive]:focus:**:text-accent-foreground cuoio:data-inset:ps-7.5 cuoio:data-open:bg-accent cuoio:data-open:text-accent-foreground cuoio:[&_svg]:pointer-events-none cuoio:[&_svg]:shrink-0 cuoio:[&_svg:not([class*=size-])]:size-3.5",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="cuoio:ms-auto" />
    </ContextMenuPrimitive.SubmenuTrigger>
  )
}

function ContextMenuSubContent({
  ...props
}: React.ComponentProps<typeof ContextMenuContent>) {
  return (
    <ContextMenuContent
      data-slot="context-menu-sub-content"
      className="cuoio: cuoio: cuoio:shadow-lg animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!"
      side="inline-end"
      {...props}
    />
  )
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: ContextMenuPrimitive.CheckboxItem.Props & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      data-inset={inset}
      className={cn(
        "cuoio:relative cuoio:flex cuoio:min-h-7 cuoio:cursor-default cuoio:items-center cuoio:gap-2 cuoio:rounded-md cuoio:py-1.5 cuoio:pe-8 cuoio:ps-2 cuoio:text-xs cuoio:outline-hidden cuoio:select-none cuoio:focus:bg-accent cuoio:focus:text-accent-foreground cuoio:focus:**:text-accent-foreground cuoio:data-inset:ps-7.5 cuoio:data-disabled:pointer-events-none cuoio:data-disabled:opacity-50 cuoio:[&_svg]:pointer-events-none cuoio:[&_svg]:shrink-0 cuoio:[&_svg:not([class*=size-])]:size-3.5",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="cuoio:pointer-events-none cuoio:absolute cuoio:end-2 cuoio:flex cuoio:items-center cuoio:justify-center">
        <ContextMenuPrimitive.CheckboxItemIndicator>
          <CheckIcon
          />
        </ContextMenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

function ContextMenuRadioGroup({
  ...props
}: ContextMenuPrimitive.RadioGroup.Props) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  )
}

function ContextMenuRadioItem({
  className,
  children,
  inset,
  ...props
}: ContextMenuPrimitive.RadioItem.Props & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      data-inset={inset}
      className={cn(
        "cuoio:relative cuoio:flex cuoio:min-h-7 cuoio:cursor-default cuoio:items-center cuoio:gap-2 cuoio:rounded-md cuoio:py-1.5 cuoio:pe-8 cuoio:ps-2 cuoio:text-xs cuoio:outline-hidden cuoio:select-none cuoio:focus:bg-accent cuoio:focus:text-accent-foreground cuoio:focus:**:text-accent-foreground cuoio:data-inset:ps-7.5 cuoio:data-disabled:pointer-events-none cuoio:data-disabled:opacity-50 cuoio:[&_svg]:pointer-events-none cuoio:[&_svg]:shrink-0 cuoio:[&_svg:not([class*=size-])]:size-3.5",
        className
      )}
      {...props}
    >
      <span className="cuoio:pointer-events-none cuoio:absolute cuoio:end-2 cuoio:flex cuoio:items-center cuoio:justify-center">
        <ContextMenuPrimitive.RadioItemIndicator>
          <CheckIcon
          />
        </ContextMenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

function ContextMenuSeparator({
  className,
  ...props
}: ContextMenuPrimitive.Separator.Props) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("cuoio:-mx-1 cuoio:my-1 cuoio:h-px cuoio:bg-border/50", className)}
      {...props}
    />
  )
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "cuoio:ms-auto cuoio:text-[0.625rem] cuoio:tracking-widest cuoio:text-muted-foreground cuoio:group-focus/context-menu-item:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
