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
        "pttrn:group/tabs pttrn:flex pttrn:gap-2 pttrn:data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "pttrn:group/tabs-list pttrn:inline-flex pttrn:w-fit pttrn:items-center pttrn:justify-center pttrn:rounded-lg pttrn:p-[3px] pttrn:text-muted-foreground pttrn:group-data-horizontal/tabs:h-8 pttrn:group-data-vertical/tabs:h-fit pttrn:group-data-vertical/tabs:flex-col pttrn:data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "pttrn:bg-muted",
        line: "pttrn:gap-1 pttrn:bg-transparent",
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
        "pttrn:relative pttrn:inline-flex pttrn:h-[calc(100%-1px)] pttrn:flex-1 pttrn:items-center pttrn:justify-center pttrn:gap-1.5 pttrn:rounded-md pttrn:border pttrn:border-transparent pttrn:px-1.5 pttrn:py-0.5 pttrn:text-xs pttrn:font-medium pttrn:whitespace-nowrap pttrn:text-foreground/60 pttrn:transition-all pttrn:group-data-vertical/tabs:w-full pttrn:group-data-vertical/tabs:justify-start pttrn:group-data-vertical/tabs:py-[calc(--spacing(1.25))] pttrn:hover:text-foreground pttrn:focus-visible:border-ring pttrn:focus-visible:ring-[3px] pttrn:focus-visible:ring-ring/50 pttrn:focus-visible:outline-1 pttrn:focus-visible:outline-ring pttrn:disabled:pointer-events-none pttrn:disabled:opacity-50 pttrn:has-data-[icon=inline-end]:pe-1 pttrn:has-data-[icon=inline-start]:ps-1 pttrn:aria-disabled:pointer-events-none pttrn:aria-disabled:opacity-50 pttrn:dark:text-muted-foreground pttrn:dark:hover:text-foreground pttrn:[&_svg]:pointer-events-none pttrn:[&_svg]:shrink-0 pttrn:[&_svg:not([class*=size-])]:size-3.5",
        "pttrn:group-data-[variant=line]/tabs-list:bg-transparent pttrn:group-data-[variant=line]/tabs-list:data-active:bg-transparent pttrn:dark:group-data-[variant=line]/tabs-list:data-active:border-transparent pttrn:dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        "pttrn:data-active:bg-background pttrn:data-active:text-foreground pttrn:dark:data-active:border-input pttrn:dark:data-active:bg-input/30 pttrn:dark:data-active:text-foreground",
        "pttrn:after:absolute pttrn:after:bg-foreground pttrn:after:opacity-0 pttrn:after:transition-opacity pttrn:group-data-horizontal/tabs:after:inset-x-0 pttrn:group-data-horizontal/tabs:after:bottom-[-5px] pttrn:group-data-horizontal/tabs:after:h-0.5 pttrn:group-data-vertical/tabs:after:inset-y-0 pttrn:group-data-vertical/tabs:after:-end-1 pttrn:group-data-vertical/tabs:after:w-0.5 pttrn:group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
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
      className={cn("pttrn:flex-1 pttrn:text-xs/relaxed pttrn:outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
