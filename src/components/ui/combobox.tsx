"use client"

import * as React from "react"
import { Combobox as ComboboxPrimitive } from "@base-ui/react"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { ChevronDownIcon, XIcon, CheckIcon } from "lucide-react"

const Combobox = ComboboxPrimitive.Root

function ComboboxValue({ ...props }: ComboboxPrimitive.Value.Props) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />
}

function ComboboxTrigger({
  className,
  children,
  ...props
}: ComboboxPrimitive.Trigger.Props) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn("pttrn:[&_svg:not([class*=size-])]:size-3.5", className)}
      {...props}
    >
      {children}
      <ChevronDownIcon className="pttrn:pointer-events-none pttrn:size-3.5 pttrn:text-muted-foreground" />
    </ComboboxPrimitive.Trigger>
  )
}

function ComboboxClear({ className, ...props }: ComboboxPrimitive.Clear.Props) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      render={<InputGroupButton variant="ghost" size="icon-xs" />}
      className={cn(className)}
      {...props}
    >
      <XIcon className="pttrn:pointer-events-none" />
    </ComboboxPrimitive.Clear>
  )
}

function ComboboxInput({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  ...props
}: ComboboxPrimitive.Input.Props & {
  showTrigger?: boolean
  showClear?: boolean
}) {
  return (
    <InputGroup className={cn("pttrn:w-auto", className)}>
      <ComboboxPrimitive.Input
        render={<InputGroupInput disabled={disabled} />}
        {...props}
      />
      <InputGroupAddon align="inline-end">
        {showTrigger && (
          <InputGroupButton
            size="icon-xs"
            variant="ghost"
            render={<ComboboxTrigger />}
            data-slot="input-group-button"
            className="pttrn:group-has-data-[slot=combobox-clear]/input-group:hidden pttrn:data-pressed:bg-transparent"
            disabled={disabled}
          />
        )}
        {showClear && <ComboboxClear disabled={disabled} />}
      </InputGroupAddon>
      {children}
    </InputGroup>
  )
}

function ComboboxContent({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  anchor,
  ...props
}: ComboboxPrimitive.Popup.Props &
  Pick<
    ComboboxPrimitive.Positioner.Props,
    "side" | "align" | "sideOffset" | "alignOffset" | "anchor"
  >) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className="pttrn:isolate pttrn:z-50"
      >
        <ComboboxPrimitive.Popup
          data-slot="combobox-content"
          data-chips={!!anchor}
          className={cn("pttrn: pttrn: pttrn:group/combobox-content pttrn:relative pttrn:max-h-(--available-height) pttrn:w-(--anchor-width) pttrn:max-w-(--available-width) pttrn:min-w-[calc(var(--anchor-width)+--spacing(7))] pttrn:origin-(--transform-origin) pttrn:overflow-hidden pttrn:rounded-lg pttrn:bg-popover pttrn:text-popover-foreground pttrn:shadow-md pttrn:ring-1 pttrn:ring-foreground/10 pttrn:duration-100 pttrn:data-[chips=true]:min-w-(--anchor-width) pttrn:data-[side=bottom]:slide-in-from-top-2 pttrn:data-[side=inline-end]:slide-in-from-start-2 pttrn:data-[side=inline-start]:slide-in-from-end-2 pttrn:data-[side=left]:slide-in-from-right-2 pttrn:data-[side=right]:slide-in-from-left-2 pttrn:data-[side=top]:slide-in-from-bottom-2 pttrn:*:data-[slot=input-group]:m-1 pttrn:*:data-[slot=input-group]:mb-0 pttrn:*:data-[slot=input-group]:h-7 pttrn:*:data-[slot=input-group]:border-none pttrn:*:data-[slot=input-group]:bg-input/20 pttrn:*:data-[slot=input-group]:shadow-none pttrn:dark:bg-popover pttrn:data-open:animate-in pttrn:data-open:fade-in-0 pttrn:data-open:zoom-in-95 pttrn:data-closed:animate-out pttrn:data-closed:fade-out-0 pttrn:data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!", className )}
          {...props}
        />
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  )
}

function ComboboxList({ className, ...props }: ComboboxPrimitive.List.Props) {
  return (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      className={cn(
        "pttrn:no-scrollbar pttrn:max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] pttrn:scroll-py-1 pttrn:overflow-y-auto pttrn:overscroll-contain pttrn:p-1 pttrn:data-empty:p-0",
        className
      )}
      {...props}
    />
  )
}

function ComboboxItem({
  className,
  children,
  ...props
}: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "pttrn:relative pttrn:flex pttrn:min-h-7 pttrn:w-full pttrn:cursor-default pttrn:items-center pttrn:gap-2 pttrn:rounded-md pttrn:px-2 pttrn:py-1 pttrn:text-xs/relaxed pttrn:outline-hidden pttrn:select-none pttrn:data-highlighted:bg-accent pttrn:data-highlighted:text-accent-foreground pttrn:not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground pttrn:data-disabled:pointer-events-none pttrn:data-disabled:opacity-50 pttrn:[&_svg]:pointer-events-none pttrn:[&_svg]:shrink-0 pttrn:[&_svg:not([class*=size-])]:size-3.5",
        className
      )}
      {...props}
    >
      {children}
      <ComboboxPrimitive.ItemIndicator
        render={
          <span className="pttrn:pointer-events-none pttrn:absolute pttrn:end-2 pttrn:flex pttrn:items-center pttrn:justify-center" />
        }
      >
        <CheckIcon className="pttrn:pointer-events-none" />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  )
}

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={cn(className)}
      {...props}
    />
  )
}

function ComboboxLabel({
  className,
  ...props
}: ComboboxPrimitive.GroupLabel.Props) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-label"
      className={cn("pttrn:px-2 pttrn:py-1.5 pttrn:text-xs pttrn:text-muted-foreground", className)}
      {...props}
    />
  )
}

function ComboboxCollection({ ...props }: ComboboxPrimitive.Collection.Props) {
  return (
    <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
  )
}

function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        "pttrn:hidden pttrn:w-full pttrn:justify-center pttrn:py-2 pttrn:text-center pttrn:text-xs/relaxed pttrn:text-muted-foreground pttrn:group-data-empty/combobox-content:flex",
        className
      )}
      {...props}
    />
  )
}

function ComboboxSeparator({
  className,
  ...props
}: ComboboxPrimitive.Separator.Props) {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn("pttrn:-mx-1 pttrn:my-1 pttrn:h-px pttrn:bg-border/50", className)}
      {...props}
    />
  )
}

function ComboboxChips({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof ComboboxPrimitive.Chips> &
  ComboboxPrimitive.Chips.Props) {
  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      className={cn(
        "pttrn:flex pttrn:min-h-7 pttrn:flex-wrap pttrn:items-center pttrn:gap-1 pttrn:rounded-md pttrn:border pttrn:border-input pttrn:bg-input/20 pttrn:bg-clip-padding pttrn:px-2 pttrn:py-0.5 pttrn:text-xs/relaxed pttrn:transition-colors pttrn:focus-within:border-ring pttrn:focus-within:ring-2 pttrn:focus-within:ring-ring/30 pttrn:has-aria-invalid:border-destructive pttrn:has-aria-invalid:ring-2 pttrn:has-aria-invalid:ring-destructive/20 pttrn:has-data-[slot=combobox-chip]:px-1 pttrn:dark:bg-input/30 pttrn:dark:has-aria-invalid:border-destructive/50 pttrn:dark:has-aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

function ComboboxChip({
  className,
  children,
  showRemove = true,
  ...props
}: ComboboxPrimitive.Chip.Props & {
  showRemove?: boolean
}) {
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={cn(
        "pttrn:flex pttrn:h-[calc(--spacing(4.75))] pttrn:w-fit pttrn:items-center pttrn:justify-center pttrn:gap-1 pttrn:rounded-[calc(var(--radius-sm)-2px)] pttrn:bg-muted-foreground/10 pttrn:px-1.5 pttrn:text-xs/relaxed pttrn:font-medium pttrn:whitespace-nowrap pttrn:text-foreground pttrn:has-disabled:pointer-events-none pttrn:has-disabled:cursor-not-allowed pttrn:has-disabled:opacity-50 pttrn:has-data-[slot=combobox-chip-remove]:pe-0",
        className
      )}
      {...props}
    >
      {children}
      {showRemove && (
        <ComboboxPrimitive.ChipRemove
          render={<Button variant="ghost" size="icon-xs" />}
          className="pttrn:-ms-1 pttrn:opacity-50 pttrn:hover:opacity-100"
          data-slot="combobox-chip-remove"
        >
          <XIcon className="pttrn:pointer-events-none" />
        </ComboboxPrimitive.ChipRemove>
      )}
    </ComboboxPrimitive.Chip>
  )
}

function ComboboxChipsInput({
  className,
  ...props
}: ComboboxPrimitive.Input.Props) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-chip-input"
      className={cn("pttrn:min-w-16 pttrn:flex-1 pttrn:outline-none", className)}
      {...props}
    />
  )
}

function useComboboxAnchor() {
  return React.useRef<HTMLDivElement | null>(null)
}

export {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
}
