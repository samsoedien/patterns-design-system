"use client"

import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import { cn } from "cn"

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("cuoio:grid cuoio:w-full cuoio:gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={cn(
        "cuoio:group/radio-group-item cuoio:peer cuoio:relative cuoio:flex cuoio:aspect-square cuoio:size-4 cuoio:shrink-0 cuoio:rounded-full cuoio:border cuoio:border-input cuoio:outline-none cuoio:group-has-[:focus-visible]/field-label:ring-0 cuoio:group-has-[:focus-visible]/field-label:not-data-checked:border-input cuoio:after:absolute cuoio:after:-inset-x-3 cuoio:after:-inset-y-2 cuoio:focus-visible:border-ring cuoio:focus-visible:ring-3 cuoio:focus-visible:ring-ring/50 cuoio:disabled:cursor-not-allowed cuoio:disabled:opacity-50 cuoio:aria-invalid:border-destructive cuoio:aria-invalid:ring-3 cuoio:aria-invalid:ring-destructive/20 cuoio:aria-invalid:aria-checked:border-primary cuoio:dark:bg-input/30 cuoio:dark:aria-invalid:border-destructive/50 cuoio:dark:aria-invalid:ring-destructive/40 cuoio:data-checked:border-primary cuoio:data-checked:bg-primary cuoio:data-checked:text-primary-foreground cuoio:group-has-[:focus-visible]/field-label:data-checked:border-primary cuoio:dark:data-checked:bg-primary",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="cuoio:flex cuoio:size-4 cuoio:items-center cuoio:justify-center"
      >
        <span className="cuoio:absolute cuoio:top-1/2 cuoio:start-1/2 cuoio:size-2 cuoio:-translate-x-1/2 rtl:cuoio:translate-x-1/2 cuoio:-translate-y-1/2 cuoio:rounded-full cuoio:bg-primary-foreground" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  )
}

export { RadioGroup, RadioGroupItem }
