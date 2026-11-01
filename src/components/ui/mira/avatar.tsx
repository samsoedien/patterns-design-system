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
        "cuoio:group/avatar cuoio:relative cuoio:flex cuoio:size-8 cuoio:shrink-0 cuoio:rounded-full cuoio:select-none cuoio:after:absolute cuoio:after:inset-0 cuoio:after:rounded-full cuoio:after:border cuoio:after:border-border cuoio:after:mix-blend-darken cuoio:data-[size=lg]:size-10 cuoio:data-[size=sm]:size-6 cuoio:dark:after:mix-blend-lighten",
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
        "cuoio:aspect-square cuoio:size-full cuoio:rounded-full cuoio:object-cover",
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
        "cuoio:flex cuoio:size-full cuoio:items-center cuoio:justify-center cuoio:rounded-full cuoio:bg-muted cuoio:text-sm cuoio:text-muted-foreground cuoio:group-data-[size=sm]/avatar:text-xs",
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
        "cuoio:absolute cuoio:end-0 cuoio:bottom-0 cuoio:z-10 cuoio:inline-flex cuoio:items-center cuoio:justify-center cuoio:rounded-full cuoio:bg-primary cuoio:text-primary-foreground cuoio:bg-blend-color cuoio:ring-2 cuoio:ring-background cuoio:select-none",
        "cuoio:group-data-[size=sm]/avatar:size-2 cuoio:group-data-[size=sm]/avatar:[&>svg]:hidden",
        "cuoio:group-data-[size=default]/avatar:size-2.5 cuoio:group-data-[size=default]/avatar:[&>svg]:size-2",
        "cuoio:group-data-[size=lg]/avatar:size-3 cuoio:group-data-[size=lg]/avatar:[&>svg]:size-2",
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
        "cuoio:group/avatar-group cuoio:flex cuoio:-space-x-2 cuoio:*:data-[slot=avatar]:ring-2 cuoio:*:data-[slot=avatar]:ring-background",
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
        "cuoio:relative cuoio:flex cuoio:size-8 cuoio:shrink-0 cuoio:items-center cuoio:justify-center cuoio:rounded-full cuoio:bg-muted cuoio:text-xs/relaxed cuoio:text-muted-foreground cuoio:ring-2 cuoio:ring-background cuoio:group-has-data-[size=lg]/avatar-group:size-10 cuoio:group-has-data-[size=sm]/avatar-group:size-6 cuoio:[&>svg]:size-4 cuoio:group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 cuoio:group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
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
