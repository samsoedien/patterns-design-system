import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu"
import { cva } from "class-variance-authority"
import { cn } from "cn"
import { ChevronDownIcon } from "lucide-react"

function NavigationMenu({
  align = "start",
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Root.Props &
  Pick<NavigationMenuPrimitive.Positioner.Props, "align">) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn(
        "pttrn:group/navigation-menu pttrn:relative pttrn:flex pttrn:max-w-max pttrn:flex-1 pttrn:items-center pttrn:justify-center",
        className
      )}
      {...props}
    >
      {children}
      <NavigationMenuPositioner align={align} />
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "pttrn:group pttrn:flex pttrn:flex-1 pttrn:list-none pttrn:items-center pttrn:justify-center pttrn:gap-0",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("pttrn:relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "pttrn:group/navigation-menu-trigger pttrn:inline-flex pttrn:h-9 pttrn:w-max pttrn:items-center pttrn:justify-center pttrn:rounded-lg pttrn:px-2.5 pttrn:py-1.5 pttrn:text-xs/relaxed pttrn:font-medium pttrn:transition-all pttrn:outline-none pttrn:hover:bg-muted pttrn:focus:bg-muted pttrn:focus-visible:ring-2 pttrn:focus-visible:ring-ring/30 pttrn:focus-visible:outline-1 pttrn:disabled:pointer-events-none pttrn:disabled:opacity-50 pttrn:data-popup-open:bg-muted/50 pttrn:data-popup-open:hover:bg-muted pttrn:data-open:bg-muted/50 pttrn:data-open:hover:bg-muted pttrn:data-open:focus:bg-muted"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Trigger.Props) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "pttrn:group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon className="pttrn:relative pttrn:top-px pttrn:ms-1 pttrn:size-3 pttrn:transition pttrn:duration-300 pttrn:group-data-popup-open/navigation-menu-trigger:rotate-180 pttrn:group-data-open/navigation-menu-trigger:rotate-180" aria-hidden="true" />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: NavigationMenuPrimitive.Content.Props) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "pttrn:data-ending-style:data-activation-direction=left:translate-x-[50%] rtl:pttrn:data-ending-style:data-activation-direction=left:-translate-x-[50%] pttrn:data-ending-style:data-activation-direction=right:translate-x-[-50%] rtl:pttrn:data-ending-style:data-activation-direction=right:-translate-x-[-50%] pttrn:data-starting-style:data-activation-direction=left:translate-x-[-50%] rtl:pttrn:data-starting-style:data-activation-direction=left:-translate-x-[-50%] pttrn:data-starting-style:data-activation-direction=right:translate-x-[50%] rtl:pttrn:data-starting-style:data-activation-direction=right:-translate-x-[50%] pttrn:h-full pttrn:w-auto pttrn:p-1.5 pttrn:transition-[opacity,transform,translate] pttrn:duration-[0.35s] pttrn:ease-[cubic-bezier(0.22,1,0.36,1)] pttrn:group-data-[viewport=false]/navigation-menu:rounded-xl pttrn:group-data-[viewport=false]/navigation-menu:bg-popover pttrn:group-data-[viewport=false]/navigation-menu:text-popover-foreground pttrn:group-data-[viewport=false]/navigation-menu:shadow-md pttrn:group-data-[viewport=false]/navigation-menu:ring-1 pttrn:group-data-[viewport=false]/navigation-menu:ring-foreground/10 pttrn:group-data-[viewport=false]/navigation-menu:duration-300 pttrn:data-ending-style:opacity-0 pttrn:data-starting-style:opacity-0 pttrn:data-[motion=from-end]:slide-in-from-right-52 pttrn:data-[motion=from-start]:slide-in-from-left-52 pttrn:data-[motion=to-end]:slide-out-to-right-52 pttrn:data-[motion=to-start]:slide-out-to-left-52 pttrn:data-[motion^=from-]:animate-in pttrn:data-[motion^=from-]:fade-in pttrn:data-[motion^=to-]:animate-out pttrn:data-[motion^=to-]:fade-out pttrn:**:data-[slot=navigation-menu-link]:focus:ring-0 pttrn:**:data-[slot=navigation-menu-link]:focus:outline-none pttrn:group-data-[viewport=false]/navigation-menu:data-open:animate-in pttrn:group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 pttrn:group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 pttrn:group-data-[viewport=false]/navigation-menu:data-closed:animate-out pttrn:group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 pttrn:group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuPositioner({
  className,
  side = "bottom",
  sideOffset = 8,
  align = "start",
  alignOffset = 0,
  ...props
}: NavigationMenuPrimitive.Positioner.Props) {
  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className={cn(
          "pttrn:isolate pttrn:z-50 pttrn:h-(--positioner-height) pttrn:w-(--positioner-width) pttrn:max-w-(--available-width) pttrn:transition-[top,left,right,bottom] pttrn:duration-[0.35s] pttrn:ease-[cubic-bezier(0.22,1,0.36,1)] pttrn:data-instant:transition-none pttrn:data-[side=bottom]:before:top-[-10px] pttrn:data-[side=bottom]:before:end-0 pttrn:data-[side=bottom]:before:start-0",
          className
        )}
        {...props}
      >
        <NavigationMenuPrimitive.Popup className="pttrn:data-[ending-style]:easing-[ease] pttrn:xs:w-(--popup-width) pttrn:relative pttrn:h-(--popup-height) pttrn:w-(--popup-width) pttrn:origin-(--transform-origin) pttrn:rounded-xl pttrn:bg-popover pttrn:text-popover-foreground pttrn:shadow pttrn:ring-1 pttrn:ring-foreground/10 pttrn:transition-[opacity,transform,width,height,scale,translate] pttrn:duration-[0.35s] pttrn:ease-[cubic-bezier(0.22,1,0.36,1)] pttrn:outline-none pttrn:data-ending-style:scale-90 pttrn:data-ending-style:opacity-0 pttrn:data-ending-style:duration-150 pttrn:data-starting-style:scale-90 pttrn:data-starting-style:opacity-0">
          <NavigationMenuPrimitive.Viewport className="pttrn:relative pttrn:size-full pttrn:overflow-hidden" />
        </NavigationMenuPrimitive.Popup>
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: NavigationMenuPrimitive.Link.Props) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "pttrn:flex pttrn:items-center pttrn:gap-1.5 pttrn:rounded-lg pttrn:p-2 pttrn:text-xs/relaxed pttrn:transition-all pttrn:outline-none pttrn:hover:bg-muted pttrn:focus:bg-muted pttrn:focus-visible:ring-2 pttrn:focus-visible:ring-ring/30 pttrn:focus-visible:outline-1 pttrn:in-data-[slot=navigation-menu-content]:rounded-md pttrn:data-[active=true]:bg-muted/50 pttrn:data-[active=true]:hover:bg-muted pttrn:data-[active=true]:focus:bg-muted pttrn:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Icon>) {
  return (
    <NavigationMenuPrimitive.Icon
      data-slot="navigation-menu-indicator"
      className={cn(
        "pttrn:top-full pttrn:z-1 pttrn:flex pttrn:h-1.5 pttrn:items-end pttrn:justify-center pttrn:overflow-hidden pttrn:data-[state=hidden]:animate-out pttrn:data-[state=hidden]:fade-out pttrn:data-[state=visible]:animate-in pttrn:data-[state=visible]:fade-in",
        className
      )}
      {...props}
    >
      <div className="pttrn:relative pttrn:top-[60%] pttrn:h-2 pttrn:w-2 pttrn:rotate-45 pttrn:rounded-ss-sm pttrn:bg-border pttrn:shadow-md" />
    </NavigationMenuPrimitive.Icon>
  )
}

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuPositioner,
}
