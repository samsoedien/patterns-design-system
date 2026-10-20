import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "pttrn:h-7 pttrn:w-full pttrn:min-w-0 pttrn:rounded-md pttrn:border pttrn:border-input pttrn:bg-input/20 pttrn:px-2 pttrn:py-0.5 pttrn:text-sm pttrn:transition-colors pttrn:outline-none pttrn:file:inline-flex pttrn:file:h-6 pttrn:file:border-0 pttrn:file:bg-transparent pttrn:file:text-xs/relaxed pttrn:file:font-medium pttrn:file:text-foreground pttrn:placeholder:text-muted-foreground pttrn:focus-visible:border-ring pttrn:focus-visible:ring-2 pttrn:focus-visible:ring-ring/30 pttrn:disabled:pointer-events-none pttrn:disabled:cursor-not-allowed pttrn:disabled:opacity-50 pttrn:aria-invalid:border-destructive pttrn:aria-invalid:ring-2 pttrn:aria-invalid:ring-destructive/20 pttrn:md:text-xs/relaxed pttrn:dark:bg-input/30 pttrn:dark:aria-invalid:border-destructive/50 pttrn:dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
