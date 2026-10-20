"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { cn } from "cn"
import { CheckIcon } from "lucide-react"

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "pttrn:peer pttrn:relative pttrn:flex pttrn:size-4 pttrn:shrink-0 pttrn:items-center pttrn:justify-center pttrn:rounded-[4px] pttrn:border pttrn:border-input pttrn:transition-shadow pttrn:outline-none pttrn:group-has-disabled/field:opacity-50 pttrn:group-has-[:focus-visible]/field-label:ring-0 pttrn:group-has-[:focus-visible]/field-label:not-data-checked:border-input pttrn:after:absolute pttrn:after:-inset-x-3 pttrn:after:-inset-y-2 pttrn:focus-visible:border-ring pttrn:focus-visible:ring-2 pttrn:focus-visible:ring-ring/30 pttrn:disabled:cursor-not-allowed pttrn:disabled:opacity-50 pttrn:aria-invalid:border-destructive pttrn:aria-invalid:ring-2 pttrn:aria-invalid:ring-destructive/20 pttrn:aria-invalid:aria-checked:border-primary pttrn:dark:bg-input/30 pttrn:dark:aria-invalid:border-destructive/50 pttrn:dark:aria-invalid:ring-destructive/40 pttrn:data-checked:border-primary pttrn:data-checked:bg-primary pttrn:data-checked:text-primary-foreground pttrn:group-has-[:focus-visible]/field-label:data-checked:border-primary pttrn:dark:data-checked:bg-primary",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="pttrn:grid pttrn:place-content-center pttrn:text-current pttrn:transition-none pttrn:[&>svg]:size-3.5"
      >
        <CheckIcon
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
