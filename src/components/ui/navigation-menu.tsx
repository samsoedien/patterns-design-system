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
        "cuoio:group/navigation-menu cuoio:relative cuoio:flex cuoio:max-w-max cuoio:flex-1 cuoio:items-center cuoio:justify-center",
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
        "cuoio:group cuoio:flex cuoio:flex-1 cuoio:list-none cuoio:items-center cuoio:justify-center cuoio:gap-0",
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
      className={cn("cuoio:relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "cuoio:group/navigation-menu-trigger cuoio:inline-flex cuoio:h-9 cuoio:w-max cuoio:items-center cuoio:justify-center cuoio:rounded-lg cuoio:px-2.5 cuoio:py-1.5 cuoio:text-sm cuoio:font-medium cuoio:transition-all cuoio:outline-none cuoio:hover:bg-muted cuoio:focus:bg-muted cuoio:focus-visible:ring-3 cuoio:focus-visible:ring-ring/50 cuoio:focus-visible:outline-1 cuoio:disabled:pointer-events-none cuoio:disabled:opacity-50 cuoio:data-popup-open:bg-muted/50 cuoio:data-popup-open:hover:bg-muted cuoio:data-open:bg-muted/50 cuoio:data-open:hover:bg-muted cuoio:data-open:focus:bg-muted"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Trigger.Props) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "cuoio:group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon className="cuoio:relative cuoio:top-px cuoio:ms-1 cuoio:size-3 cuoio:transition cuoio:duration-300 cuoio:group-data-popup-open/navigation-menu-trigger:rotate-180 cuoio:group-data-open/navigation-menu-trigger:rotate-180" aria-hidden="true" />
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
        "cuoio:data-ending-style:data-activation-direction=left:translate-x-[50%] rtl:cuoio:data-ending-style:data-activation-direction=left:-translate-x-[50%] cuoio:data-ending-style:data-activation-direction=right:translate-x-[-50%] rtl:cuoio:data-ending-style:data-activation-direction=right:-translate-x-[-50%] cuoio:data-starting-style:data-activation-direction=left:translate-x-[-50%] rtl:cuoio:data-starting-style:data-activation-direction=left:-translate-x-[-50%] cuoio:data-starting-style:data-activation-direction=right:translate-x-[50%] rtl:cuoio:data-starting-style:data-activation-direction=right:-translate-x-[50%] cuoio:h-full cuoio:w-auto cuoio:p-1 cuoio:transition-[opacity,transform,translate] cuoio:duration-[0.35s] cuoio:ease-[cubic-bezier(0.22,1,0.36,1)] cuoio:group-data-[viewport=false]/navigation-menu:rounded-lg cuoio:group-data-[viewport=false]/navigation-menu:bg-popover cuoio:group-data-[viewport=false]/navigation-menu:text-popover-foreground cuoio:group-data-[viewport=false]/navigation-menu:shadow cuoio:group-data-[viewport=false]/navigation-menu:ring-1 cuoio:group-data-[viewport=false]/navigation-menu:ring-foreground/10 cuoio:group-data-[viewport=false]/navigation-menu:duration-300 cuoio:data-ending-style:opacity-0 cuoio:data-starting-style:opacity-0 cuoio:data-[motion=from-end]:slide-in-from-right-52 cuoio:data-[motion=from-start]:slide-in-from-left-52 cuoio:data-[motion=to-end]:slide-out-to-right-52 cuoio:data-[motion=to-start]:slide-out-to-left-52 cuoio:data-[motion^=from-]:animate-in cuoio:data-[motion^=from-]:fade-in cuoio:data-[motion^=to-]:animate-out cuoio:data-[motion^=to-]:fade-out cuoio:**:data-[slot=navigation-menu-link]:focus:ring-0 cuoio:**:data-[slot=navigation-menu-link]:focus:outline-none cuoio:group-data-[viewport=false]/navigation-menu:data-open:animate-in cuoio:group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 cuoio:group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 cuoio:group-data-[viewport=false]/navigation-menu:data-closed:animate-out cuoio:group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 cuoio:group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95",
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
          "cuoio:isolate cuoio:z-50 cuoio:h-(--positioner-height) cuoio:w-(--positioner-width) cuoio:max-w-(--available-width) cuoio:transition-[top,left,right,bottom] cuoio:duration-[0.35s] cuoio:ease-[cubic-bezier(0.22,1,0.36,1)] cuoio:data-instant:transition-none cuoio:data-[side=bottom]:before:top-[-10px] cuoio:data-[side=bottom]:before:end-0 cuoio:data-[side=bottom]:before:start-0",
          className
        )}
        {...props}
      >
        <NavigationMenuPrimitive.Popup className="cuoio:data-[ending-style]:easing-[ease] cuoio:xs:w-(--popup-width) cuoio:relative cuoio:h-(--popup-height) cuoio:w-(--popup-width) cuoio:origin-(--transform-origin) cuoio:rounded-lg cuoio:bg-popover cuoio:text-popover-foreground cuoio:shadow cuoio:ring-1 cuoio:ring-foreground/10 cuoio:transition-[opacity,transform,width,height,scale,translate] cuoio:duration-[0.35s] cuoio:ease-[cubic-bezier(0.22,1,0.36,1)] cuoio:outline-none cuoio:data-ending-style:scale-90 cuoio:data-ending-style:opacity-0 cuoio:data-ending-style:duration-150 cuoio:data-starting-style:scale-90 cuoio:data-starting-style:opacity-0">
          <NavigationMenuPrimitive.Viewport className="cuoio:relative cuoio:size-full cuoio:overflow-hidden" />
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
        "cuoio:flex cuoio:items-center cuoio:gap-2 cuoio:rounded-lg cuoio:p-2 cuoio:text-sm cuoio:transition-all cuoio:outline-none cuoio:hover:bg-muted cuoio:focus:bg-muted cuoio:focus-visible:ring-3 cuoio:focus-visible:ring-ring/50 cuoio:focus-visible:outline-1 cuoio:in-data-[slot=navigation-menu-content]:rounded-md cuoio:data-active:bg-muted/50 cuoio:data-active:hover:bg-muted cuoio:data-active:focus:bg-muted cuoio:[&_svg:not([class*=size-])]:size-4",
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
        "cuoio:top-full cuoio:z-1 cuoio:flex cuoio:h-1.5 cuoio:items-end cuoio:justify-center cuoio:overflow-hidden cuoio:data-[state=hidden]:animate-out cuoio:data-[state=hidden]:fade-out cuoio:data-[state=visible]:animate-in cuoio:data-[state=visible]:fade-in",
        className
      )}
      {...props}
    >
      <div className="cuoio:relative cuoio:top-[60%] cuoio:h-2 cuoio:w-2 cuoio:rotate-45 cuoio:rounded-ss-sm cuoio:bg-border cuoio:shadow-md" />
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
