import { Slider as SliderPrimitive } from "@base-ui/react/slider"
import { cn } from "cn"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: SliderPrimitive.Root.Props) {
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [min, max]

  return (
    <SliderPrimitive.Root
      className={cn("pttrn:data-horizontal:w-full pttrn:data-vertical:h-full", className)}
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="edge"
      {...props}
    >
      <SliderPrimitive.Control className="pttrn:relative pttrn:flex pttrn:w-full pttrn:touch-none pttrn:items-center pttrn:select-none pttrn:data-disabled:opacity-50 pttrn:data-vertical:h-full pttrn:data-vertical:min-h-40 pttrn:data-vertical:w-auto pttrn:data-vertical:flex-col">
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="pttrn:relative pttrn:grow pttrn:overflow-hidden pttrn:rounded-md pttrn:bg-muted pttrn:select-none pttrn:data-horizontal:h-1 pttrn:data-horizontal:w-full pttrn:data-vertical:h-full pttrn:data-vertical:w-1"
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className="pttrn:bg-primary pttrn:select-none pttrn:data-horizontal:h-full pttrn:data-vertical:w-full"
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            className="pttrn:relative pttrn:block pttrn:size-3 pttrn:shrink-0 pttrn:rounded-md pttrn:border pttrn:border-ring pttrn:bg-white pttrn:ring-ring/30 pttrn:transition-[color,box-shadow] pttrn:select-none pttrn:after:absolute pttrn:after:-inset-2 pttrn:hover:ring-2 pttrn:focus-visible:ring-2 pttrn:focus-visible:outline-hidden pttrn:active:ring-2 pttrn:disabled:pointer-events-none pttrn:disabled:opacity-50"
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}

export { Slider }
