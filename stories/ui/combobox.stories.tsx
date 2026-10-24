// @ts-nocheck
'use client'

import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { GlobeIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
} from '@/components/ui/combobox'
import { InputGroupAddon } from '@/components/ui/input-group'
import { Item, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item'

const Demo_frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'] as const

function DemoExample() {
  return (
    <Combobox items={Demo_frameworks}>
      <ComboboxInput placeholder="Select a framework" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

const Basic_frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'] as const

function BasicExample() {
  return (
    <Combobox items={Basic_frameworks}>
      <ComboboxInput placeholder="Select a framework" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

const Multiple_frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'] as const

function MultipleExample() {
  const anchor = useComboboxAnchor()

  return (
    <Combobox
      multiple
      autoHighlight
      items={Multiple_frameworks}
      defaultValue={[Multiple_frameworks[0]]}
    >
      <ComboboxChips ref={anchor} className="cuoio:w-full cuoio:max-w-xs">
        <ComboboxValue>
          {(values) => (
            <React.Fragment>
              {values.map((value: string) => (
                <ComboboxChip key={value}>{value}</ComboboxChip>
              ))}
              <ComboboxChipsInput />
            </React.Fragment>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

const Clear_frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'] as const

function ClearExample() {
  return (
    <Combobox items={Clear_frameworks} defaultValue={Clear_frameworks[0]}>
      <ComboboxInput placeholder="Select a framework" showClear />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

const Groups_timezones = [
  {
    value: 'Americas',
    items: [
      '(GMT-5) New York',
      '(GMT-8) Los Angeles',
      '(GMT-6) Chicago',
      '(GMT-5) Toronto',
      '(GMT-8) Vancouver',
      '(GMT-3) São Paulo',
    ],
  },
  {
    value: 'Europe',
    items: [
      '(GMT+0) London',
      '(GMT+1) Paris',
      '(GMT+1) Berlin',
      '(GMT+1) Rome',
      '(GMT+1) Madrid',
      '(GMT+1) Amsterdam',
    ],
  },
  {
    value: 'Asia/Pacific',
    items: [
      '(GMT+9) Tokyo',
      '(GMT+8) Shanghai',
      '(GMT+8) Singapore',
      '(GMT+4) Dubai',
      '(GMT+11) Sydney',
      '(GMT+9) Seoul',
    ],
  },
] as const

function GroupsExample() {
  return (
    <Combobox items={Groups_timezones}>
      <ComboboxInput placeholder="Select a timezone" />
      <ComboboxContent>
        <ComboboxEmpty>No Groups_timezones found.</ComboboxEmpty>
        <ComboboxList>
          {(group, index) => (
            <ComboboxGroup key={group.value} items={group.items}>
              <ComboboxLabel>{group.value}</ComboboxLabel>
              <ComboboxCollection>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
              {index < Groups_timezones.length - 1 && <ComboboxSeparator />}
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

const Custom_countries = [
  { code: '', value: '', continent: '', label: 'Select country' },
  {
    code: 'ar',
    value: 'argentina',
    label: 'Argentina',
    continent: 'South America',
  },
  { code: 'au', value: 'australia', label: 'Australia', continent: 'Oceania' },
  { code: 'br', value: 'brazil', label: 'Brazil', continent: 'South America' },
  { code: 'ca', value: 'canada', label: 'Canada', continent: 'North America' },
  { code: 'cn', value: 'china', label: 'China', continent: 'Asia' },
  {
    code: 'co',
    value: 'colombia',
    label: 'Colombia',
    continent: 'South America',
  },
  { code: 'eg', value: 'egypt', label: 'Egypt', continent: 'Africa' },
  { code: 'fr', value: 'france', label: 'France', continent: 'Europe' },
  { code: 'de', value: 'germany', label: 'Germany', continent: 'Europe' },
  { code: 'it', value: 'italy', label: 'Italy', continent: 'Europe' },
  { code: 'jp', value: 'japan', label: 'Japan', continent: 'Asia' },
  { code: 'ke', value: 'kenya', label: 'Kenya', continent: 'Africa' },
  { code: 'mx', value: 'mexico', label: 'Mexico', continent: 'North America' },
  {
    code: 'nz',
    value: 'new-zealand',
    label: 'New Zealand',
    continent: 'Oceania',
  },
  { code: 'ng', value: 'nigeria', label: 'Nigeria', continent: 'Africa' },
  {
    code: 'za',
    value: 'south-africa',
    label: 'South Africa',
    continent: 'Africa',
  },
  { code: 'kr', value: 'south-korea', label: 'South Korea', continent: 'Asia' },
  {
    code: 'gb',
    value: 'united-kingdom',
    label: 'United Kingdom',
    continent: 'Europe',
  },
  {
    code: 'us',
    value: 'united-states',
    label: 'United States',
    continent: 'North America',
  },
]

function CustomExample() {
  return (
    <Combobox
      items={Custom_countries.filter((country) => country.code !== '')}
      itemToStringValue={(country: (typeof Custom_countries)[number]) => country.label}
    >
      <ComboboxInput placeholder="Search Custom_countries..." />
      <ComboboxContent>
        <ComboboxEmpty>No Custom_countries found.</ComboboxEmpty>
        <ComboboxList>
          {(country) => (
            <ComboboxItem key={country.code} value={country}>
              <Item size="xs" className="cuoio:p-0">
                <ItemContent>
                  <ItemTitle className="cuoio:whitespace-nowrap">{country.label}</ItemTitle>
                  <ItemDescription>
                    {country.continent} ({country.code})
                  </ItemDescription>
                </ItemContent>
              </Item>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

const Invalid_frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'] as const

function InvalidExample() {
  return (
    <Combobox items={Invalid_frameworks}>
      <ComboboxInput placeholder="Select a framework" aria-invalid="true" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

const Disabled_frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'] as const

function DisabledExample() {
  return (
    <Combobox items={Disabled_frameworks}>
      <ComboboxInput placeholder="Select a framework" disabled />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

const AutoHighlight_frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'] as const

function AutoHighlightExample() {
  return (
    <Combobox items={AutoHighlight_frameworks} autoHighlight>
      <ComboboxInput placeholder="Select a framework" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

const Popup_countries = [
  { code: '', value: '', continent: '', label: 'Select country' },
  {
    code: 'ar',
    value: 'argentina',
    label: 'Argentina',
    continent: 'South America',
  },
  { code: 'au', value: 'australia', label: 'Australia', continent: 'Oceania' },
  { code: 'br', value: 'brazil', label: 'Brazil', continent: 'South America' },
  { code: 'ca', value: 'canada', label: 'Canada', continent: 'North America' },
  { code: 'cn', value: 'china', label: 'China', continent: 'Asia' },
  {
    code: 'co',
    value: 'colombia',
    label: 'Colombia',
    continent: 'South America',
  },
  { code: 'eg', value: 'egypt', label: 'Egypt', continent: 'Africa' },
  { code: 'fr', value: 'france', label: 'France', continent: 'Europe' },
  { code: 'de', value: 'germany', label: 'Germany', continent: 'Europe' },
  { code: 'it', value: 'italy', label: 'Italy', continent: 'Europe' },
  { code: 'jp', value: 'japan', label: 'Japan', continent: 'Asia' },
  { code: 'ke', value: 'kenya', label: 'Kenya', continent: 'Africa' },
  { code: 'mx', value: 'mexico', label: 'Mexico', continent: 'North America' },
  {
    code: 'nz',
    value: 'new-zealand',
    label: 'New Zealand',
    continent: 'Oceania',
  },
  { code: 'ng', value: 'nigeria', label: 'Nigeria', continent: 'Africa' },
  {
    code: 'za',
    value: 'south-africa',
    label: 'South Africa',
    continent: 'Africa',
  },
  { code: 'kr', value: 'south-korea', label: 'South Korea', continent: 'Asia' },
  {
    code: 'gb',
    value: 'united-kingdom',
    label: 'United Kingdom',
    continent: 'Europe',
  },
  {
    code: 'us',
    value: 'united-states',
    label: 'United States',
    continent: 'North America',
  },
]

function PopupExample() {
  return (
    <>
      <Combobox items={Popup_countries} defaultValue={Popup_countries[0]}>
        <ComboboxTrigger
          render={
            <Button
              variant="outline"
              className="cuoio:w-64 cuoio:justify-between cuoio:font-normal"
            />
          }
        >
          <ComboboxValue />
        </ComboboxTrigger>
        <ComboboxContent>
          <ComboboxInput showTrigger={false} placeholder="Search" />
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.code} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </>
  )
}

const InputGroup_timezones = [
  {
    value: 'Americas',
    items: [
      '(GMT-5) New York',
      '(GMT-8) Los Angeles',
      '(GMT-6) Chicago',
      '(GMT-5) Toronto',
      '(GMT-8) Vancouver',
      '(GMT-3) São Paulo',
    ],
  },
  {
    value: 'Europe',
    items: [
      '(GMT+0) London',
      '(GMT+1) Paris',
      '(GMT+1) Berlin',
      '(GMT+1) Rome',
      '(GMT+1) Madrid',
      '(GMT+1) Amsterdam',
    ],
  },
  {
    value: 'Asia/Pacific',
    items: [
      '(GMT+9) Tokyo',
      '(GMT+8) Shanghai',
      '(GMT+8) Singapore',
      '(GMT+4) Dubai',
      '(GMT+11) Sydney',
      '(GMT+9) Seoul',
    ],
  },
] as const

function InputGroupExample() {
  return (
    <Combobox items={InputGroup_timezones}>
      <ComboboxInput placeholder="Select a timezone">
        <InputGroupAddon>
          <GlobeIcon />
        </InputGroupAddon>
      </ComboboxInput>
      <ComboboxContent alignOffset={-28} className="cuoio:w-60">
        <ComboboxEmpty>No InputGroup_timezones found.</ComboboxEmpty>
        <ComboboxList>
          {(group) => (
            <ComboboxGroup key={group.value} items={group.items}>
              <ComboboxLabel>{group.value}</ComboboxLabel>
              <ComboboxCollection>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

const meta = {
  title: 'UI/Combobox',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const DemoStory: Story = {
  name: 'Demo',
  render: () => <DemoExample />,
}

export const BasicStory: Story = {
  name: 'Basic',
  render: () => <BasicExample />,
}

export const MultipleStory: Story = {
  name: 'Multiple',
  render: () => <MultipleExample />,
}

export const ClearStory: Story = {
  name: 'Clear',
  render: () => <ClearExample />,
}

export const GroupsStory: Story = {
  name: 'Groups',
  render: () => <GroupsExample />,
}

export const CustomStory: Story = {
  name: 'Custom',
  render: () => <CustomExample />,
}

export const InvalidStory: Story = {
  name: 'Invalid',
  render: () => <InvalidExample />,
}

export const DisabledStory: Story = {
  name: 'Disabled',
  render: () => <DisabledExample />,
}

export const AutoHighlightStory: Story = {
  name: 'Auto Highlight',
  render: () => <AutoHighlightExample />,
}

export const PopupStory: Story = {
  name: 'Popup',
  render: () => <PopupExample />,
}

export const InputGroupStory: Story = {
  name: 'Input Group',
  render: () => <InputGroupExample />,
}
