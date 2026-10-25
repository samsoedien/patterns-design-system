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
        "cuoio:fixed cuoio:inset-0 cuoio:isolate cuoio:z-50 cuoio:bg-black/10 cuoio:duration-100 cuoio:supports-backdrop-filter:backdrop-blur-xs cuoio:data-open:animate-in cuoio:data-open:fade-in-0 cuoio:data-closed:animate-out cuoio:data-closed:fade-out-0",
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
          "cuoio:group/alert-dialog-content cuoio:fixed cuoio:top-1/2 cuoio:start-1/2 cuoio:z-50 cuoio:grid cuoio:w-full cuoio:-translate-x-1/2 rtl:cuoio:translate-x-1/2 cuoio:-translate-y-1/2 cuoio:gap-4 cuoio:rounded-xl cuoio:bg-popover cuoio:p-4 cuoio:text-popover-foreground cuoio:ring-1 cuoio:ring-foreground/10 cuoio:duration-100 cuoio:outline-none cuoio:data-[size=default]:max-w-xs cuoio:data-[size=sm]:max-w-xs cuoio:data-[size=default]:sm:max-w-sm cuoio:data-open:animate-in cuoio:data-open:fade-in-0 cuoio:data-open:zoom-in-95 cuoio:data-closed:animate-out cuoio:data-closed:fade-out-0 cuoio:data-closed:zoom-out-95",
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
        "cuoio:grid cuoio:grid-rows-[auto_1fr] cuoio:place-items-center cuoio:gap-1.5 cuoio:text-center cuoio:has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] cuoio:has-data-[slot=alert-dialog-media]:gap-x-4 cuoio:sm:group-data-[size=default]/alert-dialog-content:place-items-start cuoio:sm:group-data-[size=default]/alert-dialog-content:text-start cuoio:sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",
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
        "cuoio:-mx-4 cuoio:-mb-4 cuoio:flex cuoio:flex-col-reverse cuoio:gap-2 cuoio:rounded-b-xl cuoio:border-t cuoio:bg-muted/50 cuoio:p-4 cuoio:group-data-[size=sm]/alert-dialog-content:grid cuoio:group-data-[size=sm]/alert-dialog-content:grid-cols-2 cuoio:sm:flex-row cuoio:sm:justify-end",
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
        "cuoio:mb-2 cuoio:inline-flex cuoio:size-10 cuoio:items-center cuoio:justify-center cuoio:rounded-md cuoio:bg-muted cuoio:sm:group-data-[size=default]/alert-dialog-content:row-span-2 cuoio:*:[svg:not([class*=size-])]:size-6",
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
        "cuoio:font-heading cuoio:text-base cuoio:font-medium cuoio:sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
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
        "cuoio:text-sm cuoio:text-balance cuoio:text-muted-foreground cuoio:md:text-pretty cuoio:*:[a]:underline cuoio:*:[a]:underline-offset-3 cuoio:*:[a]:hover:text-foreground",
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
