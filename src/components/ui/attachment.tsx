import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { Button } from "@/components/ui/button"

const attachmentVariants = cva(
  "pttrn:group/attachment pttrn:relative pttrn:flex pttrn:w-fit pttrn:max-w-full pttrn:min-w-0 pttrn:shrink-0 pttrn:flex-wrap pttrn:rounded-lg pttrn:border pttrn:bg-card pttrn:text-card-foreground pttrn:transition-colors pttrn:focus-within:ring-1 pttrn:focus-within:ring-ring/30 pttrn:has-[>a,>button]:hover:bg-muted/50 pttrn:data-[state=error]:border-destructive/30 pttrn:data-[state=idle]:border-dashed",
  {
    variants: {
      size: {
        default:
          "pttrn:gap-2 pttrn:text-xs pttrn:has-data-[slot=attachment-content]:px-2 pttrn:has-data-[slot=attachment-content]:py-1.5 pttrn:has-data-[slot=attachment-media]:p-1.5",
        sm: "pttrn:gap-2.5 pttrn:text-xs pttrn:has-data-[slot=attachment-content]:px-1.5 pttrn:has-data-[slot=attachment-content]:py-1 pttrn:has-data-[slot=attachment-media]:p-1",
        xs: "pttrn:gap-1.5 pttrn:rounded-md pttrn:text-xs pttrn:has-data-[slot=attachment-content]:px-1.5 pttrn:has-data-[slot=attachment-content]:py-1 pttrn:has-data-[slot=attachment-media]:p-1",
      },
      orientation: {
        horizontal: "pttrn:min-w-40 pttrn:items-center",
        vertical: "pttrn:w-24 pttrn:flex-col pttrn:has-data-[slot=attachment-content]:w-30",
      },
    },
  }
)

function Attachment({
  className,
  state = "done",
  size = "default",
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof attachmentVariants> & {
    state?: "idle" | "uploading" | "processing" | "error" | "done"
  }) {
  return (
    <div
      data-slot="attachment"
      data-state={state}
      data-size={size}
      data-orientation={orientation}
      className={cn(attachmentVariants({ size, orientation }), className)}
      {...props}
    />
  )
}

const attachmentMediaVariants = cva(
  "pttrn:relative pttrn:flex pttrn:aspect-square pttrn:w-10 pttrn:shrink-0 pttrn:items-center pttrn:justify-center pttrn:overflow-hidden pttrn:rounded-md pttrn:bg-muted pttrn:text-foreground pttrn:group-data-[orientation=vertical]/attachment:w-full pttrn:group-data-[size=sm]/attachment:w-8 pttrn:group-data-[size=xs]/attachment:w-7 pttrn:group-data-[size=xs]/attachment:rounded-sm pttrn:group-data-[state=error]/attachment:bg-destructive/10 pttrn:group-data-[state=error]/attachment:text-destructive pttrn:group-data-[orientation=vertical]/attachment:*:data-[slot=spinner]:size-6! pttrn:[&_svg]:pointer-events-none pttrn:[&_svg:not([class*=size-])]:size-4 pttrn:group-data-[orientation=vertical]/attachment:[&_svg:not([class*=size-])]:size-6 pttrn:group-data-[size=xs]/attachment:[&_svg:not([class*=size-])]:size-3.5",
  {
    variants: {
      variant: {
        icon: "pttrn:",
        image:
          "pttrn:opacity-60 pttrn:group-data-[state=done]/attachment:opacity-100 pttrn:group-data-[state=idle]/attachment:opacity-100 pttrn:*:[img]:aspect-square pttrn:*:[img]:w-full pttrn:*:[img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "icon",
    },
  }
)

function AttachmentMedia({
  className,
  variant = "icon",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof attachmentMediaVariants>) {
  return (
    <div
      data-slot="attachment-media"
      data-variant={variant}
      className={cn(attachmentMediaVariants({ variant }), className)}
      {...props}
    />
  )
}

function AttachmentContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-content"
      className={cn(
        "pttrn:max-w-full pttrn:min-w-0 pttrn:flex-1 pttrn:leading-tight pttrn:group-data-[orientation=vertical]/attachment:px-1",
        className
      )}
      {...props}
    />
  )
}

function AttachmentTitle({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="attachment-title"
      className={cn(
        "pttrn:block pttrn:max-w-full pttrn:min-w-0 pttrn:truncate pttrn:font-medium pttrn:group-data-[state=processing]/attachment:shimmer pttrn:group-data-[state=uploading]/attachment:shimmer",
        className
      )}
      {...props}
    />
  )
}

function AttachmentDescription({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="attachment-description"
      className={cn(
        "pttrn:mt-0.5 pttrn:block pttrn:min-w-0 pttrn:truncate pttrn:text-xs pttrn:text-muted-foreground pttrn:group-data-[state=error]/attachment:text-destructive/80",
        "pttrn:max-w-full",
        className
      )}
      {...props}
    />
  )
}

function AttachmentActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-actions"
      className={cn(
        "pttrn:relative pttrn:z-20 pttrn:flex pttrn:shrink-0 pttrn:items-center pttrn:group-data-[orientation=vertical]/attachment:absolute pttrn:group-data-[orientation=vertical]/attachment:top-3 pttrn:group-data-[orientation=vertical]/attachment:end-3 pttrn:group-data-[orientation=vertical]/attachment:gap-1",
        className
      )}
      {...props}
    />
  )
}

function AttachmentAction({
  className,
  variant,
  size = "icon-xs",
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="attachment-action"
      variant={variant ?? "ghost"}
      size={size}
      className={cn(className)}
      {...props}
    />
  )
}

function AttachmentTrigger({
  className,
  render,
  type,
  ...props
}: useRender.ComponentProps<"button">) {
  return useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(
      {
        type: render ? type : (type ?? "button"),
        className: cn("absolute inset-0 z-10 outline-none", className),
      },
      props
    ),
    render,
    state: {
      slot: "attachment-trigger",
    },
  })
}

function AttachmentGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-group"
      className={cn(
        "pttrn:flex pttrn:min-w-0 pttrn:scroll-fade-x pttrn:snap-x pttrn:snap-mandatory pttrn:scroll-px-1 pttrn:scrollbar-none pttrn:gap-3 pttrn:overflow-x-auto pttrn:overscroll-x-contain pttrn:py-1 pttrn:*:data-[slot=attachment]:flex-none pttrn:*:data-[slot=attachment]:snap-start",
        className
      )}
      {...props}
    />
  )
}

export {
  Attachment,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
  AttachmentActions,
  AttachmentAction,
  AttachmentTrigger,
}
