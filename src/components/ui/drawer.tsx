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
        "cuoio:fixed cuoio:inset-0 cuoio:z-50 cuoio:min-h-dvh cuoio:bg-black/80 cuoio:opacity-[max(var(--drawer-overlay-min-opacity,0),calc(1-var(--drawer-swipe-progress)))] cuoio:transition-opacity cuoio:duration-450 cuoio:ease-[cubic-bezier(0.32,0.72,0,1)] cuoio:select-none cuoio:data-ending-style:pointer-events-none cuoio:data-ending-style:opacity-0 cuoio:data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] cuoio:data-snap-points:[--drawer-overlay-min-opacity:0.5] cuoio:data-starting-style:opacity-0 cuoio:data-swiping:duration-0 cuoio:supports-backdrop-filter:backdrop-blur-xs cuoio:supports-[-webkit-touch-callout:none]:absolute",
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
        "cuoio:relative cuoio:z-10 cuoio:flex cuoio:shrink-0 cuoio:cursor-grab cuoio:transition-opacity cuoio:duration-200 cuoio:group-data-nested-drawer-open/drawer-popup:opacity-0 cuoio:group-data-nested-drawer-swiping/drawer-popup:opacity-100 cuoio:group-data-[swipe-axis=x]/drawer-popup:h-full cuoio:group-data-[swipe-axis=x]/drawer-popup:w-3 cuoio:group-data-[swipe-axis=x]/drawer-popup:items-center cuoio:group-data-[swipe-axis=y]/drawer-popup:h-3 cuoio:group-data-[swipe-axis=y]/drawer-popup:w-full cuoio:group-data-[swipe-axis=y]/drawer-popup:justify-center cuoio:group-data-[swipe-direction=down]/drawer-popup:items-end cuoio:group-data-[swipe-direction=left]/drawer-popup:order-last cuoio:group-data-[swipe-direction=left]/drawer-popup:justify-start cuoio:group-data-[swipe-direction=right]/drawer-popup:justify-end cuoio:group-data-[swipe-direction=up]/drawer-popup:order-last cuoio:group-data-[swipe-direction=up]/drawer-popup:items-start cuoio:after:block cuoio:after:shrink-0 cuoio:after:rounded-full cuoio:after:bg-muted cuoio:group-data-[swipe-axis=x]/drawer-popup:after:h-12 cuoio:group-data-[swipe-axis=x]/drawer-popup:after:w-1 cuoio:group-data-[swipe-axis=y]/drawer-popup:after:h-1 cuoio:group-data-[swipe-axis=y]/drawer-popup:after:w-12 cuoio:active:cursor-grabbing",
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
        className="cuoio:pointer-events-none cuoio:fixed cuoio:inset-0 cuoio:z-50 cuoio:select-none cuoio:data-[modal=true]:pointer-events-auto"
      >
        <DrawerPrimitive.Popup
          data-slot="drawer-popup"
          data-swipe-axis={swipeAxis}
          data-snap-points={hasSnapPoints ? "" : undefined}
          className={cn(
            // Base.
            "cuoio:group/drawer-popup cuoio:pointer-events-auto cuoio:fixed cuoio:z-50 cuoio:m-(--drawer-inset,0px) cuoio:flex cuoio:h-(--drawer-content-height) cuoio:max-h-(--drawer-content-max-height,none) cuoio:min-h-0 cuoio:w-(--drawer-content-width,auto) cuoio:transform-[translate3d(var(--translate-x,0px),var(--translate-y,0px),0)_scale(var(--stack-scale))] cuoio:flex-col cuoio:rounded-xl cuoio:border cuoio:border-popover cuoio:bg-popover cuoio:text-xs/relaxed cuoio:text-popover-foreground cuoio:transition-[transform,height,opacity,filter] cuoio:duration-450 cuoio:ease-[cubic-bezier(0.22,1,0.36,1)] cuoio:will-change-transform cuoio:outline-none cuoio:select-none cuoio:[--drawer-bleed-background:transparent] cuoio:[--drawer-inset:--spacing(2)] cuoio:[interpolate-size:allow-keywords] cuoio:dark:border-border",
            // Nested.
            "cuoio:data-nested-drawer-open:overflow-hidden cuoio:data-nested-drawer-open:brightness-95",
            // Bleed.
            "cuoio:after:pointer-events-none cuoio:after:absolute cuoio:after:bg-(--drawer-bleed-background,var(--color-popover)) cuoio:data-[swipe-axis=x]:after:inset-y-0 cuoio:data-[swipe-axis=x]:after:w-(--bleed) cuoio:data-[swipe-axis=y]:after:inset-x-0 cuoio:data-[swipe-axis=y]:after:h-(--bleed) cuoio:data-[swipe-direction=down]:after:top-full cuoio:data-[swipe-direction=left]:after:end-full cuoio:data-[swipe-direction=right]:after:start-full cuoio:data-[swipe-direction=up]:after:bottom-full",
            // Sizing.
            "cuoio:[--drawer-content-height:var(--drawer-height,auto)] cuoio:data-[swipe-axis=x]:[--drawer-content-width:75%] cuoio:data-[swipe-axis=y]:[--drawer-content-max-height:calc(100dvh-6rem)] cuoio:data-[swipe-axis=y]:data-snap-points:[--drawer-content-height:100dvh] cuoio:data-[swipe-axis=x]:sm:[--drawer-content-width:24rem]",
            // Stack.
            "cuoio:[--bleed:3rem] cuoio:[--peek:1rem] cuoio:[--stack-height:var(--drawer-frontmost-height,var(--drawer-height,0px))] cuoio:[--stack-peek-offset:max(0px,calc((var(--nested-drawers)-var(--stack-progress))*var(--peek)))] cuoio:[--stack-progress:clamp(0,var(--drawer-swipe-progress),1)] cuoio:[--stack-scale-base:max(0,calc(1-(var(--nested-drawers)*var(--stack-step))))] cuoio:[--stack-scale:clamp(0,calc(var(--stack-scale-base)+(var(--stack-step)*var(--stack-progress))),1)] cuoio:[--stack-shrink:calc(1-var(--stack-scale))] cuoio:[--stack-step:0.05]",
            // Transitions.
            "cuoio:data-ending-style:transform-(--closed-transform) cuoio:data-ending-style:opacity-[0.9999] cuoio:data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] cuoio:data-nested-drawer-swiping:duration-0 cuoio:data-ending-style:data-nested-drawer-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)] cuoio:data-starting-style:transform-(--closed-transform) cuoio:data-swiping:duration-0 cuoio:data-ending-style:data-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)]",
            // Axis: y.
            "cuoio:data-[swipe-axis=y]:inset-x-0 cuoio:data-[swipe-axis=y]:data-nested-drawer-open:h-(--stack-height)",
            // Axis: x.
            "cuoio:data-[swipe-axis=x]:inset-y-0 cuoio:data-[swipe-axis=x]:flex-row",
            // Direction: down.
            "cuoio:data-[swipe-direction=down]:bottom-0 cuoio:data-[swipe-direction=down]:origin-bottom cuoio:data-[swipe-direction=down]:[--closed-transform:translate3d(0,calc(100%+var(--drawer-inset,0px)+2px),0)] cuoio:data-[swipe-direction=down]:[--translate-y:calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)-var(--stack-peek-offset)-(var(--stack-shrink)*var(--stack-height)))]",
            // Direction: up.
            "cuoio:data-[swipe-direction=up]:top-0 cuoio:data-[swipe-direction=up]:origin-top cuoio:data-[swipe-direction=up]:[--closed-transform:translate3d(0,calc(-100%-var(--drawer-inset,0px)-2px),0)] cuoio:data-[swipe-direction=up]:[--translate-y:calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)+var(--stack-peek-offset)+(var(--stack-shrink)*var(--stack-height)))]",
            // Direction: left.
            "cuoio:data-[swipe-direction=left]:start-0 cuoio:data-[swipe-direction=left]:origin-start cuoio:data-[swipe-direction=left]:[--closed-transform:translate3d(calc(-100%-var(--drawer-inset,0px)-2px),0,0)] cuoio:data-[swipe-direction=left]:[--translate-x:calc(var(--drawer-swipe-movement-x)+var(--stack-peek-offset)+(var(--stack-shrink)*100%))]",
            // Direction: right.
            "cuoio:data-[swipe-direction=right]:end-0 cuoio:data-[swipe-direction=right]:origin-end cuoio:data-[swipe-direction=right]:[--closed-transform:translate3d(calc(100%+var(--drawer-inset,0px)+2px),0,0)] cuoio:data-[swipe-direction=right]:[--translate-x:calc(var(--drawer-swipe-movement-x)-var(--stack-peek-offset)-(var(--stack-shrink)*100%))]",
            className
          )}
          {...props}
        >
          {showSwipeHandle && <DrawerSwipeHandle />}
          <DrawerPrimitive.Content
            data-slot="drawer-content"
            className={cn(
              "cuoio:flex cuoio:min-h-0 cuoio:flex-1 cuoio:flex-col cuoio:overflow-hidden cuoio:overscroll-contain cuoio:rounded-[inherit] cuoio:transition-opacity cuoio:duration-300 cuoio:ease-[cubic-bezier(0.45,1.005,0,1.005)] cuoio:select-text cuoio:group-data-nested-drawer-open/drawer-popup:opacity-0 cuoio:group-data-nested-drawer-swiping/drawer-popup:opacity-100 cuoio:group-data-swiping/drawer-popup:select-none"
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
        "cuoio:flex cuoio:shrink-0 cuoio:flex-col cuoio:gap-1 cuoio:p-4 cuoio:pb-0 cuoio:group-data-[swipe-axis=y]/drawer-popup:text-center cuoio:md:text-start",
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
      className={cn("cuoio:mt-auto cuoio:flex cuoio:shrink-0 cuoio:flex-col cuoio:gap-2 cuoio:p-4 cuoio:pt-0", className)}
      {...props}
    />
  )
}

function DrawerTitle({ className, ...props }: DrawerPrimitive.Title.Props) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn(
        "cuoio:font-heading cuoio:text-sm cuoio:font-medium cuoio:text-foreground",
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
        "cuoio:text-xs/relaxed cuoio:text-balance cuoio:text-muted-foreground",
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
