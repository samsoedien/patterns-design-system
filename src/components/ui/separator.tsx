"use client"

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator"
import { cn } from "cn"

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(
        "cuoio:shrink-0 cuoio:bg-border cuoio:data-horizontal:h-px cuoio:data-horizontal:w-full cuoio:data-vertical:w-px cuoio:data-vertical:self-stretch",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
