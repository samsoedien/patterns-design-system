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
        "cuoio:group/native-select cuoio:relative cuoio:w-fit cuoio:has-[select:disabled]:opacity-50",
        className
      )}
      data-slot="native-select-wrapper"
      data-size={size}
    >
      <select
        data-slot="native-select"
        data-size={size}
        className="cuoio:h-8 cuoio:w-full cuoio:min-w-0 cuoio:appearance-none cuoio:rounded-lg cuoio:border cuoio:border-input cuoio:bg-transparent cuoio:py-1 cuoio:pe-8 cuoio:ps-2.5 cuoio:text-sm cuoio:transition-colors cuoio:outline-none cuoio:select-none cuoio:selection:bg-primary cuoio:selection:text-primary-foreground cuoio:placeholder:text-muted-foreground cuoio:focus-visible:border-ring cuoio:focus-visible:ring-3 cuoio:focus-visible:ring-ring/50 cuoio:disabled:pointer-events-none cuoio:disabled:cursor-not-allowed cuoio:aria-invalid:border-destructive cuoio:aria-invalid:ring-3 cuoio:aria-invalid:ring-destructive/20 cuoio:data-[size=sm]:h-7 cuoio:data-[size=sm]:rounded-[min(var(--radius-md),10px)] cuoio:data-[size=sm]:py-0.5 cuoio:dark:bg-input/30 cuoio:dark:hover:bg-input/50 cuoio:dark:aria-invalid:border-destructive/50 cuoio:dark:aria-invalid:ring-destructive/40"
        {...props}
      />
      <ChevronDownIcon className="cuoio:pointer-events-none cuoio:absolute cuoio:top-1/2 cuoio:end-2.5 cuoio:size-4 cuoio:-translate-y-1/2 cuoio:text-muted-foreground cuoio:select-none" aria-hidden="true" data-slot="native-select-icon" />
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
      className={cn("cuoio:bg-[Canvas] cuoio:text-[CanvasText]", className)}
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
      className={cn("cuoio:bg-[Canvas] cuoio:text-[CanvasText]", className)}
      {...props}
    />
  )
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption }
