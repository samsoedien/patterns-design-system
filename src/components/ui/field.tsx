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
        "pttrn:flex pttrn:flex-col pttrn:gap-4 pttrn:has-[>[data-slot=checkbox-group]]:gap-3 pttrn:has-[>[data-slot=radio-group]]:gap-3",
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
        "pttrn:mb-2 pttrn:font-medium pttrn:data-[variant=label]:text-xs/relaxed pttrn:data-[variant=legend]:text-sm",
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
        "pttrn:group/field-group pttrn:@container/field-group pttrn:flex pttrn:w-full pttrn:flex-col pttrn:gap-4 pttrn:data-[slot=checkbox-group]:gap-3 pttrn:*:data-[slot=field-group]:gap-4",
        className
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  "pttrn:group/field pttrn:flex pttrn:w-full pttrn:gap-2 pttrn:data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: "pttrn:flex-col pttrn:*:w-full pttrn:[&>.sr-only]:w-auto",
        horizontal:
          "pttrn:flex-row pttrn:items-center pttrn:has-[>[data-slot=field-content]]:items-start pttrn:*:data-[slot=field-label]:flex-auto pttrn:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        responsive:
          "pttrn:flex-col pttrn:*:w-full pttrn:@md/field-group:flex-row pttrn:@md/field-group:items-center pttrn:@md/field-group:*:w-auto pttrn:@md/field-group:has-[>[data-slot=field-content]]:items-start pttrn:@md/field-group:*:data-[slot=field-label]:flex-auto pttrn:[&>.sr-only]:w-auto pttrn:@md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
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
        "pttrn:group/field-content pttrn:flex pttrn:flex-1 pttrn:flex-col pttrn:gap-0.5 pttrn:leading-snug",
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
        "pttrn:group/field-label pttrn:peer/field-label pttrn:flex pttrn:w-fit pttrn:gap-2 pttrn:leading-snug pttrn:group-data-[disabled=true]/field:opacity-50 pttrn:has-data-checked:bg-primary/5 pttrn:has-[>[data-slot=field]]:rounded-md pttrn:has-[>[data-slot=field]]:border pttrn:has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-input/40 pttrn:has-[>[data-slot=field]]:has-[:focus-visible]:border-ring pttrn:has-[>[data-slot=field]]:has-[:focus-visible]:ring-2 pttrn:has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/30 pttrn:*:data-[slot=field]:p-2 pttrn:dark:has-data-checked:bg-primary/10",
        "pttrn:has-[>[data-slot=field]]:w-full pttrn:has-[>[data-slot=field]]:flex-col",
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
        "pttrn:flex pttrn:w-fit pttrn:items-center pttrn:gap-2 pttrn:text-xs/relaxed pttrn:font-medium pttrn:group-data-[disabled=true]/field:opacity-50",
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
        "pttrn:text-start pttrn:text-xs/relaxed pttrn:leading-normal pttrn:font-normal pttrn:text-muted-foreground pttrn:group-has-data-horizontal/field:text-balance pttrn:[[data-variant=legend]+&]:-mt-1.5",
        "pttrn:last:mt-0 pttrn:nth-last-2:-mt-1",
        "pttrn:[&>a]:underline pttrn:[&>a]:underline-offset-4 pttrn:[&>a:hover]:text-primary",
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
        "pttrn:relative pttrn:-my-2 pttrn:h-5 pttrn:text-xs/relaxed pttrn:group-data-[variant=outline]/field-group:-mb-2",
        className
      )}
      {...props}
    >
      <Separator className="pttrn:absolute pttrn:inset-0 pttrn:top-1/2" />
      {children && (
        <span
          className="pttrn:relative pttrn:mx-auto pttrn:block pttrn:w-fit pttrn:bg-background pttrn:px-2 pttrn:text-muted-foreground"
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
      <ul className="pttrn:ms-4 pttrn:flex pttrn:list-disc pttrn:flex-col pttrn:gap-1">
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
      className={cn("pttrn:text-xs/relaxed pttrn:font-normal pttrn:text-destructive", className)}
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
