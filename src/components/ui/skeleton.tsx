import { cn } from "cn"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("pttrn:animate-pulse pttrn:rounded-md pttrn:bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
