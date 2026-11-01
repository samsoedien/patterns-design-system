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
        className="cuoio:isolate cuoio:z-50"
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          className={cn(
            "cuoio:z-50 cuoio:inline-flex cuoio:w-fit cuoio:max-w-xs cuoio:origin-(--transform-origin) cuoio:items-center cuoio:gap-1.5 cuoio:rounded-md cuoio:bg-foreground cuoio:px-3 cuoio:py-1.5 cuoio:text-xs cuoio:text-background cuoio:has-data-[slot=kbd]:pe-1.5 cuoio:data-[side=bottom]:slide-in-from-top-2 cuoio:data-[side=inline-end]:slide-in-from-start-2 cuoio:data-[side=inline-start]:slide-in-from-end-2 cuoio:data-[side=left]:slide-in-from-right-2 cuoio:data-[side=right]:slide-in-from-left-2 cuoio:data-[side=top]:slide-in-from-bottom-2 cuoio:**:data-[slot=kbd]:relative cuoio:**:data-[slot=kbd]:isolate cuoio:**:data-[slot=kbd]:z-50 cuoio:**:data-[slot=kbd]:rounded-sm cuoio:data-[state=delayed-open]:animate-in cuoio:data-[state=delayed-open]:fade-in-0 cuoio:data-[state=delayed-open]:zoom-in-95 cuoio:data-open:animate-in cuoio:data-open:fade-in-0 cuoio:data-open:zoom-in-95 cuoio:data-closed:animate-out cuoio:data-closed:fade-out-0 cuoio:data-closed:zoom-out-95",
            className
          )}
          {...props}
        >
          {children}
          <TooltipPrimitive.Arrow className="cuoio:z-50 cuoio:size-2.5 cuoio:translate-y-[calc(-50%-2px)] cuoio:rotate-45 cuoio:rounded-[2px] cuoio:bg-foreground cuoio:fill-foreground cuoio:data-[side=bottom]:top-1 cuoio:data-[side=inline-end]:top-1/2! cuoio:data-[side=inline-end]:-start-1 cuoio:data-[side=inline-end]:-translate-y-1/2 cuoio:data-[side=inline-start]:top-1/2! cuoio:data-[side=inline-start]:-end-1 cuoio:data-[side=inline-start]:-translate-y-1/2 cuoio:data-[side=left]:top-1/2! cuoio:data-[side=left]:-right-1 cuoio:data-[side=left]:-translate-y-1/2 cuoio:data-[side=right]:top-1/2! cuoio:data-[side=right]:-left-1 cuoio:data-[side=right]:-translate-y-1/2 cuoio:data-[side=top]:-bottom-2.5" />
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
