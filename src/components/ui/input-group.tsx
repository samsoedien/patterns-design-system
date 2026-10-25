"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        "cuoio:group/input-group cuoio:relative cuoio:flex cuoio:h-8 cuoio:w-full cuoio:min-w-0 cuoio:items-center cuoio:rounded-lg cuoio:border cuoio:border-input cuoio:transition-colors cuoio:outline-none cuoio:in-data-[slot=combobox-content]:focus-within:border-inherit cuoio:in-data-[slot=combobox-content]:focus-within:ring-0 cuoio:has-disabled:bg-input/50 cuoio:has-disabled:opacity-50 cuoio:has-[[data-slot=input-group-control]:focus-visible]:border-ring cuoio:has-[[data-slot=input-group-control]:focus-visible]:ring-3 cuoio:has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 cuoio:has-[[data-slot][aria-invalid=true]]:border-destructive cuoio:has-[[data-slot][aria-invalid=true]]:ring-3 cuoio:has-[[data-slot][aria-invalid=true]]:ring-destructive/20 cuoio:has-[>[data-align=block-end]]:h-auto cuoio:has-[>[data-align=block-end]]:flex-col cuoio:has-[>[data-align=block-start]]:h-auto cuoio:has-[>[data-align=block-start]]:flex-col cuoio:has-[>textarea]:h-auto cuoio:dark:bg-input/30 cuoio:dark:has-disabled:bg-input/80 cuoio:dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 cuoio:has-[>[data-align=block-end]]:[&>input]:pt-3 cuoio:has-[>[data-align=block-start]]:[&>input]:pb-3 cuoio:has-[>[data-align=inline-end]]:[&>input]:pe-1.5 cuoio:has-[>[data-align=inline-start]]:[&>input]:ps-1.5",
        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "cuoio:flex cuoio:h-auto cuoio:cursor-text cuoio:items-center cuoio:justify-center cuoio:gap-2 cuoio:py-1.5 cuoio:text-sm cuoio:font-medium cuoio:text-muted-foreground cuoio:select-none cuoio:group-data-[disabled=true]/input-group:opacity-50 cuoio:[&>kbd]:rounded-[calc(var(--radius)-5px)] cuoio:[&>svg:not([class*=size-])]:size-4",
  {
    variants: {
      align: {
        "inline-start":
          "cuoio:order-first cuoio:ps-2 cuoio:has-[>button]:ms-[-0.3rem] cuoio:has-[>kbd]:ms-[-0.15rem]",
        "inline-end":
          "cuoio:order-last cuoio:pe-2 cuoio:has-[>button]:me-[-0.3rem] cuoio:has-[>kbd]:me-[-0.15rem]",
        "block-start":
          "cuoio:order-first cuoio:w-full cuoio:justify-start cuoio:px-2.5 cuoio:pt-2 cuoio:group-has-[>input]/input-group:pt-2 cuoio:[.border-b]:pb-2",
        "block-end":
          "cuoio:order-last cuoio:w-full cuoio:justify-start cuoio:px-2.5 cuoio:pb-2 cuoio:group-has-[>input]/input-group:pb-2 cuoio:[.border-t]:pt-2",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  "cuoio:flex cuoio:items-center cuoio:gap-2 cuoio:text-sm cuoio:shadow-none",
  {
    variants: {
      size: {
        xs: "cuoio:h-6 cuoio:gap-1 cuoio:rounded-[calc(var(--radius)-3px)] cuoio:px-1.5 cuoio:[&>svg:not([class*=size-])]:size-3.5",
        sm: "cuoio:",
        "icon-xs":
          "cuoio:size-6 cuoio:rounded-[calc(var(--radius)-3px)] cuoio:p-0 cuoio:has-[>svg]:p-0",
        "icon-sm": "cuoio:size-8 cuoio:p-0 cuoio:has-[>svg]:p-0",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
)

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size" | "type"> &
  VariantProps<typeof inputGroupButtonVariants> & {
    type?: "button" | "submit" | "reset"
  }) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "cuoio:flex cuoio:items-center cuoio:gap-2 cuoio:text-sm cuoio:text-muted-foreground cuoio:[&_svg]:pointer-events-none cuoio:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "cuoio:flex-1 cuoio:rounded-none cuoio:border-0 cuoio:bg-transparent cuoio:shadow-none cuoio:ring-0 cuoio:focus-visible:ring-0 cuoio:disabled:bg-transparent cuoio:aria-invalid:ring-0 cuoio:dark:bg-transparent cuoio:dark:disabled:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "cuoio:flex-1 cuoio:resize-none cuoio:rounded-none cuoio:border-0 cuoio:bg-transparent cuoio:py-2 cuoio:shadow-none cuoio:ring-0 cuoio:focus-visible:ring-0 cuoio:disabled:bg-transparent cuoio:aria-invalid:ring-0 cuoio:dark:bg-transparent cuoio:dark:disabled:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}
