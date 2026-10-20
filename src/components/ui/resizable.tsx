"use client"

import { cn } from "cn"
import * as ResizablePrimitive from "react-resizable-panels"

function ResizablePanelGroup({
  className,
  ...props
}: ResizablePrimitive.GroupProps) {
  return (
    <ResizablePrimitive.Group
      data-slot="resizable-panel-group"
      className={cn(
        "pttrn:flex pttrn:h-full pttrn:w-full pttrn:aria-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function ResizablePanel({ ...props }: ResizablePrimitive.PanelProps) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: ResizablePrimitive.SeparatorProps & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.Separator
      data-slot="resizable-handle"
      className={cn(
        "pttrn:relative pttrn:flex pttrn:w-px pttrn:items-center pttrn:justify-center pttrn:bg-border pttrn:ring-offset-background pttrn:after:absolute pttrn:after:inset-y-0 pttrn:after:start-1/2 pttrn:after:w-1 pttrn:after:-translate-x-1/2 rtl:pttrn:after:translate-x-1/2 pttrn:focus-visible:ring-1 pttrn:focus-visible:ring-ring pttrn:focus-visible:outline-hidden pttrn:aria-[orientation=horizontal]:h-px pttrn:aria-[orientation=horizontal]:w-full pttrn:aria-[orientation=horizontal]:after:start-0 pttrn:aria-[orientation=horizontal]:after:h-1 pttrn:aria-[orientation=horizontal]:after:w-full pttrn:aria-[orientation=horizontal]:after:translate-x-0 rtl:pttrn:aria-[orientation=horizontal]:after:-translate-x-0 pttrn:aria-[orientation=horizontal]:after:-translate-y-1/2 pttrn:[&[aria-orientation=horizontal]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="pttrn:z-10 pttrn:flex pttrn:h-6 pttrn:w-1 pttrn:shrink-0 pttrn:rounded-lg pttrn:bg-border" />
      )}
    </ResizablePrimitive.Separator>
  )
}

export { ResizableHandle, ResizablePanel, ResizablePanelGroup }
