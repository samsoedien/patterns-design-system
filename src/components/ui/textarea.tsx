import * as React from "react"
import { cn } from "cn"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "pttrn:flex pttrn:field-sizing-content pttrn:min-h-16 pttrn:w-full pttrn:resize-none pttrn:rounded-md pttrn:border pttrn:border-input pttrn:bg-input/20 pttrn:px-2 pttrn:py-2 pttrn:text-sm pttrn:transition-colors pttrn:outline-none pttrn:placeholder:text-muted-foreground pttrn:focus-visible:border-ring pttrn:focus-visible:ring-2 pttrn:focus-visible:ring-ring/30 pttrn:disabled:cursor-not-allowed pttrn:disabled:opacity-50 pttrn:aria-invalid:border-destructive pttrn:aria-invalid:ring-2 pttrn:aria-invalid:ring-destructive/20 pttrn:md:text-xs/relaxed pttrn:dark:bg-input/30 pttrn:dark:aria-invalid:border-destructive/50 pttrn:dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
