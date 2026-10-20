"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import { CheckIcon, CopyIcon } from "lucide-react"

const codeBlockVariants = cva(
  "pttrn:group/code-block pttrn:relative pttrn:flex pttrn:w-full pttrn:min-w-0 pttrn:flex-col pttrn:overflow-hidden pttrn:rounded-md pttrn:text-sm pttrn:has-[>[data-slot=code-block-content]:focus-visible]:ring-2 pttrn:has-[>[data-slot=code-block-content]:focus-visible]:ring-ring/30 pttrn:data-[size=sm]:text-xs",
  {
    variants: {
      variant: {
        default:
          "pttrn:border pttrn:border-input pttrn:text-foreground pttrn:has-[>[data-slot=code-block-content]:focus-visible]:border-ring pttrn:dark:bg-input/30",
        destructive:
          "pttrn:border pttrn:border-destructive/30 pttrn:text-destructive pttrn:dark:border-destructive/40",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function CodeBlock({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof codeBlockVariants> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="code-block"
      data-variant={variant}
      data-size={size}
      className={cn(codeBlockVariants({ variant }), className)}
      {...props}
    />
  )
}

function CodeBlockHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="code-block-header"
      className={cn(
        "pttrn:flex pttrn:min-w-0 pttrn:shrink-0 pttrn:items-center pttrn:gap-2 pttrn:px-3 pttrn:pt-3 pttrn:text-muted-foreground pttrn:group-data-[size=sm]/code-block:px-2 pttrn:group-data-[size=sm]/code-block:pt-2 pttrn:group-data-[variant=destructive]/code-block:text-destructive pttrn:*:has-[>[data-slot=code-block-title]]:min-w-0",
        className
      )}
      {...props}
    />
  )
}

function CodeBlockTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="code-block-title"
      className={cn(
        "pttrn:min-w-0 pttrn:truncate pttrn:font-sans pttrn:text-xs pttrn:font-medium pttrn:text-foreground pttrn:group-data-[variant=destructive]/code-block:text-destructive pttrn:[&_svg]:pointer-events-none pttrn:[&_svg]:inline-block pttrn:[&_svg]:align-middle pttrn:[&_svg:not([class*=size-])]:size-3.5 pttrn:*:[svg]:me-1.5",
        className
      )}
      {...props}
    />
  )
}

function CodeBlockActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="code-block-actions"
      className={cn(
        "pttrn:-my-1 pttrn:ms-auto pttrn:-me-1.5 pttrn:flex pttrn:shrink-0 pttrn:items-center pttrn:gap-1 pttrn:[[data-slot=code-block]>&]:absolute pttrn:[[data-slot=code-block]>&]:end-2 pttrn:[[data-slot=code-block]>&]:top-2 pttrn:[[data-slot=code-block]>&]:z-10 pttrn:[[data-slot=code-block]>&]:m-0 pttrn:[[data-slot=code-block]>&]:opacity-0 pttrn:[[data-slot=code-block]>&]:transition-opacity pttrn:[[data-slot=code-block]>&]:group-focus-within/code-block:opacity-100 pttrn:[[data-slot=code-block]>&]:group-hover/code-block:opacity-100 pttrn:group-data-[size=sm]/code-block:[[data-slot=code-block]>&]:end-1.5 pttrn:group-data-[size=sm]/code-block:[[data-slot=code-block]>&]:top-1.5 pttrn:[[data-slot=code-block]>&]:pointer-coarse:opacity-100 pttrn:[[data-slot=code-block]>&]:*:[button]:bg-background pttrn:[[data-slot=code-block]>&]:*:[button]:ring-1 pttrn:[[data-slot=code-block]>&]:*:[button]:ring-foreground/10",
        className
      )}
      {...props}
    />
  )
}

function CodeBlockCopyButton({
  value,
  variant = "ghost",
  size = "icon-xs",
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button> & { value: string }) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (!copied) {
      return
    }

    const timeout = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timeout)
  }, [copied])

  return (
    <>
      <Button
        data-slot="code-block-copy-button"
        data-copied={copied || undefined}
        variant={variant}
        size={size}
        aria-label={copied ? "Copied" : "Copy"}
        className={cn(className)}
        onClick={(event) => {
          onClick?.(event)
          navigator.clipboard
            .writeText(value)
            .then(() => setCopied(true))
            .catch(() => {})
        }}
        {...props}
      >
        {copied ? (
          <CheckIcon
          />
        ) : (
          <CopyIcon
          />
        )}
      </Button>
      <span aria-live="polite" className="pttrn:sr-only">
        {copied ? "Copied" : ""}
      </span>
    </>
  )
}

function CodeBlockContent({
  className,
  children,
  style,
  wrap = false,
  lineNumbers = false,
  startLine = 1,
  ...props
}: React.ComponentProps<"pre"> & {
  wrap?: boolean
  lineNumbers?: boolean
  startLine?: number
}) {
  return (
    <pre
      data-slot="code-block-content"
      data-wrap={wrap || undefined}
      data-numbered={lineNumbers || undefined}
      dir="ltr"
      tabIndex={0}
      style={{ counterReset: `line ${startLine - 1}`, ...style }}
      className={cn(
        "pttrn:min-h-0 pttrn:min-w-0 pttrn:scroll-fade-x pttrn:scrollbar-thin pttrn:overflow-auto pttrn:px-3 pttrn:py-3 pttrn:text-start pttrn:font-mono pttrn:leading-relaxed pttrn:outline-none pttrn:group-has-data-[slot=code-block-footer]/code-block:pb-2 pttrn:group-has-data-[slot=code-block-header]/code-block:pt-2 pttrn:group-data-[size=sm]/code-block:px-2 pttrn:group-data-[size=sm]/code-block:py-2 pttrn:group-data-[size=sm]/code-block:group-has-data-[slot=code-block-header]/code-block:pt-1.5 pttrn:data-wrap:scroll-fade-y pttrn:data-wrap:wrap-break-word pttrn:data-wrap:whitespace-pre-wrap",
        className
      )}
      {...props}
    >
      <code
        data-slot="code-block-code"
        className="pttrn:grid pttrn:min-h-lh pttrn:min-w-max pttrn:content-start pttrn:in-data-numbered:grid-cols-[auto_1fr] pttrn:in-data-wrap:min-w-0"
      >
        {lineNumbers && typeof children === "string"
          ? children
              .replace(/\n$/, "")
              .split("\n")
              .map((line, index) => (
                <CodeBlockLine key={index}>{line}</CodeBlockLine>
              ))
          : children}
      </code>
    </pre>
  )
}

const codeBlockLineVariants = cva(
  "pttrn:relative pttrn:-mx-3 pttrn:block pttrn:min-h-lh pttrn:px-3 pttrn:group-data-[size=sm]/code-block:-mx-2 pttrn:group-data-[size=sm]/code-block:px-2 pttrn:before:min-w-6 pttrn:before:text-end pttrn:before:text-muted-foreground pttrn:after:absolute pttrn:after:start-1 pttrn:after:top-0 pttrn:after:text-muted-foreground pttrn:after:select-none pttrn:in-data-numbered:col-span-2 pttrn:in-data-numbered:grid pttrn:in-data-numbered:grid-cols-subgrid pttrn:in-data-numbered:gap-x-3 pttrn:in-data-numbered:[counter-increment:line] pttrn:in-data-numbered:before:content-[counter(line)] pttrn:in-data-numbered:before:select-none pttrn:in-data-numbered:supports-[content:counter(line)_/_]:before:content-[counter(line)_/_]",
  {
    variants: {
      variant: {
        default: "pttrn:",
        added: "pttrn:bg-muted pttrn:after:content-[+]",
        removed: "pttrn:bg-destructive/10 pttrn:after:text-destructive pttrn:after:content-[−]",
        highlighted: "pttrn:bg-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function CodeBlockLine({
  className,
  variant = "default",
  children,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof codeBlockLineVariants>) {
  // An empty line holds a newline so copying a selection keeps blank lines.
  const empty =
    children === undefined ||
    children === null ||
    children === "" ||
    (Array.isArray(children) && children.length === 0)

  return (
    <span
      data-slot="code-block-line"
      data-variant={variant}
      className={cn(codeBlockLineVariants({ variant }), className)}
      {...props}
    >
      <span data-slot="code-block-line-content" className="pttrn:min-w-0">
        {empty ? "\n" : children}
      </span>
    </span>
  )
}

function CodeBlockFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="code-block-footer"
      className={cn(
        "pttrn:flex pttrn:min-w-0 pttrn:shrink-0 pttrn:items-center pttrn:gap-2 pttrn:px-3 pttrn:pb-3 pttrn:text-muted-foreground pttrn:group-data-[size=sm]/code-block:px-2 pttrn:group-data-[size=sm]/code-block:pb-2",
        className
      )}
      {...props}
    />
  )
}

export {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockTitle,
  CodeBlockActions,
  CodeBlockCopyButton,
  CodeBlockContent,
  CodeBlockLine,
  CodeBlockFooter,
}
