import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { Separator } from "@/components/ui/separator"

const buttonGroupVariants = cva(
  "pttrn:flex pttrn:w-fit pttrn:items-stretch pttrn:*:focus-visible:relative pttrn:*:focus-visible:z-10 pttrn:has-[>[data-slot=button-group]]:gap-2 pttrn:has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-e-md pttrn:[&>[data-slot=select-trigger]:not([class*=w-])]:w-fit pttrn:[&>input]:flex-1",
  {
    variants: {
      orientation: {
        horizontal:
          "pttrn:*:data-slot:rounded-e-none pttrn:[&>[data-slot]:not(:has(~[data-slot]))]:rounded-e-md! pttrn:[&>[data-slot]~[data-slot]]:rounded-s-none pttrn:[&>[data-slot]~[data-slot]]:border-s-0",
        vertical:
          "pttrn:flex-col pttrn:*:data-slot:rounded-b-none pttrn:[&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-md! pttrn:[&>[data-slot]~[data-slot]]:rounded-t-none pttrn:[&>[data-slot]~[data-slot]]:border-t-0",
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
        "pttrn:relative pttrn:self-stretch pttrn:bg-input pttrn:data-horizontal:mx-px pttrn:data-horizontal:w-auto pttrn:data-vertical:my-px pttrn:data-vertical:h-auto",
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
