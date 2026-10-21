import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const markerVariants = cva(
  "cuoio:group/marker cuoio:relative cuoio:flex cuoio:min-h-4 cuoio:w-full cuoio:items-center cuoio:gap-2 cuoio:text-start cuoio:text-xs/relaxed cuoio:text-muted-foreground cuoio:[&_svg:not([class*=size-])]:size-3.5 cuoio:[a]:underline cuoio:[a]:underline-offset-3 cuoio:[a]:hover:text-foreground",
  {
    variants: {
      variant: {
        default: "cuoio:",
        separator:
          "cuoio:before:me-1 cuoio:before:h-px cuoio:before:min-w-0 cuoio:before:flex-1 cuoio:before:bg-border cuoio:after:ms-1 cuoio:after:h-px cuoio:after:min-w-0 cuoio:after:flex-1 cuoio:after:bg-border",
        border: "cuoio:border-b cuoio:border-border cuoio:pb-2",
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
        "cuoio:size-3.5 cuoio:shrink-0 cuoio:[&_svg:not([class*=size-])]:size-3.5",
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
        "cuoio:min-w-0 cuoio:wrap-break-word cuoio:group-data-[variant=separator]/marker:flex-none cuoio:group-data-[variant=separator]/marker:text-center cuoio:*:[a]:underline cuoio:*:[a]:underline-offset-3 cuoio:*:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Marker, MarkerIcon, MarkerContent, markerVariants }
