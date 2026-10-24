// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover'

function DemoExample() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>Open popover</PopoverTrigger>
      <PopoverContent className="cuoio:w-80">
        <div className="cuoio:grid cuoio:gap-4">
          <div className="cuoio:space-y-2">
            <h4 className="cuoio:leading-none cuoio:font-medium">Dimensions</h4>
            <p className="cuoio:text-sm cuoio:text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="cuoio:grid cuoio:gap-2">
            <div className="cuoio:grid cuoio:grid-cols-3 cuoio:items-center cuoio:gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="cuoio:col-span-2 cuoio:h-8" />
            </div>
            <div className="cuoio:grid cuoio:grid-cols-3 cuoio:items-center cuoio:gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input id="maxWidth" defaultValue="300px" className="cuoio:col-span-2 cuoio:h-8" />
            </div>
            <div className="cuoio:grid cuoio:grid-cols-3 cuoio:items-center cuoio:gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="cuoio:col-span-2 cuoio:h-8" />
            </div>
            <div className="cuoio:grid cuoio:grid-cols-3 cuoio:items-center cuoio:gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input id="maxHeight" defaultValue="none" className="cuoio:col-span-2 cuoio:h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

function BasicExample() {
  return (
    <>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" className="cuoio:w-fit" />}>
          Open Popover
        </PopoverTrigger>
        <PopoverContent align="start">
          <PopoverHeader>
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </>
  )
}

function AlignmentsExample() {
  return (
    <>
      <div className="cuoio:flex cuoio:gap-6">
        <Popover>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>Start</PopoverTrigger>
          <PopoverContent align="start" className="cuoio:w-40">
            Aligned to start
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>Center</PopoverTrigger>
          <PopoverContent align="center" className="cuoio:w-40">
            Aligned to center
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>End</PopoverTrigger>
          <PopoverContent align="end" className="cuoio:w-40">
            Aligned to end
          </PopoverContent>
        </Popover>
      </div>
    </>
  )
}

function FormExample() {
  return (
    <>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>Open Popover</PopoverTrigger>
        <PopoverContent className="cuoio:w-64" align="start">
          <PopoverHeader>
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
          </PopoverHeader>
          <FieldGroup className="cuoio:gap-4">
            <Field orientation="horizontal">
              <FieldLabel htmlFor="width" className="cuoio:w-1/2">
                Width
              </FieldLabel>
              <Input id="width" defaultValue="100%" />
            </Field>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="height" className="cuoio:w-1/2">
                Height
              </FieldLabel>
              <Input id="height" defaultValue="25px" />
            </Field>
          </FieldGroup>
        </PopoverContent>
      </Popover>
    </>
  )
}

const meta = {
  title: 'UI/Popover',
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

export const AlignmentsStory: Story = {
  name: 'Alignments',
  render: () => <AlignmentsExample />,
}

export const FormStory: Story = {
  name: 'Form',
  render: () => <FormExample />,
}
