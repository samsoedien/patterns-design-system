import * as React from "react"
import { cn } from "cn"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "cuoio:flex cuoio:field-sizing-content cuoio:min-h-16 cuoio:w-full cuoio:resize-none cuoio:rounded-md cuoio:border cuoio:border-input cuoio:bg-input/20 cuoio:px-2 cuoio:py-2 cuoio:text-sm cuoio:transition-colors cuoio:outline-none cuoio:placeholder:text-muted-foreground cuoio:focus-visible:border-ring cuoio:focus-visible:ring-2 cuoio:focus-visible:ring-ring/30 cuoio:disabled:cursor-not-allowed cuoio:disabled:opacity-50 cuoio:aria-invalid:border-destructive cuoio:aria-invalid:ring-2 cuoio:aria-invalid:ring-destructive/20 cuoio:md:text-xs/relaxed cuoio:dark:bg-input/30 cuoio:dark:aria-invalid:border-destructive/50 cuoio:dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
