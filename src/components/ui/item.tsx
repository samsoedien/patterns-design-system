import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { Separator } from "@/components/ui/separator"

function ItemGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn(
        "pttrn:group/item-group pttrn:flex pttrn:w-full pttrn:flex-col pttrn:gap-4 pttrn:has-data-[size=sm]:gap-2.5 pttrn:has-data-[size=xs]:gap-2",
        className
      )}
      {...props}
    />
  )
}

function ItemSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn("pttrn:my-2", className)}
      {...props}
    />
  )
}

const itemVariants = cva(
  "pttrn:group/item pttrn:flex pttrn:w-full pttrn:flex-wrap pttrn:items-center pttrn:rounded-md pttrn:border pttrn:text-xs/relaxed pttrn:transition-colors pttrn:duration-100 pttrn:outline-none pttrn:focus-visible:border-ring pttrn:focus-visible:ring-[3px] pttrn:focus-visible:ring-ring/50 pttrn:[a]:transition-colors pttrn:[a]:hover:bg-muted",
  {
    variants: {
      variant: {
        default: "pttrn:border-transparent",
        outline: "pttrn:border-border",
        muted: "pttrn:border-transparent pttrn:bg-muted/50",
      },
      size: {
        default: "pttrn:gap-2.5 pttrn:px-3 pttrn:py-2.5",
        sm: "pttrn:gap-2.5 pttrn:px-3 pttrn:py-2.5",
        xs: "pttrn:gap-2.5 pttrn:px-2.5 pttrn:py-2 pttrn:in-data-[slot=dropdown-menu-content]:p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Item({
  className,
  variant = "default",
  size = "default",
  render,
  ...props
}: useRender.ComponentProps<"div"> & VariantProps<typeof itemVariants>) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(itemVariants({ variant, size, className })),
      },
      props
    ),
    render,
    state: {
      slot: "item",
      variant,
      size,
    },
  })
}

const itemMediaVariants = cva(
  "pttrn:flex pttrn:shrink-0 pttrn:items-center pttrn:justify-center pttrn:gap-2 pttrn:group-has-data-[slot=item-description]/item:translate-y-0.5 pttrn:group-has-data-[slot=item-description]/item:self-start pttrn:[&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "pttrn:bg-transparent",
        icon: "pttrn:[&_svg:not([class*=size-])]:size-4",
        image:
          "pttrn:size-8 pttrn:overflow-hidden pttrn:rounded-sm pttrn:group-data-[size=sm]/item:size-8 pttrn:group-data-[size=xs]/item:size-6 pttrn:[&_img]:size-full pttrn:[&_img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function ItemMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function ItemContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-content"
      className={cn(
        "pttrn:flex pttrn:flex-1 pttrn:flex-col pttrn:gap-1 pttrn:group-data-[size=xs]/item:gap-0.5 pttrn:[&+[data-slot=item-content]]:flex-none",
        className
      )}
      {...props}
    />
  )
}

function ItemTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-title"
      className={cn(
        "pttrn:line-clamp-1 pttrn:flex pttrn:w-fit pttrn:items-center pttrn:gap-2 pttrn:text-xs/relaxed pttrn:leading-snug pttrn:font-medium pttrn:underline-offset-4",
        className
      )}
      {...props}
    />
  )
}

function ItemDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        "pttrn:line-clamp-2 pttrn:text-start pttrn:text-xs/relaxed pttrn:font-normal pttrn:text-muted-foreground pttrn:[&>a]:underline pttrn:[&>a]:underline-offset-4 pttrn:[&>a:hover]:text-primary",
        className
      )}
      {...props}
    />
  )
}

function ItemActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-actions"
      className={cn("pttrn:flex pttrn:items-center pttrn:gap-2", className)}
      {...props}
    />
  )
}

function ItemHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-header"
      className={cn(
        "pttrn:flex pttrn:basis-full pttrn:items-center pttrn:justify-between pttrn:gap-2",
        className
      )}
      {...props}
    />
  )
}

function ItemFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-footer"
      className={cn(
        "pttrn:flex pttrn:basis-full pttrn:items-center pttrn:justify-between pttrn:gap-2",
        className
      )}
      {...props}
    />
  )
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
}
