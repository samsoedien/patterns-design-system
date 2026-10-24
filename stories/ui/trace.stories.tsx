// @ts-nocheck
"use client"

import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  ArrowUpRightIcon,
  BrainIcon,
  ChevronRightIcon,
  CircleAlertIcon,
  CircleCheckIcon,
  CircleIcon,
  FilePenIcon,
  FilePlusIcon,
  FileTextIcon,
  FolderSearchIcon,
  GitBranchIcon,
  GitCommitHorizontalIcon,
  GlobeIcon,
  LoaderCircleIcon,
  SearchIcon,
  TerminalIcon,
} from "lucide-react"
import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CodeBlock, CodeBlockContent, CodeBlockLine } from "@/components/ui/code-block"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/components/ui/trace"

function StaticExample() {
  return (
    <Trace className="cuoio:max-w-sm">
      <TraceLine>
        <TraceIcon>
          <GitBranchIcon />
        </TraceIcon>
        <TraceTitle>Created branch fix/frozen-lockfile</TraceTitle>
      </TraceLine>
    </Trace>
  )
}

function StatusExample() {
  return (
    <Trace className="cuoio:max-w-sm">
      <TraceLine>
        <TraceIcon>
          <CircleCheckIcon />
        </TraceIcon>
        <TraceTitle>Ran pnpm install</TraceTitle>
      </TraceLine>
      <TraceLine status="error">
        <TraceIcon>
          <CircleAlertIcon />
        </TraceIcon>
        <TraceTitle>Failed to run pnpm lint</TraceTitle>
      </TraceLine>
      <TraceLine status="running">
        <TraceIcon>
          <LoaderCircleIcon className="cuoio:animate-spin" />
        </TraceIcon>
        <TraceTitle>Running pnpm build</TraceTitle>
      </TraceLine>
      <TraceLine status="pending">
        <TraceIcon>
          <CircleIcon />
        </TraceIcon>
        <TraceTitle>Run pnpm test</TraceTitle>
      </TraceLine>
    </Trace>
  )
}

function DescriptionExample() {
  return (
    <Trace className="cuoio:max-w-sm">
      <TraceLine>
        <TraceIcon>
          <FilePenIcon />
        </TraceIcon>
        <TraceTitle>
          Edited components/settings/notification-preferences-form.tsx
        </TraceTitle>
        <TraceDescription className="cuoio:font-mono">+48 −12</TraceDescription>
      </TraceLine>
      <TraceLine>
        <TraceIcon>
          <TerminalIcon />
        </TraceIcon>
        <TraceTitle>Ran pnpm test</TraceTitle>
        <TraceDescription>14s</TraceDescription>
      </TraceLine>
      <TraceLine>
        <TraceIcon>
          <SearchIcon />
        </TraceIcon>
        <TraceTitle>Searched for useChat</TraceTitle>
        <TraceDescription>8 results</TraceDescription>
      </TraceLine>
    </Trace>
  )
}

function CollapsibleExample() {
  return (
    <div className="cuoio:w-full cuoio:max-w-sm">
      <TraceCollapsible>
        <TraceCollapsibleTrigger>
          <TraceLine>
            <TraceIcon>
              <TerminalIcon />
            </TraceIcon>
            <TraceTitle>Ran node --version</TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          <CodeBlock size="sm">
            <CodeBlockContent wrap className="cuoio:max-h-64">
              {"$ node --version\nv24.18.0"}
            </CodeBlockContent>
          </CodeBlock>
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </div>
  )
}

function OpenExample() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-sm cuoio:flex-col cuoio:items-start cuoio:gap-4">
      <TraceCollapsible defaultOpen>
        <TraceCollapsibleTrigger>
          <TraceLine>
            <TraceIcon>
              <TerminalIcon />
            </TraceIcon>
            <TraceTitle>Ran node --version</TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          <CodeBlock size="sm">
            <CodeBlockContent wrap className="cuoio:max-h-64">
              {"$ node --version\nv24.18.0"}
            </CodeBlockContent>
          </CodeBlock>
        </TraceCollapsibleContent>
      </TraceCollapsible>
      <TraceCollapsible open={open} onOpenChange={setOpen}>
        <TraceCollapsibleTrigger>
          <TraceLine>
            <TraceIcon>
              <TerminalIcon />
            </TraceIcon>
            <TraceTitle>Ran pnpm --version</TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          <CodeBlock size="sm">
            <CodeBlockContent wrap className="cuoio:max-h-64">
              {"$ pnpm --version\n10.33.4"}
            </CodeBlockContent>
          </CodeBlock>
        </TraceCollapsibleContent>
      </TraceCollapsible>
      <Button variant="outline" size="sm" onClick={() => setOpen(!open)}>
        {open ? "Hide" : "Show"} the pnpm output
      </Button>
    </div>
  )
}

function LinkExample() {
  return (
    <Trace className="cuoio:max-w-sm">
      <a href="#link">
        <TraceLine>
          <TraceIcon>
            <FileTextIcon />
          </TraceIcon>
          <TraceTitle>Read apps/v4/lib/docs.ts</TraceTitle>
          <TraceIcon>
            <ChevronRightIcon />
          </TraceIcon>
        </TraceLine>
      </a>
      <a
        href="https://docs.astro.build/en/install-and-setup/"
        target="_blank"
        rel="noreferrer"
      >
        <TraceLine>
          <TraceIcon>
            <GlobeIcon />
          </TraceIcon>
          <TraceTitle>
            Install Astro | docs.astro.build
            <span className="cuoio:sr-only"> (opens in a new tab)</span>
          </TraceTitle>
          <TraceIcon>
            <ArrowUpRightIcon />
          </TraceIcon>
        </TraceLine>
      </a>
    </Trace>
  )
}

const Dialog_results = [
  {
    title: "Caching build outputs",
    url: "https://nextjs.org/docs/app/guides/caching",
  },
  {
    title: "Image optimization reference",
    url: "https://nextjs.org/docs/app/api-reference/components/image",
  },
  {
    title: "Deploy hooks and cache keys",
    url: "https://vercel.com/docs/deploy-hooks",
  },
]

function DialogExample() {
  return (
    <Trace className="cuoio:max-w-sm">
      <Dialog>
        <DialogTrigger>
          <TraceLine>
            <TraceIcon>
              <GlobeIcon />
            </TraceIcon>
            <TraceTitle>Searched the web for cache keys</TraceTitle>
            <TraceIcon>
              <ChevronRightIcon />
            </TraceIcon>
          </TraceLine>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Searched the web for cache keys</DialogTitle>
            <DialogDescription>
              Three Dialog_results were used in the response.
            </DialogDescription>
          </DialogHeader>
          <Trace>
            {Dialog_results.map((result) => (
              <a
                key={result.url}
                href={result.url}
                target="_blank"
                rel="noreferrer"
              >
                <TraceLine>
                  <TraceIcon>
                    <GlobeIcon />
                  </TraceIcon>
                  <TraceTitle>
                    {result.title}
                    <span className="cuoio:sr-only"> (opens in a new tab)</span>
                  </TraceTitle>
                  <TraceIcon>
                    <ArrowUpRightIcon />
                  </TraceIcon>
                </TraceLine>
              </a>
            ))}
          </Trace>
        </DialogContent>
      </Dialog>
    </Trace>
  )
}

function SheetExample() {
  return (
    <Trace className="cuoio:max-w-sm">
      <Sheet>
        <SheetTrigger>
          <TraceLine>
            <TraceIcon>
              <FolderSearchIcon />
            </TraceIcon>
            <TraceTitle>Explored 4 files</TraceTitle>
            <TraceIcon>
              <ChevronRightIcon />
            </TraceIcon>
          </TraceLine>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Explored 4 files</SheetTitle>
            <SheetDescription>
              Files read while preparing the response.
            </SheetDescription>
          </SheetHeader>
          <ul className="cuoio:flex cuoio:flex-col cuoio:gap-2 cuoio:px-6 cuoio:font-mono cuoio:text-xs">
            <li>apps/v4/lib/docs.ts</li>
            <li>apps/v4/lib/components.ts</li>
            <li>apps/v4/next.config.mjs</li>
            <li>apps/v4/package.json</li>
          </ul>
        </SheetContent>
      </Sheet>
    </Trace>
  )
}

function GroupExample() {
  return (
    <Trace className="cuoio:max-w-sm">
      <TraceLine>
        <TraceIcon>
          <SearchIcon />
        </TraceIcon>
        <TraceTitle>Searched for minimumReleaseAge</TraceTitle>
      </TraceLine>
      <TraceLine>
        <TraceIcon>
          <FileTextIcon />
        </TraceIcon>
        <TraceTitle>Read pnpm-workspace.yaml</TraceTitle>
      </TraceLine>
      <TraceLine>
        <TraceIcon>
          <TerminalIcon />
        </TraceIcon>
        <TraceTitle>Ran pnpm install</TraceTitle>
      </TraceLine>
    </Trace>
  )
}

const Sources_sources = [
  {
    title: "Install Astro | docs.astro.build",
    href: "https://docs.astro.build/en/install-and-setup/",
  },
  {
    title: "create-astro | npmjs.com",
    href: "https://www.npmjs.com/package/create-astro",
  },
  {
    title: "Settings: minimumReleaseAge | pnpm.io",
    href: "https://pnpm.io/settings#minimumreleaseage",
  },
]

function SourcesExample() {
  return (
    <div className="cuoio:w-full cuoio:max-w-sm">
      <TraceCollapsible defaultOpen>
        <TraceCollapsibleTrigger>
          <TraceLine>
            <TraceIcon>
              <GlobeIcon />
            </TraceIcon>
            <TraceTitle>Used {Sources_sources.length} Sources_sources</TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          <Trace>
            {Sources_sources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noreferrer"
              >
                <TraceLine>
                  <TraceIcon>
                    <GlobeIcon />
                  </TraceIcon>
                  <TraceTitle>
                    {source.title}
                    <span className="cuoio:sr-only"> (opens in a new tab)</span>
                  </TraceTitle>
                  <TraceIcon>
                    <ArrowUpRightIcon />
                  </TraceIcon>
                </TraceLine>
              </a>
            ))}
          </Trace>
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </div>
  )
}

function StepsExample() {
  return (
    <div className="cuoio:w-full cuoio:max-w-sm">
      <TraceCollapsible defaultOpen>
        <TraceCollapsibleTrigger>
          <TraceLine status="running">
            <TraceTitle>Looking into the slow deploy</TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent keepMounted>
          <Trace>
            <TraceCollapsible>
              <TraceCollapsibleTrigger>
                <TraceLine>
                  <TraceIcon>
                    <SearchIcon />
                  </TraceIcon>
                  <TraceTitle>Searched for the checkout build log</TraceTitle>
                </TraceLine>
              </TraceCollapsibleTrigger>
              <TraceCollapsibleContent className="cuoio:flex cuoio:flex-wrap cuoio:gap-1.5">
                <Badge variant="secondary">vercel.com</Badge>
                <Badge variant="secondary">github.com</Badge>
              </TraceCollapsibleContent>
            </TraceCollapsible>
            <a href="#steps">
              <TraceLine>
                <TraceIcon>
                  <FileTextIcon />
                </TraceIcon>
                <TraceTitle>Read the last twelve deploys</TraceTitle>
                <TraceIcon>
                  <ChevronRightIcon />
                </TraceIcon>
              </TraceLine>
            </a>
            <TraceCollapsible>
              <TraceCollapsibleTrigger>
                <TraceLine status="running">
                  <TraceIcon>
                    <SearchIcon />
                  </TraceIcon>
                  <TraceTitle>Searching for the cache key</TraceTitle>
                </TraceLine>
              </TraceCollapsibleTrigger>
              <TraceCollapsibleContent>
                <CodeBlock size="sm">
                  <CodeBlockContent wrap className="cuoio:max-h-64">
                    cache key image optimization
                  </CodeBlockContent>
                </CodeBlock>
              </TraceCollapsibleContent>
            </TraceCollapsible>
          </Trace>
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </div>
  )
}

const Commit_files = [
  {
    path: "app/login/page.tsx",
    added: false,
    additions: 2,
    deletions: 2,
    diff: `@@ -14,7 +14,7 @@ export default async function LoginPage({
   searchParams,
 }) {
   const { next } = await searchParams
-  const redirectTo =
-    next && next.startsWith("/") ? next : "/"
+  const redirectTo = safeRedirect(next)
+
   return <LoginForm redirectTo={redirectTo} />
 }`,
  },
  {
    path: "lib/auth/redirect.ts",
    added: true,
    additions: 7,
    deletions: 0,
    diff: `@@ -0,0 +1,7 @@
+export function safeRedirect(next: string | undefined) {
+  if (!next || !next.startsWith("/") || next.startsWith("//")) {
+    return "/"
+  }
+
+  return next
+}`,
  },
]

function Commit_DiffLines({ diff }: { diff: string }) {
  return diff.split("\n").map((line, index) => {
    if (line.startsWith("@@")) {
      return (
        <CodeBlockLine key={index} className="cuoio:text-muted-foreground">
          {line}
        </CodeBlockLine>
      )
    }

    return (
      <CodeBlockLine
        key={index}
        variant={
          line.startsWith("+")
            ? "added"
            : line.startsWith("-")
              ? "removed"
              : "default"
        }
      >
        {line.slice(1)}
      </CodeBlockLine>
    )
  })
}

function CommitExample() {
  return (
    <Trace className="cuoio:max-w-sm">
      <TraceCollapsible defaultOpen>
        <TraceCollapsibleTrigger>
          <TraceLine>
            <TraceIcon>
              <GitCommitHorizontalIcon />
            </TraceIcon>
            <TraceTitle>Committed a1b2c3: Fix the login redirect</TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          <Trace>
            {Commit_files.map((file) => (
              <Sheet key={file.path}>
                <SheetTrigger>
                  <TraceLine>
                    <TraceIcon>
                      {file.added ? <FilePlusIcon /> : <FilePenIcon />}
                    </TraceIcon>
                    <TraceTitle>
                      {file.added ? "Added" : "Edited"} {file.path}
                    </TraceTitle>
                    <TraceDescription className="cuoio:font-mono">
                      +{file.additions} −{file.deletions}
                    </TraceDescription>
                    <TraceIcon>
                      <ChevronRightIcon />
                    </TraceIcon>
                  </TraceLine>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className="cuoio:font-mono">{file.path}</SheetTitle>
                    <SheetDescription>
                      {file.additions} additions, {file.deletions} deletions
                    </SheetDescription>
                  </SheetHeader>
                  <CodeBlock className="cuoio:mx-6 cuoio:mb-6 cuoio:w-auto">
                    <CodeBlockContent>
                      <Commit_DiffLines diff={file.diff} />
                    </CodeBlockContent>
                  </CodeBlock>
                </SheetContent>
              </Sheet>
            ))}
          </Trace>
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </Trace>
  )
}

function TurnExample() {
  return (
    <div className="cuoio:w-full cuoio:max-w-sm">
      <TraceCollapsible defaultOpen>
        <TraceCollapsibleTrigger>
          <TraceLine status="error">
            <TraceTitle>Worked for 2m 4s, 1 command failed</TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent keepMounted className="cuoio:flex cuoio:flex-col cuoio:gap-2">
          <Trace>
            <TraceCollapsible>
              <TraceCollapsibleTrigger>
                <TraceLine>
                  <TraceIcon>
                    <BrainIcon />
                  </TraceIcon>
                  <TraceTitle>Thought</TraceTitle>
                  <TraceDescription>12s</TraceDescription>
                </TraceLine>
              </TraceCollapsibleTrigger>
              <TraceCollapsibleContent className="cuoio:whitespace-pre-wrap">
                I should check which package managers are installed before I
                scaffold anything.
              </TraceCollapsibleContent>
            </TraceCollapsible>
            <TraceCollapsible defaultOpen>
              <TraceCollapsibleTrigger>
                <TraceLine status="error">
                  <TraceIcon>
                    <TerminalIcon />
                  </TraceIcon>
                  <TraceTitle>Ran 2 commands, 1 failed</TraceTitle>
                </TraceLine>
              </TraceCollapsibleTrigger>
              <TraceCollapsibleContent keepMounted>
                <Trace>
                  <TraceLine>
                    <TraceIcon>
                      <TerminalIcon />
                    </TraceIcon>
                    <TraceTitle>Ran node --version</TraceTitle>
                  </TraceLine>
                  <TraceCollapsible>
                    <TraceCollapsibleTrigger>
                      <TraceLine status="error">
                        <TraceIcon>
                          <TerminalIcon />
                        </TraceIcon>
                        <TraceTitle>Failed to run pnpm --version</TraceTitle>
                      </TraceLine>
                    </TraceCollapsibleTrigger>
                    <TraceCollapsibleContent>
                      <CodeBlock size="sm" variant="destructive">
                        <CodeBlockContent wrap className="cuoio:max-h-64">
                          command not found: pnpm
                        </CodeBlockContent>
                      </CodeBlock>
                    </TraceCollapsibleContent>
                  </TraceCollapsible>
                </Trace>
              </TraceCollapsibleContent>
            </TraceCollapsible>
          </Trace>
          <p>Node is installed and pnpm is not. Reading the docs config.</p>
          <Trace>
            <a href="#turn">
              <TraceLine>
                <TraceIcon>
                  <FileTextIcon />
                </TraceIcon>
                <TraceTitle>Read apps/v4/lib/docs.ts</TraceTitle>
                <TraceIcon>
                  <ChevronRightIcon />
                </TraceIcon>
              </TraceLine>
            </a>
          </Trace>
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </div>
  )
}

const meta = {
  title: 'UI/Trace',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const StaticStory: Story = {
  name: 'Static',
  render: () => <StaticExample />,
}

export const StatusStory: Story = {
  name: 'Status',
  render: () => <StatusExample />,
}

export const DescriptionStory: Story = {
  name: 'Description',
  render: () => <DescriptionExample />,
}

export const CollapsibleStory: Story = {
  name: 'Collapsible',
  render: () => <CollapsibleExample />,
}

export const OpenStory: Story = {
  name: 'Open',
  render: () => <OpenExample />,
}

export const LinkStory: Story = {
  name: 'Link',
  render: () => <LinkExample />,
}

export const DialogStory: Story = {
  name: 'Dialog',
  render: () => <DialogExample />,
}

export const SheetStory: Story = {
  name: 'Sheet',
  render: () => <SheetExample />,
}

export const GroupStory: Story = {
  name: 'Group',
  render: () => <GroupExample />,
}

export const SourcesStory: Story = {
  name: 'Sources',
  render: () => <SourcesExample />,
}

export const StepsStory: Story = {
  name: 'Steps',
  render: () => <StepsExample />,
}

export const CommitStory: Story = {
  name: 'Commit',
  render: () => <CommitExample />,
}

export const TurnStory: Story = {
  name: 'Turn',
  render: () => <TurnExample />,
}
