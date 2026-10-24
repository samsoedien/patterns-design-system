// @ts-nocheck
'use client'

import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'

const Demo_items = [
  { label: 'Select a fruit', value: null },
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Grapes', value: 'grapes' },
  { label: 'Pineapple', value: 'pineapple' },
]

function DemoExample() {
  return (
    <Select items={Demo_items}>
      <SelectTrigger className="cuoio:w-full cuoio:max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {Demo_items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

const AlignItem_items = [
  { label: 'Select a fruit', value: null },
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Grapes', value: 'grapes' },
  { label: 'Pineapple', value: 'pineapple' },
]

function AlignItemExample() {
  const [alignItemWithTrigger, setAlignItemWithTrigger] = React.useState(true)

  return (
    <FieldGroup className="cuoio:w-full cuoio:max-w-xs">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="align-item">Align Item</FieldLabel>
          <FieldDescription>Toggle to align the item with the trigger.</FieldDescription>
        </FieldContent>
        <Switch
          id="align-item"
          checked={alignItemWithTrigger}
          onCheckedChange={setAlignItemWithTrigger}
        />
      </Field>
      <Field>
        <Select items={AlignItem_items} defaultValue="banana">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={alignItemWithTrigger}>
            <SelectGroup>
              {AlignItem_items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </FieldGroup>
  )
}

function GroupsExample() {
  const fruits = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Blueberry', value: 'blueberry' },
  ]
  const vegetables = [
    { label: 'Carrot', value: 'carrot' },
    { label: 'Broccoli', value: 'broccoli' },
    { label: 'Spinach', value: 'spinach' },
  ]
  const allItems = [{ label: 'Select a fruit', value: null }, ...fruits, ...vegetables]
  return (
    <Select items={allItems}>
      <SelectTrigger className="cuoio:w-full cuoio:max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {fruits.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          {vegetables.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

const Scrollable_northAmerica = [
  { label: 'Eastern Standard Time', value: 'est' },
  { label: 'Central Standard Time', value: 'cst' },
  { label: 'Mountain Standard Time', value: 'mst' },
  { label: 'Pacific Standard Time', value: 'pst' },
  { label: 'Alaska Standard Time', value: 'akst' },
  { label: 'Hawaii Standard Time', value: 'hst' },
]

const Scrollable_europeAfrica = [
  { label: 'Greenwich Mean Time', value: 'gmt' },
  { label: 'Central European Time', value: 'cet' },
  { label: 'Eastern European Time', value: 'eet' },
  { label: 'Western European Summer Time', value: 'west' },
  { label: 'Central Africa Time', value: 'cat' },
  { label: 'East Africa Time', value: 'eat' },
]

const Scrollable_asia = [
  { label: 'Moscow Time', value: 'msk' },
  { label: 'India Standard Time', value: 'ist' },
  { label: 'China Standard Time', value: 'cst_china' },
  { label: 'Japan Standard Time', value: 'jst' },
  { label: 'Korea Standard Time', value: 'kst' },
  { label: 'Indonesia Central Standard Time', value: 'ist_indonesia' },
]

const Scrollable_australiaPacific = [
  { label: 'Australian Western Standard Time', value: 'awst' },
  { label: 'Australian Central Standard Time', value: 'acst' },
  { label: 'Australian Eastern Standard Time', value: 'aest' },
  { label: 'New Zealand Standard Time', value: 'nzst' },
  { label: 'Fiji Time', value: 'fjt' },
]

const Scrollable_southAmerica = [
  { label: 'Argentina Time', value: 'art' },
  { label: 'Bolivia Time', value: 'bot' },
  { label: 'Brasilia Time', value: 'brt' },
  { label: 'Chile Standard Time', value: 'clt' },
]

const Scrollable_items = [
  { label: 'Select a timezone', value: null },
  ...Scrollable_northAmerica,
  ...Scrollable_europeAfrica,
  ...Scrollable_asia,
  ...Scrollable_australiaPacific,
  ...Scrollable_southAmerica,
]

function ScrollableExample() {
  return (
    <Select items={Scrollable_items}>
      <SelectTrigger className="cuoio:w-full cuoio:max-w-64">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          {Scrollable_northAmerica.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe & Africa</SelectLabel>
          {Scrollable_europeAfrica.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          {Scrollable_asia.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Australia & Pacific</SelectLabel>
          {Scrollable_australiaPacific.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>South America</SelectLabel>
          {Scrollable_southAmerica.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

function DisabledExample() {
  const items = [
    { label: 'Select a fruit', value: null },
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Blueberry', value: 'blueberry' },
    { label: 'Grapes', value: 'grapes', disabled: true },
    { label: 'Pineapple', value: 'pineapple' },
  ]
  return (
    <Select items={items} disabled>
      <SelectTrigger className="cuoio:w-full cuoio:max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value} disabled={item.disabled}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

const Invalid_items = [
  { label: 'Select a fruit', value: null },
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blueberry', value: 'blueberry' },
]

function InvalidExample() {
  return (
    <Field data-invalid className="cuoio:w-full cuoio:max-w-48">
      <FieldLabel>Fruit</FieldLabel>
      <Select items={Invalid_items}>
        <SelectTrigger aria-invalid>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Invalid_items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldError>Please select a fruit.</FieldError>
    </Field>
  )
}

const meta = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['size', 'disabled'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['default', 'sm'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    size: 'default',
    disabled: false,
  },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Select
      items={[
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Blueberry', value: 'blueberry' },
      ]}
      defaultValue="apple"
      disabled={args.disabled}
    >
      <SelectTrigger size={args.size} disabled={args.disabled} className="cuoio:w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const DemoStory: Story = {
  name: 'Demo',
  render: () => <DemoExample />,
}

export const AlignItemStory: Story = {
  name: 'Align Item',
  render: () => <AlignItemExample />,
}

export const GroupsStory: Story = {
  name: 'Groups',
  render: () => <GroupsExample />,
}

export const ScrollableStory: Story = {
  name: 'Scrollable',
  render: () => <ScrollableExample />,
}

export const DisabledStory: Story = {
  name: 'Disabled',
  render: () => <DisabledExample />,
}

export const InvalidStory: Story = {
  name: 'Invalid',
  render: () => <InvalidExample />,
}
