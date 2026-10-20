"use client"

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const toggleVariants = cva(
  "pttrn:group/toggle pttrn:inline-flex pttrn:items-center pttrn:justify-center pttrn:gap-1 pttrn:rounded-md pttrn:text-xs pttrn:font-medium pttrn:whitespace-nowrap pttrn:transition-all pttrn:outline-none pttrn:hover:bg-muted pttrn:hover:text-foreground pttrn:focus-visible:border-ring pttrn:focus-visible:ring-[3px] pttrn:focus-visible:ring-ring/50 pttrn:disabled:pointer-events-none pttrn:disabled:opacity-50 pttrn:aria-invalid:border-destructive pttrn:aria-invalid:ring-destructive/20 pttrn:aria-pressed:bg-muted pttrn:data-[state=on]:bg-muted pttrn:dark:aria-invalid:ring-destructive/40 pttrn:[&_svg]:pointer-events-none pttrn:[&_svg]:shrink-0 pttrn:[&_svg:not([class*=size-])]:size-4",
  {
    variants: {
      variant: {
        default: "pttrn:bg-transparent",
        outline: "pttrn:border pttrn:border-input pttrn:bg-transparent pttrn:hover:bg-muted",
      },
      size: {
        default:
          "pttrn:h-7 pttrn:min-w-7 pttrn:px-2 pttrn:has-data-[icon=inline-end]:pe-1.5 pttrn:has-data-[icon=inline-start]:ps-1.5",
        sm: "pttrn:h-6 pttrn:min-w-6 pttrn:rounded-[min(var(--radius-md),8px)] pttrn:px-2 pttrn:text-[0.625rem] pttrn:has-data-[icon=inline-end]:pe-1.5 pttrn:has-data-[icon=inline-start]:ps-1.5 pttrn:[&_svg:not([class*=size-])]:size-3",
        lg: "pttrn:h-8 pttrn:min-w-8 pttrn:px-2.5 pttrn:has-data-[icon=inline-end]:pe-2 pttrn:has-data-[icon=inline-start]:ps-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
