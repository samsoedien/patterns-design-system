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
      className={cn("cuoio:scroll-my-1 cuoio:p-1", className)}
      {...props}
    />
  )
}

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("cuoio:flex cuoio:flex-1 cuoio:text-start", className)}
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
        "cuoio:flex cuoio:w-fit cuoio:items-center cuoio:justify-between cuoio:gap-1.5 cuoio:rounded-md cuoio:border cuoio:border-input cuoio:bg-input/20 cuoio:px-2 cuoio:py-1.5 cuoio:text-xs/relaxed cuoio:whitespace-nowrap cuoio:transition-colors cuoio:outline-none cuoio:focus-visible:border-ring cuoio:focus-visible:ring-2 cuoio:focus-visible:ring-ring/30 cuoio:disabled:cursor-not-allowed cuoio:disabled:opacity-50 cuoio:aria-invalid:border-destructive cuoio:aria-invalid:ring-2 cuoio:aria-invalid:ring-destructive/20 cuoio:data-placeholder:text-muted-foreground cuoio:data-[size=default]:h-7 cuoio:data-[size=sm]:h-6 cuoio:*:data-[slot=select-value]:line-clamp-1 cuoio:*:data-[slot=select-value]:flex cuoio:*:data-[slot=select-value]:items-center cuoio:*:data-[slot=select-value]:gap-1.5 cuoio:dark:bg-input/30 cuoio:dark:hover:bg-input/50 cuoio:dark:aria-invalid:border-destructive/50 cuoio:dark:aria-invalid:ring-destructive/40 cuoio:[&_svg]:pointer-events-none cuoio:[&_svg]:shrink-0 cuoio:[&_svg:not([class*=size-])]:size-3.5",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        render={
          <ChevronDownIcon className="cuoio:pointer-events-none cuoio:size-3.5 cuoio:text-muted-foreground" />
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
        className="cuoio:isolate cuoio:z-50"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          data-align-trigger={alignItemWithTrigger}
          className={cn("cuoio: cuoio: cuoio:relative cuoio:isolate cuoio:z-50 cuoio:max-h-(--available-height) cuoio:w-(--anchor-width) cuoio:min-w-32 cuoio:origin-(--transform-origin) cuoio:overflow-x-hidden cuoio:overflow-y-auto cuoio:rounded-lg cuoio:bg-popover cuoio:text-popover-foreground cuoio:shadow-md cuoio:ring-1 cuoio:ring-foreground/10 cuoio:duration-100 cuoio:data-[align-trigger=true]:animate-none cuoio:data-[side=bottom]:slide-in-from-top-2 cuoio:data-[side=inline-end]:slide-in-from-start-2 cuoio:data-[side=inline-start]:slide-in-from-end-2 cuoio:data-[side=left]:slide-in-from-right-2 cuoio:data-[side=right]:slide-in-from-left-2 cuoio:data-[side=top]:slide-in-from-bottom-2 cuoio:data-open:animate-in cuoio:data-open:fade-in-0 cuoio:data-open:zoom-in-95 cuoio:data-closed:animate-out cuoio:data-closed:fade-out-0 cuoio:data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!", className )}
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
      className={cn("cuoio:px-2 cuoio:py-1.5 cuoio:text-xs cuoio:text-muted-foreground", className)}
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
        "cuoio:relative cuoio:flex cuoio:min-h-7 cuoio:w-full cuoio:cursor-default cuoio:items-center cuoio:gap-2 cuoio:rounded-md cuoio:px-2 cuoio:py-1 cuoio:text-xs/relaxed cuoio:outline-hidden cuoio:select-none cuoio:focus:bg-accent cuoio:focus:text-accent-foreground cuoio:not-data-[variant=destructive]:focus:**:text-accent-foreground cuoio:data-disabled:pointer-events-none cuoio:data-disabled:opacity-50 cuoio:[&_svg]:pointer-events-none cuoio:[&_svg]:shrink-0 cuoio:[&_svg:not([class*=size-])]:size-3.5 cuoio:*:[span]:last:flex cuoio:*:[span]:last:items-center cuoio:*:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className="cuoio:flex cuoio:flex-1 cuoio:shrink-0 cuoio:gap-2 cuoio:whitespace-nowrap">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        render={
          <span className="cuoio:pointer-events-none cuoio:absolute cuoio:end-2 cuoio:flex cuoio:items-center cuoio:justify-center" />
        }
      >
        <CheckIcon className="cuoio:pointer-events-none" />
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
        "cuoio:pointer-events-none cuoio:-mx-1 cuoio:my-1 cuoio:h-px cuoio:bg-border/50",
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
        "cuoio:top-0 cuoio:z-10 cuoio:flex cuoio:w-full cuoio:cursor-default cuoio:items-center cuoio:justify-center cuoio:bg-popover cuoio:py-1 cuoio:[&_svg:not([class*=size-])]:size-3.5",
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
        "cuoio:bottom-0 cuoio:z-10 cuoio:flex cuoio:w-full cuoio:cursor-default cuoio:items-center cuoio:justify-center cuoio:bg-popover cuoio:py-1 cuoio:[&_svg:not([class*=size-])]:size-3.5",
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
