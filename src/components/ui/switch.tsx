"use client"

import { Switch as SwitchPrimitive } from "@base-ui/react/switch"
import { cn } from "cn"

function Switch({
  className,
  size = "default",
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "pttrn:peer pttrn:group/switch pttrn:relative pttrn:inline-flex pttrn:shrink-0 pttrn:items-center pttrn:rounded-full pttrn:border pttrn:border-transparent pttrn:transition-all pttrn:outline-none pttrn:group-has-[:focus-visible]/field-label:border-transparent pttrn:group-has-[:focus-visible]/field-label:ring-0 pttrn:after:absolute pttrn:after:-inset-x-3 pttrn:after:-inset-y-2 pttrn:focus-visible:border-ring pttrn:focus-visible:ring-2 pttrn:focus-visible:ring-ring/30 pttrn:aria-invalid:border-destructive pttrn:aria-invalid:ring-2 pttrn:aria-invalid:ring-destructive/20 pttrn:data-[size=default]:h-[16.6px] pttrn:data-[size=default]:w-[28px] pttrn:data-[size=sm]:h-[14px] pttrn:data-[size=sm]:w-[24px] pttrn:dark:aria-invalid:border-destructive/50 pttrn:dark:aria-invalid:ring-destructive/40 pttrn:data-checked:bg-primary pttrn:data-unchecked:bg-input pttrn:dark:data-unchecked:bg-input/80 pttrn:data-disabled:cursor-not-allowed pttrn:data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pttrn:pointer-events-none pttrn:block pttrn:rounded-full pttrn:bg-background pttrn:ring-0 pttrn:transition-transform pttrn:group-data-[size=default]/switch:size-3.5 pttrn:group-data-[size=sm]/switch:size-3 pttrn:group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] rtl:pttrn:group-data-[size=default]/switch:data-checked:-translate-x-[calc(100%-2px)] pttrn:group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] rtl:pttrn:group-data-[size=sm]/switch:data-checked:-translate-x-[calc(100%-2px)] pttrn:dark:data-checked:bg-primary-foreground pttrn:group-data-[size=default]/switch:data-unchecked:translate-x-0 rtl:pttrn:group-data-[size=default]/switch:data-unchecked:-translate-x-0 pttrn:group-data-[size=sm]/switch:data-unchecked:translate-x-0 rtl:pttrn:group-data-[size=sm]/switch:data-unchecked:-translate-x-0 pttrn:dark:data-unchecked:bg-foreground"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
