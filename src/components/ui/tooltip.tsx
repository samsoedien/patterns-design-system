"use client"

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip"
import { cn } from "cn"

function TooltipProvider({
  delay = 0,
  ...props
}: TooltipPrimitive.Provider.Props) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delay={delay}
      {...props}
    />
  )
}

function Tooltip({ ...props }: TooltipPrimitive.Root.Props) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipTrigger({ ...props }: TooltipPrimitive.Trigger.Props) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  side = "top",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  children,
  ...props
}: TooltipPrimitive.Popup.Props &
  Pick<
    TooltipPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="pttrn:isolate pttrn:z-50"
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          className={cn(
            "pttrn:z-50 pttrn:inline-flex pttrn:w-fit pttrn:max-w-xs pttrn:origin-(--transform-origin) pttrn:items-center pttrn:gap-1.5 pttrn:rounded-md pttrn:bg-foreground pttrn:px-3 pttrn:py-1.5 pttrn:text-xs pttrn:text-background pttrn:has-data-[slot=kbd]:pe-1.5 pttrn:data-[side=bottom]:slide-in-from-top-2 pttrn:data-[side=inline-end]:slide-in-from-start-2 pttrn:data-[side=inline-start]:slide-in-from-end-2 pttrn:data-[side=left]:slide-in-from-right-2 pttrn:data-[side=right]:slide-in-from-left-2 pttrn:data-[side=top]:slide-in-from-bottom-2 pttrn:**:data-[slot=kbd]:relative pttrn:**:data-[slot=kbd]:isolate pttrn:**:data-[slot=kbd]:z-50 pttrn:**:data-[slot=kbd]:rounded-sm pttrn:data-[state=delayed-open]:animate-in pttrn:data-[state=delayed-open]:fade-in-0 pttrn:data-[state=delayed-open]:zoom-in-95 pttrn:data-open:animate-in pttrn:data-open:fade-in-0 pttrn:data-open:zoom-in-95 pttrn:data-closed:animate-out pttrn:data-closed:fade-out-0 pttrn:data-closed:zoom-out-95",
            className
          )}
          {...props}
        >
          {children}
          <TooltipPrimitive.Arrow className="pttrn:z-50 pttrn:size-2.5 pttrn:translate-y-[calc(-50%-2px)] pttrn:rotate-45 pttrn:rounded-[2px] pttrn:bg-foreground pttrn:fill-foreground pttrn:data-[side=bottom]:top-1 pttrn:data-[side=inline-end]:top-1/2! pttrn:data-[side=inline-end]:-start-1 pttrn:data-[side=inline-end]:-translate-y-1/2 pttrn:data-[side=inline-start]:top-1/2! pttrn:data-[side=inline-start]:-end-1 pttrn:data-[side=inline-start]:-translate-y-1/2 pttrn:data-[side=left]:top-1/2! pttrn:data-[side=left]:-right-1 pttrn:data-[side=left]:-translate-y-1/2 pttrn:data-[side=right]:top-1/2! pttrn:data-[side=right]:-left-1 pttrn:data-[side=right]:-translate-y-1/2 pttrn:data-[side=top]:-bottom-2.5" />
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
