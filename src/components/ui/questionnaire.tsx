"use client"

import * as React from "react"
import { Questionnaire as QuestionnairePrimitive } from "@shadcn/react/questionnaire"
import { cn } from "cn"

import { buttonVariants, type Button } from "@/components/ui/button"
import { CheckIcon } from "lucide-react"

function Questionnaire({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Root>) {
  return (
    <QuestionnairePrimitive.Root
      data-slot="questionnaire"
      className={cn("pttrn:flex pttrn:w-full pttrn:min-w-0 pttrn:flex-col pttrn:gap-4", className)}
      {...props}
    />
  )
}

function QuestionnaireProgress({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Progress>) {
  return (
    <QuestionnairePrimitive.Progress
      data-slot="questionnaire-progress"
      className={cn(
        "pttrn:min-h-[1lh] pttrn:w-fit pttrn:min-w-[14ch] pttrn:text-[0.625rem] pttrn:font-medium pttrn:text-muted-foreground pttrn:tabular-nums",
        className
      )}
      {...props}
    />
  )
}

function QuestionnaireItem({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Item>) {
  return (
    <QuestionnairePrimitive.Item
      data-slot="questionnaire-item"
      className={cn(
        "pttrn:flex pttrn:min-w-0 pttrn:flex-col pttrn:gap-3 pttrn:border-0 pttrn:p-0 pttrn:outline-none",
        className
      )}
      {...props}
    />
  )
}

function QuestionnaireTitle({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Title>) {
  return (
    <QuestionnairePrimitive.Title
      data-slot="questionnaire-title"
      className={cn(
        "pttrn:font-heading pttrn:text-sm pttrn:font-semibold pttrn:text-pretty pttrn:[&:not(:has(~[data-slot=questionnaire-description]))]:mb-3",
        className
      )}
      {...props}
    />
  )
}

function QuestionnaireDescription({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Description>) {
  return (
    <QuestionnairePrimitive.Description
      data-slot="questionnaire-description"
      className={cn(
        "pttrn:text-xs/relaxed pttrn:text-pretty pttrn:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function QuestionnaireChoices({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Choices>) {
  return (
    <QuestionnairePrimitive.Choices
      data-slot="questionnaire-choices"
      className={cn(
        "pttrn:group/questionnaire-choices pttrn:grid pttrn:min-w-0 pttrn:gap-1.5",
        className
      )}
      {...props}
    />
  )
}

function QuestionnaireChoice({
  children,
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Choice>) {
  return (
    <QuestionnairePrimitive.Choice
      data-slot="questionnaire-choice"
      className={cn(
        "pttrn:group/questionnaire-choice pttrn:relative pttrn:flex pttrn:min-h-11 pttrn:cursor-pointer pttrn:items-start pttrn:gap-2.5 pttrn:rounded-xl pttrn:border pttrn:border-input pttrn:px-3 pttrn:py-2.5 pttrn:text-start pttrn:text-xs/relaxed pttrn:transition-colors pttrn:outline-none pttrn:select-none pttrn:hover:bg-input/40 pttrn:has-[>input:focus-visible]:border-ring pttrn:has-[>input:focus-visible]:ring-2 pttrn:has-[>input:focus-visible]:ring-ring/30 pttrn:data-invalid:border-destructive pttrn:data-checked:border-primary/40 pttrn:data-checked:bg-primary/10",
        "pttrn:data-disabled:pointer-events-none pttrn:data-disabled:cursor-not-allowed pttrn:data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <QuestionnairePrimitive.ChoiceInput
        data-slot="questionnaire-choice-input"
        className="pttrn:absolute pttrn:inset-0 pttrn:z-10 pttrn:size-full pttrn:cursor-pointer pttrn:opacity-0"
      />
      <span
        aria-hidden="true"
        data-slot="questionnaire-choice-indicator"
        className="pttrn:pointer-events-none pttrn:relative pttrn:flex pttrn:size-4 pttrn:shrink-0 pttrn:translate-y-[--spacing(0.45)] pttrn:items-center pttrn:justify-center pttrn:rounded-[4px] pttrn:border pttrn:border-input pttrn:group-has-data-[slot=questionnaire-choice-description]/questionnaire-choice:translate-y-0.5 pttrn:group-data-[type=radio]/questionnaire-choice:rounded-full pttrn:group-data-checked/questionnaire-choice:border-primary pttrn:group-data-checked/questionnaire-choice:bg-primary pttrn:group-data-checked/questionnaire-choice:text-primary-foreground pttrn:dark:bg-input/30 pttrn:dark:group-data-checked/questionnaire-choice:bg-primary"
      >
        <span
          data-slot="questionnaire-choice-indicator-dot"
          className="pttrn:hidden pttrn:size-2 pttrn:rounded-full pttrn:bg-primary-foreground pttrn:group-data-[type=checkbox]/questionnaire-choice:hidden pttrn:group-data-checked/questionnaire-choice:block"
        />
        <CheckIcon data-slot="questionnaire-choice-indicator-check" className="pttrn:hidden pttrn:size-3.5 pttrn:group-data-[type=radio]/questionnaire-choice:hidden pttrn:group-data-checked/questionnaire-choice:block" />
      </span>
      <QuestionnairePrimitive.ChoiceLabel
        data-slot="questionnaire-choice-label"
        className="pttrn:flex pttrn:min-w-0 pttrn:flex-1 pttrn:flex-col pttrn:gap-0.5 pttrn:leading-snug"
      >
        {children}
      </QuestionnairePrimitive.ChoiceLabel>
      <QuestionnairePrimitive.ChoiceShortcut
        data-slot="questionnaire-choice-shortcut"
        className="pttrn:pointer-events-none pttrn:ms-auto pttrn:hidden pttrn:size-4 pttrn:shrink-0 pttrn:translate-y-[--spacing(0.45)] pttrn:items-center pttrn:justify-center pttrn:rounded-sm pttrn:border pttrn:border-input pttrn:bg-background/80 pttrn:font-mono pttrn:text-[0.5625rem] pttrn:leading-none pttrn:font-medium pttrn:text-muted-foreground pttrn:group-has-data-[slot=questionnaire-choice-description]/questionnaire-choice:translate-y-0.5 pttrn:group-data-[shortcut]/questionnaire-choice:inline-flex"
      />
    </QuestionnairePrimitive.Choice>
  )
}

function QuestionnaireChoiceDescription({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="questionnaire-choice-description"
      className={cn("pttrn:text-muted-foreground", className)}
      {...props}
    />
  )
}

function QuestionnaireInput({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Input>) {
  return (
    <div
      data-slot="questionnaire-input-wrapper"
      className="pttrn:group/questionnaire-input pttrn:relative pttrn:w-full pttrn:min-w-0"
    >
      <QuestionnairePrimitive.Input
        data-slot="questionnaire-input"
        className={cn(
          "pttrn:h-7 pttrn:min-h-11 pttrn:w-full pttrn:min-w-0 pttrn:rounded-md pttrn:border pttrn:border-input pttrn:bg-input/20 pttrn:px-2 pttrn:py-0.5 pttrn:text-sm pttrn:transition-[color,box-shadow,background-color] pttrn:outline-none pttrn:focus-visible:border-ring pttrn:focus-visible:ring-2 pttrn:focus-visible:ring-ring/30 pttrn:disabled:pointer-events-none pttrn:disabled:cursor-not-allowed pttrn:disabled:opacity-50 pttrn:aria-invalid:border-destructive pttrn:aria-invalid:ring-2 pttrn:aria-invalid:ring-destructive/20 pttrn:sm:min-h-0 pttrn:md:text-xs/relaxed pttrn:dark:bg-input/30 pttrn:dark:aria-invalid:border-destructive/50 pttrn:dark:aria-invalid:ring-destructive/40",
          "pttrn:selection:bg-primary pttrn:selection:text-primary-foreground pttrn:placeholder:text-muted-foreground",
          className
        )}
        {...props}
      />
    </div>
  )
}

function QuestionnaireError({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Error>) {
  return (
    <QuestionnairePrimitive.Error
      data-slot="questionnaire-error"
      className={cn("pttrn:mt-2 pttrn:text-xs/relaxed pttrn:text-destructive", className)}
      {...props}
    />
  )
}

function QuestionnaireActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="questionnaire-actions"
      className={cn(
        "pttrn:grid pttrn:min-h-11 pttrn:w-full pttrn:grid-cols-[minmax(0,1fr)_auto_auto] pttrn:items-center pttrn:gap-1.5 pttrn:sm:min-h-7",
        className
      )}
      {...props}
    />
  )
}

function QuestionnairePrevious({
  children,
  className,
  size = "default",
  variant = "outline",
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Previous> &
  Pick<React.ComponentProps<typeof Button>, "size" | "variant">) {
  return (
    <QuestionnairePrimitive.Previous
      data-slot="questionnaire-previous"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ size, variant }),
        "pttrn:col-start-1 pttrn:row-start-1 pttrn:min-h-11 pttrn:justify-self-start pttrn:sm:min-h-0",
        className
      )}
      {...props}
    >
      {children ?? "Previous"}
    </QuestionnairePrimitive.Previous>
  )
}

function QuestionnaireSkip({
  children,
  className,
  size = "default",
  variant = "outline",
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Skip> &
  Pick<React.ComponentProps<typeof Button>, "size" | "variant">) {
  return (
    <QuestionnairePrimitive.Skip
      data-slot="questionnaire-skip"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ size, variant }),
        "pttrn:col-start-2 pttrn:row-start-1 pttrn:min-h-11 pttrn:justify-self-end pttrn:sm:min-h-0",
        className
      )}
      {...props}
    >
      {children ?? "Skip"}
    </QuestionnairePrimitive.Skip>
  )
}

function QuestionnaireNext({
  children,
  className,
  size = "default",
  variant = "default",
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Next> &
  Pick<React.ComponentProps<typeof Button>, "size" | "variant">) {
  return (
    <QuestionnairePrimitive.Next
      data-slot="questionnaire-next"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ size, variant }),
        "pttrn:col-start-3 pttrn:row-start-1 pttrn:min-h-11 pttrn:justify-self-end pttrn:sm:min-h-0",
        className
      )}
      {...props}
    >
      {children ?? "Next"}
    </QuestionnairePrimitive.Next>
  )
}

function QuestionnaireSubmit({
  children,
  className,
  size = "default",
  variant = "default",
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Submit> &
  Pick<React.ComponentProps<typeof Button>, "size" | "variant">) {
  return (
    <QuestionnairePrimitive.Submit
      data-slot="questionnaire-submit"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ size, variant }),
        "pttrn:col-start-3 pttrn:row-start-1 pttrn:min-h-11 pttrn:justify-self-end pttrn:sm:min-h-0",
        className
      )}
      {...props}
    >
      {children ?? "Submit"}
    </QuestionnairePrimitive.Submit>
  )
}

export {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
}
