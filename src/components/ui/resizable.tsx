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
        "cuoio:flex cuoio:h-full cuoio:w-full cuoio:aria-[orientation=vertical]:flex-col",
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
        "cuoio:relative cuoio:flex cuoio:w-px cuoio:items-center cuoio:justify-center cuoio:bg-border cuoio:ring-offset-background cuoio:after:absolute cuoio:after:inset-y-0 cuoio:after:start-1/2 cuoio:after:w-1 cuoio:after:-translate-x-1/2 rtl:cuoio:after:translate-x-1/2 cuoio:focus-visible:ring-1 cuoio:focus-visible:ring-ring cuoio:focus-visible:outline-hidden cuoio:aria-[orientation=horizontal]:h-px cuoio:aria-[orientation=horizontal]:w-full cuoio:aria-[orientation=horizontal]:after:start-0 cuoio:aria-[orientation=horizontal]:after:h-1 cuoio:aria-[orientation=horizontal]:after:w-full cuoio:aria-[orientation=horizontal]:after:translate-x-0 rtl:cuoio:aria-[orientation=horizontal]:after:-translate-x-0 cuoio:aria-[orientation=horizontal]:after:-translate-y-1/2 cuoio:[&[aria-orientation=horizontal]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="cuoio:z-10 cuoio:flex cuoio:h-6 cuoio:w-1 cuoio:shrink-0 cuoio:rounded-lg cuoio:bg-border" />
      )}
    </ResizablePrimitive.Separator>
  )
}

export { ResizableHandle, ResizablePanel, ResizablePanelGroup }
