"use client"

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const toggleVariants = cva(
  "cuoio:group/toggle cuoio:inline-flex cuoio:items-center cuoio:justify-center cuoio:gap-1 cuoio:rounded-md cuoio:text-xs cuoio:font-medium cuoio:whitespace-nowrap cuoio:transition-all cuoio:outline-none cuoio:hover:bg-muted cuoio:hover:text-foreground cuoio:focus-visible:border-ring cuoio:focus-visible:ring-[3px] cuoio:focus-visible:ring-ring/50 cuoio:disabled:pointer-events-none cuoio:disabled:opacity-50 cuoio:aria-invalid:border-destructive cuoio:aria-invalid:ring-destructive/20 cuoio:aria-pressed:bg-muted cuoio:data-[state=on]:bg-muted cuoio:dark:aria-invalid:ring-destructive/40 cuoio:[&_svg]:pointer-events-none cuoio:[&_svg]:shrink-0 cuoio:[&_svg:not([class*=size-])]:size-4",
  {
    variants: {
      variant: {
        default: "cuoio:bg-transparent",
        outline: "cuoio:border cuoio:border-input cuoio:bg-transparent cuoio:hover:bg-muted",
      },
      size: {
        default:
          "cuoio:h-7 cuoio:min-w-7 cuoio:px-2 cuoio:has-data-[icon=inline-end]:pe-1.5 cuoio:has-data-[icon=inline-start]:ps-1.5",
        sm: "cuoio:h-6 cuoio:min-w-6 cuoio:rounded-[min(var(--radius-md),8px)] cuoio:px-2 cuoio:text-[0.625rem] cuoio:has-data-[icon=inline-end]:pe-1.5 cuoio:has-data-[icon=inline-start]:ps-1.5 cuoio:[&_svg:not([class*=size-])]:size-3",
        lg: "cuoio:h-8 cuoio:min-w-8 cuoio:px-2.5 cuoio:has-data-[icon=inline-end]:pe-2 cuoio:has-data-[icon=inline-start]:ps-2",
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
