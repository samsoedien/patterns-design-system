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
        "pttrn:shrink-0 pttrn:bg-border pttrn:data-horizontal:h-px pttrn:data-horizontal:w-full pttrn:data-vertical:w-px pttrn:data-vertical:self-stretch",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
