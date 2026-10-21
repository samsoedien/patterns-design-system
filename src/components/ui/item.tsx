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
        "cuoio:group/item-group cuoio:flex cuoio:w-full cuoio:flex-col cuoio:gap-4 cuoio:has-data-[size=sm]:gap-2.5 cuoio:has-data-[size=xs]:gap-2",
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
      className={cn("cuoio:my-2", className)}
      {...props}
    />
  )
}

const itemVariants = cva(
  "cuoio:group/item cuoio:flex cuoio:w-full cuoio:flex-wrap cuoio:items-center cuoio:rounded-md cuoio:border cuoio:text-xs/relaxed cuoio:transition-colors cuoio:duration-100 cuoio:outline-none cuoio:focus-visible:border-ring cuoio:focus-visible:ring-[3px] cuoio:focus-visible:ring-ring/50 cuoio:[a]:transition-colors cuoio:[a]:hover:bg-muted",
  {
    variants: {
      variant: {
        default: "cuoio:border-transparent",
        outline: "cuoio:border-border",
        muted: "cuoio:border-transparent cuoio:bg-muted/50",
      },
      size: {
        default: "cuoio:gap-2.5 cuoio:px-3 cuoio:py-2.5",
        sm: "cuoio:gap-2.5 cuoio:px-3 cuoio:py-2.5",
        xs: "cuoio:gap-2.5 cuoio:px-2.5 cuoio:py-2 cuoio:in-data-[slot=dropdown-menu-content]:p-0",
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
  "cuoio:flex cuoio:shrink-0 cuoio:items-center cuoio:justify-center cuoio:gap-2 cuoio:group-has-data-[slot=item-description]/item:translate-y-0.5 cuoio:group-has-data-[slot=item-description]/item:self-start cuoio:[&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "cuoio:bg-transparent",
        icon: "cuoio:[&_svg:not([class*=size-])]:size-4",
        image:
          "cuoio:size-8 cuoio:overflow-hidden cuoio:rounded-sm cuoio:group-data-[size=sm]/item:size-8 cuoio:group-data-[size=xs]/item:size-6 cuoio:[&_img]:size-full cuoio:[&_img]:object-cover",
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
        "cuoio:flex cuoio:flex-1 cuoio:flex-col cuoio:gap-1 cuoio:group-data-[size=xs]/item:gap-0.5 cuoio:[&+[data-slot=item-content]]:flex-none",
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
        "cuoio:line-clamp-1 cuoio:flex cuoio:w-fit cuoio:items-center cuoio:gap-2 cuoio:text-xs/relaxed cuoio:leading-snug cuoio:font-medium cuoio:underline-offset-4",
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
        "cuoio:line-clamp-2 cuoio:text-start cuoio:text-xs/relaxed cuoio:font-normal cuoio:text-muted-foreground cuoio:[&>a]:underline cuoio:[&>a]:underline-offset-4 cuoio:[&>a:hover]:text-primary",
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
      className={cn("cuoio:flex cuoio:items-center cuoio:gap-2", className)}
      {...props}
    />
  )
}

function ItemHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-header"
      className={cn(
        "cuoio:flex cuoio:basis-full cuoio:items-center cuoio:justify-between cuoio:gap-2",
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
        "cuoio:flex cuoio:basis-full cuoio:items-center cuoio:justify-between cuoio:gap-2",
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
