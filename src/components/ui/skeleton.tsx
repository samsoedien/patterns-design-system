import { cn } from "cn"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("cuoio:animate-pulse cuoio:rounded-md cuoio:bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
