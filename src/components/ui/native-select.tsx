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
        className="cuoio:h-7 cuoio:w-full cuoio:min-w-0 cuoio:appearance-none cuoio:rounded-md cuoio:border cuoio:border-input cuoio:bg-input/20 cuoio:py-0.5 cuoio:pe-6 cuoio:ps-2 cuoio:text-xs/relaxed cuoio:transition-colors cuoio:outline-none cuoio:select-none cuoio:selection:bg-primary cuoio:selection:text-primary-foreground cuoio:placeholder:text-muted-foreground cuoio:focus-visible:border-ring cuoio:focus-visible:ring-2 cuoio:focus-visible:ring-ring/30 cuoio:disabled:pointer-events-none cuoio:disabled:cursor-not-allowed cuoio:aria-invalid:border-destructive cuoio:aria-invalid:ring-2 cuoio:aria-invalid:ring-destructive/20 cuoio:data-[size=sm]:h-6 cuoio:data-[size=sm]:text-[0.625rem] cuoio:dark:bg-input/30 cuoio:dark:hover:bg-input/50 cuoio:dark:aria-invalid:border-destructive/50 cuoio:dark:aria-invalid:ring-destructive/40"
        {...props}
      />
      <ChevronDownIcon className="cuoio:pointer-events-none cuoio:absolute cuoio:top-1/2 cuoio:end-1.5 cuoio:size-3.5 cuoio:-translate-y-1/2 cuoio:text-muted-foreground cuoio:select-none cuoio:group-data-[size=sm]/native-select:size-3 cuoio:group-data-[size=sm]/native-select:-translate-y-[calc(--spacing(1.25))]" aria-hidden="true" data-slot="native-select-icon" />
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
