import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const badgeVariants = cva(
  "cuoio:group/badge cuoio:inline-flex cuoio:h-5 cuoio:w-fit cuoio:shrink-0 cuoio:items-center cuoio:justify-center cuoio:gap-1 cuoio:overflow-hidden cuoio:rounded-4xl cuoio:border cuoio:border-transparent cuoio:px-2 cuoio:py-0.5 cuoio:text-xs cuoio:font-medium cuoio:whitespace-nowrap cuoio:transition-all cuoio:focus-visible:border-ring cuoio:focus-visible:ring-[3px] cuoio:focus-visible:ring-ring/50 cuoio:has-data-[icon=inline-end]:pe-1.5 cuoio:has-data-[icon=inline-start]:ps-1.5 cuoio:aria-invalid:border-destructive cuoio:aria-invalid:ring-destructive/20 cuoio:dark:aria-invalid:ring-destructive/40 cuoio:[&>svg]:pointer-events-none cuoio:[&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "cuoio:bg-primary cuoio:text-primary-foreground cuoio:[a]:hover:bg-primary/80",
        secondary:
          "cuoio:bg-secondary cuoio:text-secondary-foreground cuoio:[a]:hover:bg-secondary/80",
        destructive:
          "cuoio:bg-destructive/10 cuoio:text-destructive cuoio:focus-visible:ring-destructive/20 cuoio:dark:bg-destructive/20 cuoio:dark:focus-visible:ring-destructive/40 cuoio:[a]:hover:bg-destructive/20",
        outline:
          "cuoio:border-border cuoio:text-foreground cuoio:[a]:hover:bg-muted cuoio:[a]:hover:text-muted-foreground",
        ghost:
          "cuoio:hover:bg-muted cuoio:hover:text-muted-foreground cuoio:dark:hover:bg-muted/50",
        link: "cuoio:text-primary cuoio:underline-offset-4 cuoio:hover:underline",
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
