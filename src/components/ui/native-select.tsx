import * as React from "react"
import { cn } from "cn"
import { ChevronDownIcon } from "lucide-react"

type NativeSelectProps = Omit<React.ComponentProps<"select">, "size"> & {
  size?: "sm" | "default"
}

function NativeSelect({
  className,
  size = "default",
  ...props
}: NativeSelectProps) {
  return (
    <div
      className={cn(
        "pttrn:group/native-select pttrn:relative pttrn:w-fit pttrn:has-[select:disabled]:opacity-50",
        className
      )}
      data-slot="native-select-wrapper"
      data-size={size}
    >
      <select
        data-slot="native-select"
        data-size={size}
        className="pttrn:h-7 pttrn:w-full pttrn:min-w-0 pttrn:appearance-none pttrn:rounded-md pttrn:border pttrn:border-input pttrn:bg-input/20 pttrn:py-0.5 pttrn:pe-6 pttrn:ps-2 pttrn:text-xs/relaxed pttrn:transition-colors pttrn:outline-none pttrn:select-none pttrn:selection:bg-primary pttrn:selection:text-primary-foreground pttrn:placeholder:text-muted-foreground pttrn:focus-visible:border-ring pttrn:focus-visible:ring-2 pttrn:focus-visible:ring-ring/30 pttrn:disabled:pointer-events-none pttrn:disabled:cursor-not-allowed pttrn:aria-invalid:border-destructive pttrn:aria-invalid:ring-2 pttrn:aria-invalid:ring-destructive/20 pttrn:data-[size=sm]:h-6 pttrn:data-[size=sm]:text-[0.625rem] pttrn:dark:bg-input/30 pttrn:dark:hover:bg-input/50 pttrn:dark:aria-invalid:border-destructive/50 pttrn:dark:aria-invalid:ring-destructive/40"
        {...props}
      />
      <ChevronDownIcon className="pttrn:pointer-events-none pttrn:absolute pttrn:top-1/2 pttrn:end-1.5 pttrn:size-3.5 pttrn:-translate-y-1/2 pttrn:text-muted-foreground pttrn:select-none pttrn:group-data-[size=sm]/native-select:size-3 pttrn:group-data-[size=sm]/native-select:-translate-y-[calc(--spacing(1.25))]" aria-hidden="true" data-slot="native-select-icon" />
    </div>
  )
}

function NativeSelectOption({
  className,
  ...props
}: React.ComponentProps<"option">) {
  return (
    <option
      data-slot="native-select-option"
      className={cn("pttrn:bg-[Canvas] pttrn:text-[CanvasText]", className)}
      {...props}
    />
  )
}

function NativeSelectOptGroup({
  className,
  ...props
}: React.ComponentProps<"optgroup">) {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      className={cn("pttrn:bg-[Canvas] pttrn:text-[CanvasText]", className)}
      {...props}
    />
  )
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption }
