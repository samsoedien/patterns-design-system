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
        "pttrn:group/message-scroller pttrn:relative pttrn:flex pttrn:size-full pttrn:min-h-0 pttrn:flex-col pttrn:overflow-hidden",
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
        "pttrn:size-full pttrn:min-h-0 pttrn:min-w-0 pttrn:scroll-fade-b pttrn:scrollbar-thin pttrn:scrollbar-gutter-stable pttrn:overflow-y-auto pttrn:overscroll-contain pttrn:contain-content pttrn:data-autoscrolling:scrollbar-thumb-transparent pttrn:data-autoscrolling:scrollbar-track-transparent pttrn:data-pending-scroll:invisible",
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
      className={cn("pttrn:flex pttrn:h-max pttrn:min-h-full pttrn:flex-col pttrn:gap-6", className)}
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
        "pttrn:min-w-0 pttrn:shrink-0 pttrn:[contain-intrinsic-size:auto_10rem] pttrn:[content-visibility:auto]",
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
        "pttrn:absolute pttrn:inset-s-1/2 pttrn:-translate-x-1/2 rtl:pttrn:translate-x-1/2 pttrn:border-border pttrn:bg-background pttrn:text-foreground pttrn:transition-[translate,scale,opacity] pttrn:duration-200 pttrn:hover:bg-muted pttrn:hover:text-foreground pttrn:data-[active=false]:pointer-events-none pttrn:data-[active=false]:scale-95 pttrn:data-[active=false]:opacity-0 pttrn:data-[active=false]:duration-400 pttrn:data-[active=false]:ease-[cubic-bezier(0.7,0,0.84,0)] pttrn:data-[active=true]:translate-y-0 pttrn:data-[active=true]:scale-100 pttrn:data-[active=true]:opacity-100 pttrn:data-[active=true]:ease-[cubic-bezier(0.23,1,0.32,1)] pttrn:data-[direction=end]:bottom-4 pttrn:data-[direction=end]:data-[active=false]:translate-y-full pttrn:data-[direction=start]:top-4 pttrn:data-[direction=start]:data-[active=false]:-translate-y-full pttrn:rtl:translate-x-1/2 rtl:pttrn:rtl:-translate-x-1/2 pttrn:data-[direction=start]:[&_svg]:rotate-180",
        className
      )}
      render={render ?? <Button variant={variant} size={size} />}
      {...props}
    >
      {children ?? (
        <>
          <ArrowDownIcon
          />
          <span className="pttrn:sr-only">
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
