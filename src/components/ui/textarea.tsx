import * as React from "react"
import { cn } from "cn"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "cuoio:flex cuoio:field-sizing-content cuoio:min-h-16 cuoio:w-full cuoio:rounded-lg cuoio:border cuoio:border-input cuoio:bg-transparent cuoio:px-2.5 cuoio:py-2 cuoio:text-base cuoio:transition-colors cuoio:outline-none cuoio:placeholder:text-muted-foreground cuoio:focus-visible:border-ring cuoio:focus-visible:ring-3 cuoio:focus-visible:ring-ring/50 cuoio:disabled:cursor-not-allowed cuoio:disabled:bg-input/50 cuoio:disabled:opacity-50 cuoio:aria-invalid:border-destructive cuoio:aria-invalid:ring-3 cuoio:aria-invalid:ring-destructive/20 cuoio:md:text-sm cuoio:dark:bg-input/30 cuoio:dark:disabled:bg-input/80 cuoio:dark:aria-invalid:border-destructive/50 cuoio:dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
