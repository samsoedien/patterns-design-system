"use client"

import { useMemo } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "cuoio:flex cuoio:flex-col cuoio:gap-4 cuoio:has-[>[data-slot=checkbox-group]]:gap-3 cuoio:has-[>[data-slot=radio-group]]:gap-3",
        className
      )}
      {...props}
    />
  )
}

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "cuoio:mb-1.5 cuoio:font-medium cuoio:data-[variant=label]:text-sm cuoio:data-[variant=legend]:text-base",
        className
      )}
      {...props}
    />
  )
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "cuoio:group/field-group cuoio:@container/field-group cuoio:flex cuoio:w-full cuoio:flex-col cuoio:gap-5 cuoio:data-[slot=checkbox-group]:gap-3 cuoio:*:data-[slot=field-group]:gap-4",
        className
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  "cuoio:group/field cuoio:flex cuoio:w-full cuoio:gap-2 cuoio:data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: "cuoio:flex-col cuoio:*:w-full cuoio:[&>.sr-only]:w-auto",
        horizontal:
          "cuoio:flex-row cuoio:items-center cuoio:has-[>[data-slot=field-content]]:items-start cuoio:*:data-[slot=field-label]:flex-auto cuoio:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        responsive:
          "cuoio:flex-col cuoio:*:w-full cuoio:@md/field-group:flex-row cuoio:@md/field-group:items-center cuoio:@md/field-group:*:w-auto cuoio:@md/field-group:has-[>[data-slot=field-content]]:items-start cuoio:@md/field-group:*:data-[slot=field-label]:flex-auto cuoio:[&>.sr-only]:w-auto cuoio:@md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
)

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "cuoio:group/field-content cuoio:flex cuoio:flex-1 cuoio:flex-col cuoio:gap-0.5 cuoio:leading-snug",
        className
      )}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "cuoio:group/field-label cuoio:peer/field-label cuoio:flex cuoio:w-fit cuoio:gap-2 cuoio:leading-snug cuoio:group-data-[disabled=true]/field:opacity-50 cuoio:has-data-checked:border-primary/30 cuoio:has-data-checked:bg-primary/5 cuoio:has-[>[data-slot=field]]:rounded-lg cuoio:has-[>[data-slot=field]]:border cuoio:has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 cuoio:has-[>[data-slot=field]]:has-[:focus-visible]:border-ring cuoio:has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 cuoio:has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/50 cuoio:*:data-[slot=field]:p-2.5 cuoio:dark:has-data-checked:border-primary/20 cuoio:dark:has-data-checked:bg-primary/10",
        "cuoio:has-[>[data-slot=field]]:w-full cuoio:has-[>[data-slot=field]]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "cuoio:flex cuoio:w-fit cuoio:items-center cuoio:gap-2 cuoio:text-sm cuoio:font-medium cuoio:group-data-[disabled=true]/field:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "cuoio:text-start cuoio:text-sm cuoio:leading-normal cuoio:font-normal cuoio:text-muted-foreground cuoio:group-has-data-horizontal/field:text-balance cuoio:[[data-variant=legend]+&]:-mt-1.5",
        "cuoio:last:mt-0 cuoio:nth-last-2:-mt-1",
        "cuoio:[&>a]:underline cuoio:[&>a]:underline-offset-4 cuoio:[&>a:hover]:text-primary",
        className
      )}
      {...props}
    />
  )
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        "cuoio:relative cuoio:-my-2 cuoio:h-5 cuoio:text-sm cuoio:group-data-[variant=outline]/field-group:-mb-2",
        className
      )}
      {...props}
    >
      <Separator className="cuoio:absolute cuoio:inset-0 cuoio:top-1/2" />
      {children && (
        <span
          className="cuoio:relative cuoio:mx-auto cuoio:block cuoio:w-fit cuoio:bg-background cuoio:px-2 cuoio:text-muted-foreground"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ]

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message
    }

    return (
      <ul className="cuoio:ms-4 cuoio:flex cuoio:list-disc cuoio:flex-col cuoio:gap-1">
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("cuoio:text-sm cuoio:font-normal cuoio:text-destructive", className)}
      {...props}
    >
      {content}
    </div>
  )
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}
