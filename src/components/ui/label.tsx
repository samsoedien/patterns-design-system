"use client"

import * as React from "react"
import { cn } from "cn"

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "pttrn:flex pttrn:items-center pttrn:gap-2 pttrn:text-xs/relaxed pttrn:leading-none pttrn:font-medium pttrn:select-none pttrn:group-data-[disabled=true]:pointer-events-none pttrn:group-data-[disabled=true]:opacity-50 pttrn:peer-disabled:cursor-not-allowed pttrn:peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
