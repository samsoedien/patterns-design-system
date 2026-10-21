import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { Separator } from "@/components/ui/separator"

const buttonGroupVariants = cva(
  "cuoio:flex cuoio:w-fit cuoio:items-stretch cuoio:*:focus-visible:relative cuoio:*:focus-visible:z-10 cuoio:has-[>[data-slot=button-group]]:gap-2 cuoio:has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-e-md cuoio:[&>[data-slot=select-trigger]:not([class*=w-])]:w-fit cuoio:[&>input]:flex-1",
  {
    variants: {
      orientation: {
        horizontal:
          "cuoio:*:data-slot:rounded-e-none cuoio:[&>[data-slot]:not(:has(~[data-slot]))]:rounded-e-md! cuoio:[&>[data-slot]~[data-slot]]:rounded-s-none cuoio:[&>[data-slot]~[data-slot]]:border-s-0",
        vertical:
          "cuoio:flex-col cuoio:*:data-slot:rounded-b-none cuoio:[&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-md! cuoio:[&>[data-slot]~[data-slot]]:rounded-t-none cuoio:[&>[data-slot]~[data-slot]]:border-t-0",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

function ButtonGroup({
  className,
  orientation,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  )
}

function ButtonGroupText({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "flex items-center gap-2 rounded-md border bg-muted px-2.5 text-xs/relaxed font-medium [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "button-group-text",
    },
  })
}

function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        "cuoio:relative cuoio:self-stretch cuoio:bg-input cuoio:data-horizontal:mx-px cuoio:data-horizontal:w-auto cuoio:data-vertical:my-px cuoio:data-vertical:h-auto",
        className
      )}
      {...props}
    />
  )
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
}
