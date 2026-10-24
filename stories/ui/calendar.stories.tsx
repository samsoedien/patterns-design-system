// @ts-nocheck
'use client'

import * as React from 'react'
import { type DateRange } from 'react-day-picker'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { addDays } from 'date-fns'
import { Clock2Icon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar, CalendarDayButton } from '@/components/ui/calendar'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'

function DemoExample() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="cuoio:rounded-lg cuoio:border"
      captionLayout="dropdown"
    />
  )
}

function BasicExample() {
  return <Calendar mode="single" className="cuoio:rounded-lg cuoio:border" />
}

function RangeExample() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 12),
    to: addDays(new Date(new Date().getFullYear(), 0, 12), 30),
  })

  return (
    <Calendar
      mode="range"
      defaultMonth={dateRange?.from}
      selected={dateRange}
      onSelect={setDateRange}
      numberOfMonths={2}
      className="cuoio:rounded-lg cuoio:border"
    />
  )
}

function CaptionExample() {
  return (
    <Calendar mode="single" captionLayout="dropdown" className="cuoio:rounded-lg cuoio:border" />
  )
}

function PresetsExample() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 1, 12),
  )
  const [currentMonth, setCurrentMonth] = React.useState<Date>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  )

  return (
    <Card className="cuoio:mx-auto cuoio:w-fit cuoio:max-w-[300px]" size="sm">
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          month={currentMonth}
          onMonthChange={setCurrentMonth}
          fixedWeeks
          className="[--cell-size:--spacing(9.5)] cuoio:p-0"
        />
      </CardContent>
      <CardFooter className="cuoio:flex cuoio:flex-wrap cuoio:gap-2 cuoio:border-t">
        {[
          { label: 'Today', value: 0 },
          { label: 'Tomorrow', value: 1 },
          { label: 'In 3 days', value: 3 },
          { label: 'In a week', value: 7 },
          { label: 'In 2 weeks', value: 14 },
        ].map((preset) => (
          <Button
            key={preset.value}
            variant="outline"
            size="sm"
            className="cuoio:flex-1"
            onClick={() => {
              const newDate = addDays(new Date(), preset.value)
              setDate(newDate)
              setCurrentMonth(new Date(newDate.getFullYear(), newDate.getMonth(), 1))
            }}
          >
            {preset.label}
          </Button>
        ))}
      </CardFooter>
    </Card>
  )
}

function TimeExample() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 12),
  )

  return (
    <Card size="sm" className="cuoio:mx-auto cuoio:w-fit">
      <CardContent>
        <Calendar mode="single" selected={date} onSelect={setDate} className="cuoio:p-0" />
      </CardContent>
      <CardFooter className="cuoio:border-t cuoio:bg-card">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="time-from">Start Time</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="time-from"
                type="time"
                step="1"
                defaultValue="10:30:00"
                className="[&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none cuoio:appearance-none"
              />
              <InputGroupAddon>
                <Clock2Icon className="cuoio:text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="time-to">End Time</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="time-to"
                type="time"
                step="1"
                defaultValue="12:30:00"
                className="[&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none cuoio:appearance-none"
              />
              <InputGroupAddon>
                <Clock2Icon className="cuoio:text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </FieldGroup>
      </CardFooter>
    </Card>
  )
}

function BookedDatesExample() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(new Date().getFullYear(), 0, 6))
  const bookedDates = Array.from(
    { length: 15 },
    (_, i) => new Date(new Date().getFullYear(), 0, 12 + i),
  )

  return (
    <Card className="cuoio:mx-auto cuoio:w-fit cuoio:p-0">
      <CardContent className="cuoio:p-0">
        <Calendar
          mode="single"
          defaultMonth={date}
          selected={date}
          onSelect={setDate}
          disabled={bookedDates}
          modifiers={{
            booked: bookedDates,
          }}
          modifiersClassNames={{
            booked: '[&>button]:line-through opacity-100',
          }}
        />
      </CardContent>
    </Card>
  )
}

function CustomDaysExample() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 11, 8),
    to: addDays(new Date(new Date().getFullYear(), 11, 8), 10),
  })

  return (
    <Card className="cuoio:mx-auto cuoio:w-fit cuoio:p-0">
      <CardContent className="cuoio:p-0">
        <Calendar
          mode="range"
          defaultMonth={range?.from}
          selected={range}
          onSelect={setRange}
          numberOfMonths={1}
          captionLayout="dropdown"
          className="[--cell-size:--spacing(10)] cuoio:md:[--cell-size:--spacing(12)]"
          formatters={{
            formatMonthDropdown: (date) => {
              return date.toLocaleString('default', { month: 'long' })
            },
          }}
          components={{
            DayButton: ({ children, modifiers, day, ...props }) => {
              const isWeekend = day.date.getDay() === 0 || day.date.getDay() === 6

              return (
                <CalendarDayButton day={day} modifiers={modifiers} {...props}>
                  {children}
                  {!modifiers.outside && <span>{isWeekend ? '$120' : '$100'}</span>}
                </CalendarDayButton>
              )
            },
          }}
        />
      </CardContent>
    </Card>
  )
}

function WeekNumbersExample() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 0, 12),
  )

  return (
    <Card className="cuoio:mx-auto cuoio:w-fit cuoio:p-0">
      <CardContent className="cuoio:p-0">
        <Calendar
          mode="single"
          defaultMonth={date}
          selected={date}
          onSelect={setDate}
          showWeekNumber
        />
      </CardContent>
    </Card>
  )
}

const meta = {
  title: 'UI/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['showOutsideDays', 'captionLayout', 'buttonVariant'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    showOutsideDays: {
      control: 'boolean',
    },
    captionLayout: {
      control: 'select',
      options: ['label', 'dropdown', 'dropdown-months', 'dropdown-years'],
    },
    buttonVariant: {
      control: 'select',
      options: ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'],
    },
  },
  args: {
    showOutsideDays: true,
    captionLayout: 'label',
    buttonVariant: 'ghost',
  },
} satisfies Meta<typeof Calendar>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Calendar
      mode="single"
      showOutsideDays={args.showOutsideDays}
      captionLayout={args.captionLayout}
      buttonVariant={args.buttonVariant}
    />
  ),
}

export const DemoStory: Story = {
  name: 'Demo',
  render: () => <DemoExample />,
}

export const BasicStory: Story = {
  name: 'Basic',
  render: () => <BasicExample />,
}

export const RangeStory: Story = {
  name: 'Range',
  render: () => <RangeExample />,
}

export const CaptionStory: Story = {
  name: 'Caption',
  render: () => <CaptionExample />,
}

export const PresetsStory: Story = {
  name: 'Presets',
  render: () => <PresetsExample />,
}

export const TimeStory: Story = {
  name: 'Time',
  render: () => <TimeExample />,
}

export const BookedDatesStory: Story = {
  name: 'Booked Dates',
  render: () => <BookedDatesExample />,
}

export const CustomDaysStory: Story = {
  name: 'Custom Days',
  render: () => <CustomDaysExample />,
}

export const WeekNumbersStory: Story = {
  name: 'Week Numbers',
  render: () => <WeekNumbersExample />,
}
