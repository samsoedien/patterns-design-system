import * as React from "react"
import { cn } from "cn"

function MessageGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-group"
      className={cn("pttrn:flex pttrn:min-w-0 pttrn:flex-col pttrn:gap-1.5", className)}
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
        "pttrn:group/message pttrn:relative pttrn:flex pttrn:w-full pttrn:min-w-0 pttrn:gap-1.5 pttrn:text-xs/relaxed pttrn:data-[align=end]:flex-row-reverse",
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
        "pttrn:flex pttrn:w-fit pttrn:min-w-8 pttrn:shrink-0 pttrn:items-center pttrn:justify-center pttrn:self-end pttrn:overflow-hidden pttrn:rounded-full pttrn:bg-muted pttrn:group-has-data-[slot=message-footer]/message:-translate-y-8",
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
        "pttrn:flex pttrn:w-full pttrn:min-w-0 pttrn:flex-col pttrn:gap-2 pttrn:wrap-break-word pttrn:group-data-[align=end]/message:*:data-slot:self-end",
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
        "pttrn:flex pttrn:max-w-full pttrn:min-w-0 pttrn:items-center pttrn:px-2.5 pttrn:text-[0.625rem] pttrn:font-medium pttrn:text-muted-foreground pttrn:group-has-data-[variant=ghost]/message:px-0",
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
        "pttrn:flex pttrn:max-w-full pttrn:min-w-0 pttrn:items-center pttrn:px-2.5 pttrn:text-[0.625rem] pttrn:font-medium pttrn:text-muted-foreground pttrn:group-has-data-[variant=ghost]/message:px-0 pttrn:group-data-[align=end]/message:justify-end",
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
