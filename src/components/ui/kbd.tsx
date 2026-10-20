import { cn } from "cn"

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "pttrn:pointer-events-none pttrn:inline-flex pttrn:h-5 pttrn:w-fit pttrn:min-w-5 pttrn:items-center pttrn:justify-center pttrn:gap-1 pttrn:rounded-xs pttrn:bg-muted pttrn:px-1 pttrn:font-sans pttrn:text-[0.625rem] pttrn:font-medium pttrn:text-muted-foreground pttrn:select-none pttrn:in-data-[slot=tooltip-content]:bg-background/20 pttrn:in-data-[slot=tooltip-content]:text-background pttrn:dark:in-data-[slot=tooltip-content]:bg-background/10 pttrn:[&_svg:not([class*=size-])]:size-3",
        className
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("pttrn:inline-flex pttrn:items-center pttrn:gap-1", className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }
