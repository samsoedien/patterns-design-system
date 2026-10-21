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
        "cuoio:group/input-group cuoio:relative cuoio:flex cuoio:h-7 cuoio:w-full cuoio:min-w-0 cuoio:items-center cuoio:rounded-md cuoio:border cuoio:border-input cuoio:bg-input/20 cuoio:transition-colors cuoio:outline-none cuoio:in-data-[slot=combobox-content]:focus-within:border-inherit cuoio:in-data-[slot=combobox-content]:focus-within:ring-0 cuoio:has-data-[align=block-end]:rounded-md cuoio:has-data-[align=block-start]:rounded-md cuoio:has-[[data-slot=input-group-control]:focus-visible]:border-ring cuoio:has-[[data-slot=input-group-control]:focus-visible]:ring-2 cuoio:has-[[data-slot=input-group-control]:focus-visible]:ring-ring/30 cuoio:has-[[data-slot][aria-invalid=true]]:border-destructive cuoio:has-[[data-slot][aria-invalid=true]]:ring-2 cuoio:has-[[data-slot][aria-invalid=true]]:ring-destructive/20 cuoio:has-[textarea]:rounded-md cuoio:has-[>[data-align=block-end]]:h-auto cuoio:has-[>[data-align=block-end]]:flex-col cuoio:has-[>[data-align=block-start]]:h-auto cuoio:has-[>[data-align=block-start]]:flex-col cuoio:has-[>textarea]:h-auto cuoio:dark:bg-input/30 cuoio:dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 cuoio:has-[>[data-align=block-end]]:[&>input]:pt-3 cuoio:has-[>[data-align=block-start]]:[&>input]:pb-3 cuoio:has-[>[data-align=inline-end]]:[&>input]:pe-1.5 cuoio:has-[>[data-align=inline-start]]:[&>input]:ps-1.5",
        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "cuoio:flex cuoio:h-auto cuoio:cursor-text cuoio:items-center cuoio:justify-center cuoio:gap-1 cuoio:py-2 cuoio:text-xs/relaxed cuoio:font-medium cuoio:text-muted-foreground cuoio:select-none cuoio:group-data-[disabled=true]/input-group:opacity-50 cuoio:**:data-[slot=kbd]:rounded-[calc(var(--radius-sm)-2px)] cuoio:**:data-[slot=kbd]:bg-muted-foreground/10 cuoio:**:data-[slot=kbd]:px-1 cuoio:**:data-[slot=kbd]:text-[0.625rem] cuoio:[&>svg:not([class*=size-])]:size-3.5",
  {
    variants: {
      align: {
        "inline-start":
          "cuoio:order-first cuoio:ps-2 cuoio:has-[>button]:ms-[-0.275rem] cuoio:has-[>kbd]:ms-[-0.275rem]",
        "inline-end":
          "cuoio:order-last cuoio:pe-2 cuoio:has-[>button]:me-[-0.275rem] cuoio:has-[>kbd]:me-[-0.275rem]",
        "block-start":
          "cuoio:order-first cuoio:w-full cuoio:justify-start cuoio:px-2 cuoio:pt-2 cuoio:group-has-[>input]/input-group:pt-2 cuoio:[.border-b]:pb-2",
        "block-end":
          "cuoio:order-last cuoio:w-full cuoio:justify-start cuoio:px-2 cuoio:pb-2 cuoio:group-has-[>input]/input-group:pb-2 cuoio:[.border-t]:pt-2",
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
  "cuoio:flex cuoio:items-center cuoio:gap-2 cuoio:rounded-md cuoio:text-xs/relaxed cuoio:shadow-none",
  {
    variants: {
      size: {
        xs: "cuoio:h-5 cuoio:gap-1 cuoio:rounded-[calc(var(--radius-sm)-2px)] cuoio:px-1 cuoio:[&>svg:not([class*=size-])]:size-3",
        sm: "cuoio:gap-1",
        "icon-xs": "cuoio:size-6 cuoio:p-0 cuoio:has-[>svg]:p-0",
        "icon-sm": "cuoio:size-7 cuoio:p-0 cuoio:has-[>svg]:p-0",
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
        "cuoio:flex cuoio:items-center cuoio:gap-2 cuoio:text-xs/relaxed cuoio:text-muted-foreground cuoio:[&_svg]:pointer-events-none cuoio:[&_svg:not([class*=size-])]:size-4",
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
        "cuoio:flex-1 cuoio:rounded-none cuoio:border-0 cuoio:bg-transparent cuoio:shadow-none cuoio:ring-0 cuoio:focus-visible:ring-0 cuoio:aria-invalid:ring-0 cuoio:dark:bg-transparent",
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
        "cuoio:flex-1 cuoio:resize-none cuoio:rounded-none cuoio:border-0 cuoio:bg-transparent cuoio:py-2 cuoio:shadow-none cuoio:ring-0 cuoio:focus-visible:ring-0 cuoio:aria-invalid:ring-0 cuoio:dark:bg-transparent",
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
