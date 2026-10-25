"use client"

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card"
import { cn } from "cn"

function HoverCard({ ...props }: PreviewCardPrimitive.Root.Props) {
  return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger({ ...props }: PreviewCardPrimitive.Trigger.Props) {
  return (
    <PreviewCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  )
}

function HoverCardContent({
  className,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 4,
  ...props
}: PreviewCardPrimitive.Popup.Props &
  Pick<
    PreviewCardPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <PreviewCardPrimitive.Portal data-slot="hover-card-portal">
      <PreviewCardPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="cuoio:isolate cuoio:z-50"
      >
        <PreviewCardPrimitive.Popup
          data-slot="hover-card-content"
          className={cn(
            "cuoio:z-50 cuoio:w-64 cuoio:origin-(--transform-origin) cuoio:rounded-lg cuoio:bg-popover cuoio:p-2.5 cuoio:text-sm cuoio:text-popover-foreground cuoio:shadow-md cuoio:ring-1 cuoio:ring-foreground/10 cuoio:outline-hidden cuoio:duration-100 cuoio:data-[side=bottom]:slide-in-from-top-2 cuoio:data-[side=inline-end]:slide-in-from-start-2 cuoio:data-[side=inline-start]:slide-in-from-end-2 cuoio:data-[side=left]:slide-in-from-right-2 cuoio:data-[side=right]:slide-in-from-left-2 cuoio:data-[side=top]:slide-in-from-bottom-2 cuoio:data-open:animate-in cuoio:data-open:fade-in-0 cuoio:data-open:zoom-in-95 cuoio:data-closed:animate-out cuoio:data-closed:fade-out-0 cuoio:data-closed:zoom-out-95",
            className
          )}
          {...props}
        />
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
