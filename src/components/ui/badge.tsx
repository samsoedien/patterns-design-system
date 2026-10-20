import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const badgeVariants = cva(
  "pttrn:group/badge pttrn:inline-flex pttrn:h-5 pttrn:w-fit pttrn:shrink-0 pttrn:items-center pttrn:justify-center pttrn:gap-1 pttrn:overflow-hidden pttrn:rounded-full pttrn:border pttrn:border-transparent pttrn:px-2 pttrn:py-0.5 pttrn:text-[0.625rem] pttrn:font-medium pttrn:whitespace-nowrap pttrn:transition-all pttrn:focus-visible:border-ring pttrn:focus-visible:ring-[3px] pttrn:focus-visible:ring-ring/50 pttrn:has-data-[icon=inline-end]:pe-1.5 pttrn:has-data-[icon=inline-start]:ps-1.5 pttrn:aria-invalid:border-destructive pttrn:aria-invalid:ring-destructive/20 pttrn:dark:aria-invalid:ring-destructive/40 pttrn:[&>svg]:pointer-events-none pttrn:[&>svg]:size-2.5!",
  {
    variants: {
      variant: {
        default: "pttrn:bg-primary pttrn:text-primary-foreground pttrn:[a]:hover:bg-primary/80",
        secondary:
          "pttrn:bg-secondary pttrn:text-secondary-foreground pttrn:[a]:hover:bg-secondary/80",
        destructive:
          "pttrn:bg-destructive/10 pttrn:text-destructive pttrn:focus-visible:ring-destructive/20 pttrn:dark:bg-destructive/20 pttrn:dark:focus-visible:ring-destructive/40 pttrn:[a]:hover:bg-destructive/20",
        outline:
          "pttrn:border-border pttrn:bg-input/20 pttrn:text-foreground pttrn:dark:bg-input/30 pttrn:[a]:hover:bg-muted pttrn:[a]:hover:text-muted-foreground",
        ghost:
          "pttrn:hover:bg-muted pttrn:hover:text-muted-foreground pttrn:dark:hover:bg-muted/50",
        link: "pttrn:text-primary pttrn:underline-offset-4 pttrn:hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
