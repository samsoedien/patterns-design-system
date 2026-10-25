import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { cn } from "cn"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("cuoio:flex cuoio:w-full cuoio:flex-col", className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("cuoio:not-last:border-b", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="cuoio:flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "cuoio:group/accordion-trigger cuoio:relative cuoio:flex cuoio:flex-1 cuoio:items-start cuoio:justify-between cuoio:rounded-lg cuoio:border cuoio:border-transparent cuoio:py-2.5 cuoio:text-start cuoio:text-sm cuoio:font-medium cuoio:transition-all cuoio:outline-none cuoio:hover:underline cuoio:focus-visible:border-ring cuoio:focus-visible:ring-3 cuoio:focus-visible:ring-ring/50 cuoio:focus-visible:after:border-ring cuoio:aria-disabled:pointer-events-none cuoio:aria-disabled:opacity-50 cuoio:**:data-[slot=accordion-trigger-icon]:ms-auto cuoio:**:data-[slot=accordion-trigger-icon]:size-4 cuoio:**:data-[slot=accordion-trigger-icon]:text-muted-foreground",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon data-slot="accordion-trigger-icon" className="cuoio:pointer-events-none cuoio:shrink-0 cuoio:group-aria-expanded/accordion-trigger:hidden" />
        <ChevronUpIcon data-slot="accordion-trigger-icon" className="cuoio:pointer-events-none cuoio:hidden cuoio:shrink-0 cuoio:group-aria-expanded/accordion-trigger:inline" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="cuoio:overflow-hidden cuoio:text-sm cuoio:data-open:animate-accordion-down cuoio:data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          "cuoio:h-(--accordion-panel-height) cuoio:pt-0 cuoio:pb-2.5 cuoio:data-ending-style:h-0 cuoio:data-starting-style:h-0 cuoio:[&_a]:underline cuoio:[&_a]:underline-offset-3 cuoio:[&_a]:hover:text-foreground cuoio:[&_p:not(:last-child)]:mb-4",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
