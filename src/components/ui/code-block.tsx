"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import { CheckIcon, CopyIcon } from "lucide-react"

const codeBlockVariants = cva(
  "cuoio:group/code-block cuoio:relative cuoio:flex cuoio:w-full cuoio:min-w-0 cuoio:flex-col cuoio:overflow-hidden cuoio:rounded-md cuoio:text-sm cuoio:has-[>[data-slot=code-block-content]:focus-visible]:ring-2 cuoio:has-[>[data-slot=code-block-content]:focus-visible]:ring-ring/30 cuoio:data-[size=sm]:text-xs",
  {
    variants: {
      variant: {
        default:
          "cuoio:border cuoio:border-input cuoio:text-foreground cuoio:has-[>[data-slot=code-block-content]:focus-visible]:border-ring cuoio:dark:bg-input/30",
        destructive:
          "cuoio:border cuoio:border-destructive/30 cuoio:text-destructive cuoio:dark:border-destructive/40",
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
        "cuoio:flex cuoio:min-w-0 cuoio:shrink-0 cuoio:items-center cuoio:gap-2 cuoio:px-3 cuoio:pt-3 cuoio:text-muted-foreground cuoio:group-data-[size=sm]/code-block:px-2 cuoio:group-data-[size=sm]/code-block:pt-2 cuoio:group-data-[variant=destructive]/code-block:text-destructive cuoio:*:has-[>[data-slot=code-block-title]]:min-w-0",
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
        "cuoio:min-w-0 cuoio:truncate cuoio:font-sans cuoio:text-xs cuoio:font-medium cuoio:text-foreground cuoio:group-data-[variant=destructive]/code-block:text-destructive cuoio:[&_svg]:pointer-events-none cuoio:[&_svg]:inline-block cuoio:[&_svg]:align-middle cuoio:[&_svg:not([class*=size-])]:size-3.5 cuoio:*:[svg]:me-1.5",
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
        "cuoio:-my-1 cuoio:ms-auto cuoio:-me-1.5 cuoio:flex cuoio:shrink-0 cuoio:items-center cuoio:gap-1 cuoio:[[data-slot=code-block]>&]:absolute cuoio:[[data-slot=code-block]>&]:end-2 cuoio:[[data-slot=code-block]>&]:top-2 cuoio:[[data-slot=code-block]>&]:z-10 cuoio:[[data-slot=code-block]>&]:m-0 cuoio:[[data-slot=code-block]>&]:opacity-0 cuoio:[[data-slot=code-block]>&]:transition-opacity cuoio:[[data-slot=code-block]>&]:group-focus-within/code-block:opacity-100 cuoio:[[data-slot=code-block]>&]:group-hover/code-block:opacity-100 cuoio:group-data-[size=sm]/code-block:[[data-slot=code-block]>&]:end-1.5 cuoio:group-data-[size=sm]/code-block:[[data-slot=code-block]>&]:top-1.5 cuoio:[[data-slot=code-block]>&]:pointer-coarse:opacity-100 cuoio:[[data-slot=code-block]>&]:*:[button]:bg-background cuoio:[[data-slot=code-block]>&]:*:[button]:ring-1 cuoio:[[data-slot=code-block]>&]:*:[button]:ring-foreground/10",
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
      <span aria-live="polite" className="cuoio:sr-only">
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
        "cuoio:min-h-0 cuoio:min-w-0 cuoio:scroll-fade-x cuoio:scrollbar-thin cuoio:overflow-auto cuoio:px-3 cuoio:py-3 cuoio:text-start cuoio:font-mono cuoio:leading-relaxed cuoio:outline-none cuoio:group-has-data-[slot=code-block-footer]/code-block:pb-2 cuoio:group-has-data-[slot=code-block-header]/code-block:pt-2 cuoio:group-data-[size=sm]/code-block:px-2 cuoio:group-data-[size=sm]/code-block:py-2 cuoio:group-data-[size=sm]/code-block:group-has-data-[slot=code-block-header]/code-block:pt-1.5 cuoio:data-wrap:scroll-fade-y cuoio:data-wrap:wrap-break-word cuoio:data-wrap:whitespace-pre-wrap",
        className
      )}
      {...props}
    >
      <code
        data-slot="code-block-code"
        className="cuoio:grid cuoio:min-h-lh cuoio:min-w-max cuoio:content-start cuoio:in-data-numbered:grid-cols-[auto_1fr] cuoio:in-data-wrap:min-w-0"
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
  "cuoio:relative cuoio:-mx-3 cuoio:block cuoio:min-h-lh cuoio:px-3 cuoio:group-data-[size=sm]/code-block:-mx-2 cuoio:group-data-[size=sm]/code-block:px-2 cuoio:before:min-w-6 cuoio:before:text-end cuoio:before:text-muted-foreground cuoio:after:absolute cuoio:after:start-1 cuoio:after:top-0 cuoio:after:text-muted-foreground cuoio:after:select-none cuoio:in-data-numbered:col-span-2 cuoio:in-data-numbered:grid cuoio:in-data-numbered:grid-cols-subgrid cuoio:in-data-numbered:gap-x-3 cuoio:in-data-numbered:[counter-increment:line] cuoio:in-data-numbered:before:content-[counter(line)] cuoio:in-data-numbered:before:select-none cuoio:in-data-numbered:supports-[content:counter(line)_/_]:before:content-[counter(line)_/_]",
  {
    variants: {
      variant: {
        default: "cuoio:",
        added: "cuoio:bg-muted cuoio:after:content-[+]",
        removed: "cuoio:bg-destructive/10 cuoio:after:text-destructive cuoio:after:content-[−]",
        highlighted: "cuoio:bg-muted",
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
      <span data-slot="code-block-line-content" className="cuoio:min-w-0">
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
        "cuoio:flex cuoio:min-w-0 cuoio:shrink-0 cuoio:items-center cuoio:gap-2 cuoio:px-3 cuoio:pb-3 cuoio:text-muted-foreground cuoio:group-data-[size=sm]/code-block:px-2 cuoio:group-data-[size=sm]/code-block:pb-2",
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
