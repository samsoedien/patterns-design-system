"use client"

import * as React from "react"
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group"
import { type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants> & {
    spacing?: number
    orientation?: "horizontal" | "vertical"
  }
>({
  size: "default",
  variant: "default",
  spacing: 2,
  orientation: "horizontal",
})

function ToggleGroup({
  className,
  variant,
  size,
  spacing = 2,
  orientation = "horizontal",
  children,
  ...props
}: ToggleGroupPrimitive.Props &
  VariantProps<typeof toggleVariants> & {
    spacing?: number
    orientation?: "horizontal" | "vertical"
  }) {
  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      data-orientation={orientation}
      style={{ "--gap": spacing } as React.CSSProperties}
      className={cn(
        "pttrn:group/toggle-group pttrn:flex pttrn:w-fit pttrn:flex-row pttrn:items-center pttrn:gap-[--spacing(var(--gap))] pttrn:rounded-md pttrn:data-[size=sm]:rounded-[min(var(--radius-md),8px)] pttrn:data-vertical:flex-col pttrn:data-vertical:items-stretch",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider
        value={{ variant, size, spacing, orientation }}
      >
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <TogglePrimitive
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      data-spacing={context.spacing}
      className={cn(
        "pttrn:shrink-0 pttrn:group-data-[spacing=0]/toggle-group:rounded-none pttrn:group-data-[spacing=0]/toggle-group:px-2 pttrn:focus:z-10 pttrn:focus-visible:z-10 pttrn:group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pe-1.5 pttrn:group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:ps-1.5 pttrn:group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-s-md pttrn:group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-md pttrn:group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-e-md pttrn:group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-md pttrn:group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-s-0 pttrn:group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 pttrn:group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-s pttrn:group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t",
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </TogglePrimitive>
  )
}

export { ToggleGroup, ToggleGroupItem }
