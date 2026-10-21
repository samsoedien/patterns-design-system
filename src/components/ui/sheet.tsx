"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"

function Sheet({ ...props }: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({ ...props }: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({ ...props }: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({ ...props }: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({ className, ...props }: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "cuoio:fixed cuoio:inset-0 cuoio:z-50 cuoio:bg-black/80 cuoio:transition-opacity cuoio:duration-150 cuoio:data-ending-style:opacity-0 cuoio:data-starting-style:opacity-0 cuoio:supports-backdrop-filter:backdrop-blur-xs",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "cuoio:fixed cuoio:z-50 cuoio:flex cuoio:flex-col cuoio:bg-popover cuoio:bg-clip-padding cuoio:text-xs/relaxed cuoio:text-popover-foreground cuoio:shadow-lg cuoio:transition cuoio:duration-200 cuoio:ease-in-out cuoio:data-ending-style:opacity-0 cuoio:data-starting-style:opacity-0 cuoio:data-[side=bottom]:inset-x-0 cuoio:data-[side=bottom]:bottom-0 cuoio:data-[side=bottom]:h-auto cuoio:data-[side=bottom]:border-t cuoio:data-[side=bottom]:data-ending-style:translate-y-[2.5rem] cuoio:data-[side=bottom]:data-starting-style:translate-y-[2.5rem] cuoio:data-[side=left]:inset-y-0 cuoio:data-[side=left]:left-0 cuoio:data-[side=left]:h-full cuoio:data-[side=left]:w-3/4 cuoio:data-[side=left]:border-e cuoio:data-[side=left]:data-ending-style:translate-x-[-2.5rem] rtl:cuoio:data-[side=left]:data-ending-style:-translate-x-[-2.5rem] cuoio:data-[side=left]:data-starting-style:translate-x-[-2.5rem] rtl:cuoio:data-[side=left]:data-starting-style:-translate-x-[-2.5rem] cuoio:data-[side=right]:inset-y-0 cuoio:data-[side=right]:right-0 cuoio:data-[side=right]:h-full cuoio:data-[side=right]:w-3/4 cuoio:data-[side=right]:border-s cuoio:data-[side=right]:data-ending-style:translate-x-[2.5rem] rtl:cuoio:data-[side=right]:data-ending-style:-translate-x-[2.5rem] cuoio:data-[side=right]:data-starting-style:translate-x-[2.5rem] rtl:cuoio:data-[side=right]:data-starting-style:-translate-x-[2.5rem] cuoio:data-[side=top]:inset-x-0 cuoio:data-[side=top]:top-0 cuoio:data-[side=top]:h-auto cuoio:data-[side=top]:border-b cuoio:data-[side=top]:data-ending-style:translate-y-[-2.5rem] cuoio:data-[side=top]:data-starting-style:translate-y-[-2.5rem] cuoio:data-[side=left]:sm:max-w-sm cuoio:data-[side=right]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            render={
              <Button
                variant="ghost"
                className="cuoio:absolute cuoio:top-4 cuoio:end-4"
                size="icon-sm"
              />
            }
          >
            <XIcon
            />
            <span className="cuoio:sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("cuoio:flex cuoio:flex-col cuoio:gap-1.5 cuoio:p-6", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("cuoio:mt-auto cuoio:flex cuoio:flex-col cuoio:gap-2 cuoio:p-6", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "cuoio:font-heading cuoio:text-sm cuoio:font-medium cuoio:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("cuoio:text-xs/relaxed cuoio:text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
