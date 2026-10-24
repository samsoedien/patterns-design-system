// @ts-nocheck
'use client'

import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

function DemoExample() {
  return (
    <FieldGroup className="cuoio:max-w-sm">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox" name="terms-checkbox" />
        <Label htmlFor="terms-checkbox">Accept terms and conditions</Label>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox-2" name="terms-checkbox-2" defaultChecked />
        <FieldContent>
          <FieldLabel htmlFor="terms-checkbox-2">Accept terms and conditions</FieldLabel>
          <FieldDescription>By clicking this checkbox, you agree to the terms.</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal" data-disabled>
        <Checkbox id="toggle-checkbox" name="toggle-checkbox" disabled />
        <FieldLabel htmlFor="toggle-checkbox">Enable notifications</FieldLabel>
      </Field>
      <FieldLabel>
        <Field orientation="horizontal">
          <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
          <FieldContent>
            <FieldTitle>Enable notifications</FieldTitle>
            <FieldDescription>
              You can enable or disable notifications at any time.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
    </FieldGroup>
  )
}

function InvalidExample() {
  return (
    <FieldGroup className="cuoio:mx-auto cuoio:w-56">
      <Field orientation="horizontal" data-invalid>
        <Checkbox id="terms-checkbox-invalid" name="terms-checkbox-invalid" aria-invalid />
        <FieldLabel htmlFor="terms-checkbox-invalid">Accept terms and conditions</FieldLabel>
      </Field>
    </FieldGroup>
  )
}

function BasicExample() {
  return (
    <FieldGroup className="cuoio:mx-auto cuoio:w-56">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
        <FieldLabel htmlFor="terms-checkbox-basic">Accept terms and conditions</FieldLabel>
      </Field>
    </FieldGroup>
  )
}

function DescriptionExample() {
  return (
    <FieldGroup className="cuoio:mx-auto cuoio:w-72">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox-desc" name="terms-checkbox-desc" defaultChecked />
        <FieldContent>
          <FieldLabel htmlFor="terms-checkbox-desc">Accept terms and conditions</FieldLabel>
          <FieldDescription>
            By clicking this checkbox, you agree to the terms and conditions.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  )
}

function DisabledExample() {
  return (
    <FieldGroup className="cuoio:mx-auto cuoio:w-56">
      <Field orientation="horizontal" data-disabled>
        <Checkbox id="toggle-checkbox-disabled" name="toggle-checkbox-disabled" disabled />
        <FieldLabel htmlFor="toggle-checkbox-disabled">Enable notifications</FieldLabel>
      </Field>
    </FieldGroup>
  )
}

function GroupExample() {
  return (
    <FieldSet>
      <FieldLegend variant="label">Show these items on the desktop:</FieldLegend>
      <FieldDescription>Select the items you want to show on the desktop.</FieldDescription>
      <FieldGroup className="cuoio:gap-3">
        <Field orientation="horizontal">
          <Checkbox
            id="finder-pref-9k2-hard-disks-ljj-checkbox"
            name="finder-pref-9k2-hard-disks-ljj-checkbox"
            defaultChecked
          />
          <FieldLabel
            htmlFor="finder-pref-9k2-hard-disks-ljj-checkbox"
            className="cuoio:font-normal"
          >
            Hard disks
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="finder-pref-9k2-external-disks-1yg-checkbox"
            name="finder-pref-9k2-external-disks-1yg-checkbox"
            defaultChecked
          />
          <FieldLabel
            htmlFor="finder-pref-9k2-external-disks-1yg-checkbox"
            className="cuoio:font-normal"
          >
            External disks
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="finder-pref-9k2-cds-dvds-fzt-checkbox"
            name="finder-pref-9k2-cds-dvds-fzt-checkbox"
          />
          <FieldLabel htmlFor="finder-pref-9k2-cds-dvds-fzt-checkbox" className="cuoio:font-normal">
            CDs, DVDs, and iPods
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="finder-pref-9k2-connected-servers-6l2-checkbox"
            name="finder-pref-9k2-connected-servers-6l2-checkbox"
          />
          <FieldLabel
            htmlFor="finder-pref-9k2-connected-servers-6l2-checkbox"
            className="cuoio:font-normal"
          >
            Connected servers
          </FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}

const Table_tableData = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.chen@example.com',
    role: 'Admin',
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    email: 'marcus.rodriguez@example.com',
    role: 'User',
  },
  {
    id: '3',
    name: 'Priya Patel',
    email: 'priya.patel@example.com',
    role: 'User',
  },
  {
    id: '4',
    name: 'David Kim',
    email: 'david.kim@example.com',
    role: 'Editor',
  },
]

function TableExample() {
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(new Set(['1']))

  const selectAll = selectedRows.size === Table_tableData.length

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(Table_tableData.map((row) => row.id)))
    } else {
      setSelectedRows(new Set())
    }
  }

  const handleSelectRow = (id: string, checked: boolean) => {
    const newSelected = new Set(selectedRows)
    if (checked) {
      newSelected.add(id)
    } else {
      newSelected.delete(id)
    }
    setSelectedRows(newSelected)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="cuoio:w-8">
            <Checkbox
              id="select-all-checkbox"
              name="select-all-checkbox"
              checked={selectAll}
              onCheckedChange={handleSelectAll}
            />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Table_tableData.map((row) => (
          <TableRow key={row.id} data-state={selectedRows.has(row.id) ? 'selected' : undefined}>
            <TableCell>
              <Checkbox
                id={`row-${row.id}-checkbox`}
                name={`row-${row.id}-checkbox`}
                checked={selectedRows.has(row.id)}
                onCheckedChange={(checked) => handleSelectRow(row.id, checked === true)}
              />
            </TableCell>
            <TableCell className="cuoio:font-medium">{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['disabled', 'defaultChecked'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    defaultChecked: {
      control: 'boolean',
    },
  },
  args: {
    disabled: false,
    defaultChecked: false,
  },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div className="cuoio:flex cuoio:items-center cuoio:gap-2">
      <Checkbox
        id="playground-checkbox"
        disabled={args.disabled}
        defaultChecked={args.defaultChecked}
        key={String(args.defaultChecked)}
      />
      <Label htmlFor="playground-checkbox">Accept terms and conditions</Label>
    </div>
  ),
}

export const DemoStory: Story = {
  name: 'Demo',
  render: () => <DemoExample />,
}

export const InvalidStory: Story = {
  name: 'Invalid',
  render: () => <InvalidExample />,
}

export const BasicStory: Story = {
  name: 'Basic',
  render: () => <BasicExample />,
}

export const DescriptionStory: Story = {
  name: 'Description',
  render: () => <DescriptionExample />,
}

export const DisabledStory: Story = {
  name: 'Disabled',
  render: () => <DisabledExample />,
}

export const GroupStory: Story = {
  name: 'Group',
  render: () => <GroupExample />,
}

export const TableStory: Story = {
  name: 'Table',
  render: () => <TableExample />,
}
