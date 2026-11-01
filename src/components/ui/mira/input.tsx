import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "cuoio:h-7 cuoio:w-full cuoio:min-w-0 cuoio:rounded-md cuoio:border cuoio:border-input cuoio:bg-input/20 cuoio:px-2 cuoio:py-0.5 cuoio:text-sm cuoio:transition-colors cuoio:outline-none cuoio:file:inline-flex cuoio:file:h-6 cuoio:file:border-0 cuoio:file:bg-transparent cuoio:file:text-xs/relaxed cuoio:file:font-medium cuoio:file:text-foreground cuoio:placeholder:text-muted-foreground cuoio:focus-visible:border-ring cuoio:focus-visible:ring-2 cuoio:focus-visible:ring-ring/30 cuoio:disabled:pointer-events-none cuoio:disabled:cursor-not-allowed cuoio:disabled:opacity-50 cuoio:aria-invalid:border-destructive cuoio:aria-invalid:ring-2 cuoio:aria-invalid:ring-destructive/20 cuoio:md:text-xs/relaxed cuoio:dark:bg-input/30 cuoio:dark:aria-invalid:border-destructive/50 cuoio:dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
