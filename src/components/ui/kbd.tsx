import { cn } from "cn"

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "cuoio:pointer-events-none cuoio:inline-flex cuoio:h-5 cuoio:w-fit cuoio:min-w-5 cuoio:items-center cuoio:justify-center cuoio:gap-1 cuoio:rounded-xs cuoio:bg-muted cuoio:px-1 cuoio:font-sans cuoio:text-[0.625rem] cuoio:font-medium cuoio:text-muted-foreground cuoio:select-none cuoio:in-data-[slot=tooltip-content]:bg-background/20 cuoio:in-data-[slot=tooltip-content]:text-background cuoio:dark:in-data-[slot=tooltip-content]:bg-background/10 cuoio:[&_svg:not([class*=size-])]:size-3",
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
      className={cn("cuoio:inline-flex cuoio:items-center cuoio:gap-1", className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }
