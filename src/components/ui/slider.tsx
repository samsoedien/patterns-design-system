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
      className={cn("cuoio:data-horizontal:w-full cuoio:data-vertical:h-full", className)}
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="edge"
      {...props}
    >
      <SliderPrimitive.Control className="cuoio:relative cuoio:flex cuoio:w-full cuoio:touch-none cuoio:items-center cuoio:select-none cuoio:data-disabled:opacity-50 cuoio:data-vertical:h-full cuoio:data-vertical:min-h-40 cuoio:data-vertical:w-auto cuoio:data-vertical:flex-col">
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="cuoio:relative cuoio:grow cuoio:overflow-hidden cuoio:rounded-full cuoio:bg-muted cuoio:select-none cuoio:data-horizontal:h-1 cuoio:data-horizontal:w-full cuoio:data-vertical:h-full cuoio:data-vertical:w-1"
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className="cuoio:bg-primary cuoio:select-none cuoio:data-horizontal:h-full cuoio:data-vertical:w-full"
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            className="cuoio:relative cuoio:block cuoio:size-3 cuoio:shrink-0 cuoio:rounded-full cuoio:border cuoio:border-ring cuoio:bg-white cuoio:ring-ring/50 cuoio:transition-[color,box-shadow] cuoio:select-none cuoio:after:absolute cuoio:after:-inset-2 cuoio:hover:ring-3 cuoio:focus-visible:ring-3 cuoio:focus-visible:outline-hidden cuoio:active:ring-3 cuoio:disabled:pointer-events-none cuoio:disabled:opacity-50"
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}

export { Slider }
