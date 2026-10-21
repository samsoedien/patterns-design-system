"use client"

import * as React from "react"
import { cn } from "cn"
import { OTPInput, OTPInputContext } from "input-otp"
import { MinusIcon } from "lucide-react"

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "cn-input-otp flex items-center has-disabled:opacity-50",
        containerClassName
      )}
      spellCheck={false}
      className={cn("cuoio:disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn(
        "cuoio:flex cuoio:items-center cuoio:rounded-md cuoio:has-aria-invalid:border-destructive cuoio:has-aria-invalid:ring-2 cuoio:has-aria-invalid:ring-destructive/20 cuoio:dark:has-aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "cuoio:relative cuoio:flex cuoio:size-7 cuoio:items-center cuoio:justify-center cuoio:border-y cuoio:border-e cuoio:border-input cuoio:bg-input/20 cuoio:text-xs/relaxed cuoio:transition-all cuoio:outline-none cuoio:first:rounded-s-md cuoio:first:border-s cuoio:last:rounded-e-md cuoio:aria-invalid:border-destructive cuoio:data-[active=true]:z-10 cuoio:data-[active=true]:border-ring cuoio:data-[active=true]:ring-2 cuoio:data-[active=true]:ring-ring/30 cuoio:data-[active=true]:aria-invalid:border-destructive cuoio:data-[active=true]:aria-invalid:ring-destructive/20 cuoio:dark:bg-input/30 cuoio:dark:data-[active=true]:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="cuoio:pointer-events-none cuoio:absolute cuoio:inset-0 cuoio:flex cuoio:items-center cuoio:justify-center">
          <div className="cuoio:h-4 cuoio:w-px cuoio:animate-caret-blink cuoio:bg-foreground cuoio:duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-separator"
      className="cuoio:flex cuoio:items-center cuoio:[&_svg:not([class*=size-])]:size-4"
      role="separator"
      {...props}
    >
      <MinusIcon
      />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
