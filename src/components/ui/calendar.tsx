"use client"

import * as React from "react"
import { cn } from "cn"
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
  type Locale,
} from "react-day-picker"

import { Button, buttonVariants } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from "lucide-react"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale,
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "cuoio:group/calendar cuoio:bg-background cuoio:p-2 cuoio:[--cell-radius:var(--radius-md)] cuoio:[--cell-size:--spacing(7)] cuoio:in-data-[slot=card-content]:bg-transparent cuoio:in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code, { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("cuoio:w-fit", defaultClassNames.root),
        months: cn(
          "cuoio:relative cuoio:flex cuoio:flex-col cuoio:gap-4 cuoio:md:flex-row",
          defaultClassNames.months
        ),
        month: cn("cuoio:flex cuoio:w-full cuoio:flex-col cuoio:gap-4", defaultClassNames.month),
        nav: cn(
          "cuoio:absolute cuoio:inset-x-0 cuoio:top-0 cuoio:flex cuoio:w-full cuoio:items-center cuoio:justify-between cuoio:gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "cuoio:size-(--cell-size) cuoio:p-0 cuoio:select-none cuoio:aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "cuoio:size-(--cell-size) cuoio:p-0 cuoio:select-none cuoio:aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "cuoio:flex cuoio:h-(--cell-size) cuoio:w-full cuoio:items-center cuoio:justify-center cuoio:px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "cuoio:flex cuoio:h-(--cell-size) cuoio:w-full cuoio:items-center cuoio:justify-center cuoio:gap-1.5 cuoio:text-sm cuoio:font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "cuoio:relative cuoio:rounded-(--cell-radius)",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "cuoio:absolute cuoio:inset-0 cuoio:bg-popover cuoio:opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "cuoio:font-medium cuoio:select-none",
          captionLayout === "label"
            ? "cuoio:text-sm"
            : "cuoio:flex cuoio:items-center cuoio:gap-1 cuoio:rounded-(--cell-radius) cuoio:text-sm cuoio:[&>svg]:size-3.5 cuoio:[&>svg]:text-muted-foreground",
          defaultClassNames.caption_label
        ),
        month_grid: cn("cuoio:w-full cuoio:border-collapse", defaultClassNames.month_grid),
        weekdays: cn("cuoio:flex", defaultClassNames.weekdays),
        weekday: cn(
          "cuoio:flex-1 cuoio:rounded-(--cell-radius) cuoio:text-[0.8rem] cuoio:font-normal cuoio:text-muted-foreground cuoio:select-none",
          defaultClassNames.weekday
        ),
        week: cn("cuoio:mt-2 cuoio:flex cuoio:w-full", defaultClassNames.week),
        week_number_header: cn(
          "cuoio:w-(--cell-size) cuoio:select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "cuoio:text-[0.8rem] cuoio:text-muted-foreground cuoio:select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "cuoio:group/day cuoio:relative cuoio:aspect-square cuoio:h-full cuoio:w-full cuoio:rounded-(--cell-radius) cuoio:p-0 cuoio:text-center cuoio:select-none cuoio:[&:last-child[data-selected=true]_button]:rounded-e-(--cell-radius)",
          props.showWeekNumber
            ? "cuoio:[&:nth-child(2)[data-selected=true]_button]:rounded-s-(--cell-radius)"
            : "cuoio:[&:first-child[data-selected=true]_button]:rounded-s-(--cell-radius)",
          defaultClassNames.day
        ),
        range_start: cn(
          "cuoio:relative cuoio:isolate cuoio:z-0 cuoio:rounded-s-(--cell-radius) cuoio:bg-muted cuoio:after:absolute cuoio:after:inset-y-0 cuoio:after:end-0 cuoio:after:w-4 cuoio:after:bg-muted",
          defaultClassNames.range_start
        ),
        range_middle: cn("cuoio:rounded-none", defaultClassNames.range_middle),
        range_end: cn(
          "cuoio:relative cuoio:isolate cuoio:z-0 cuoio:rounded-e-(--cell-radius) cuoio:bg-muted cuoio:after:absolute cuoio:after:inset-y-0 cuoio:after:start-0 cuoio:after:w-4 cuoio:after:bg-muted",
          defaultClassNames.range_end
        ),
        today: cn(
          "cuoio:rounded-(--cell-radius) cuoio:bg-muted cuoio:text-foreground cuoio:data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "cuoio:text-muted-foreground cuoio:aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "cuoio:text-muted-foreground cuoio:opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("cuoio:invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("cuoio:size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon className={cn("cuoio:size-4", className)} {...props} />
            )
          }

          return (
            <ChevronDownIcon className={cn("cuoio:size-4", className)} {...props} />
          )
        },
        DayButton: ({ ...props }) => (
          <CalendarDayButton locale={locale} {...props} />
        ),
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="cuoio:flex cuoio:size-(--cell-size) cuoio:items-center cuoio:justify-center cuoio:text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}: React.ComponentProps<typeof DayButton> & { locale?: Partial<Locale> }) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "cuoio:relative cuoio:isolate cuoio:z-10 cuoio:flex cuoio:aspect-square cuoio:size-auto cuoio:w-full cuoio:min-w-(--cell-size) cuoio:flex-col cuoio:gap-1 cuoio:border-0 cuoio:leading-none cuoio:font-normal cuoio:group-data-[focused=true]/day:relative cuoio:group-data-[focused=true]/day:z-10 cuoio:group-data-[focused=true]/day:border-ring cuoio:group-data-[focused=true]/day:ring-[3px] cuoio:group-data-[focused=true]/day:ring-ring/50 cuoio:data-[range-end=true]:rounded-(--cell-radius) cuoio:data-[range-end=true]:rounded-e-(--cell-radius) cuoio:data-[range-end=true]:bg-primary cuoio:data-[range-end=true]:text-primary-foreground cuoio:data-[range-middle=true]:rounded-none cuoio:data-[range-middle=true]:bg-muted cuoio:data-[range-middle=true]:text-foreground cuoio:data-[range-start=true]:rounded-(--cell-radius) cuoio:data-[range-start=true]:rounded-s-(--cell-radius) cuoio:data-[range-start=true]:bg-primary cuoio:data-[range-start=true]:text-primary-foreground cuoio:data-[selected-single=true]:bg-primary cuoio:data-[selected-single=true]:text-primary-foreground cuoio:dark:hover:text-foreground cuoio:[&>span]:text-xs cuoio:[&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
