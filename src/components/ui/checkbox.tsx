"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { cn } from "cn"
import { CheckIcon } from "lucide-react"

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "cuoio:peer cuoio:relative cuoio:flex cuoio:size-4 cuoio:shrink-0 cuoio:items-center cuoio:justify-center cuoio:rounded-[4px] cuoio:border cuoio:border-input cuoio:transition-shadow cuoio:outline-none cuoio:group-has-disabled/field:opacity-50 cuoio:group-has-[:focus-visible]/field-label:ring-0 cuoio:group-has-[:focus-visible]/field-label:not-data-checked:border-input cuoio:after:absolute cuoio:after:-inset-x-3 cuoio:after:-inset-y-2 cuoio:focus-visible:border-ring cuoio:focus-visible:ring-2 cuoio:focus-visible:ring-ring/30 cuoio:disabled:cursor-not-allowed cuoio:disabled:opacity-50 cuoio:aria-invalid:border-destructive cuoio:aria-invalid:ring-2 cuoio:aria-invalid:ring-destructive/20 cuoio:aria-invalid:aria-checked:border-primary cuoio:dark:bg-input/30 cuoio:dark:aria-invalid:border-destructive/50 cuoio:dark:aria-invalid:ring-destructive/40 cuoio:data-checked:border-primary cuoio:data-checked:bg-primary cuoio:data-checked:text-primary-foreground cuoio:group-has-[:focus-visible]/field-label:data-checked:border-primary cuoio:dark:data-checked:bg-primary",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="cuoio:grid cuoio:place-content-center cuoio:text-current cuoio:transition-none cuoio:[&>svg]:size-3.5"
      >
        <CheckIcon
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
