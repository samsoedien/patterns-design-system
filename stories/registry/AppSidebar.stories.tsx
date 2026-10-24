'use client'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { AppSidebar } from '@/registry/app-sidebar/app-sidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

const meta = {
  title: 'Registry/AppSidebar',
  component: AppSidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AppSidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="cuoio:group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 cuoio:flex cuoio:h-16 cuoio:shrink-0 cuoio:items-center cuoio:gap-2 cuoio:transition-[width,height] cuoio:ease-linear">
          <div className="cuoio:flex cuoio:items-center cuoio:gap-2 cuoio:px-4">
            <SidebarTrigger className="cuoio:-ml-1" />
            <Separator
              orientation="vertical"
              className="cuoio:mr-2 cuoio:data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="cuoio:hidden cuoio:md:block">
                  <BreadcrumbLink href="#">Build Your Application</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="cuoio:hidden cuoio:md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="cuoio:flex cuoio:flex-1 cuoio:flex-col cuoio:gap-4 cuoio:p-4 cuoio:pt-0">
          <div className="cuoio:grid cuoio:auto-rows-min cuoio:gap-4 cuoio:md:grid-cols-3">
            <div className="cuoio:aspect-video cuoio:rounded-xl cuoio:bg-muted/50" />
            <div className="cuoio:aspect-video cuoio:rounded-xl cuoio:bg-muted/50" />
            <div className="cuoio:aspect-video cuoio:rounded-xl cuoio:bg-muted/50" />
          </div>
          <div className="cuoio:min-h-[100vh] cuoio:flex-1 cuoio:rounded-xl cuoio:bg-muted/50 cuoio:md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
}
