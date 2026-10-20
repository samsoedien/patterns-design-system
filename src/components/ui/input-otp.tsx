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
      className={cn("pttrn:disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn(
        "pttrn:flex pttrn:items-center pttrn:rounded-md pttrn:has-aria-invalid:border-destructive pttrn:has-aria-invalid:ring-2 pttrn:has-aria-invalid:ring-destructive/20 pttrn:dark:has-aria-invalid:ring-destructive/40",
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
        "pttrn:relative pttrn:flex pttrn:size-7 pttrn:items-center pttrn:justify-center pttrn:border-y pttrn:border-e pttrn:border-input pttrn:bg-input/20 pttrn:text-xs/relaxed pttrn:transition-all pttrn:outline-none pttrn:first:rounded-s-md pttrn:first:border-s pttrn:last:rounded-e-md pttrn:aria-invalid:border-destructive pttrn:data-[active=true]:z-10 pttrn:data-[active=true]:border-ring pttrn:data-[active=true]:ring-2 pttrn:data-[active=true]:ring-ring/30 pttrn:data-[active=true]:aria-invalid:border-destructive pttrn:data-[active=true]:aria-invalid:ring-destructive/20 pttrn:dark:bg-input/30 pttrn:dark:data-[active=true]:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pttrn:pointer-events-none pttrn:absolute pttrn:inset-0 pttrn:flex pttrn:items-center pttrn:justify-center">
          <div className="pttrn:h-4 pttrn:w-px pttrn:animate-caret-blink pttrn:bg-foreground pttrn:duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-separator"
      className="pttrn:flex pttrn:items-center pttrn:[&_svg:not([class*=size-])]:size-4"
      role="separator"
      {...props}
    >
      <MinusIcon
      />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
