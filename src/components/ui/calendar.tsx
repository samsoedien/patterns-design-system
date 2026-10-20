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
        "pttrn:group/calendar pttrn:bg-background pttrn:p-3 pttrn:[--cell-radius:var(--radius-md)] pttrn:[--cell-size:--spacing(6)] pttrn:in-data-[slot=card-content]:bg-transparent pttrn:in-data-[slot=popover-content]:bg-transparent",
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
        root: cn("pttrn:w-fit", defaultClassNames.root),
        months: cn(
          "pttrn:relative pttrn:flex pttrn:flex-col pttrn:gap-4 pttrn:md:flex-row",
          defaultClassNames.months
        ),
        month: cn("pttrn:flex pttrn:w-full pttrn:flex-col pttrn:gap-4", defaultClassNames.month),
        nav: cn(
          "pttrn:absolute pttrn:inset-x-0 pttrn:top-0 pttrn:flex pttrn:w-full pttrn:items-center pttrn:justify-between pttrn:gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "pttrn:size-(--cell-size) pttrn:p-0 pttrn:select-none pttrn:aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "pttrn:size-(--cell-size) pttrn:p-0 pttrn:select-none pttrn:aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "pttrn:flex pttrn:h-(--cell-size) pttrn:w-full pttrn:items-center pttrn:justify-center pttrn:px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "pttrn:flex pttrn:h-(--cell-size) pttrn:w-full pttrn:items-center pttrn:justify-center pttrn:gap-1.5 pttrn:text-sm pttrn:font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "pttrn:relative pttrn:rounded-(--cell-radius)",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "pttrn:absolute pttrn:inset-0 pttrn:bg-popover pttrn:opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "pttrn:font-medium pttrn:select-none",
          captionLayout === "label"
            ? "pttrn:text-sm"
            : "pttrn:flex pttrn:items-center pttrn:gap-1 pttrn:rounded-(--cell-radius) pttrn:text-sm pttrn:[&>svg]:size-3.5 pttrn:[&>svg]:text-muted-foreground",
          defaultClassNames.caption_label
        ),
        month_grid: cn("pttrn:w-full pttrn:border-collapse", defaultClassNames.month_grid),
        weekdays: cn("pttrn:flex", defaultClassNames.weekdays),
        weekday: cn(
          "pttrn:flex-1 pttrn:rounded-(--cell-radius) pttrn:text-[0.8rem] pttrn:font-normal pttrn:text-muted-foreground pttrn:select-none",
          defaultClassNames.weekday
        ),
        week: cn("pttrn:mt-2 pttrn:flex pttrn:w-full", defaultClassNames.week),
        week_number_header: cn(
          "pttrn:w-(--cell-size) pttrn:select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "pttrn:text-[0.8rem] pttrn:text-muted-foreground pttrn:select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "pttrn:group/day pttrn:relative pttrn:aspect-square pttrn:h-full pttrn:w-full pttrn:rounded-(--cell-radius) pttrn:p-0 pttrn:text-center pttrn:select-none pttrn:[&:last-child[data-selected=true]_button]:rounded-e-(--cell-radius)",
          props.showWeekNumber
            ? "pttrn:[&:nth-child(2)[data-selected=true]_button]:rounded-s-(--cell-radius)"
            : "pttrn:[&:first-child[data-selected=true]_button]:rounded-s-(--cell-radius)",
          defaultClassNames.day
        ),
        range_start: cn(
          "pttrn:relative pttrn:isolate pttrn:z-0 pttrn:rounded-s-(--cell-radius) pttrn:bg-muted pttrn:after:absolute pttrn:after:inset-y-0 pttrn:after:end-0 pttrn:after:w-4 pttrn:after:bg-muted",
          defaultClassNames.range_start
        ),
        range_middle: cn("pttrn:rounded-none", defaultClassNames.range_middle),
        range_end: cn(
          "pttrn:relative pttrn:isolate pttrn:z-0 pttrn:rounded-e-(--cell-radius) pttrn:bg-muted pttrn:after:absolute pttrn:after:inset-y-0 pttrn:after:start-0 pttrn:after:w-4 pttrn:after:bg-muted",
          defaultClassNames.range_end
        ),
        today: cn(
          "pttrn:rounded-(--cell-radius) pttrn:bg-muted pttrn:text-foreground pttrn:data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "pttrn:text-muted-foreground pttrn:aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "pttrn:text-muted-foreground pttrn:opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("pttrn:invisible", defaultClassNames.hidden),
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
              <ChevronLeftIcon className={cn("pttrn:size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon className={cn("pttrn:size-4", className)} {...props} />
            )
          }

          return (
            <ChevronDownIcon className={cn("pttrn:size-4", className)} {...props} />
          )
        },
        DayButton: ({ ...props }) => (
          <CalendarDayButton locale={locale} {...props} />
        ),
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="pttrn:flex pttrn:size-(--cell-size) pttrn:items-center pttrn:justify-center pttrn:text-center">
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
        "pttrn:relative pttrn:isolate pttrn:z-10 pttrn:flex pttrn:aspect-square pttrn:size-auto pttrn:w-full pttrn:min-w-(--cell-size) pttrn:flex-col pttrn:gap-1 pttrn:border-0 pttrn:leading-none pttrn:font-normal pttrn:group-data-[focused=true]/day:relative pttrn:group-data-[focused=true]/day:z-10 pttrn:group-data-[focused=true]/day:border-ring pttrn:group-data-[focused=true]/day:ring-[3px] pttrn:group-data-[focused=true]/day:ring-ring/50 pttrn:data-[range-end=true]:rounded-(--cell-radius) pttrn:data-[range-end=true]:rounded-e-(--cell-radius) pttrn:data-[range-end=true]:bg-primary pttrn:data-[range-end=true]:text-primary-foreground pttrn:data-[range-middle=true]:rounded-none pttrn:data-[range-middle=true]:bg-muted pttrn:data-[range-middle=true]:text-foreground pttrn:data-[range-start=true]:rounded-(--cell-radius) pttrn:data-[range-start=true]:rounded-s-(--cell-radius) pttrn:data-[range-start=true]:bg-primary pttrn:data-[range-start=true]:text-primary-foreground pttrn:data-[selected-single=true]:bg-primary pttrn:data-[selected-single=true]:text-primary-foreground pttrn:dark:hover:text-foreground pttrn:[&>span]:text-xs pttrn:[&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
