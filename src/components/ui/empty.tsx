import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "cuoio:flex cuoio:w-full cuoio:min-w-0 cuoio:flex-1 cuoio:flex-col cuoio:items-center cuoio:justify-center cuoio:gap-4 cuoio:rounded-xl cuoio:border-dashed cuoio:p-6 cuoio:text-center cuoio:text-balance",
        className
      )}
      {...props}
    />
  )
}

function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn("cuoio:flex cuoio:max-w-sm cuoio:flex-col cuoio:items-center cuoio:gap-1", className)}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  "cuoio:mb-2 cuoio:flex cuoio:shrink-0 cuoio:items-center cuoio:justify-center cuoio:[&_svg]:pointer-events-none cuoio:[&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "cuoio:bg-transparent",
        icon: "cuoio:flex cuoio:size-8 cuoio:shrink-0 cuoio:items-center cuoio:justify-center cuoio:rounded-md cuoio:bg-muted cuoio:text-foreground cuoio:[&_svg:not([class*=size-])]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      className={cn(
        "cuoio:font-heading cuoio:text-sm cuoio:font-medium cuoio:tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "cuoio:text-xs/relaxed cuoio:text-muted-foreground cuoio:[&>a]:underline cuoio:[&>a]:underline-offset-4 cuoio:[&>a:hover]:text-primary",
        className
      )}
      {...props}
    />
  )
}

function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        "cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:min-w-0 cuoio:flex-col cuoio:items-center cuoio:gap-2 cuoio:text-xs/relaxed cuoio:text-balance",
        className
      )}
      {...props}
    />
  )
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
}
