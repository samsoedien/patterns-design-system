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
        "pttrn:group/input-group pttrn:relative pttrn:flex pttrn:h-7 pttrn:w-full pttrn:min-w-0 pttrn:items-center pttrn:rounded-md pttrn:border pttrn:border-input pttrn:bg-input/20 pttrn:transition-colors pttrn:outline-none pttrn:in-data-[slot=combobox-content]:focus-within:border-inherit pttrn:in-data-[slot=combobox-content]:focus-within:ring-0 pttrn:has-data-[align=block-end]:rounded-md pttrn:has-data-[align=block-start]:rounded-md pttrn:has-[[data-slot=input-group-control]:focus-visible]:border-ring pttrn:has-[[data-slot=input-group-control]:focus-visible]:ring-2 pttrn:has-[[data-slot=input-group-control]:focus-visible]:ring-ring/30 pttrn:has-[[data-slot][aria-invalid=true]]:border-destructive pttrn:has-[[data-slot][aria-invalid=true]]:ring-2 pttrn:has-[[data-slot][aria-invalid=true]]:ring-destructive/20 pttrn:has-[textarea]:rounded-md pttrn:has-[>[data-align=block-end]]:h-auto pttrn:has-[>[data-align=block-end]]:flex-col pttrn:has-[>[data-align=block-start]]:h-auto pttrn:has-[>[data-align=block-start]]:flex-col pttrn:has-[>textarea]:h-auto pttrn:dark:bg-input/30 pttrn:dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 pttrn:has-[>[data-align=block-end]]:[&>input]:pt-3 pttrn:has-[>[data-align=block-start]]:[&>input]:pb-3 pttrn:has-[>[data-align=inline-end]]:[&>input]:pe-1.5 pttrn:has-[>[data-align=inline-start]]:[&>input]:ps-1.5",
        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "pttrn:flex pttrn:h-auto pttrn:cursor-text pttrn:items-center pttrn:justify-center pttrn:gap-1 pttrn:py-2 pttrn:text-xs/relaxed pttrn:font-medium pttrn:text-muted-foreground pttrn:select-none pttrn:group-data-[disabled=true]/input-group:opacity-50 pttrn:**:data-[slot=kbd]:rounded-[calc(var(--radius-sm)-2px)] pttrn:**:data-[slot=kbd]:bg-muted-foreground/10 pttrn:**:data-[slot=kbd]:px-1 pttrn:**:data-[slot=kbd]:text-[0.625rem] pttrn:[&>svg:not([class*=size-])]:size-3.5",
  {
    variants: {
      align: {
        "inline-start":
          "pttrn:order-first pttrn:ps-2 pttrn:has-[>button]:ms-[-0.275rem] pttrn:has-[>kbd]:ms-[-0.275rem]",
        "inline-end":
          "pttrn:order-last pttrn:pe-2 pttrn:has-[>button]:me-[-0.275rem] pttrn:has-[>kbd]:me-[-0.275rem]",
        "block-start":
          "pttrn:order-first pttrn:w-full pttrn:justify-start pttrn:px-2 pttrn:pt-2 pttrn:group-has-[>input]/input-group:pt-2 pttrn:[.border-b]:pb-2",
        "block-end":
          "pttrn:order-last pttrn:w-full pttrn:justify-start pttrn:px-2 pttrn:pb-2 pttrn:group-has-[>input]/input-group:pb-2 pttrn:[.border-t]:pt-2",
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
  "pttrn:flex pttrn:items-center pttrn:gap-2 pttrn:rounded-md pttrn:text-xs/relaxed pttrn:shadow-none",
  {
    variants: {
      size: {
        xs: "pttrn:h-5 pttrn:gap-1 pttrn:rounded-[calc(var(--radius-sm)-2px)] pttrn:px-1 pttrn:[&>svg:not([class*=size-])]:size-3",
        sm: "pttrn:gap-1",
        "icon-xs": "pttrn:size-6 pttrn:p-0 pttrn:has-[>svg]:p-0",
        "icon-sm": "pttrn:size-7 pttrn:p-0 pttrn:has-[>svg]:p-0",
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
        "pttrn:flex pttrn:items-center pttrn:gap-2 pttrn:text-xs/relaxed pttrn:text-muted-foreground pttrn:[&_svg]:pointer-events-none pttrn:[&_svg:not([class*=size-])]:size-4",
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
        "pttrn:flex-1 pttrn:rounded-none pttrn:border-0 pttrn:bg-transparent pttrn:shadow-none pttrn:ring-0 pttrn:focus-visible:ring-0 pttrn:aria-invalid:ring-0 pttrn:dark:bg-transparent",
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
        "pttrn:flex-1 pttrn:resize-none pttrn:rounded-none pttrn:border-0 pttrn:bg-transparent pttrn:py-2 pttrn:shadow-none pttrn:ring-0 pttrn:focus-visible:ring-0 pttrn:aria-invalid:ring-0 pttrn:dark:bg-transparent",
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
