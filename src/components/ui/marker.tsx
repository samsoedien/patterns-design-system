import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const markerVariants = cva(
  "pttrn:group/marker pttrn:relative pttrn:flex pttrn:min-h-4 pttrn:w-full pttrn:items-center pttrn:gap-2 pttrn:text-start pttrn:text-xs/relaxed pttrn:text-muted-foreground pttrn:[&_svg:not([class*=size-])]:size-3.5 pttrn:[a]:underline pttrn:[a]:underline-offset-3 pttrn:[a]:hover:text-foreground",
  {
    variants: {
      variant: {
        default: "pttrn:",
        separator:
          "pttrn:before:me-1 pttrn:before:h-px pttrn:before:min-w-0 pttrn:before:flex-1 pttrn:before:bg-border pttrn:after:ms-1 pttrn:after:h-px pttrn:after:min-w-0 pttrn:after:flex-1 pttrn:after:bg-border",
        border: "pttrn:border-b pttrn:border-border pttrn:pb-2",
      },
    },
  }
)

function Marker({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"div"> & VariantProps<typeof markerVariants>) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(markerVariants({ variant, className })),
      },
      props
    ),
    render,
    state: {
      slot: "marker",
      variant,
    },
  })
}

function MarkerIcon({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="marker-icon"
      aria-hidden="true"
      className={cn(
        "pttrn:size-3.5 pttrn:shrink-0 pttrn:[&_svg:not([class*=size-])]:size-3.5",
        className
      )}
      {...props}
    />
  )
}

function MarkerContent({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="marker-content"
      className={cn(
        "pttrn:min-w-0 pttrn:wrap-break-word pttrn:group-data-[variant=separator]/marker:flex-none pttrn:group-data-[variant=separator]/marker:text-center pttrn:*:[a]:underline pttrn:*:[a]:underline-offset-3 pttrn:*:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Marker, MarkerIcon, MarkerContent, markerVariants }
