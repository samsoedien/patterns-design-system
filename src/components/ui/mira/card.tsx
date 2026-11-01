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
        "cuoio:group/card cuoio:flex cuoio:flex-col cuoio:gap-(--card-spacing) cuoio:overflow-hidden cuoio:rounded-lg cuoio:bg-card cuoio:py-(--card-spacing) cuoio:text-xs/relaxed cuoio:text-card-foreground cuoio:ring-1 cuoio:ring-foreground/10 cuoio:[--card-spacing:--spacing(4)] cuoio:has-[>img:first-child]:pt-0 cuoio:data-[size=sm]:[--card-spacing:--spacing(3)] cuoio:*:[img:first-child]:rounded-t-lg cuoio:*:[img:last-child]:rounded-b-lg",
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
        "cuoio:group/card-header cuoio:@container/card-header cuoio:grid cuoio:auto-rows-min cuoio:items-start cuoio:gap-1 cuoio:rounded-t-lg cuoio:px-(--card-spacing) cuoio:has-data-[slot=card-action]:grid-cols-[1fr_auto] cuoio:has-data-[slot=card-description]:grid-rows-[auto_auto] cuoio:[.border-b]:pb-(--card-spacing)",
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
      className={cn("cuoio:font-heading cuoio:text-sm cuoio:font-medium", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("cuoio:text-xs/relaxed cuoio:text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "cuoio:col-start-2 cuoio:row-span-2 cuoio:row-start-1 cuoio:self-start cuoio:justify-self-end",
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
      className={cn("cuoio:px-(--card-spacing)", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "cuoio:flex cuoio:items-center cuoio:rounded-b-lg cuoio:px-(--card-spacing) cuoio:[.border-t]:pt-(--card-spacing)",
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
