import * as React from "react"
import { cn } from "cn"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronRightIcon } from "lucide-react"

function Trace({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="trace"
      className={cn(
        "pttrn:flex pttrn:w-full pttrn:min-w-0 pttrn:flex-col pttrn:gap-1.5 pttrn:*:has-[>[data-slot=trace-line]]:flex pttrn:*:has-[>[data-slot=trace-line]]:w-fit pttrn:*:has-[>[data-slot=trace-line]]:max-w-full pttrn:*:has-[>[data-slot=trace-line]]:min-w-0 pttrn:*:has-[>[data-slot=trace-line]]:rounded-sm pttrn:*:has-[>[data-slot=trace-line]]:text-start pttrn:*:has-[>[data-slot=trace-line]]:outline-none pttrn:*:has-[>[data-slot=trace-line]]:focus-visible:ring-2 pttrn:*:has-[>[data-slot=trace-line]]:focus-visible:ring-ring/30",
        className
      )}
      {...props}
    />
  )
}

function TraceLine({
  className,
  status,
  ...props
}: React.ComponentProps<"span"> & {
  status?: "running" | "error" | "pending"
}) {
  return (
    <span
      data-slot="trace-line"
      data-status={status}
      className={cn(
        "pttrn:flex pttrn:w-fit pttrn:max-w-full pttrn:min-w-0 pttrn:items-center pttrn:gap-2 pttrn:text-xs/relaxed pttrn:text-muted-foreground pttrn:transition-colors pttrn:in-[a,button]:cursor-pointer pttrn:in-[a:hover,button:hover]:text-foreground pttrn:data-[status=error]:text-destructive pttrn:data-[status=error]:in-[a:hover,button:hover]:text-destructive pttrn:data-[status=pending]:opacity-60 pttrn:data-[status=running]:*:data-[slot=trace-title]:shimmer",
        className
      )}
      {...props}
    />
  )
}

function TraceIcon({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="trace-icon"
      aria-hidden="true"
      className={cn(
        "pttrn:flex pttrn:size-3.5 pttrn:shrink-0 pttrn:items-center pttrn:justify-center pttrn:[&_svg]:pointer-events-none pttrn:[&_svg:not([class*=size-])]:size-3.5 pttrn:[[data-slot=trace-title]~&]:-ms-1",
        className
      )}
      {...props}
    />
  )
}

function TraceTitle({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="trace-title"
      className={cn("pttrn:min-w-0 pttrn:truncate pttrn:motion-reduce:shimmer-none", className)}
      {...props}
    />
  )
}

function TraceDescription({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="trace-description"
      className={cn(
        "pttrn:shrink-0 pttrn:text-muted-foreground/70 pttrn:tabular-nums",
        className
      )}
      {...props}
    />
  )
}

function TraceCollapsible({
  className,
  ...props
}: Omit<React.ComponentProps<typeof Collapsible>, "open"> &
  (
    | { open?: undefined }
    | {
        open: boolean
        onOpenChange: NonNullable<
          React.ComponentProps<typeof Collapsible>["onOpenChange"]
        >
      }
  )) {
  return (
    <Collapsible
      data-slot="trace-collapsible"
      className={cn("pttrn:flex pttrn:w-full pttrn:min-w-0 pttrn:flex-col", className)}
      {...props}
    />
  )
}

function TraceCollapsibleTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsibleTrigger>) {
  return (
    <CollapsibleTrigger
      data-slot="trace-collapsible-trigger"
      className={cn(
        "pttrn:group/trace-collapsible-trigger pttrn:flex pttrn:w-fit pttrn:max-w-full pttrn:min-w-0 pttrn:cursor-pointer pttrn:items-center pttrn:gap-1 pttrn:rounded-sm pttrn:text-start pttrn:text-muted-foreground pttrn:transition-colors pttrn:outline-none pttrn:hover:text-foreground pttrn:focus-visible:ring-2 pttrn:focus-visible:ring-ring/30 pttrn:has-[[data-status=error]]:text-destructive",
        className
      )}
      {...props}
    >
      {children}
      <TraceIcon className="pttrn:transition-transform pttrn:group-aria-expanded/trace-collapsible-trigger:rotate-90">
        <ChevronRightIcon
        />
      </TraceIcon>
    </CollapsibleTrigger>
  )
}

function TraceCollapsibleContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsibleContent>) {
  return (
    <CollapsibleContent
      data-slot="trace-collapsible-content"
      className="pttrn:h-(--collapsible-panel-height) pttrn:min-w-0 pttrn:overflow-hidden pttrn:transition-[height] pttrn:duration-200 pttrn:data-ending-style:h-0 pttrn:data-starting-style:h-0"
      {...props}
    >
      <div
        data-slot="trace-collapsible-content-inner"
        className={cn(
          "pttrn:mt-1.5 pttrn:mb-1 pttrn:ms-[calc(--spacing(1.75)-1px)] pttrn:min-w-0 pttrn:border-s pttrn:pe-1 pttrn:ps-3.75 pttrn:wrap-break-word pttrn:text-muted-foreground",
          className
        )}
      >
        {children}
      </div>
    </CollapsibleContent>
  )
}

export {
  Trace,
  TraceLine,
  TraceIcon,
  TraceTitle,
  TraceDescription,
  TraceCollapsible,
  TraceCollapsibleTrigger,
  TraceCollapsibleContent,
}
