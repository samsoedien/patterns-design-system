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
        "cuoio:flex cuoio:w-full cuoio:min-w-0 cuoio:flex-col cuoio:gap-1.5 cuoio:*:has-[>[data-slot=trace-line]]:flex cuoio:*:has-[>[data-slot=trace-line]]:w-fit cuoio:*:has-[>[data-slot=trace-line]]:max-w-full cuoio:*:has-[>[data-slot=trace-line]]:min-w-0 cuoio:*:has-[>[data-slot=trace-line]]:rounded-sm cuoio:*:has-[>[data-slot=trace-line]]:text-start cuoio:*:has-[>[data-slot=trace-line]]:outline-none cuoio:*:has-[>[data-slot=trace-line]]:focus-visible:ring-2 cuoio:*:has-[>[data-slot=trace-line]]:focus-visible:ring-ring/30",
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
        "cuoio:flex cuoio:w-fit cuoio:max-w-full cuoio:min-w-0 cuoio:items-center cuoio:gap-2 cuoio:text-xs/relaxed cuoio:text-muted-foreground cuoio:transition-colors cuoio:in-[a,button]:cursor-pointer cuoio:in-[a:hover,button:hover]:text-foreground cuoio:data-[status=error]:text-destructive cuoio:data-[status=error]:in-[a:hover,button:hover]:text-destructive cuoio:data-[status=pending]:opacity-60 cuoio:data-[status=running]:*:data-[slot=trace-title]:shimmer",
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
        "cuoio:flex cuoio:size-3.5 cuoio:shrink-0 cuoio:items-center cuoio:justify-center cuoio:[&_svg]:pointer-events-none cuoio:[&_svg:not([class*=size-])]:size-3.5 cuoio:[[data-slot=trace-title]~&]:-ms-1",
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
      className={cn("cuoio:min-w-0 cuoio:truncate cuoio:motion-reduce:shimmer-none", className)}
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
        "cuoio:shrink-0 cuoio:text-muted-foreground/70 cuoio:tabular-nums",
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
      className={cn("cuoio:flex cuoio:w-full cuoio:min-w-0 cuoio:flex-col", className)}
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
        "cuoio:group/trace-collapsible-trigger cuoio:flex cuoio:w-fit cuoio:max-w-full cuoio:min-w-0 cuoio:cursor-pointer cuoio:items-center cuoio:gap-1 cuoio:rounded-sm cuoio:text-start cuoio:text-muted-foreground cuoio:transition-colors cuoio:outline-none cuoio:hover:text-foreground cuoio:focus-visible:ring-2 cuoio:focus-visible:ring-ring/30 cuoio:has-[[data-status=error]]:text-destructive",
        className
      )}
      {...props}
    >
      {children}
      <TraceIcon className="cuoio:transition-transform cuoio:group-aria-expanded/trace-collapsible-trigger:rotate-90">
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
      className="cuoio:h-(--collapsible-panel-height) cuoio:min-w-0 cuoio:overflow-hidden cuoio:transition-[height] cuoio:duration-200 cuoio:data-ending-style:h-0 cuoio:data-starting-style:h-0"
      {...props}
    >
      <div
        data-slot="trace-collapsible-content-inner"
        className={cn(
          "cuoio:mt-1.5 cuoio:mb-1 cuoio:ms-[calc(--spacing(1.75)-1px)] cuoio:min-w-0 cuoio:border-s cuoio:pe-1 cuoio:ps-3.75 cuoio:wrap-break-word cuoio:text-muted-foreground",
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
