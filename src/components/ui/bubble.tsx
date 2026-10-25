import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

function BubbleGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="bubble-group"
      className={cn("cuoio:flex cuoio:min-w-0 cuoio:flex-col cuoio:gap-2", className)}
      {...props}
    />
  )
}

const bubbleVariants = cva(
  "cuoio:group/bubble cuoio:relative cuoio:flex cuoio:w-fit cuoio:max-w-[80%] cuoio:min-w-0 cuoio:flex-col cuoio:gap-1 cuoio:group-data-[align=end]/message:self-end cuoio:data-[align=end]:self-end cuoio:data-[variant=ghost]:max-w-full",
  {
    variants: {
      variant: {
        default:
          "cuoio:*:data-[slot=bubble-content]:bg-primary cuoio:*:data-[slot=bubble-content]:text-primary-foreground cuoio:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-primary/80",
        secondary:
          "cuoio:*:data-[slot=bubble-content]:bg-secondary cuoio:*:data-[slot=bubble-content]:text-secondary-foreground cuoio:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]",
        muted:
          "cuoio:*:data-[slot=bubble-content]:bg-muted cuoio:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--muted),var(--foreground)_5%)]",
        tinted:
          "cuoio:*:data-[slot=bubble-content]:bg-[oklch(from_var(--primary)_0.93_calc(c*0.4)_h)] cuoio:*:data-[slot=bubble-content]:text-foreground cuoio:dark:*:data-[slot=bubble-content]:bg-[oklch(from_var(--primary)_0.3_calc(c*0.4)_h)] cuoio:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[oklch(from_var(--primary)_0.88_calc(c*0.5)_h)] cuoio:dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[oklch(from_var(--primary)_0.35_calc(c*0.5)_h)]",
        outline:
          "cuoio:*:data-[slot=bubble-content]:border-border cuoio:*:data-[slot=bubble-content]:bg-background cuoio:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-muted cuoio:[&>[data-slot=bubble-content]:is(button,a):hover]:text-foreground cuoio:dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-input/30",
        ghost:
          "cuoio:border-none cuoio:*:data-[slot=bubble-content]:rounded-none cuoio:*:data-[slot=bubble-content]:bg-transparent cuoio:*:data-[slot=bubble-content]:p-0 cuoio:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-muted cuoio:[&>[data-slot=bubble-content]:is(button,a):hover]:text-foreground cuoio:dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-muted/50",
        destructive:
          "cuoio:*:data-[slot=bubble-content]:bg-destructive/10 cuoio:*:data-[slot=bubble-content]:text-destructive cuoio:dark:*:data-[slot=bubble-content]:bg-destructive/20 cuoio:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-destructive/20 cuoio:dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-destructive/30",
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
          "w-fit max-w-full min-w-0 overflow-hidden rounded-xl border border-transparent px-3 py-2 text-sm leading-relaxed wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-start [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-ring [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-ring/50",
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
  "cuoio:absolute cuoio:z-10 cuoio:flex cuoio:w-fit cuoio:shrink-0 cuoio:items-center cuoio:justify-center cuoio:gap-1 cuoio:rounded-full cuoio:bg-muted cuoio:px-1.5 cuoio:py-0.5 cuoio:text-sm cuoio:ring-3 cuoio:ring-card cuoio:has-[button]:p-0",
  {
    variants: {
      side: {
        top: "cuoio:top-0 cuoio:-translate-y-3/4",
        bottom: "cuoio:bottom-0 cuoio:translate-y-3/4",
      },
      align: {
        start: "cuoio:start-3",
        end: "cuoio:end-3",
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
