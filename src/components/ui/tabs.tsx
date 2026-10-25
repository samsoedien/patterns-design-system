"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "cuoio:group/tabs cuoio:flex cuoio:gap-2 cuoio:data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "cuoio:group/tabs-list cuoio:inline-flex cuoio:w-fit cuoio:items-center cuoio:justify-center cuoio:rounded-lg cuoio:p-[3px] cuoio:text-muted-foreground cuoio:group-data-horizontal/tabs:h-8 cuoio:group-data-vertical/tabs:h-fit cuoio:group-data-vertical/tabs:flex-col cuoio:data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "cuoio:bg-muted",
        line: "cuoio:gap-1 cuoio:bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "cuoio:relative cuoio:inline-flex cuoio:h-[calc(100%-1px)] cuoio:flex-1 cuoio:items-center cuoio:justify-center cuoio:gap-1.5 cuoio:rounded-md cuoio:border cuoio:border-transparent cuoio:px-1.5 cuoio:py-0.5 cuoio:text-sm cuoio:font-medium cuoio:whitespace-nowrap cuoio:text-foreground/60 cuoio:transition-all cuoio:group-data-vertical/tabs:w-full cuoio:group-data-vertical/tabs:justify-start cuoio:hover:text-foreground cuoio:focus-visible:border-ring cuoio:focus-visible:ring-[3px] cuoio:focus-visible:ring-ring/50 cuoio:focus-visible:outline-1 cuoio:focus-visible:outline-ring cuoio:disabled:pointer-events-none cuoio:disabled:opacity-50 cuoio:has-data-[icon=inline-end]:pe-1 cuoio:has-data-[icon=inline-start]:ps-1 cuoio:aria-disabled:pointer-events-none cuoio:aria-disabled:opacity-50 cuoio:dark:text-muted-foreground cuoio:dark:hover:text-foreground cuoio:group-data-[variant=default]/tabs-list:data-active:shadow-sm cuoio:group-data-[variant=line]/tabs-list:data-active:shadow-none cuoio:[&_svg]:pointer-events-none cuoio:[&_svg]:shrink-0 cuoio:[&_svg:not([class*=size-])]:size-4",
        "cuoio:group-data-[variant=line]/tabs-list:bg-transparent cuoio:group-data-[variant=line]/tabs-list:data-active:bg-transparent cuoio:dark:group-data-[variant=line]/tabs-list:data-active:border-transparent cuoio:dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        "cuoio:data-active:bg-background cuoio:data-active:text-foreground cuoio:dark:data-active:border-input cuoio:dark:data-active:bg-input/30 cuoio:dark:data-active:text-foreground",
        "cuoio:after:absolute cuoio:after:bg-foreground cuoio:after:opacity-0 cuoio:after:transition-opacity cuoio:group-data-horizontal/tabs:after:inset-x-0 cuoio:group-data-horizontal/tabs:after:bottom-[-5px] cuoio:group-data-horizontal/tabs:after:h-0.5 cuoio:group-data-vertical/tabs:after:inset-y-0 cuoio:group-data-vertical/tabs:after:-end-1 cuoio:group-data-vertical/tabs:after:w-0.5 cuoio:group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("cuoio:flex-1 cuoio:text-sm cuoio:outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
