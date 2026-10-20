"use client"

import * as React from "react"
import { Popover as PopoverPrimitive } from "@base-ui/react/popover"
import { cn } from "cn"

function Popover({ ...props }: PopoverPrimitive.Root.Props) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({ ...props }: PopoverPrimitive.Trigger.Props) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent({
  className,
  align = "center",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  ...props
}: PopoverPrimitive.Popup.Props &
  Pick<
    PopoverPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="pttrn:isolate pttrn:z-50"
      >
        <PopoverPrimitive.Popup
          data-slot="popover-content"
          className={cn(
            "pttrn:z-50 pttrn:flex pttrn:w-72 pttrn:origin-(--transform-origin) pttrn:flex-col pttrn:gap-4 pttrn:rounded-lg pttrn:bg-popover pttrn:p-2.5 pttrn:text-xs pttrn:text-popover-foreground pttrn:shadow-md pttrn:ring-1 pttrn:ring-foreground/10 pttrn:outline-hidden pttrn:duration-100 pttrn:data-[side=bottom]:slide-in-from-top-2 pttrn:data-[side=inline-end]:slide-in-from-start-2 pttrn:data-[side=inline-start]:slide-in-from-end-2 pttrn:data-[side=left]:slide-in-from-right-2 pttrn:data-[side=right]:slide-in-from-left-2 pttrn:data-[side=top]:slide-in-from-bottom-2 pttrn:data-open:animate-in pttrn:data-open:fade-in-0 pttrn:data-open:zoom-in-95 pttrn:data-closed:animate-out pttrn:data-closed:fade-out-0 pttrn:data-closed:zoom-out-95",
            className
          )}
          {...props}
        />
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  )
}

function PopoverHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="popover-header"
      className={cn("pttrn:flex pttrn:flex-col pttrn:gap-1 pttrn:text-xs", className)}
      {...props}
    />
  )
}

function PopoverTitle({ className, ...props }: PopoverPrimitive.Title.Props) {
  return (
    <PopoverPrimitive.Title
      data-slot="popover-title"
      className={cn("pttrn:text-sm pttrn:font-medium", className)}
      {...props}
    />
  )
}

function PopoverDescription({
  className,
  ...props
}: PopoverPrimitive.Description.Props) {
  return (
    <PopoverPrimitive.Description
      data-slot="popover-description"
      className={cn("pttrn:text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
}
