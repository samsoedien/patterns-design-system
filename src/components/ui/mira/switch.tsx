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
        "cuoio:peer cuoio:group/switch cuoio:relative cuoio:inline-flex cuoio:shrink-0 cuoio:items-center cuoio:rounded-full cuoio:border cuoio:border-transparent cuoio:transition-all cuoio:outline-none cuoio:group-has-[:focus-visible]/field-label:border-transparent cuoio:group-has-[:focus-visible]/field-label:ring-0 cuoio:after:absolute cuoio:after:-inset-x-3 cuoio:after:-inset-y-2 cuoio:focus-visible:border-ring cuoio:focus-visible:ring-2 cuoio:focus-visible:ring-ring/30 cuoio:aria-invalid:border-destructive cuoio:aria-invalid:ring-2 cuoio:aria-invalid:ring-destructive/20 cuoio:data-[size=default]:h-[16.6px] cuoio:data-[size=default]:w-[28px] cuoio:data-[size=sm]:h-[14px] cuoio:data-[size=sm]:w-[24px] cuoio:dark:aria-invalid:border-destructive/50 cuoio:dark:aria-invalid:ring-destructive/40 cuoio:data-checked:bg-primary cuoio:data-unchecked:bg-input cuoio:dark:data-unchecked:bg-input/80 cuoio:data-disabled:cursor-not-allowed cuoio:data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="cuoio:pointer-events-none cuoio:block cuoio:rounded-full cuoio:bg-background cuoio:ring-0 cuoio:transition-transform cuoio:group-data-[size=default]/switch:size-3.5 cuoio:group-data-[size=sm]/switch:size-3 cuoio:group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] rtl:cuoio:group-data-[size=default]/switch:data-checked:-translate-x-[calc(100%-2px)] cuoio:group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] rtl:cuoio:group-data-[size=sm]/switch:data-checked:-translate-x-[calc(100%-2px)] cuoio:dark:data-checked:bg-primary-foreground cuoio:group-data-[size=default]/switch:data-unchecked:translate-x-0 rtl:cuoio:group-data-[size=default]/switch:data-unchecked:-translate-x-0 cuoio:group-data-[size=sm]/switch:data-unchecked:translate-x-0 rtl:cuoio:group-data-[size=sm]/switch:data-unchecked:-translate-x-0 cuoio:dark:data-unchecked:bg-foreground"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
