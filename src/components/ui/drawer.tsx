"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer"
import { cn } from "cn"

type DrawerContextProps = {
  hasSnapPoints: boolean
  modal: DrawerPrimitive.Root.Props["modal"]
  showSwipeHandle: boolean
  swipeDirection: NonNullable<DrawerPrimitive.Root.Props["swipeDirection"]>
}

const DrawerContext = React.createContext<DrawerContextProps | null>(null)

function useDrawer() {
  const context = React.useContext(DrawerContext)

  if (!context) {
    throw new Error("useDrawer must be used within a Drawer.")
  }

  return context
}

function Drawer({
  modal = true,
  showSwipeHandle = false,
  snapPoints,
  swipeDirection = "down",
  ...props
}: DrawerPrimitive.Root.Props & {
  showSwipeHandle?: boolean
}) {
  const hasSnapPoints = snapPoints != null && snapPoints.length > 0
  const contextValue = React.useMemo(
    () => ({ hasSnapPoints, modal, showSwipeHandle, swipeDirection }),
    [hasSnapPoints, modal, showSwipeHandle, swipeDirection]
  )

  return (
    <DrawerContext.Provider value={contextValue}>
      <DrawerPrimitive.Root
        data-slot="drawer"
        modal={modal}
        snapPoints={snapPoints}
        swipeDirection={swipeDirection}
        {...props}
      />
    </DrawerContext.Provider>
  )
}

function DrawerTrigger({ ...props }: DrawerPrimitive.Trigger.Props) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({ ...props }: DrawerPrimitive.Portal.Props) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({ ...props }: DrawerPrimitive.Close.Props) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: DrawerPrimitive.Backdrop.Props) {
  return (
    <DrawerPrimitive.Backdrop
      data-slot="drawer-overlay"
      className={cn(
        "pttrn:fixed pttrn:inset-0 pttrn:z-50 pttrn:min-h-dvh pttrn:bg-black/80 pttrn:opacity-[max(var(--drawer-overlay-min-opacity,0),calc(1-var(--drawer-swipe-progress)))] pttrn:transition-opacity pttrn:duration-450 pttrn:ease-[cubic-bezier(0.32,0.72,0,1)] pttrn:select-none pttrn:data-ending-style:pointer-events-none pttrn:data-ending-style:opacity-0 pttrn:data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] pttrn:data-snap-points:[--drawer-overlay-min-opacity:0.5] pttrn:data-starting-style:opacity-0 pttrn:data-swiping:duration-0 pttrn:supports-backdrop-filter:backdrop-blur-xs pttrn:supports-[-webkit-touch-callout:none]:absolute",
        className
      )}
      {...props}
    />
  )
}

function DrawerSwipeHandle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-swipe-handle"
      aria-hidden="true"
      className={cn(
        "pttrn:relative pttrn:z-10 pttrn:flex pttrn:shrink-0 pttrn:cursor-grab pttrn:transition-opacity pttrn:duration-200 pttrn:group-data-nested-drawer-open/drawer-popup:opacity-0 pttrn:group-data-nested-drawer-swiping/drawer-popup:opacity-100 pttrn:group-data-[swipe-axis=x]/drawer-popup:h-full pttrn:group-data-[swipe-axis=x]/drawer-popup:w-3 pttrn:group-data-[swipe-axis=x]/drawer-popup:items-center pttrn:group-data-[swipe-axis=y]/drawer-popup:h-3 pttrn:group-data-[swipe-axis=y]/drawer-popup:w-full pttrn:group-data-[swipe-axis=y]/drawer-popup:justify-center pttrn:group-data-[swipe-direction=down]/drawer-popup:items-end pttrn:group-data-[swipe-direction=left]/drawer-popup:order-last pttrn:group-data-[swipe-direction=left]/drawer-popup:justify-start pttrn:group-data-[swipe-direction=right]/drawer-popup:justify-end pttrn:group-data-[swipe-direction=up]/drawer-popup:order-last pttrn:group-data-[swipe-direction=up]/drawer-popup:items-start pttrn:after:block pttrn:after:shrink-0 pttrn:after:rounded-full pttrn:after:bg-muted pttrn:group-data-[swipe-axis=x]/drawer-popup:after:h-12 pttrn:group-data-[swipe-axis=x]/drawer-popup:after:w-1 pttrn:group-data-[swipe-axis=y]/drawer-popup:after:h-1 pttrn:group-data-[swipe-axis=y]/drawer-popup:after:w-12 pttrn:active:cursor-grabbing",
        className
      )}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: DrawerPrimitive.Popup.Props) {
  const { hasSnapPoints, modal, showSwipeHandle, swipeDirection } = useDrawer()
  const swipeAxis =
    swipeDirection === "down" || swipeDirection === "up" ? "y" : "x"

  return (
    <DrawerPortal data-slot="drawer-portal">
      {modal === true && (
        <DrawerOverlay data-snap-points={hasSnapPoints ? "" : undefined} />
      )}
      <DrawerPrimitive.Viewport
        data-slot="drawer-viewport"
        data-modal={modal}
        className="pttrn:pointer-events-none pttrn:fixed pttrn:inset-0 pttrn:z-50 pttrn:select-none pttrn:data-[modal=true]:pointer-events-auto"
      >
        <DrawerPrimitive.Popup
          data-slot="drawer-popup"
          data-swipe-axis={swipeAxis}
          data-snap-points={hasSnapPoints ? "" : undefined}
          className={cn(
            // Base.
            "pttrn:group/drawer-popup pttrn:pointer-events-auto pttrn:fixed pttrn:z-50 pttrn:m-(--drawer-inset,0px) pttrn:flex pttrn:h-(--drawer-content-height) pttrn:max-h-(--drawer-content-max-height,none) pttrn:min-h-0 pttrn:w-(--drawer-content-width,auto) pttrn:transform-[translate3d(var(--translate-x,0px),var(--translate-y,0px),0)_scale(var(--stack-scale))] pttrn:flex-col pttrn:rounded-xl pttrn:border pttrn:border-popover pttrn:bg-popover pttrn:text-xs/relaxed pttrn:text-popover-foreground pttrn:transition-[transform,height,opacity,filter] pttrn:duration-450 pttrn:ease-[cubic-bezier(0.22,1,0.36,1)] pttrn:will-change-transform pttrn:outline-none pttrn:select-none pttrn:[--drawer-bleed-background:transparent] pttrn:[--drawer-inset:--spacing(2)] pttrn:[interpolate-size:allow-keywords] pttrn:dark:border-border",
            // Nested.
            "pttrn:data-nested-drawer-open:overflow-hidden pttrn:data-nested-drawer-open:brightness-95",
            // Bleed.
            "pttrn:after:pointer-events-none pttrn:after:absolute pttrn:after:bg-(--drawer-bleed-background,var(--color-popover)) pttrn:data-[swipe-axis=x]:after:inset-y-0 pttrn:data-[swipe-axis=x]:after:w-(--bleed) pttrn:data-[swipe-axis=y]:after:inset-x-0 pttrn:data-[swipe-axis=y]:after:h-(--bleed) pttrn:data-[swipe-direction=down]:after:top-full pttrn:data-[swipe-direction=left]:after:end-full pttrn:data-[swipe-direction=right]:after:start-full pttrn:data-[swipe-direction=up]:after:bottom-full",
            // Sizing.
            "pttrn:[--drawer-content-height:var(--drawer-height,auto)] pttrn:data-[swipe-axis=x]:[--drawer-content-width:75%] pttrn:data-[swipe-axis=y]:[--drawer-content-max-height:calc(100dvh-6rem)] pttrn:data-[swipe-axis=y]:data-snap-points:[--drawer-content-height:100dvh] pttrn:data-[swipe-axis=x]:sm:[--drawer-content-width:24rem]",
            // Stack.
            "pttrn:[--bleed:3rem] pttrn:[--peek:1rem] pttrn:[--stack-height:var(--drawer-frontmost-height,var(--drawer-height,0px))] pttrn:[--stack-peek-offset:max(0px,calc((var(--nested-drawers)-var(--stack-progress))*var(--peek)))] pttrn:[--stack-progress:clamp(0,var(--drawer-swipe-progress),1)] pttrn:[--stack-scale-base:max(0,calc(1-(var(--nested-drawers)*var(--stack-step))))] pttrn:[--stack-scale:clamp(0,calc(var(--stack-scale-base)+(var(--stack-step)*var(--stack-progress))),1)] pttrn:[--stack-shrink:calc(1-var(--stack-scale))] pttrn:[--stack-step:0.05]",
            // Transitions.
            "pttrn:data-ending-style:transform-(--closed-transform) pttrn:data-ending-style:opacity-[0.9999] pttrn:data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] pttrn:data-nested-drawer-swiping:duration-0 pttrn:data-ending-style:data-nested-drawer-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)] pttrn:data-starting-style:transform-(--closed-transform) pttrn:data-swiping:duration-0 pttrn:data-ending-style:data-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)]",
            // Axis: y.
            "pttrn:data-[swipe-axis=y]:inset-x-0 pttrn:data-[swipe-axis=y]:data-nested-drawer-open:h-(--stack-height)",
            // Axis: x.
            "pttrn:data-[swipe-axis=x]:inset-y-0 pttrn:data-[swipe-axis=x]:flex-row",
            // Direction: down.
            "pttrn:data-[swipe-direction=down]:bottom-0 pttrn:data-[swipe-direction=down]:origin-bottom pttrn:data-[swipe-direction=down]:[--closed-transform:translate3d(0,calc(100%+var(--drawer-inset,0px)+2px),0)] pttrn:data-[swipe-direction=down]:[--translate-y:calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)-var(--stack-peek-offset)-(var(--stack-shrink)*var(--stack-height)))]",
            // Direction: up.
            "pttrn:data-[swipe-direction=up]:top-0 pttrn:data-[swipe-direction=up]:origin-top pttrn:data-[swipe-direction=up]:[--closed-transform:translate3d(0,calc(-100%-var(--drawer-inset,0px)-2px),0)] pttrn:data-[swipe-direction=up]:[--translate-y:calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)+var(--stack-peek-offset)+(var(--stack-shrink)*var(--stack-height)))]",
            // Direction: left.
            "pttrn:data-[swipe-direction=left]:start-0 pttrn:data-[swipe-direction=left]:origin-start pttrn:data-[swipe-direction=left]:[--closed-transform:translate3d(calc(-100%-var(--drawer-inset,0px)-2px),0,0)] pttrn:data-[swipe-direction=left]:[--translate-x:calc(var(--drawer-swipe-movement-x)+var(--stack-peek-offset)+(var(--stack-shrink)*100%))]",
            // Direction: right.
            "pttrn:data-[swipe-direction=right]:end-0 pttrn:data-[swipe-direction=right]:origin-end pttrn:data-[swipe-direction=right]:[--closed-transform:translate3d(calc(100%+var(--drawer-inset,0px)+2px),0,0)] pttrn:data-[swipe-direction=right]:[--translate-x:calc(var(--drawer-swipe-movement-x)-var(--stack-peek-offset)-(var(--stack-shrink)*100%))]",
            className
          )}
          {...props}
        >
          {showSwipeHandle && <DrawerSwipeHandle />}
          <DrawerPrimitive.Content
            data-slot="drawer-content"
            className={cn(
              "pttrn:flex pttrn:min-h-0 pttrn:flex-1 pttrn:flex-col pttrn:overflow-hidden pttrn:overscroll-contain pttrn:rounded-[inherit] pttrn:transition-opacity pttrn:duration-300 pttrn:ease-[cubic-bezier(0.45,1.005,0,1.005)] pttrn:select-text pttrn:group-data-nested-drawer-open/drawer-popup:opacity-0 pttrn:group-data-nested-drawer-swiping/drawer-popup:opacity-100 pttrn:group-data-swiping/drawer-popup:select-none"
            )}
          >
            {children}
          </DrawerPrimitive.Content>
        </DrawerPrimitive.Popup>
      </DrawerPrimitive.Viewport>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "pttrn:flex pttrn:shrink-0 pttrn:flex-col pttrn:gap-1 pttrn:p-4 pttrn:pb-0 pttrn:group-data-[swipe-axis=y]/drawer-popup:text-center pttrn:md:text-start",
        className
      )}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("pttrn:mt-auto pttrn:flex pttrn:shrink-0 pttrn:flex-col pttrn:gap-2 pttrn:p-4 pttrn:pt-0", className)}
      {...props}
    />
  )
}

function DrawerTitle({ className, ...props }: DrawerPrimitive.Title.Props) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn(
        "pttrn:font-heading pttrn:text-sm pttrn:font-medium pttrn:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: DrawerPrimitive.Description.Props) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn(
        "pttrn:text-xs/relaxed pttrn:text-balance pttrn:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerSwipeHandle,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
