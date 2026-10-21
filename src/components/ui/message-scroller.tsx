"use client"

import * as React from "react"
import {
  MessageScroller as MessageScrollerPrimitive,
  useMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
} from "@shadcn/react/message-scroller"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import { ArrowDownIcon } from "lucide-react"

function MessageScrollerProvider(
  props: React.ComponentProps<typeof MessageScrollerPrimitive.Provider>
) {
  return <MessageScrollerPrimitive.Provider {...props} />
}

function MessageScroller({
  className,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Root>) {
  return (
    <MessageScrollerPrimitive.Root
      data-slot="message-scroller"
      className={cn(
        "cuoio:group/message-scroller cuoio:relative cuoio:flex cuoio:size-full cuoio:min-h-0 cuoio:flex-col cuoio:overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function MessageScrollerViewport({
  className,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Viewport>) {
  return (
    <MessageScrollerPrimitive.Viewport
      data-slot="message-scroller-viewport"
      className={cn(
        "cuoio:size-full cuoio:min-h-0 cuoio:min-w-0 cuoio:scroll-fade-b cuoio:scrollbar-thin cuoio:scrollbar-gutter-stable cuoio:overflow-y-auto cuoio:overscroll-contain cuoio:contain-content cuoio:data-autoscrolling:scrollbar-thumb-transparent cuoio:data-autoscrolling:scrollbar-track-transparent cuoio:data-pending-scroll:invisible",
        className
      )}
      {...props}
    />
  )
}

function MessageScrollerContent({
  className,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Content>) {
  return (
    <MessageScrollerPrimitive.Content
      data-slot="message-scroller-content"
      className={cn("cuoio:flex cuoio:h-max cuoio:min-h-full cuoio:flex-col cuoio:gap-6", className)}
      {...props}
    />
  )
}

function MessageScrollerItem({
  className,
  scrollAnchor = false,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Item>) {
  return (
    <MessageScrollerPrimitive.Item
      data-slot="message-scroller-item"
      scrollAnchor={scrollAnchor}
      className={cn(
        "cuoio:min-w-0 cuoio:shrink-0 cuoio:[contain-intrinsic-size:auto_10rem] cuoio:[content-visibility:auto]",
        className
      )}
      {...props}
    />
  )
}

function MessageScrollerButton({
  direction = "end",
  className,
  children,
  render,
  variant = "secondary",
  size = "icon-sm",
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Button> &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <MessageScrollerPrimitive.Button
      data-slot="message-scroller-button"
      data-direction={direction}
      data-variant={variant}
      data-size={size}
      direction={direction}
      className={cn(
        "cuoio:absolute cuoio:inset-s-1/2 cuoio:-translate-x-1/2 rtl:cuoio:translate-x-1/2 cuoio:border-border cuoio:bg-background cuoio:text-foreground cuoio:transition-[translate,scale,opacity] cuoio:duration-200 cuoio:hover:bg-muted cuoio:hover:text-foreground cuoio:data-[active=false]:pointer-events-none cuoio:data-[active=false]:scale-95 cuoio:data-[active=false]:opacity-0 cuoio:data-[active=false]:duration-400 cuoio:data-[active=false]:ease-[cubic-bezier(0.7,0,0.84,0)] cuoio:data-[active=true]:translate-y-0 cuoio:data-[active=true]:scale-100 cuoio:data-[active=true]:opacity-100 cuoio:data-[active=true]:ease-[cubic-bezier(0.23,1,0.32,1)] cuoio:data-[direction=end]:bottom-4 cuoio:data-[direction=end]:data-[active=false]:translate-y-full cuoio:data-[direction=start]:top-4 cuoio:data-[direction=start]:data-[active=false]:-translate-y-full cuoio:rtl:translate-x-1/2 rtl:cuoio:rtl:-translate-x-1/2 cuoio:data-[direction=start]:[&_svg]:rotate-180",
        className
      )}
      render={render ?? <Button variant={variant} size={size} />}
      {...props}
    >
      {children ?? (
        <>
          <ArrowDownIcon
          />
          <span className="cuoio:sr-only">
            {direction === "end" ? "Scroll to end" : "Scroll to start"}
          </span>
        </>
      )}
    </MessageScrollerPrimitive.Button>
  )
}

export {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
  useMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
}
