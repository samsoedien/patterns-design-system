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
        className="pttrn:isolate pttrn:z-50"
      >
        <PreviewCardPrimitive.Popup
          data-slot="hover-card-content"
          className={cn(
            "pttrn:z-50 pttrn:w-72 pttrn:origin-(--transform-origin) pttrn:rounded-lg pttrn:bg-popover pttrn:p-2.5 pttrn:text-xs/relaxed pttrn:text-popover-foreground pttrn:shadow-md pttrn:ring-1 pttrn:ring-foreground/10 pttrn:outline-hidden pttrn:duration-100 pttrn:data-[side=bottom]:slide-in-from-top-2 pttrn:data-[side=inline-end]:slide-in-from-start-2 pttrn:data-[side=inline-start]:slide-in-from-end-2 pttrn:data-[side=left]:slide-in-from-right-2 pttrn:data-[side=right]:slide-in-from-left-2 pttrn:data-[side=top]:slide-in-from-bottom-2 pttrn:data-open:animate-in pttrn:data-open:fade-in-0 pttrn:data-open:zoom-in-95 pttrn:data-closed:animate-out pttrn:data-closed:fade-out-0 pttrn:data-closed:zoom-out-95",
            className
          )}
          {...props}
        />
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
