// @ts-nocheck
'use client'

import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { DownloadIcon, FileCodeIcon, RotateCcwIcon, TerminalIcon, WrapTextIcon } from 'lucide-react'

import { Bubble, BubbleContent } from '@/components/ui/bubble'
import { Button } from '@/components/ui/button'
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from '@/components/ui/code-block'
import { Message, MessageContent } from '@/components/ui/message'
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from '@/components/ui/trace'
import { useHighlightedCode } from '@/hooks/use-highlighted-code'

const Demo_code = `import { streamText } from "ai"

export async function POST(request: Request) {
  const { messages } = await request.json()

  const result = streamText({
    model: "anthropic/claude-sonnet-4.5",
    system: "You are a helpful assistant. Answer in one short paragraph.",
    messages,
  })

  return result.toUIMessageStreamResponse()
}`

function Demo_download(value: string, filename: string) {
  const url = URL.createObjectURL(new Blob([value], { type: 'text/plain' }))
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}

function DemoExample() {
  const [wrap, setWrap] = React.useState(false)
  const lines = useHighlightedCode(Demo_code, 'ts')

  return (
    <div className="cuoio:w-full cuoio:max-w-lg">
      <CodeBlock>
        <CodeBlockHeader>
          <CodeBlockTitle>
            <FileCodeIcon />
            app/api/chat/route.ts
          </CodeBlockTitle>
          <CodeBlockActions>
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label="Wrap lines"
              aria-pressed={wrap}
              className="cuoio:aria-pressed:text-foreground"
              onClick={() => setWrap(!wrap)}
            >
              <WrapTextIcon />
            </Button>
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label="Download"
              onClick={() => Demo_download(Demo_code, 'route.ts')}
            >
              <DownloadIcon />
            </Button>
            <CodeBlockCopyButton value={Demo_code} />
          </CodeBlockActions>
        </CodeBlockHeader>
        <CodeBlockContent wrap={wrap} lineNumbers>
          {lines.map((line, index) => (
            <CodeBlockLine
              key={index}
              variant={index >= 5 && index <= 9 ? 'highlighted' : 'default'}
            >
              {line}
            </CodeBlockLine>
          ))}
        </CodeBlockContent>
      </CodeBlock>
    </div>
  )
}

const Basic_output = `$ pnpm build
> next build

 ✓ Compiled successfully in 4.2s
 ✓ Generating static pages (12/12)

Route (app)                Size  First Load JS
┌ ○ /                    1.9 kB         112 kB
├ ○ /_not-found           993 B         103 kB
└ ƒ /api/chat             141 B         102 kB`

function BasicExample() {
  return (
    <div className="cuoio:w-full cuoio:max-w-md">
      <CodeBlock>
        <CodeBlockContent>{Basic_output}</CodeBlockContent>
      </CodeBlock>
    </div>
  )
}

const Actions_output = `$ pnpm lint
apps/web/components/message-list.tsx
  18:22  error  'messages' is possibly 'undefined'. Add a guard before calling map  @typescript-eslint/no-unsafe-call
  42:7   warning  React Hook React.useEffect has a missing dependency: 'scrollToBottom'  react-hooks/exhaustive-deps

✖ 2 problems (1 error, 1 warning)`

function Actions_download(value: string, filename: string) {
  const url = URL.createObjectURL(new Blob([value], { type: 'text/plain' }))
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}

function ActionsExample() {
  const [wrap, setWrap] = React.useState(true)

  return (
    <div className="cuoio:w-full cuoio:max-w-md">
      <CodeBlock>
        <CodeBlockHeader>
          <CodeBlockTitle>
            <TerminalIcon />
            Terminal
          </CodeBlockTitle>
          <CodeBlockActions>
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label="Wrap lines"
              aria-pressed={wrap}
              className="cuoio:aria-pressed:text-foreground"
              onClick={() => setWrap(!wrap)}
            >
              <WrapTextIcon />
            </Button>
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label="Download"
              onClick={() => Actions_download(Actions_output, 'lint.log')}
            >
              <DownloadIcon />
            </Button>
            <CodeBlockCopyButton value={Actions_output} />
          </CodeBlockActions>
        </CodeBlockHeader>
        <CodeBlockContent wrap={wrap}>{Actions_output}</CodeBlockContent>
      </CodeBlock>
    </div>
  )
}

const LineNumbers_code = `{
  "name": "chat",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build"
  }
}`

function LineNumbersExample() {
  return (
    <div className="cuoio:w-full cuoio:max-w-md">
      <CodeBlock>
        <CodeBlockContent lineNumbers>{LineNumbers_code}</CodeBlockContent>
      </CodeBlock>
    </div>
  )
}

const StartLine_code = `  if (!session) {
    redirect("/login")
  }

  const projects = await db.project.findMany({
    where: { ownerId: session.user.id },
    orderBy: { updatedAt: "desc" },
  })

  return <ProjectList projects={projects} />
}`

function StartLineExample() {
  const lines = useHighlightedCode(StartLine_code, 'tsx')

  return (
    <div className="cuoio:w-full cuoio:max-w-md">
      <CodeBlock>
        <CodeBlockHeader>
          <CodeBlockTitle>app/dashboard/page.tsx</CodeBlockTitle>
        </CodeBlockHeader>
        <CodeBlockContent lineNumbers startLine={995}>
          {lines.map((line, index) => (
            <CodeBlockLine key={index}>{line}</CodeBlockLine>
          ))}
        </CodeBlockContent>
      </CodeBlock>
    </div>
  )
}

const Wrap_output = `Error: The model "anthropic/claude-sonnet-4.5" returned an error: Request too large. The prompt is 212,431 tokens and the context window is 200,000 tokens. Remove some messages or summarize the conversation and try again.`

function WrapExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-md cuoio:flex-col cuoio:gap-4">
      <CodeBlock>
        <CodeBlockContent>{Wrap_output}</CodeBlockContent>
      </CodeBlock>
      <CodeBlock>
        <CodeBlockContent wrap>{Wrap_output}</CodeBlockContent>
      </CodeBlock>
    </div>
  )
}

const HighlightedLines_code = `export default {
  experimental: {
    reactCompiler: true,
    viewTransition: true,
  },
  images: {
    remotePatterns: [{ hostname: "avatars.githubusercontent.com" }],
  },
}`

const HighlightedLines_highlighted = [2, 3]

function HighlightedLinesExample() {
  return (
    <div className="cuoio:w-full cuoio:max-w-md">
      <CodeBlock>
        <CodeBlockContent lineNumbers>
          {HighlightedLines_code.split('\n').map((line, index) => (
            <CodeBlockLine
              key={index}
              variant={
                HighlightedLines_highlighted.includes(index)
                  ? 'HighlightedLines_highlighted'
                  : 'default'
              }
            >
              {line}
            </CodeBlockLine>
          ))}
        </CodeBlockContent>
      </CodeBlock>
    </div>
  )
}

const Diff_patch = ` export function Greeting({ name }: { name: string }) {
-  return <p>Hello, {name}</p>
+  return <p className="cuoio:text-sm cuoio:text-muted-foreground">
+    Hello, {name}!
+  </p>
 }`

function Diff_getVariant(line: string) {
  if (line.startsWith('+')) {
    return 'added'
  }

  if (line.startsWith('-')) {
    return 'removed'
  }

  return 'default'
}

function DiffExample() {
  return (
    <div className="cuoio:w-full cuoio:max-w-md">
      <CodeBlock>
        <CodeBlockHeader>
          <CodeBlockTitle>components/greeting.tsx</CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton value={Diff_patch} />
          </CodeBlockActions>
        </CodeBlockHeader>
        <CodeBlockContent>
          {Diff_patch.split('\n').map((line, index) => (
            <CodeBlockLine key={index} variant={Diff_getVariant(line)}>
              {line.slice(1)}
            </CodeBlockLine>
          ))}
        </CodeBlockContent>
      </CodeBlock>
    </div>
  )
}

const Height_logs = Array.from(
  { length: 40 },
  (_, index) =>
    `[${String(index + 1).padStart(2, '0')}] GET /api/chat 200 in ${12 + ((index * 7) % 40)}ms`,
).join('\n')

function HeightExample() {
  return (
    <div className="cuoio:w-full cuoio:max-w-md">
      <CodeBlock>
        <CodeBlockHeader>
          <CodeBlockTitle>Logs</CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton value={Height_logs} />
          </CodeBlockActions>
        </CodeBlockHeader>
        <CodeBlockContent className="cuoio:max-h-48 cuoio:scroll-fade-y">
          {Height_logs}
        </CodeBlockContent>
      </CodeBlock>
    </div>
  )
}

const Destructive_error = `TypeError: Cannot read properties of undefined (reading 'map')
    at MessageList (components/message-list.tsx:18:22)
    at renderWithHooks (react-dom.development.js:16305:18)`

function DestructiveExample() {
  return (
    <div className="cuoio:w-full cuoio:max-w-md">
      <CodeBlock variant="destructive">
        <CodeBlockHeader>
          <CodeBlockTitle>Error</CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton value={Destructive_error} />
          </CodeBlockActions>
        </CodeBlockHeader>
        <CodeBlockContent wrap>{Destructive_error}</CodeBlockContent>
      </CodeBlock>
    </div>
  )
}

const Trace_output = `$ node --version
v24.18.0`

const Trace_error = `$ pnpm dev
Error: listen EADDRINUSE: address already in use :::3000
    at Server.setupListenHandle [as _listen2] (node:net:1908:16)`

function TraceExample() {
  return (
    <div className="cuoio:w-full cuoio:max-w-md">
      <Trace>
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
                {Trace_output}
              </CodeBlockContent>
            </CodeBlock>
          </TraceCollapsibleContent>
        </TraceCollapsible>
        <TraceCollapsible defaultOpen>
          <TraceCollapsibleTrigger>
            <TraceLine status="Trace_error">
              <TraceIcon>
                <TerminalIcon />
              </TraceIcon>
              <TraceTitle>Failed to run pnpm dev</TraceTitle>
            </TraceLine>
          </TraceCollapsibleTrigger>
          <TraceCollapsibleContent>
            <CodeBlock size="sm" variant="destructive">
              <CodeBlockContent wrap className="cuoio:max-h-64">
                {Trace_error}
              </CodeBlockContent>
            </CodeBlock>
          </TraceCollapsibleContent>
        </TraceCollapsible>
      </Trace>
    </div>
  )
}

const Chat_code = `import { streamText } from "ai"

export async function POST(request: Request) {
  const { messages } = await request.json()

  const result = streamText({
    model: "anthropic/claude-sonnet-4.5",
    messages,
  })

  return result.toUIMessageStreamResponse()
}`

function ChatExample() {
  const lines = useHighlightedCode(Chat_code, 'ts')

  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-md cuoio:flex-col cuoio:gap-4 cuoio:text-sm">
      <Message align="end">
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>How do I stream a response?</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageContent className="cuoio:gap-3">
          <p>Create a route handler that returns the stream:</p>
          <CodeBlock>
            <CodeBlockHeader>
              <CodeBlockTitle>app/api/chat/route.ts</CodeBlockTitle>
              <CodeBlockActions>
                <CodeBlockCopyButton value={Chat_code} />
              </CodeBlockActions>
            </CodeBlockHeader>
            <CodeBlockContent>
              {lines.map((line, index) => (
                <CodeBlockLine key={index}>{line}</CodeBlockLine>
              ))}
            </CodeBlockContent>
          </CodeBlock>
          <p>The client reads it with useChat.</p>
        </MessageContent>
      </Message>
    </div>
  )
}

const Typeset_code = `import { streamText } from "ai"

export async function POST(request: Request) {
  const { messages } = await request.json()
  const result = streamText({ model: "anthropic/claude-sonnet-4.5", messages })

  return result.toUIMessageStreamResponse()
}`

function TypesetExample() {
  const lines = useHighlightedCode(Typeset_code, 'ts')

  return (
    <div className="cuoio:typeset cuoio:w-full cuoio:max-w-md">
      <h3>Stream a response</h3>
      <p>
        Create a route handler that calls <Typeset_code>streamText</Typeset_code> and returns the
        stream to the client.
      </p>
      <CodeBlock>
        <CodeBlockHeader>
          <CodeBlockTitle>
            <FileCodeIcon />
            app/api/chat/route.ts
          </CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton value={Typeset_code} />
          </CodeBlockActions>
        </CodeBlockHeader>
        <CodeBlockContent lineNumbers>
          {lines.map((line, index) => (
            <CodeBlockLine key={index}>{line}</CodeBlockLine>
          ))}
        </CodeBlockContent>
      </CodeBlock>
      <p>
        The <Typeset_code>useChat</Typeset_code> hook reads the stream on the client and renders the
        answer while it is written.
      </p>
    </div>
  )
}

const Highlighting_code = `{
  "location": "San Francisco",
  "temperature": 18,
  "unit": "celsius",
  "conditions": ["fog", "wind"]
}`

function HighlightingExample() {
  const lines = useHighlightedCode(Highlighting_code, 'json')

  return (
    <div className="cuoio:w-full cuoio:max-w-md">
      <CodeBlock>
        <CodeBlockHeader>
          <CodeBlockTitle>getWeather output</CodeBlockTitle>
        </CodeBlockHeader>
        <CodeBlockContent>
          {lines.map((line, index) => (
            <CodeBlockLine key={index}>{line}</CodeBlockLine>
          ))}
        </CodeBlockContent>
      </CodeBlock>
    </div>
  )
}

const Languages_samples = [
  {
    language: 'css',
    title: 'app/globals.css',
    code: `@import "tailwindcss";

:root {
  --radius: 0.625rem;
}`,
  },
  {
    language: 'python',
    title: 'main.py',
    code: `def greet(name: str) -> str:
    return f"Hello, {name}!"`,
  },
  {
    language: 'text',
    title: 'notes.txt',
    code: 'A language that is not in the list renders as plain text.',
  },
]

function Languages_Sample({ code, language }: { code: string; language: string }) {
  const lines = useHighlightedCode(code, language)

  return (
    <CodeBlockContent>
      {lines.map((line, index) => (
        <CodeBlockLine key={index}>{line}</CodeBlockLine>
      ))}
    </CodeBlockContent>
  )
}

function LanguagesExample() {
  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-md cuoio:flex-col cuoio:gap-4">
      {Languages_samples.map((sample) => (
        <CodeBlock key={sample.language}>
          <CodeBlockHeader>
            <CodeBlockTitle>{sample.title}</CodeBlockTitle>
          </CodeBlockHeader>
          <Languages_Sample code={sample.code} language={sample.language} />
        </CodeBlock>
      ))}
    </div>
  )
}

const Ansi_output = `$ pnpm test
\x1b[32m✓\x1b[39m src/format.test.ts \x1b[2m(4 tests)\x1b[22m
\x1b[32m✓\x1b[39m src/parse.test.ts \x1b[2m(7 tests)\x1b[22m
\x1b[31m✗\x1b[39m src/stream.test.ts \x1b[2m(3 tests | 1 failed)\x1b[22m

\x1b[31mAssertionError: expected 'hello' to be 'hello world'\x1b[39m

Tests  \x1b[31m1 failed\x1b[39m | \x1b[32m13 passed\x1b[39m (14)`

function AnsiExample() {
  const lines = useHighlightedCode(Ansi_output, 'ansi')

  return (
    <div className="cuoio:w-full cuoio:max-w-md">
      <CodeBlock>
        <CodeBlockHeader>
          <CodeBlockTitle>
            <TerminalIcon />
            Terminal
          </CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton value={Ansi_output.replace(/\x1b\[[\d;]*m/g, '')} />
          </CodeBlockActions>
        </CodeBlockHeader>
        <CodeBlockContent wrap>
          {lines.map((line, index) => (
            <CodeBlockLine key={index}>{line}</CodeBlockLine>
          ))}
        </CodeBlockContent>
      </CodeBlock>
    </div>
  )
}

const Streaming_blocks: {
  title?: string
  language: string
  code: string
  lineNumbers?: boolean
  highlight?: number[]
  diff?: boolean
}[] = [
  {
    title: 'hooks/use-debounce.ts',
    language: 'ts',
    lineNumbers: true,
    code: `export function useDebounce<T>(value: T, delay = 300) {
  const [debounced, setDebounced] = React.useState(value)

  React.useEffect(() => {
    const timeout = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timeout)
  }, [value, delay])

  return debounced
}`,
  },
  {
    language: 'bash',
    code: 'pnpm dlx shadcn@latest add code-block',
  },
  {
    title: 'components/search.tsx',
    language: 'tsx',
    lineNumbers: true,
    diff: true,
    code: ` export function Search() {
   const [query, setQuery] = React.useState("")
-  const results = useSearch(query)
+  const debounced = useDebounce(query, 300)
+  const results = useSearch(debounced)

   return <SearchResults results={results} />
 }`,
  },
  {
    title: 'app/api/chat/route.ts',
    language: 'ts',
    lineNumbers: true,
    highlight: [5, 6, 7, 8],
    code: `import { streamText } from "ai"

export async function POST(request: Request) {
  const { messages } = await request.json()

  const result = streamText({
    model: "anthropic/claude-sonnet-4.5",
    messages,
  })

  return result.toUIMessageStreamResponse()
}`,
  },
  {
    title: '.env.local',
    language: 'bash',
    code: 'AI_GATEWAY_API_KEY=your-api-key',
  },
]

// Where each block starts in the stream.
const Streaming_offsets = Streaming_blocks.map((_, index) =>
  Streaming_blocks.slice(0, index).reduce(
    (Streaming_total, block) => Streaming_total + block.code.length,
    0,
  ),
)
const Streaming_total = Streaming_blocks.reduce((sum, block) => sum + block.code.length, 0)

function Streaming_StreamingBlock({
  block,
  code,
}: {
  block: (typeof Streaming_blocks)[number]
  code: string
}) {
  const rows = code.split('\n')
  // A diff row starts with +, - or a space. The marker is not part of the code.
  const source = block.diff ? rows.map((row) => row.slice(1)).join('\n') : code
  const lines = useHighlightedCode(source, block.language)

  return (
    <CodeBlock>
      {block.title && (
        <CodeBlockHeader>
          <CodeBlockTitle>{block.title}</CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton value={source} disabled={code.length < block.code.length} />
          </CodeBlockActions>
        </CodeBlockHeader>
      )}
      <CodeBlockContent lineNumbers={block.lineNumbers}>
        {lines.map((line, index) => (
          <CodeBlockLine
            key={index}
            variant={
              block.diff
                ? rows[index]?.startsWith('+')
                  ? 'added'
                  : rows[index]?.startsWith('-')
                    ? 'removed'
                    : 'default'
                : block.highlight?.includes(index)
                  ? 'highlighted'
                  : 'default'
            }
          >
            {line}
          </CodeBlockLine>
        ))}
      </CodeBlockContent>
    </CodeBlock>
  )
}

function StreamingExample() {
  const [length, setLength] = React.useState(Streaming_total)

  React.useEffect(() => {
    if (length >= Streaming_total) {
      return
    }

    const timeout = setTimeout(() => setLength(length + 3), 16)
    return () => clearTimeout(timeout)
  }, [length])

  return (
    <div className="cuoio:flex cuoio:w-full cuoio:max-w-md cuoio:flex-col cuoio:gap-4">
      {Streaming_blocks.map(
        (block, index) =>
          length > Streaming_offsets[index] && (
            <Streaming_StreamingBlock
              key={block.code}
              block={block}
              code={block.code.slice(0, length - Streaming_offsets[index])}
            />
          ),
      )}
      <Button
        variant="outline"
        size="sm"
        className="cuoio:self-start"
        disabled={length < Streaming_total}
        onClick={() => setLength(0)}
      >
        <RotateCcwIcon />
        Replay
      </Button>
    </div>
  )
}

const meta = {
  title: 'UI/Code Block',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const DemoStory: Story = {
  name: 'Demo',
  render: () => <DemoExample />,
}

export const BasicStory: Story = {
  name: 'Basic',
  render: () => <BasicExample />,
}

export const ActionsStory: Story = {
  name: 'Actions',
  render: () => <ActionsExample />,
}

export const LineNumbersStory: Story = {
  name: 'Line Numbers',
  render: () => <LineNumbersExample />,
}

export const StartLineStory: Story = {
  name: 'Start Line',
  render: () => <StartLineExample />,
}

export const WrapStory: Story = {
  name: 'Wrap',
  render: () => <WrapExample />,
}

export const HighlightedLinesStory: Story = {
  name: 'Highlighted Lines',
  render: () => <HighlightedLinesExample />,
}

export const DiffStory: Story = {
  name: 'Diff',
  render: () => <DiffExample />,
}

export const HeightStory: Story = {
  name: 'Height',
  render: () => <HeightExample />,
}

export const DestructiveStory: Story = {
  name: 'Destructive',
  render: () => <DestructiveExample />,
}

export const TraceStory: Story = {
  name: 'Trace',
  render: () => <TraceExample />,
}

export const ChatStory: Story = {
  name: 'Chat',
  render: () => <ChatExample />,
}

export const TypesetStory: Story = {
  name: 'Typeset',
  render: () => <TypesetExample />,
}

export const HighlightingStory: Story = {
  name: 'Highlighting',
  render: () => <HighlightingExample />,
}

export const LanguagesStory: Story = {
  name: 'Languages',
  render: () => <LanguagesExample />,
}

export const AnsiStory: Story = {
  name: 'Ansi',
  render: () => <AnsiExample />,
}

export const StreamingStory: Story = {
  name: 'Streaming',
  render: () => <StreamingExample />,
}
