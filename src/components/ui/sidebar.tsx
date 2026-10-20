"use client"

import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { PanelLeftIcon } from "lucide-react"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContextProps = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open]
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed"

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        data-slot="sidebar-wrapper"
        style={
          {
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style,
          } as React.CSSProperties
        }
        className={cn(
          "pttrn:group/sidebar-wrapper pttrn:flex pttrn:min-h-svh pttrn:w-full pttrn:has-data-[variant=inset]:bg-sidebar",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  dir,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "pttrn:flex pttrn:h-full pttrn:w-(--sidebar-width) pttrn:flex-col pttrn:bg-sidebar pttrn:text-sidebar-foreground",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          dir={dir}
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="pttrn:w-(--sidebar-width) pttrn:bg-sidebar pttrn:p-0 pttrn:text-sidebar-foreground pttrn:[&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="pttrn:sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="pttrn:flex pttrn:h-full pttrn:w-full pttrn:flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="pttrn:group pttrn:peer pttrn:hidden pttrn:text-sidebar-foreground pttrn:md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          "pttrn:relative pttrn:w-(--sidebar-width) pttrn:bg-transparent pttrn:transition-[width] pttrn:duration-200 pttrn:ease-linear",
          "pttrn:group-data-[collapsible=offcanvas]:w-0",
          "pttrn:group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "pttrn:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "pttrn:group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        data-side={side}
        className={cn(
          "pttrn:fixed pttrn:inset-y-0 pttrn:z-10 pttrn:hidden pttrn:h-svh pttrn:w-(--sidebar-width) pttrn:transition-[left,right,width] pttrn:duration-200 pttrn:ease-linear pttrn:data-[side=left]:left-0 pttrn:data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] pttrn:data-[side=right]:right-0 pttrn:data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] pttrn:md:flex",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "pttrn:p-2 pttrn:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "pttrn:group-data-[collapsible=icon]:w-(--sidebar-width-icon) pttrn:group-data-[side=left]:border-e pttrn:group-data-[side=right]:border-s",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="pttrn:flex pttrn:size-full pttrn:flex-col pttrn:bg-sidebar pttrn:group-data-[variant=floating]:rounded-lg pttrn:group-data-[variant=floating]:shadow-sm pttrn:group-data-[variant=floating]:ring-1 pttrn:group-data-[variant=floating]:ring-sidebar-border"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon-sm"
      className={cn(className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="pttrn:sr-only">Toggle Sidebar</span>
    </Button>
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "pttrn:absolute pttrn:inset-y-0 pttrn:z-20 pttrn:hidden pttrn:w-4 pttrn:transition-all pttrn:ease-linear pttrn:group-data-[side=left]:-right-4 pttrn:group-data-[side=right]:left-0 pttrn:after:absolute pttrn:after:inset-y-0 pttrn:after:start-1/2 pttrn:after:w-[2px] pttrn:hover:after:bg-sidebar-border pttrn:sm:flex pttrn:ltr:-translate-x-1/2 rtl:pttrn:ltr:translate-x-1/2 pttrn:rtl:-translate-x-1/2 rtl:pttrn:rtl:translate-x-1/2",
        "pttrn:in-data-[side=left]:cursor-w-resize rtl:pttrn:in-data-[side=left]:cursor-e-resize pttrn:in-data-[side=right]:cursor-e-resize rtl:pttrn:in-data-[side=right]:cursor-w-resize",
        "pttrn:[[data-side=left][data-state=collapsed]_&]:cursor-e-resize rtl:pttrn:[[data-side=left][data-state=collapsed]_&]:cursor-w-resize pttrn:[[data-side=right][data-state=collapsed]_&]:cursor-w-resize rtl:pttrn:[[data-side=right][data-state=collapsed]_&]:cursor-e-resize",
        "pttrn:group-data-[collapsible=offcanvas]:translate-x-0 rtl:pttrn:group-data-[collapsible=offcanvas]:-translate-x-0 pttrn:group-data-[collapsible=offcanvas]:after:start-full pttrn:hover:group-data-[collapsible=offcanvas]:bg-sidebar",
        "pttrn:[[data-side=left][data-collapsible=offcanvas]_&]:-end-2",
        "pttrn:[[data-side=right][data-collapsible=offcanvas]_&]:-start-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "pttrn:relative pttrn:flex pttrn:w-full pttrn:flex-1 pttrn:flex-col pttrn:bg-background pttrn:md:peer-data-[variant=inset]:m-2 pttrn:md:peer-data-[variant=inset]:ms-0 pttrn:md:peer-data-[variant=inset]:rounded-xl pttrn:md:peer-data-[variant=inset]:shadow-sm pttrn:md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ms-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn(
        "pttrn:h-8 pttrn:w-full pttrn:border-input pttrn:bg-muted/20 pttrn:dark:bg-muted/30",
        className
      )}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("pttrn:flex pttrn:flex-col pttrn:gap-2 pttrn:p-2", className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("pttrn:flex pttrn:flex-col pttrn:gap-2 pttrn:p-2", className)}
      {...props}
    />
  )
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("pttrn:mx-2 pttrn:w-auto pttrn:bg-sidebar-border", className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "pttrn:no-scrollbar pttrn:flex pttrn:min-h-0 pttrn:flex-1 pttrn:flex-col pttrn:gap-0 pttrn:overflow-auto pttrn:group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn(
        "pttrn:relative pttrn:flex pttrn:w-full pttrn:min-w-0 pttrn:flex-col pttrn:px-2 pttrn:py-1",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div"> & React.ComponentProps<"div">) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "flex h-8 shrink-0 items-center rounded-md px-2 text-xs text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "sidebar-group-label",
      sidebar: "group-label",
    },
  })
}

function SidebarGroupAction({
  className,
  render,
  ...props
}: useRender.ComponentProps<"button"> & React.ComponentProps<"button">) {
  return useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(
      {
        className: cn(
          "absolute top-3.5 end-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 md:after:hidden [&>svg]:size-4 [&>svg]:shrink-0",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "sidebar-group-action",
      sidebar: "group-action",
    },
  })
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("pttrn:w-full pttrn:text-xs", className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("pttrn:flex pttrn:w-full pttrn:min-w-0 pttrn:flex-col pttrn:gap-px", className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("pttrn:group/menu-item pttrn:relative", className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  "pttrn:peer/menu-button pttrn:group/menu-button pttrn:flex pttrn:w-full pttrn:items-center pttrn:gap-2 pttrn:overflow-hidden pttrn:rounded-[calc(var(--radius-sm)+2px)] pttrn:p-2 pttrn:text-start pttrn:text-xs pttrn:ring-sidebar-ring pttrn:outline-hidden pttrn:transition-[width,height,padding] pttrn:group-has-data-[sidebar=menu-action]/menu-item:pe-8 pttrn:group-data-[collapsible=icon]:size-8! pttrn:group-data-[collapsible=icon]:p-2! pttrn:hover:bg-sidebar-accent pttrn:hover:text-sidebar-accent-foreground pttrn:focus-visible:ring-2 pttrn:active:bg-sidebar-accent pttrn:active:text-sidebar-accent-foreground pttrn:disabled:pointer-events-none pttrn:disabled:opacity-50 pttrn:aria-disabled:pointer-events-none pttrn:aria-disabled:opacity-50 pttrn:data-open:hover:bg-sidebar-accent pttrn:data-open:hover:text-sidebar-accent-foreground pttrn:data-active:bg-sidebar-accent pttrn:data-active:font-medium pttrn:data-active:text-sidebar-accent-foreground pttrn:[&_svg]:size-4 pttrn:[&_svg]:shrink-0 pttrn:[&>span:last-child]:truncate",
  {
    variants: {
      variant: {
        default: "pttrn:hover:bg-sidebar-accent pttrn:hover:text-sidebar-accent-foreground",
        outline:
          "pttrn:bg-background pttrn:shadow-[0_0_0_1px_var(--sidebar-border)] pttrn:hover:bg-sidebar-accent pttrn:hover:text-sidebar-accent-foreground pttrn:hover:shadow-[0_0_0_1px_var(--sidebar-accent)]",
      },
      size: {
        default: "pttrn:h-8 pttrn:text-xs",
        sm: "pttrn:h-7 pttrn:text-xs",
        lg: "pttrn:h-12 pttrn:text-xs pttrn:group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function SidebarMenuButton({
  render,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: useRender.ComponentProps<"button"> &
  React.ComponentProps<"button"> & {
    isActive?: boolean
    tooltip?: string | React.ComponentProps<typeof TooltipContent>
  } & VariantProps<typeof sidebarMenuButtonVariants>) {
  const { isMobile, state } = useSidebar()
  const comp = useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(
      {
        className: cn(sidebarMenuButtonVariants({ variant, size }), className),
      },
      props
    ),
    render: !tooltip ? render : <TooltipTrigger render={render} />,
    state: {
      slot: "sidebar-menu-button",
      sidebar: "menu-button",
      size,
      active: isActive,
    },
  })

  if (!tooltip) {
    return comp
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      {comp}
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  )
}

function SidebarMenuAction({
  className,
  render,
  showOnHover = false,
  ...props
}: useRender.ComponentProps<"button"> &
  React.ComponentProps<"button"> & {
    showOnHover?: boolean
  }) {
  return useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(
      {
        className: cn(
          "absolute top-1.5 end-1 flex aspect-square w-5 items-center justify-center rounded-[calc(var(--radius-sm)-2px)] p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 after:absolute after:-inset-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 md:after:hidden [&>svg]:size-4 [&>svg]:shrink-0",
          showOnHover &&
            "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-active/menu-button:text-sidebar-accent-foreground aria-expanded:opacity-100 md:opacity-0",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "sidebar-menu-action",
      sidebar: "menu-action",
    },
  })
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "pttrn:pointer-events-none pttrn:absolute pttrn:end-1 pttrn:flex pttrn:h-5 pttrn:min-w-5 pttrn:items-center pttrn:justify-center pttrn:rounded-[calc(var(--radius-sm)-2px)] pttrn:px-1 pttrn:text-xs pttrn:font-medium pttrn:text-sidebar-foreground pttrn:tabular-nums pttrn:select-none pttrn:group-data-[collapsible=icon]:hidden pttrn:peer-hover/menu-button:text-sidebar-accent-foreground pttrn:peer-data-[size=default]/menu-button:top-1.5 pttrn:peer-data-[size=lg]/menu-button:top-2.5 pttrn:peer-data-[size=sm]/menu-button:top-1 pttrn:peer-data-active/menu-button:text-sidebar-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean
}) {
  // Random width between 50 to 90%.
  const [width] = React.useState(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  })

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("pttrn:flex pttrn:h-8 pttrn:items-center pttrn:gap-2 pttrn:rounded-md pttrn:px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="pttrn:size-4 pttrn:rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="pttrn:h-4 pttrn:max-w-(--skeleton-width) pttrn:flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "pttrn:mx-3.5 pttrn:flex pttrn:min-w-0 pttrn:translate-x-px rtl:pttrn:-translate-x-px pttrn:flex-col pttrn:gap-1 pttrn:border-s pttrn:border-sidebar-border pttrn:px-2.5 pttrn:py-0.5 pttrn:group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("pttrn:group/menu-sub-item pttrn:relative", className)}
      {...props}
    />
  )
}

function SidebarMenuSubButton({
  render,
  size = "md",
  isActive = false,
  className,
  ...props
}: useRender.ComponentProps<"a"> &
  React.ComponentProps<"a"> & {
    size?: "sm" | "md"
    isActive?: boolean
  }) {
  return useRender({
    defaultTagName: "a",
    props: mergeProps<"a">(
      {
        className: cn(
          "flex h-7 min-w-0 -translate-x-px rtl:translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden group-data-[collapsible=icon]:hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[size=md]:text-xs data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "sidebar-menu-sub-button",
      sidebar: "menu-sub-button",
      size,
      active: isActive,
    },
  })
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
