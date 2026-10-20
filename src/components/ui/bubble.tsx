import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

function BubbleGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="bubble-group"
      className={cn("pttrn:flex pttrn:min-w-0 pttrn:flex-col pttrn:gap-2", className)}
      {...props}
    />
  )
}

const bubbleVariants = cva(
  "pttrn:group/bubble pttrn:relative pttrn:flex pttrn:w-fit pttrn:max-w-[80%] pttrn:min-w-0 pttrn:flex-col pttrn:gap-1 pttrn:group-data-[align=end]/message:self-end pttrn:data-[align=end]:self-end pttrn:data-[variant=ghost]:max-w-full",
  {
    variants: {
      variant: {
        default:
          "pttrn:*:data-[slot=bubble-content]:bg-primary pttrn:*:data-[slot=bubble-content]:text-primary-foreground pttrn:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-primary/80",
        secondary:
          "pttrn:*:data-[slot=bubble-content]:bg-secondary pttrn:*:data-[slot=bubble-content]:text-secondary-foreground pttrn:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]",
        muted:
          "pttrn:*:data-[slot=bubble-content]:bg-muted pttrn:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--muted),var(--foreground)_5%)]",
        tinted:
          "pttrn:*:data-[slot=bubble-content]:bg-[oklch(from_var(--primary)_0.93_calc(c*0.4)_h)] pttrn:*:data-[slot=bubble-content]:text-foreground pttrn:dark:*:data-[slot=bubble-content]:bg-[oklch(from_var(--primary)_0.3_calc(c*0.4)_h)] pttrn:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[oklch(from_var(--primary)_0.88_calc(c*0.5)_h)] pttrn:dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[oklch(from_var(--primary)_0.35_calc(c*0.5)_h)]",
        outline:
          "pttrn:*:data-[slot=bubble-content]:border-border pttrn:*:data-[slot=bubble-content]:bg-background pttrn:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-muted pttrn:[&>[data-slot=bubble-content]:is(button,a):hover]:text-foreground pttrn:dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-input/30",
        ghost:
          "pttrn:border-none pttrn:*:data-[slot=bubble-content]:rounded-none pttrn:*:data-[slot=bubble-content]:bg-transparent pttrn:*:data-[slot=bubble-content]:p-0 pttrn:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-muted pttrn:[&>[data-slot=bubble-content]:is(button,a):hover]:text-foreground pttrn:dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-muted/50",
        destructive:
          "pttrn:*:data-[slot=bubble-content]:bg-destructive/10 pttrn:*:data-[slot=bubble-content]:text-destructive pttrn:dark:*:data-[slot=bubble-content]:bg-destructive/20 pttrn:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-destructive/20 pttrn:dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-destructive/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Bubble({
  variant = "default",
  align = "start",
  className,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof bubbleVariants> & {
    align?: "start" | "end"
  }) {
  return (
    <div
      data-slot="bubble"
      data-variant={variant}
      data-align={align}
      className={cn(bubbleVariants({ variant }), className)}
      {...props}
    />
  )
}

function BubbleContent({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "w-fit max-w-full min-w-0 overflow-hidden rounded-lg border border-transparent px-2.5 py-1.5 text-xs/relaxed wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-start [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-ring [button,a]:focus-visible:ring-2 [button,a]:focus-visible:ring-ring/30",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "bubble-content",
    },
  })
}

const bubbleReactionsVariants = cva(
  "pttrn:absolute pttrn:z-10 pttrn:flex pttrn:w-fit pttrn:shrink-0 pttrn:items-center pttrn:justify-center pttrn:gap-1 pttrn:rounded-full pttrn:bg-muted pttrn:px-1.5 pttrn:py-0.5 pttrn:text-xs pttrn:ring-2 pttrn:ring-card pttrn:has-[button]:p-0",
  {
    variants: {
      side: {
        top: "pttrn:top-0 pttrn:-translate-y-3/4",
        bottom: "pttrn:bottom-0 pttrn:translate-y-3/4",
      },
      align: {
        start: "pttrn:start-3",
        end: "pttrn:end-3",
      },
    },
    defaultVariants: {
      side: "bottom",
      align: "end",
    },
  }
)

function BubbleReactions({
  side = "bottom",
  align = "end",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "start" | "end"
  side?: "top" | "bottom"
}) {
  return (
    <div
      data-slot="bubble-reactions"
      data-align={align}
      data-side={side}
      className={cn(bubbleReactionsVariants({ side, align }), className)}
      {...props}
    />
  )
}

export { BubbleGroup, Bubble, BubbleContent, BubbleReactions }
