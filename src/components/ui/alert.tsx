import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const alertVariants = cva(
  "cuoio:group/alert cuoio:relative cuoio:grid cuoio:w-full cuoio:gap-0.5 cuoio:rounded-lg cuoio:border cuoio:px-2.5 cuoio:py-2 cuoio:text-start cuoio:text-sm cuoio:has-data-[slot=alert-action]:relative cuoio:has-data-[slot=alert-action]:pe-18 cuoio:has-[>svg]:grid-cols-[auto_1fr] cuoio:has-[>svg]:gap-x-2 cuoio:*:[svg]:row-span-2 cuoio:*:[svg]:translate-y-0.5 cuoio:*:[svg]:text-current cuoio:*:[svg:not([class*=size-])]:size-4",
  {
    variants: {
      variant: {
        default: "cuoio:bg-card cuoio:text-card-foreground",
        destructive:
          "cuoio:bg-card cuoio:text-destructive cuoio:*:data-[slot=alert-description]:text-destructive/90 cuoio:*:[svg]:text-current",
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
        "cuoio:font-medium cuoio:group-has-[>svg]/alert:col-start-2 cuoio:[&_a]:underline cuoio:[&_a]:underline-offset-3 cuoio:[&_a]:hover:text-foreground",
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
        "cuoio:text-sm cuoio:text-balance cuoio:text-muted-foreground cuoio:md:text-pretty cuoio:[&_a]:underline cuoio:[&_a]:underline-offset-3 cuoio:[&_a]:hover:text-foreground cuoio:[&_p:not(:last-child)]:mb-4",
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
      className={cn("cuoio:absolute cuoio:top-2 cuoio:end-2", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction }
