import * as React from "react"
import { cn } from "cn"

function MessageGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-group"
      className={cn("cuoio:flex cuoio:min-w-0 cuoio:flex-col cuoio:gap-2", className)}
      {...props}
    />
  )
}

function Message({
  className,
  align = "start",
  ...props
}: React.ComponentProps<"div"> & { align?: "start" | "end" }) {
  return (
    <div
      data-slot="message"
      data-align={align}
      className={cn(
        "cuoio:group/message cuoio:relative cuoio:flex cuoio:w-full cuoio:min-w-0 cuoio:gap-2 cuoio:text-sm cuoio:data-[align=end]:flex-row-reverse",
        className
      )}
      {...props}
    />
  )
}

function MessageAvatar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-avatar"
      className={cn(
        "cuoio:flex cuoio:w-fit cuoio:min-w-8 cuoio:shrink-0 cuoio:items-center cuoio:justify-center cuoio:self-end cuoio:overflow-hidden cuoio:rounded-full cuoio:bg-muted cuoio:group-has-data-[slot=message-footer]/message:-translate-y-8",
        className
      )}
      {...props}
    />
  )
}

function MessageContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-content"
      className={cn(
        "cuoio:flex cuoio:w-full cuoio:min-w-0 cuoio:flex-col cuoio:gap-2.5 cuoio:wrap-break-word cuoio:group-data-[align=end]/message:*:data-slot:self-end",
        className
      )}
      {...props}
    />
  )
}

function MessageHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-header"
      className={cn(
        "cuoio:flex cuoio:max-w-full cuoio:min-w-0 cuoio:items-center cuoio:px-3 cuoio:text-xs cuoio:font-medium cuoio:text-muted-foreground cuoio:group-has-data-[variant=ghost]/message:px-0",
        className
      )}
      {...props}
    />
  )
}

function MessageFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-footer"
      className={cn(
        "cuoio:flex cuoio:max-w-full cuoio:min-w-0 cuoio:items-center cuoio:px-3 cuoio:text-xs cuoio:font-medium cuoio:text-muted-foreground cuoio:group-has-data-[variant=ghost]/message:px-0 cuoio:group-data-[align=end]/message:justify-end",
        className
      )}
      {...props}
    />
  )
}

export {
  MessageGroup,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
}
