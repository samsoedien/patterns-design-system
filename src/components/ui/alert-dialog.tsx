"use client"

import * as React from "react"
import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog"
import { cn } from "cn"

import { Button } from "@/components/ui/button"

function AlertDialog({ ...props }: AlertDialogPrimitive.Root.Props) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({ ...props }: AlertDialogPrimitive.Trigger.Props) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal({ ...props }: AlertDialogPrimitive.Portal.Props) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay({
  className,
  ...props
}: AlertDialogPrimitive.Backdrop.Props) {
  return (
    <AlertDialogPrimitive.Backdrop
      data-slot="alert-dialog-overlay"
      className={cn(
        "pttrn:fixed pttrn:inset-0 pttrn:isolate pttrn:z-50 pttrn:bg-black/80 pttrn:duration-100 pttrn:supports-backdrop-filter:backdrop-blur-xs pttrn:data-open:animate-in pttrn:data-open:fade-in-0 pttrn:data-closed:animate-out pttrn:data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  size = "default",
  ...props
}: AlertDialogPrimitive.Popup.Props & {
  size?: "default" | "sm"
}) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Popup
        data-slot="alert-dialog-content"
        data-size={size}
        className={cn(
          "pttrn:group/alert-dialog-content pttrn:fixed pttrn:top-1/2 pttrn:start-1/2 pttrn:z-50 pttrn:grid pttrn:w-full pttrn:-translate-x-1/2 rtl:pttrn:translate-x-1/2 pttrn:-translate-y-1/2 pttrn:gap-3 pttrn:rounded-xl pttrn:bg-popover pttrn:p-4 pttrn:text-popover-foreground pttrn:ring-1 pttrn:ring-foreground/10 pttrn:duration-100 pttrn:outline-none pttrn:data-[size=default]:max-w-xs pttrn:data-[size=sm]:max-w-64 pttrn:data-[size=default]:sm:max-w-sm pttrn:data-open:animate-in pttrn:data-open:fade-in-0 pttrn:data-open:zoom-in-95 pttrn:data-closed:animate-out pttrn:data-closed:fade-out-0 pttrn:data-closed:zoom-out-95",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn(
        "pttrn:grid pttrn:grid-rows-[auto_1fr] pttrn:place-items-center pttrn:gap-1 pttrn:text-center pttrn:has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] pttrn:has-data-[slot=alert-dialog-media]:gap-x-4 pttrn:sm:group-data-[size=default]/alert-dialog-content:place-items-start pttrn:sm:group-data-[size=default]/alert-dialog-content:text-start pttrn:sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "pttrn:flex pttrn:flex-col-reverse pttrn:gap-2 pttrn:group-data-[size=sm]/alert-dialog-content:grid pttrn:group-data-[size=sm]/alert-dialog-content:grid-cols-2 pttrn:sm:flex-row pttrn:sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogMedia({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(
        "pttrn:mb-2 pttrn:inline-flex pttrn:size-8 pttrn:items-center pttrn:justify-center pttrn:rounded-md pttrn:bg-muted pttrn:sm:group-data-[size=default]/alert-dialog-content:row-span-2 pttrn:*:[svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(
        "pttrn:font-heading pttrn:text-sm pttrn:font-medium pttrn:sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn(
        "pttrn:text-xs/relaxed pttrn:text-balance pttrn:text-muted-foreground pttrn:md:text-pretty pttrn:*:[a]:underline pttrn:*:[a]:underline-offset-3 pttrn:*:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="alert-dialog-action"
      className={cn(className)}
      {...props}
    />
  )
}

function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  ...props
}: AlertDialogPrimitive.Close.Props &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-cancel"
      className={cn(className)}
      render={<Button variant={variant} size={size} />}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}
