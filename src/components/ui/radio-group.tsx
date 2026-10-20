"use client"

import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import { cn } from "cn"

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("pttrn:grid pttrn:w-full pttrn:gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={cn(
        "pttrn:group/radio-group-item pttrn:peer pttrn:relative pttrn:flex pttrn:aspect-square pttrn:size-4 pttrn:shrink-0 pttrn:rounded-full pttrn:border pttrn:border-input pttrn:outline-none pttrn:group-has-[:focus-visible]/field-label:ring-0 pttrn:group-has-[:focus-visible]/field-label:not-data-checked:border-input pttrn:after:absolute pttrn:after:-inset-x-3 pttrn:after:-inset-y-2 pttrn:focus-visible:border-ring pttrn:focus-visible:ring-3 pttrn:focus-visible:ring-ring/50 pttrn:disabled:cursor-not-allowed pttrn:disabled:opacity-50 pttrn:aria-invalid:border-destructive pttrn:aria-invalid:ring-3 pttrn:aria-invalid:ring-destructive/20 pttrn:aria-invalid:aria-checked:border-primary pttrn:dark:bg-input/30 pttrn:dark:aria-invalid:border-destructive/50 pttrn:dark:aria-invalid:ring-destructive/40 pttrn:data-checked:border-primary pttrn:data-checked:bg-primary pttrn:data-checked:text-primary-foreground pttrn:group-has-[:focus-visible]/field-label:data-checked:border-primary pttrn:dark:data-checked:bg-primary",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="pttrn:flex pttrn:size-4 pttrn:items-center pttrn:justify-center"
      >
        <span className="pttrn:absolute pttrn:top-1/2 pttrn:start-1/2 pttrn:size-2 pttrn:-translate-x-1/2 rtl:pttrn:translate-x-1/2 pttrn:-translate-y-1/2 pttrn:rounded-full pttrn:bg-primary-foreground" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  )
}

export { RadioGroup, RadioGroupItem }
