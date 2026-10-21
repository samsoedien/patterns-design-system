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
      className={cn("cuoio:relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="cuoio:size-full cuoio:rounded-[inherit] cuoio:transition-[color,box-shadow] cuoio:outline-none cuoio:focus-visible:ring-[3px] cuoio:focus-visible:ring-ring/50 cuoio:focus-visible:outline-1"
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
        "cuoio:flex cuoio:touch-none cuoio:p-px cuoio:transition-colors cuoio:select-none cuoio:data-horizontal:h-2.5 cuoio:data-horizontal:flex-col cuoio:data-horizontal:border-t cuoio:data-horizontal:border-t-transparent cuoio:data-vertical:h-full cuoio:data-vertical:w-2.5 cuoio:data-vertical:border-s cuoio:data-vertical:border-s-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb
        data-slot="scroll-area-thumb"
        className="cuoio:relative cuoio:flex-1 cuoio:rounded-full cuoio:bg-border"
      />
    </ScrollAreaPrimitive.Scrollbar>
  )
}

export { ScrollArea, ScrollBar }
