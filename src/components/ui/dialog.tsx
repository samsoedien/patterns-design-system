"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"

function Dialog({ ...props }: DialogPrimitive.Root.Props) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({ ...props }: DialogPrimitive.Trigger.Props) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({ ...props }: DialogPrimitive.Portal.Props) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({ ...props }: DialogPrimitive.Close.Props) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: DialogPrimitive.Backdrop.Props) {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-overlay"
      className={cn(
        "cuoio:fixed cuoio:inset-0 cuoio:isolate cuoio:z-50 cuoio:bg-black/10 cuoio:duration-100 cuoio:supports-backdrop-filter:backdrop-blur-xs cuoio:data-open:animate-in cuoio:data-open:fade-in-0 cuoio:data-closed:animate-out cuoio:data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={cn(
          "cuoio:fixed cuoio:top-1/2 cuoio:start-1/2 cuoio:z-50 cuoio:grid cuoio:w-full cuoio:max-w-[calc(100%-2rem)] cuoio:-translate-x-1/2 rtl:cuoio:translate-x-1/2 cuoio:-translate-y-1/2 cuoio:gap-4 cuoio:rounded-xl cuoio:bg-popover cuoio:p-4 cuoio:text-sm cuoio:text-popover-foreground cuoio:ring-1 cuoio:ring-foreground/10 cuoio:duration-100 cuoio:outline-none cuoio:sm:max-w-sm cuoio:data-open:animate-in cuoio:data-open:fade-in-0 cuoio:data-open:zoom-in-95 cuoio:data-closed:animate-out cuoio:data-closed:fade-out-0 cuoio:data-closed:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            render={
              <Button
                variant="ghost"
                className="cuoio:absolute cuoio:top-2 cuoio:end-2"
                size="icon-sm"
              />
            }
          >
            <XIcon
            />
            <span className="cuoio:sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Popup>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("cuoio:flex cuoio:flex-col cuoio:gap-2", className)}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "cuoio:-mx-4 cuoio:-mb-4 cuoio:flex cuoio:flex-col-reverse cuoio:gap-2 cuoio:rounded-b-xl cuoio:border-t cuoio:bg-muted/50 cuoio:p-4 cuoio:sm:flex-row cuoio:sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close render={<Button variant="outline" />}>
          Close
        </DialogPrimitive.Close>
      )}
    </div>
  )
}

function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "cuoio:font-heading cuoio:text-base cuoio:leading-none cuoio:font-medium",
        className
      )}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: DialogPrimitive.Description.Props) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "cuoio:text-sm cuoio:text-muted-foreground cuoio:*:[a]:underline cuoio:*:[a]:underline-offset-3 cuoio:*:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
