import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { Button } from "@/components/ui/button"

const attachmentVariants = cva(
  "cuoio:group/attachment cuoio:relative cuoio:flex cuoio:w-fit cuoio:max-w-full cuoio:min-w-0 cuoio:shrink-0 cuoio:flex-wrap cuoio:rounded-lg cuoio:border cuoio:bg-card cuoio:text-card-foreground cuoio:transition-colors cuoio:focus-within:ring-1 cuoio:focus-within:ring-ring/30 cuoio:has-[>a,>button]:hover:bg-muted/50 cuoio:data-[state=error]:border-destructive/30 cuoio:data-[state=idle]:border-dashed",
  {
    variants: {
      size: {
        default:
          "cuoio:gap-2 cuoio:text-xs cuoio:has-data-[slot=attachment-content]:px-2 cuoio:has-data-[slot=attachment-content]:py-1.5 cuoio:has-data-[slot=attachment-media]:p-1.5",
        sm: "cuoio:gap-2.5 cuoio:text-xs cuoio:has-data-[slot=attachment-content]:px-1.5 cuoio:has-data-[slot=attachment-content]:py-1 cuoio:has-data-[slot=attachment-media]:p-1",
        xs: "cuoio:gap-1.5 cuoio:rounded-md cuoio:text-xs cuoio:has-data-[slot=attachment-content]:px-1.5 cuoio:has-data-[slot=attachment-content]:py-1 cuoio:has-data-[slot=attachment-media]:p-1",
      },
      orientation: {
        horizontal: "cuoio:min-w-40 cuoio:items-center",
        vertical: "cuoio:w-24 cuoio:flex-col cuoio:has-data-[slot=attachment-content]:w-30",
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
  "cuoio:relative cuoio:flex cuoio:aspect-square cuoio:w-10 cuoio:shrink-0 cuoio:items-center cuoio:justify-center cuoio:overflow-hidden cuoio:rounded-md cuoio:bg-muted cuoio:text-foreground cuoio:group-data-[orientation=vertical]/attachment:w-full cuoio:group-data-[size=sm]/attachment:w-8 cuoio:group-data-[size=xs]/attachment:w-7 cuoio:group-data-[size=xs]/attachment:rounded-sm cuoio:group-data-[state=error]/attachment:bg-destructive/10 cuoio:group-data-[state=error]/attachment:text-destructive cuoio:group-data-[orientation=vertical]/attachment:*:data-[slot=spinner]:size-6! cuoio:[&_svg]:pointer-events-none cuoio:[&_svg:not([class*=size-])]:size-4 cuoio:group-data-[orientation=vertical]/attachment:[&_svg:not([class*=size-])]:size-6 cuoio:group-data-[size=xs]/attachment:[&_svg:not([class*=size-])]:size-3.5",
  {
    variants: {
      variant: {
        icon: "cuoio:",
        image:
          "cuoio:opacity-60 cuoio:group-data-[state=done]/attachment:opacity-100 cuoio:group-data-[state=idle]/attachment:opacity-100 cuoio:*:[img]:aspect-square cuoio:*:[img]:w-full cuoio:*:[img]:object-cover",
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
        "cuoio:max-w-full cuoio:min-w-0 cuoio:flex-1 cuoio:leading-tight cuoio:group-data-[orientation=vertical]/attachment:px-1",
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
        "cuoio:block cuoio:max-w-full cuoio:min-w-0 cuoio:truncate cuoio:font-medium cuoio:group-data-[state=processing]/attachment:shimmer cuoio:group-data-[state=uploading]/attachment:shimmer",
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
        "cuoio:mt-0.5 cuoio:block cuoio:min-w-0 cuoio:truncate cuoio:text-xs cuoio:text-muted-foreground cuoio:group-data-[state=error]/attachment:text-destructive/80",
        "cuoio:max-w-full",
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
        "cuoio:relative cuoio:z-20 cuoio:flex cuoio:shrink-0 cuoio:items-center cuoio:group-data-[orientation=vertical]/attachment:absolute cuoio:group-data-[orientation=vertical]/attachment:top-3 cuoio:group-data-[orientation=vertical]/attachment:end-3 cuoio:group-data-[orientation=vertical]/attachment:gap-1",
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
        "cuoio:flex cuoio:min-w-0 cuoio:scroll-fade-x cuoio:snap-x cuoio:snap-mandatory cuoio:scroll-px-1 cuoio:scrollbar-none cuoio:gap-3 cuoio:overflow-x-auto cuoio:overscroll-x-contain cuoio:py-1 cuoio:*:data-[slot=attachment]:flex-none cuoio:*:data-[slot=attachment]:snap-start",
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
