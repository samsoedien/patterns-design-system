import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "pttrn:flex pttrn:w-full pttrn:min-w-0 pttrn:flex-1 pttrn:flex-col pttrn:items-center pttrn:justify-center pttrn:gap-4 pttrn:rounded-xl pttrn:border-dashed pttrn:p-6 pttrn:text-center pttrn:text-balance",
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
      className={cn("pttrn:flex pttrn:max-w-sm pttrn:flex-col pttrn:items-center pttrn:gap-1", className)}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  "pttrn:mb-2 pttrn:flex pttrn:shrink-0 pttrn:items-center pttrn:justify-center pttrn:[&_svg]:pointer-events-none pttrn:[&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "pttrn:bg-transparent",
        icon: "pttrn:flex pttrn:size-8 pttrn:shrink-0 pttrn:items-center pttrn:justify-center pttrn:rounded-md pttrn:bg-muted pttrn:text-foreground pttrn:[&_svg:not([class*=size-])]:size-4",
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
        "pttrn:font-heading pttrn:text-sm pttrn:font-medium pttrn:tracking-tight",
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
        "pttrn:text-xs/relaxed pttrn:text-muted-foreground pttrn:[&>a]:underline pttrn:[&>a]:underline-offset-4 pttrn:[&>a:hover]:text-primary",
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
        "pttrn:flex pttrn:w-full pttrn:max-w-sm pttrn:min-w-0 pttrn:flex-col pttrn:items-center pttrn:gap-2 pttrn:text-xs/relaxed pttrn:text-balance",
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
