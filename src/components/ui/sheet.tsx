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
        "pttrn:fixed pttrn:inset-0 pttrn:z-50 pttrn:bg-black/80 pttrn:transition-opacity pttrn:duration-150 pttrn:data-ending-style:opacity-0 pttrn:data-starting-style:opacity-0 pttrn:supports-backdrop-filter:backdrop-blur-xs",
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
          "pttrn:fixed pttrn:z-50 pttrn:flex pttrn:flex-col pttrn:bg-popover pttrn:bg-clip-padding pttrn:text-xs/relaxed pttrn:text-popover-foreground pttrn:shadow-lg pttrn:transition pttrn:duration-200 pttrn:ease-in-out pttrn:data-ending-style:opacity-0 pttrn:data-starting-style:opacity-0 pttrn:data-[side=bottom]:inset-x-0 pttrn:data-[side=bottom]:bottom-0 pttrn:data-[side=bottom]:h-auto pttrn:data-[side=bottom]:border-t pttrn:data-[side=bottom]:data-ending-style:translate-y-[2.5rem] pttrn:data-[side=bottom]:data-starting-style:translate-y-[2.5rem] pttrn:data-[side=left]:inset-y-0 pttrn:data-[side=left]:left-0 pttrn:data-[side=left]:h-full pttrn:data-[side=left]:w-3/4 pttrn:data-[side=left]:border-e pttrn:data-[side=left]:data-ending-style:translate-x-[-2.5rem] rtl:pttrn:data-[side=left]:data-ending-style:-translate-x-[-2.5rem] pttrn:data-[side=left]:data-starting-style:translate-x-[-2.5rem] rtl:pttrn:data-[side=left]:data-starting-style:-translate-x-[-2.5rem] pttrn:data-[side=right]:inset-y-0 pttrn:data-[side=right]:right-0 pttrn:data-[side=right]:h-full pttrn:data-[side=right]:w-3/4 pttrn:data-[side=right]:border-s pttrn:data-[side=right]:data-ending-style:translate-x-[2.5rem] rtl:pttrn:data-[side=right]:data-ending-style:-translate-x-[2.5rem] pttrn:data-[side=right]:data-starting-style:translate-x-[2.5rem] rtl:pttrn:data-[side=right]:data-starting-style:-translate-x-[2.5rem] pttrn:data-[side=top]:inset-x-0 pttrn:data-[side=top]:top-0 pttrn:data-[side=top]:h-auto pttrn:data-[side=top]:border-b pttrn:data-[side=top]:data-ending-style:translate-y-[-2.5rem] pttrn:data-[side=top]:data-starting-style:translate-y-[-2.5rem] pttrn:data-[side=left]:sm:max-w-sm pttrn:data-[side=right]:sm:max-w-sm",
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
                className="pttrn:absolute pttrn:top-4 pttrn:end-4"
                size="icon-sm"
              />
            }
          >
            <XIcon
            />
            <span className="pttrn:sr-only">Close</span>
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
      className={cn("pttrn:flex pttrn:flex-col pttrn:gap-1.5 pttrn:p-6", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("pttrn:mt-auto pttrn:flex pttrn:flex-col pttrn:gap-2 pttrn:p-6", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "pttrn:font-heading pttrn:text-sm pttrn:font-medium pttrn:text-foreground",
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
      className={cn("pttrn:text-xs/relaxed pttrn:text-muted-foreground", className)}
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
