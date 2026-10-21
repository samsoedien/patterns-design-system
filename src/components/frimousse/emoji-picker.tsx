"use client"

import {
  type EmojiPickerListCategoryHeaderProps,
  type EmojiPickerListEmojiProps,
  type EmojiPickerListRowProps,
  EmojiPicker as EmojiPickerPrimitive,
} from "frimousse"
import { LoaderIcon, SearchIcon } from "lucide-react"
import type * as React from "react"

import { cn } from "@/lib/utils"

function EmojiPicker({
  className,
  ...props
}: React.ComponentProps<typeof EmojiPickerPrimitive.Root>) {
  return (
    <EmojiPickerPrimitive.Root
      className={cn(
        "cuoio:isolate cuoio:flex cuoio:h-full cuoio:w-fit cuoio:flex-col cuoio:overflow-hidden cuoio:rounded-md cuoio:bg-popover cuoio:text-popover-foreground",
        className
      )}
      data-slot="emoji-picker"
      {...props}
    />
  )
}

function EmojiPickerSearch({
  className,
  ...props
}: React.ComponentProps<typeof EmojiPickerPrimitive.Search>) {
  return (
    <div
      className={cn(
        "cuoio:flex cuoio:h-9 cuoio:items-center cuoio:gap-2 cuoio:border-b cuoio:px-3",
        className
      )}
      data-slot="emoji-picker-search-wrapper"
    >
      <SearchIcon className="cuoio:size-4 cuoio:shrink-0 cuoio:opacity-50" />
      <EmojiPickerPrimitive.Search
        className="cuoio:flex cuoio:h-10 cuoio:w-full cuoio:rounded-md cuoio:bg-transparent cuoio:py-3 cuoio:text-sm cuoio:outline-hidden cuoio:placeholder:text-muted-foreground cuoio:disabled:cursor-not-allowed cuoio:disabled:opacity-50"
        data-slot="emoji-picker-search"
        {...props}
      />
    </div>
  )
}

function EmojiPickerRow({ children, ...props }: EmojiPickerListRowProps) {
  return (
    <div
      {...props}
      className="cuoio:scroll-my-1 cuoio:px-1"
      data-slot="emoji-picker-row"
    >
      {children}
    </div>
  )
}

function EmojiPickerEmoji({
  emoji,
  className,
  ...props
}: EmojiPickerListEmojiProps) {
  return (
    <button
      {...props}
      className={cn(
        "cuoio:flex cuoio:size-7 cuoio:items-center cuoio:justify-center cuoio:rounded-sm cuoio:text-base cuoio:data-[active]:bg-accent",
        className
      )}
      data-slot="emoji-picker-emoji"
    >
      {emoji.emoji}
    </button>
  )
}

function EmojiPickerCategoryHeader({
  category,
  ...props
}: EmojiPickerListCategoryHeaderProps) {
  return (
    <div
      {...props}
      className="cuoio:bg-popover cuoio:px-3 cuoio:pt-3.5 cuoio:pb-2 cuoio:text-xs cuoio:leading-none cuoio:text-muted-foreground"
      data-slot="emoji-picker-category-header"
    >
      {category.label}
    </div>
  )
}

function EmojiPickerContent({
  className,
  ...props
}: React.ComponentProps<typeof EmojiPickerPrimitive.Viewport>) {
  return (
    <EmojiPickerPrimitive.Viewport
      className={cn(
        "cuoio:relative cuoio:flex-1 cuoio:outline-hidden",
        className
      )}
      data-slot="emoji-picker-viewport"
      {...props}
    >
      <EmojiPickerPrimitive.Loading
        className="cuoio:absolute cuoio:inset-0 cuoio:flex cuoio:items-center cuoio:justify-center cuoio:text-muted-foreground"
        data-slot="emoji-picker-loading"
      >
        <LoaderIcon className="cuoio:size-4 cuoio:animate-spin" />
      </EmojiPickerPrimitive.Loading>
      <EmojiPickerPrimitive.Empty
        className="cuoio:absolute cuoio:inset-0 cuoio:flex cuoio:items-center cuoio:justify-center cuoio:text-sm cuoio:text-muted-foreground"
        data-slot="emoji-picker-empty"
      >
        No emoji found.
      </EmojiPickerPrimitive.Empty>
      <EmojiPickerPrimitive.List
        className="cuoio:pb-1 cuoio:select-none"
        components={{
          Row: EmojiPickerRow,
          Emoji: EmojiPickerEmoji,
          CategoryHeader: EmojiPickerCategoryHeader,
        }}
        data-slot="emoji-picker-list"
      />
    </EmojiPickerPrimitive.Viewport>
  )
}

function EmojiPickerFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "cuoio:flex cuoio:w-full cuoio:max-w-(--frimousse-viewport-width) cuoio:min-w-0 cuoio:items-center cuoio:gap-1 cuoio:border-t cuoio:p-2",
        className
      )}
      data-slot="emoji-picker-footer"
      {...props}
    >
      <EmojiPickerPrimitive.ActiveEmoji>
        {({ emoji }) =>
          emoji ? (
            <>
              <div className="cuoio:flex cuoio:size-7 cuoio:flex-none cuoio:items-center cuoio:justify-center cuoio:text-lg">
                {emoji.emoji}
              </div>
              <span className="cuoio:truncate cuoio:text-xs cuoio:text-secondary-foreground">
                {emoji.label}
              </span>
            </>
          ) : (
            <span className="cuoio:ms-1.5 cuoio:flex cuoio:h-7 cuoio:items-center cuoio:truncate cuoio:text-xs cuoio:text-muted-foreground">
              Select an emoji…
            </span>
          )
        }
      </EmojiPickerPrimitive.ActiveEmoji>
    </div>
  )
}

export { EmojiPicker, EmojiPickerSearch, EmojiPickerContent, EmojiPickerFooter }
