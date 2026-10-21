import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "cuoio:group/button cuoio:inline-flex cuoio:shrink-0 cuoio:items-center cuoio:justify-center cuoio:rounded-md cuoio:border cuoio:border-transparent cuoio:bg-clip-padding cuoio:text-xs/relaxed cuoio:font-medium cuoio:whitespace-nowrap cuoio:transition-all cuoio:outline-none cuoio:select-none cuoio:focus-visible:border-ring cuoio:focus-visible:ring-2 cuoio:focus-visible:ring-ring/30 cuoio:active:not-aria-[haspopup]:translate-y-px cuoio:disabled:pointer-events-none cuoio:disabled:opacity-50 cuoio:aria-invalid:border-destructive cuoio:aria-invalid:ring-2 cuoio:aria-invalid:ring-destructive/20 cuoio:dark:aria-invalid:border-destructive/50 cuoio:dark:aria-invalid:ring-destructive/40 cuoio:[&_svg]:pointer-events-none cuoio:[&_svg]:shrink-0 cuoio:[&_svg:not([class*=size-])]:size-4",
  {
    variants: {
      variant: {
        default: "cuoio:bg-primary cuoio:text-primary-foreground cuoio:hover:bg-primary/80",
        outline:
          "cuoio:border-border cuoio:hover:bg-input/50 cuoio:hover:text-foreground cuoio:aria-expanded:bg-muted cuoio:aria-expanded:text-foreground cuoio:dark:bg-input/30",
        secondary:
          "cuoio:bg-secondary cuoio:text-secondary-foreground cuoio:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] cuoio:aria-expanded:bg-secondary cuoio:aria-expanded:text-secondary-foreground",
        ghost:
          "cuoio:hover:bg-muted cuoio:hover:text-foreground cuoio:aria-expanded:bg-muted cuoio:aria-expanded:text-foreground cuoio:dark:hover:bg-muted/50",
        destructive:
          "cuoio:bg-destructive/10 cuoio:text-destructive cuoio:hover:bg-destructive/20 cuoio:focus-visible:border-destructive/40 cuoio:focus-visible:ring-destructive/20 cuoio:dark:bg-destructive/20 cuoio:dark:hover:bg-destructive/30 cuoio:dark:focus-visible:ring-destructive/40",
        link: "cuoio:text-primary cuoio:underline-offset-4 cuoio:hover:underline",
      },
      size: {
        default:
          "cuoio:h-7 cuoio:gap-1 cuoio:px-2 cuoio:text-xs/relaxed cuoio:has-data-[icon=inline-end]:pe-1.5 cuoio:has-data-[icon=inline-start]:ps-1.5 cuoio:[&_svg:not([class*=size-])]:size-3.5",
        xs: "cuoio:h-5 cuoio:gap-1 cuoio:rounded-sm cuoio:px-2 cuoio:text-[0.625rem] cuoio:has-data-[icon=inline-end]:pe-1.5 cuoio:has-data-[icon=inline-start]:ps-1.5 cuoio:[&_svg:not([class*=size-])]:size-2.5",
        sm: "cuoio:h-6 cuoio:gap-1 cuoio:px-2 cuoio:text-xs/relaxed cuoio:has-data-[icon=inline-end]:pe-1.5 cuoio:has-data-[icon=inline-start]:ps-1.5 cuoio:[&_svg:not([class*=size-])]:size-3",
        lg: "cuoio:h-8 cuoio:gap-1 cuoio:px-2.5 cuoio:text-xs/relaxed cuoio:has-data-[icon=inline-end]:pe-2 cuoio:has-data-[icon=inline-start]:ps-2 cuoio:[&_svg:not([class*=size-])]:size-4",
        icon: "cuoio:size-7 cuoio:[&_svg:not([class*=size-])]:size-3.5",
        "icon-xs": "cuoio:size-5 cuoio:rounded-sm cuoio:[&_svg:not([class*=size-])]:size-2.5",
        "icon-sm": "cuoio:size-6 cuoio:[&_svg:not([class*=size-])]:size-3",
        "icon-lg": "cuoio:size-8 cuoio:[&_svg:not([class*=size-])]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
