"use client"

// import * as React from "react"
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area"
import { cn } from "cn"

function ScrollArea({
  className,
  children,
  ...props
}: ScrollAreaPrimitive.Root.Props) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("pttrn:relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="pttrn:size-full pttrn:rounded-[inherit] pttrn:transition-[color,box-shadow] pttrn:outline-none pttrn:focus-visible:ring-[3px] pttrn:focus-visible:ring-ring/50 pttrn:focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: ScrollAreaPrimitive.Scrollbar.Props) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "pttrn:flex pttrn:touch-none pttrn:p-px pttrn:transition-colors pttrn:select-none pttrn:data-horizontal:h-2.5 pttrn:data-horizontal:flex-col pttrn:data-horizontal:border-t pttrn:data-horizontal:border-t-transparent pttrn:data-vertical:h-full pttrn:data-vertical:w-2.5 pttrn:data-vertical:border-s pttrn:data-vertical:border-s-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb
        data-slot="scroll-area-thumb"
        className="pttrn:relative pttrn:flex-1 pttrn:rounded-full pttrn:bg-border"
      />
    </ScrollAreaPrimitive.Scrollbar>
  )
}

export { ScrollArea, ScrollBar }
