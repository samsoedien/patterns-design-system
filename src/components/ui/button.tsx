import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "pttrn:group/button pttrn:inline-flex pttrn:shrink-0 pttrn:items-center pttrn:justify-center pttrn:rounded-md pttrn:border pttrn:border-transparent pttrn:bg-clip-padding pttrn:text-xs/relaxed pttrn:font-medium pttrn:whitespace-nowrap pttrn:transition-all pttrn:outline-none pttrn:select-none pttrn:focus-visible:border-ring pttrn:focus-visible:ring-2 pttrn:focus-visible:ring-ring/30 pttrn:active:not-aria-[haspopup]:translate-y-px pttrn:disabled:pointer-events-none pttrn:disabled:opacity-50 pttrn:aria-invalid:border-destructive pttrn:aria-invalid:ring-2 pttrn:aria-invalid:ring-destructive/20 pttrn:dark:aria-invalid:border-destructive/50 pttrn:dark:aria-invalid:ring-destructive/40 pttrn:[&_svg]:pointer-events-none pttrn:[&_svg]:shrink-0 pttrn:[&_svg:not([class*=size-])]:size-4",
  {
    variants: {
      variant: {
        default: "pttrn:bg-primary pttrn:text-primary-foreground pttrn:hover:bg-primary/80",
        outline:
          "pttrn:border-border pttrn:hover:bg-input/50 pttrn:hover:text-foreground pttrn:aria-expanded:bg-muted pttrn:aria-expanded:text-foreground pttrn:dark:bg-input/30",
        secondary:
          "pttrn:bg-secondary pttrn:text-secondary-foreground pttrn:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] pttrn:aria-expanded:bg-secondary pttrn:aria-expanded:text-secondary-foreground",
        ghost:
          "pttrn:hover:bg-muted pttrn:hover:text-foreground pttrn:aria-expanded:bg-muted pttrn:aria-expanded:text-foreground pttrn:dark:hover:bg-muted/50",
        destructive:
          "pttrn:bg-destructive/10 pttrn:text-destructive pttrn:hover:bg-destructive/20 pttrn:focus-visible:border-destructive/40 pttrn:focus-visible:ring-destructive/20 pttrn:dark:bg-destructive/20 pttrn:dark:hover:bg-destructive/30 pttrn:dark:focus-visible:ring-destructive/40",
        link: "pttrn:text-primary pttrn:underline-offset-4 pttrn:hover:underline",
      },
      size: {
        default:
          "pttrn:h-7 pttrn:gap-1 pttrn:px-2 pttrn:text-xs/relaxed pttrn:has-data-[icon=inline-end]:pe-1.5 pttrn:has-data-[icon=inline-start]:ps-1.5 pttrn:[&_svg:not([class*=size-])]:size-3.5",
        xs: "pttrn:h-5 pttrn:gap-1 pttrn:rounded-sm pttrn:px-2 pttrn:text-[0.625rem] pttrn:has-data-[icon=inline-end]:pe-1.5 pttrn:has-data-[icon=inline-start]:ps-1.5 pttrn:[&_svg:not([class*=size-])]:size-2.5",
        sm: "pttrn:h-6 pttrn:gap-1 pttrn:px-2 pttrn:text-xs/relaxed pttrn:has-data-[icon=inline-end]:pe-1.5 pttrn:has-data-[icon=inline-start]:ps-1.5 pttrn:[&_svg:not([class*=size-])]:size-3",
        lg: "pttrn:h-8 pttrn:gap-1 pttrn:px-2.5 pttrn:text-xs/relaxed pttrn:has-data-[icon=inline-end]:pe-2 pttrn:has-data-[icon=inline-start]:ps-2 pttrn:[&_svg:not([class*=size-])]:size-4",
        icon: "pttrn:size-7 pttrn:[&_svg:not([class*=size-])]:size-3.5",
        "icon-xs": "pttrn:size-5 pttrn:rounded-sm pttrn:[&_svg:not([class*=size-])]:size-2.5",
        "icon-sm": "pttrn:size-6 pttrn:[&_svg:not([class*=size-])]:size-3",
        "icon-lg": "pttrn:size-8 pttrn:[&_svg:not([class*=size-])]:size-4",
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
