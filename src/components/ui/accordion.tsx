import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { cn } from "cn"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn(
        "pttrn:flex pttrn:w-full pttrn:flex-col pttrn:overflow-hidden pttrn:rounded-md pttrn:border",
        className
      )}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("pttrn:not-last:border-b pttrn:data-open:bg-muted/50", className)}
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
    <AccordionPrimitive.Header className="pttrn:flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "pttrn:group/accordion-trigger pttrn:relative pttrn:flex pttrn:flex-1 pttrn:items-start pttrn:justify-between pttrn:gap-6 pttrn:border pttrn:border-transparent pttrn:p-2 pttrn:text-start pttrn:text-xs/relaxed pttrn:font-medium pttrn:transition-all pttrn:outline-none pttrn:hover:underline pttrn:aria-disabled:pointer-events-none pttrn:aria-disabled:opacity-50 pttrn:**:data-[slot=accordion-trigger-icon]:ms-auto pttrn:**:data-[slot=accordion-trigger-icon]:size-4 pttrn:**:data-[slot=accordion-trigger-icon]:text-muted-foreground",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon data-slot="accordion-trigger-icon" className="pttrn:pointer-events-none pttrn:shrink-0 pttrn:group-aria-expanded/accordion-trigger:hidden" />
        <ChevronUpIcon data-slot="accordion-trigger-icon" className="pttrn:pointer-events-none pttrn:hidden pttrn:shrink-0 pttrn:group-aria-expanded/accordion-trigger:inline" />
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
      className="pttrn:overflow-hidden pttrn:px-2 pttrn:text-xs/relaxed pttrn:data-open:animate-accordion-down pttrn:data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          "pttrn:h-(--accordion-panel-height) pttrn:pt-0 pttrn:pb-4 pttrn:data-ending-style:h-0 pttrn:data-starting-style:h-0 pttrn:[&_a]:underline pttrn:[&_a]:underline-offset-3 pttrn:[&_a]:hover:text-foreground pttrn:[&_p:not(:last-child)]:mb-4",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
