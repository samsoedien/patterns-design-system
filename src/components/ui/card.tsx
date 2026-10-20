import * as React from "react"
import { cn } from "cn"

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "pttrn:group/card pttrn:flex pttrn:flex-col pttrn:gap-(--card-spacing) pttrn:overflow-hidden pttrn:rounded-lg pttrn:bg-card pttrn:py-(--card-spacing) pttrn:text-xs/relaxed pttrn:text-card-foreground pttrn:ring-1 pttrn:ring-foreground/10 pttrn:[--card-spacing:--spacing(4)] pttrn:has-[>img:first-child]:pt-0 pttrn:data-[size=sm]:[--card-spacing:--spacing(3)] pttrn:*:[img:first-child]:rounded-t-lg pttrn:*:[img:last-child]:rounded-b-lg",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "pttrn:group/card-header pttrn:@container/card-header pttrn:grid pttrn:auto-rows-min pttrn:items-start pttrn:gap-1 pttrn:rounded-t-lg pttrn:px-(--card-spacing) pttrn:has-data-[slot=card-action]:grid-cols-[1fr_auto] pttrn:has-data-[slot=card-description]:grid-rows-[auto_auto] pttrn:[.border-b]:pb-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("pttrn:font-heading pttrn:text-sm pttrn:font-medium", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("pttrn:text-xs/relaxed pttrn:text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "pttrn:col-start-2 pttrn:row-span-2 pttrn:row-start-1 pttrn:self-start pttrn:justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("pttrn:px-(--card-spacing)", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "pttrn:flex pttrn:items-center pttrn:rounded-b-lg pttrn:px-(--card-spacing) pttrn:[.border-t]:pt-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
