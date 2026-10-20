import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const alertVariants = cva(
  "pttrn:group/alert pttrn:relative pttrn:grid pttrn:w-full pttrn:gap-0.5 pttrn:rounded-lg pttrn:border pttrn:px-2 pttrn:py-1.5 pttrn:text-start pttrn:text-xs/relaxed pttrn:has-data-[slot=alert-action]:relative pttrn:has-data-[slot=alert-action]:pe-18 pttrn:has-[>svg]:grid-cols-[auto_1fr] pttrn:has-[>svg]:gap-x-1.5 pttrn:*:[svg]:row-span-2 pttrn:*:[svg]:translate-y-0.5 pttrn:*:[svg]:text-current pttrn:*:[svg:not([class*=size-])]:size-3.5",
  {
    variants: {
      variant: {
        default: "pttrn:bg-card pttrn:text-card-foreground",
        destructive:
          "pttrn:bg-card pttrn:text-destructive pttrn:*:data-[slot=alert-description]:text-destructive/90 pttrn:*:[svg]:text-current",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "pttrn:font-medium pttrn:group-has-[>svg]/alert:col-start-2 pttrn:[&_a]:underline pttrn:[&_a]:underline-offset-3 pttrn:[&_a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "pttrn:text-xs/relaxed pttrn:text-balance pttrn:text-muted-foreground pttrn:md:text-pretty pttrn:[&_a]:underline pttrn:[&_a]:underline-offset-3 pttrn:[&_a]:hover:text-foreground pttrn:[&_p:not(:last-child)]:mb-4",
        className
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("pttrn:absolute pttrn:top-1.5 pttrn:end-2", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction }
