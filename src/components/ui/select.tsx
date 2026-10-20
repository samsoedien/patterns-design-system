"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"
import { cn } from "cn"
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from "lucide-react"

const Select = SelectPrimitive.Root

function SelectGroup({ className, ...props }: SelectPrimitive.Group.Props) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("pttrn:scroll-my-1 pttrn:p-1", className)}
      {...props}
    />
  )
}

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("pttrn:flex pttrn:flex-1 pttrn:text-start", className)}
      {...props}
    />
  )
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: SelectPrimitive.Trigger.Props & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "pttrn:flex pttrn:w-fit pttrn:items-center pttrn:justify-between pttrn:gap-1.5 pttrn:rounded-md pttrn:border pttrn:border-input pttrn:bg-input/20 pttrn:px-2 pttrn:py-1.5 pttrn:text-xs/relaxed pttrn:whitespace-nowrap pttrn:transition-colors pttrn:outline-none pttrn:focus-visible:border-ring pttrn:focus-visible:ring-2 pttrn:focus-visible:ring-ring/30 pttrn:disabled:cursor-not-allowed pttrn:disabled:opacity-50 pttrn:aria-invalid:border-destructive pttrn:aria-invalid:ring-2 pttrn:aria-invalid:ring-destructive/20 pttrn:data-placeholder:text-muted-foreground pttrn:data-[size=default]:h-7 pttrn:data-[size=sm]:h-6 pttrn:*:data-[slot=select-value]:line-clamp-1 pttrn:*:data-[slot=select-value]:flex pttrn:*:data-[slot=select-value]:items-center pttrn:*:data-[slot=select-value]:gap-1.5 pttrn:dark:bg-input/30 pttrn:dark:hover:bg-input/50 pttrn:dark:aria-invalid:border-destructive/50 pttrn:dark:aria-invalid:ring-destructive/40 pttrn:[&_svg]:pointer-events-none pttrn:[&_svg]:shrink-0 pttrn:[&_svg:not([class*=size-])]:size-3.5",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        render={
          <ChevronDownIcon className="pttrn:pointer-events-none pttrn:size-3.5 pttrn:text-muted-foreground" />
        }
      />
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = true,
  ...props
}: SelectPrimitive.Popup.Props &
  Pick<
    SelectPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger"
  >) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className="pttrn:isolate pttrn:z-50"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          data-align-trigger={alignItemWithTrigger}
          className={cn("pttrn: pttrn: pttrn:relative pttrn:isolate pttrn:z-50 pttrn:max-h-(--available-height) pttrn:w-(--anchor-width) pttrn:min-w-32 pttrn:origin-(--transform-origin) pttrn:overflow-x-hidden pttrn:overflow-y-auto pttrn:rounded-lg pttrn:bg-popover pttrn:text-popover-foreground pttrn:shadow-md pttrn:ring-1 pttrn:ring-foreground/10 pttrn:duration-100 pttrn:data-[align-trigger=true]:animate-none pttrn:data-[side=bottom]:slide-in-from-top-2 pttrn:data-[side=inline-end]:slide-in-from-start-2 pttrn:data-[side=inline-start]:slide-in-from-end-2 pttrn:data-[side=left]:slide-in-from-right-2 pttrn:data-[side=right]:slide-in-from-left-2 pttrn:data-[side=top]:slide-in-from-bottom-2 pttrn:data-open:animate-in pttrn:data-open:fade-in-0 pttrn:data-open:zoom-in-95 pttrn:data-closed:animate-out pttrn:data-closed:fade-out-0 pttrn:data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!", className )}
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: SelectPrimitive.GroupLabel.Props) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn("pttrn:px-2 pttrn:py-1.5 pttrn:text-xs pttrn:text-muted-foreground", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: SelectPrimitive.Item.Props) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "pttrn:relative pttrn:flex pttrn:min-h-7 pttrn:w-full pttrn:cursor-default pttrn:items-center pttrn:gap-2 pttrn:rounded-md pttrn:px-2 pttrn:py-1 pttrn:text-xs/relaxed pttrn:outline-hidden pttrn:select-none pttrn:focus:bg-accent pttrn:focus:text-accent-foreground pttrn:not-data-[variant=destructive]:focus:**:text-accent-foreground pttrn:data-disabled:pointer-events-none pttrn:data-disabled:opacity-50 pttrn:[&_svg]:pointer-events-none pttrn:[&_svg]:shrink-0 pttrn:[&_svg:not([class*=size-])]:size-3.5 pttrn:*:[span]:last:flex pttrn:*:[span]:last:items-center pttrn:*:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className="pttrn:flex pttrn:flex-1 pttrn:shrink-0 pttrn:gap-2 pttrn:whitespace-nowrap">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        render={
          <span className="pttrn:pointer-events-none pttrn:absolute pttrn:end-2 pttrn:flex pttrn:items-center pttrn:justify-center" />
        }
      >
        <CheckIcon className="pttrn:pointer-events-none" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: SelectPrimitive.Separator.Props) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(
        "pttrn:pointer-events-none pttrn:-mx-1 pttrn:my-1 pttrn:h-px pttrn:bg-border/50",
        className
      )}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn(
        "pttrn:top-0 pttrn:z-10 pttrn:flex pttrn:w-full pttrn:cursor-default pttrn:items-center pttrn:justify-center pttrn:bg-popover pttrn:py-1 pttrn:[&_svg:not([class*=size-])]:size-3.5",
        className
      )}
      {...props}
    >
      <ChevronUpIcon
      />
    </SelectPrimitive.ScrollUpArrow>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn(
        "pttrn:bottom-0 pttrn:z-10 pttrn:flex pttrn:w-full pttrn:cursor-default pttrn:items-center pttrn:justify-center pttrn:bg-popover pttrn:py-1 pttrn:[&_svg:not([class*=size-])]:size-3.5",
        className
      )}
      {...props}
    >
      <ChevronDownIcon
      />
    </SelectPrimitive.ScrollDownArrow>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
