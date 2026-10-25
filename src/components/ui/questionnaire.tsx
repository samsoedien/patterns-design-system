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
      className={cn("cuoio:flex cuoio:w-full cuoio:min-w-0 cuoio:flex-col cuoio:gap-4", className)}
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
        "cuoio:min-h-[1lh] cuoio:w-fit cuoio:min-w-[14ch] cuoio:text-xs cuoio:font-medium cuoio:text-muted-foreground cuoio:tabular-nums",
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
        "cuoio:flex cuoio:min-w-0 cuoio:flex-col cuoio:gap-4 cuoio:border-0 cuoio:p-0 cuoio:outline-none",
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
        "cuoio:font-heading cuoio:text-base cuoio:leading-snug cuoio:font-medium cuoio:text-pretty cuoio:[&:not(:has(~[data-slot=questionnaire-description]))]:mb-4",
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
      className={cn("cuoio:text-sm cuoio:text-pretty cuoio:text-muted-foreground", className)}
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
        "cuoio:group/questionnaire-choices cuoio:grid cuoio:min-w-0 cuoio:gap-2",
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
        "cuoio:group/questionnaire-choice cuoio:relative cuoio:flex cuoio:min-h-11 cuoio:cursor-pointer cuoio:items-start cuoio:gap-2.5 cuoio:rounded-lg cuoio:border cuoio:border-input cuoio:bg-transparent cuoio:px-3 cuoio:py-2.5 cuoio:text-start cuoio:text-sm cuoio:transition-colors cuoio:outline-none cuoio:select-none cuoio:hover:bg-muted/50 cuoio:has-[>input:focus-visible]:border-ring cuoio:has-[>input:focus-visible]:ring-3 cuoio:has-[>input:focus-visible]:ring-ring/50 cuoio:data-invalid:border-destructive cuoio:dark:bg-input/20 cuoio:data-checked:border-primary/40 cuoio:data-checked:bg-muted cuoio:dark:data-checked:bg-muted",
        "cuoio:data-disabled:pointer-events-none cuoio:data-disabled:cursor-not-allowed cuoio:data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <QuestionnairePrimitive.ChoiceInput
        data-slot="questionnaire-choice-input"
        className="cuoio:absolute cuoio:inset-0 cuoio:z-10 cuoio:size-full cuoio:cursor-pointer cuoio:opacity-0"
      />
      <span
        aria-hidden="true"
        data-slot="questionnaire-choice-indicator"
        className="cuoio:pointer-events-none cuoio:relative cuoio:flex cuoio:size-4 cuoio:shrink-0 cuoio:translate-y-[--spacing(0.45)] cuoio:items-center cuoio:justify-center cuoio:rounded-[4px] cuoio:border cuoio:border-input cuoio:group-has-data-[slot=questionnaire-choice-description]/questionnaire-choice:translate-y-0.5 cuoio:group-data-[type=radio]/questionnaire-choice:rounded-full cuoio:group-data-checked/questionnaire-choice:border-primary cuoio:group-data-checked/questionnaire-choice:bg-primary cuoio:group-data-checked/questionnaire-choice:text-primary-foreground cuoio:dark:bg-input/30 cuoio:dark:group-data-checked/questionnaire-choice:bg-primary"
      >
        <span
          data-slot="questionnaire-choice-indicator-dot"
          className="cuoio:hidden cuoio:size-2 cuoio:rounded-full cuoio:bg-primary-foreground cuoio:group-data-[type=checkbox]/questionnaire-choice:hidden cuoio:group-data-checked/questionnaire-choice:block"
        />
        <CheckIcon data-slot="questionnaire-choice-indicator-check" className="cuoio:hidden cuoio:size-3.5 cuoio:group-data-[type=radio]/questionnaire-choice:hidden cuoio:group-data-checked/questionnaire-choice:block" />
      </span>
      <QuestionnairePrimitive.ChoiceLabel
        data-slot="questionnaire-choice-label"
        className="cuoio:flex cuoio:min-w-0 cuoio:flex-1 cuoio:flex-col cuoio:gap-0.5 cuoio:leading-snug"
      >
        {children}
      </QuestionnairePrimitive.ChoiceLabel>
      <QuestionnairePrimitive.ChoiceShortcut
        data-slot="questionnaire-choice-shortcut"
        className="cuoio:pointer-events-none cuoio:ms-auto cuoio:hidden cuoio:size-5 cuoio:shrink-0 cuoio:translate-y-[--spacing(0.45)] cuoio:items-center cuoio:justify-center cuoio:rounded-md cuoio:border cuoio:border-input cuoio:bg-background cuoio:font-mono cuoio:text-[0.625rem] cuoio:leading-none cuoio:font-medium cuoio:text-muted-foreground cuoio:group-has-data-[slot=questionnaire-choice-description]/questionnaire-choice:translate-y-0.5 cuoio:group-data-[shortcut]/questionnaire-choice:inline-flex"
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
      className={cn("cuoio:text-muted-foreground", className)}
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
      className="cuoio:group/questionnaire-input cuoio:relative cuoio:w-full cuoio:min-w-0"
    >
      <QuestionnairePrimitive.Input
        data-slot="questionnaire-input"
        className={cn(
          "cuoio:h-8 cuoio:min-h-11 cuoio:w-full cuoio:min-w-0 cuoio:rounded-lg cuoio:border cuoio:border-input cuoio:bg-transparent cuoio:px-2.5 cuoio:py-1 cuoio:text-base cuoio:transition-[color,box-shadow,background-color] cuoio:outline-none cuoio:focus-visible:border-ring cuoio:focus-visible:ring-3 cuoio:focus-visible:ring-ring/50 cuoio:disabled:pointer-events-none cuoio:disabled:cursor-not-allowed cuoio:disabled:bg-input/50 cuoio:disabled:opacity-50 cuoio:aria-invalid:border-destructive cuoio:aria-invalid:ring-3 cuoio:aria-invalid:ring-destructive/20 cuoio:sm:min-h-0 cuoio:md:text-sm cuoio:dark:bg-input/30 cuoio:dark:disabled:bg-input/80 cuoio:dark:aria-invalid:border-destructive/50 cuoio:dark:aria-invalid:ring-destructive/40",
          "cuoio:selection:bg-primary cuoio:selection:text-primary-foreground cuoio:placeholder:text-muted-foreground",
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
      className={cn("cuoio:mt-2 cuoio:text-sm cuoio:text-destructive", className)}
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
        "cuoio:grid cuoio:min-h-11 cuoio:w-full cuoio:grid-cols-[minmax(0,1fr)_auto_auto] cuoio:items-center cuoio:gap-2 cuoio:sm:min-h-8",
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
        "cuoio:col-start-1 cuoio:row-start-1 cuoio:min-h-11 cuoio:justify-self-start cuoio:sm:min-h-0",
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
        "cuoio:col-start-2 cuoio:row-start-1 cuoio:min-h-11 cuoio:justify-self-end cuoio:sm:min-h-0",
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
        "cuoio:col-start-3 cuoio:row-start-1 cuoio:min-h-11 cuoio:justify-self-end cuoio:sm:min-h-0",
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
        "cuoio:col-start-3 cuoio:row-start-1 cuoio:min-h-11 cuoio:justify-self-end cuoio:sm:min-h-0",
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
