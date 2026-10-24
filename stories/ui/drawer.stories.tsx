// @ts-nocheck
'use client'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { useIsMobile } from '@/hooks/use-mobile'

function SidesExample() {
  return (
    <Drawer swipeDirection="left">
      <DrawerTrigger render={<Button variant="secondary" />}>Open Left Drawer</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Move Goal</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
        <div className="cuoio:flex-1 cuoio:p-4">
          <div className="cuoio:size-full cuoio:rounded-2xl cuoio:bg-muted" />
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button />}>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function SwipeHandleExample() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="secondary" />}>Open Drawer</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer</DrawerTitle>
          <DrawerDescription>Drawer with a swipe handle.</DrawerDescription>
        </DrawerHeader>
        <div className="cuoio:flex-1 cuoio:p-4">
          <div className="cuoio:rounded-2xl cuoio:bg-muted cuoio:group-data-[swipe-axis=x]/drawer-popup:size-full cuoio:group-data-[swipe-axis=y]/drawer-popup:h-80 cuoio:group-data-[swipe-axis=y]/drawer-popup:w-full" />
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button />}>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function NestedExample() {
  const isMobile = useIsMobile()

  const swipeDirection = isMobile ? 'down' : 'right'

  return (
    <Drawer showSwipeHandle={isMobile} swipeDirection={swipeDirection}>
      <DrawerTrigger render={<Button variant="secondary" />}>Open Drawer</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer</DrawerTitle>
          <DrawerDescription>Open another drawer from the same direction.</DrawerDescription>
        </DrawerHeader>
        <div className="cuoio:flex-1 cuoio:p-4">
          <div className="cuoio:bg-muted cuoio:group-data-[swipe-axis=x]/drawer-popup:size-full cuoio:group-data-[swipe-axis=y]/drawer-popup:aspect-video cuoio:group-data-[swipe-axis=y]/drawer-popup:w-full" />
        </div>
        <DrawerFooter>
          <Drawer showSwipeHandle={isMobile} swipeDirection={swipeDirection}>
            <DrawerTrigger render={<Button variant="outline" />}>Open Nested Drawer</DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Nested Drawer</DrawerTitle>
                <DrawerDescription>
                  The parent drawer stays mounted behind this one.
                </DrawerDescription>
              </DrawerHeader>
              <div className="cuoio:flex-1 cuoio:p-4">
                <div className="cuoio:bg-muted cuoio:group-data-[swipe-axis=x]/drawer-popup:size-full cuoio:group-data-[swipe-axis=y]/drawer-popup:aspect-video cuoio:group-data-[swipe-axis=y]/drawer-popup:w-full" />
              </div>
              <DrawerFooter>
                <Drawer showSwipeHandle={isMobile} swipeDirection={swipeDirection}>
                  <DrawerTrigger render={<Button variant="outline" />}>
                    Open Third Drawer
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Third Drawer</DrawerTitle>
                      <DrawerDescription>
                        Two drawers are stacked behind this one.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="cuoio:flex-1 cuoio:p-4">
                      <div className="cuoio:bg-muted cuoio:group-data-[swipe-axis=x]/drawer-popup:size-full cuoio:group-data-[swipe-axis=y]/drawer-popup:aspect-video cuoio:group-data-[swipe-axis=y]/drawer-popup:w-full" />
                    </div>
                    <DrawerFooter>
                      <Drawer showSwipeHandle={isMobile} swipeDirection={swipeDirection}>
                        <DrawerTrigger render={<Button variant="outline" />}>
                          Open Fourth Drawer
                        </DrawerTrigger>
                        <DrawerContent>
                          <DrawerHeader>
                            <DrawerTitle>Fourth Drawer</DrawerTitle>
                            <DrawerDescription>
                              This is the frontmost drawer in the stack.
                            </DrawerDescription>
                          </DrawerHeader>
                          <div className="cuoio:flex-1 cuoio:p-4">
                            <div className="cuoio:bg-muted cuoio:group-data-[swipe-axis=x]/drawer-popup:size-full cuoio:group-data-[swipe-axis=y]/drawer-popup:aspect-video cuoio:group-data-[swipe-axis=y]/drawer-popup:w-full" />
                          </div>
                          <DrawerFooter>
                            <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
                          </DrawerFooter>
                        </DrawerContent>
                      </Drawer>
                      <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
                <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function NonModalExample() {
  return (
    <Drawer modal={false} disablePointerDismissal swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>Non Modal</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Non Modal Drawer</DrawerTitle>
        </DrawerHeader>
        <div className="cuoio:flex-1 cuoio:p-4">
          <div className="cuoio:rounded-2xl cuoio:bg-muted cuoio:group-data-[swipe-axis=x]/drawer-popup:size-full cuoio:group-data-[swipe-axis=y]/drawer-popup:h-80 cuoio:group-data-[swipe-axis=y]/drawer-popup:w-full" />
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button />}>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const SnapPoints_SNAP_POINTS = ['31rem', 1]

function SnapPointsExample() {
  return (
    <Drawer snapPoints={SnapPoints_SNAP_POINTS} showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>Open Snap Drawer</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Snap points</DrawerTitle>
          <DrawerDescription>
            Drag the drawer to snap between a compact peek and a near full-height view.
          </DrawerDescription>
        </DrawerHeader>
        <div className="cuoio:flex-1 cuoio:p-4">
          <div className="cuoio:rounded-2xl cuoio:bg-muted cuoio:group-data-[swipe-axis=x]/drawer-popup:size-full cuoio:group-data-[swipe-axis=y]/drawer-popup:h-80 cuoio:group-data-[swipe-axis=y]/drawer-popup:w-full" />
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button />}>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const meta = {
  title: 'UI/Drawer',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const SidesStory: Story = {
  name: 'Sides',
  render: () => <SidesExample />,
}

export const SwipeHandleStory: Story = {
  name: 'Swipe Handle',
  render: () => <SwipeHandleExample />,
}

export const NestedStory: Story = {
  name: 'Nested',
  render: () => <NestedExample />,
}

export const NonModalStory: Story = {
  name: 'Non Modal',
  render: () => <NonModalExample />,
}

export const SnapPointsStory: Story = {
  name: 'Snap Points',
  render: () => <SnapPointsExample />,
}
