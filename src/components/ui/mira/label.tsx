"use client"

import * as React from "react"
import { cn } from "cn"

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "cuoio:flex cuoio:items-center cuoio:gap-2 cuoio:text-xs/relaxed cuoio:leading-none cuoio:font-medium cuoio:select-none cuoio:group-data-[disabled=true]:pointer-events-none cuoio:group-data-[disabled=true]:opacity-50 cuoio:peer-disabled:cursor-not-allowed cuoio:peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
