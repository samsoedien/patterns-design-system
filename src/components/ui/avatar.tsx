"use client"

import * as React from "react"
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"
import { cn } from "cn"

function Avatar({
  className,
  size = "default",
  ...props
}: AvatarPrimitive.Root.Props & {
  size?: "default" | "sm" | "lg"
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "pttrn:group/avatar pttrn:relative pttrn:flex pttrn:size-8 pttrn:shrink-0 pttrn:rounded-full pttrn:select-none pttrn:after:absolute pttrn:after:inset-0 pttrn:after:rounded-full pttrn:after:border pttrn:after:border-border pttrn:after:mix-blend-darken pttrn:data-[size=lg]:size-10 pttrn:data-[size=sm]:size-6 pttrn:dark:after:mix-blend-lighten",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "pttrn:aspect-square pttrn:size-full pttrn:rounded-full pttrn:object-cover",
        className
      )}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: AvatarPrimitive.Fallback.Props) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "pttrn:flex pttrn:size-full pttrn:items-center pttrn:justify-center pttrn:rounded-full pttrn:bg-muted pttrn:text-sm pttrn:text-muted-foreground pttrn:group-data-[size=sm]/avatar:text-xs",
        className
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "pttrn:absolute pttrn:end-0 pttrn:bottom-0 pttrn:z-10 pttrn:inline-flex pttrn:items-center pttrn:justify-center pttrn:rounded-full pttrn:bg-primary pttrn:text-primary-foreground pttrn:bg-blend-color pttrn:ring-2 pttrn:ring-background pttrn:select-none",
        "pttrn:group-data-[size=sm]/avatar:size-2 pttrn:group-data-[size=sm]/avatar:[&>svg]:hidden",
        "pttrn:group-data-[size=default]/avatar:size-2.5 pttrn:group-data-[size=default]/avatar:[&>svg]:size-2",
        "pttrn:group-data-[size=lg]/avatar:size-3 pttrn:group-data-[size=lg]/avatar:[&>svg]:size-2",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "pttrn:group/avatar-group pttrn:flex pttrn:-space-x-2 pttrn:*:data-[slot=avatar]:ring-2 pttrn:*:data-[slot=avatar]:ring-background",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "pttrn:relative pttrn:flex pttrn:size-8 pttrn:shrink-0 pttrn:items-center pttrn:justify-center pttrn:rounded-full pttrn:bg-muted pttrn:text-xs/relaxed pttrn:text-muted-foreground pttrn:ring-2 pttrn:ring-background pttrn:group-has-data-[size=lg]/avatar-group:size-10 pttrn:group-has-data-[size=sm]/avatar-group:size-6 pttrn:[&>svg]:size-4 pttrn:group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 pttrn:group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
}
