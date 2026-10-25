import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "cuoio:h-8 cuoio:w-full cuoio:min-w-0 cuoio:rounded-lg cuoio:border cuoio:border-input cuoio:bg-transparent cuoio:px-2.5 cuoio:py-1 cuoio:text-base cuoio:transition-colors cuoio:outline-none cuoio:file:inline-flex cuoio:file:h-6 cuoio:file:border-0 cuoio:file:bg-transparent cuoio:file:text-sm cuoio:file:font-medium cuoio:file:text-foreground cuoio:placeholder:text-muted-foreground cuoio:focus-visible:border-ring cuoio:focus-visible:ring-3 cuoio:focus-visible:ring-ring/50 cuoio:disabled:pointer-events-none cuoio:disabled:cursor-not-allowed cuoio:disabled:bg-input/50 cuoio:disabled:opacity-50 cuoio:aria-invalid:border-destructive cuoio:aria-invalid:ring-3 cuoio:aria-invalid:ring-destructive/20 cuoio:md:text-sm cuoio:dark:bg-input/30 cuoio:dark:disabled:bg-input/80 cuoio:dark:aria-invalid:border-destructive/50 cuoio:dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
