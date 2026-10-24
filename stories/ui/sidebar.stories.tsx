// @ts-nocheck
'use client'

import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  AudioWaveform,
  BadgeCheck,
  Bell,
  BookOpen,
  Bot,
  ChevronRight,
  ChevronsUpDown,
  Command,
  CreditCard,
  Folder,
  Forward,
  Frame,
  GalleryVerticalEnd,
  LogOut,
  Map,
  MoreHorizontal,
  PieChart,
  Plus,
  Settings2,
  Sparkles,
  SquareTerminal,
  Trash2,
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar'

// This is sample Demo_data.
const Demo_data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Playground',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'History',
          url: '#',
        },
        {
          title: 'Starred',
          url: '#',
        },
        {
          title: 'Settings',
          url: '#',
        },
      ],
    },
    {
      title: 'Models',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          url: '#',
        },
        {
          title: 'Explorer',
          url: '#',
        },
        {
          title: 'Quantum',
          url: '#',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
}

function Demo_TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}) {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  if (!activeTeam) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton
                size="lg"
                className="cuoio:Demo_data-[state=open]:bg-sidebar-accent cuoio:Demo_data-[state=open]:text-sidebar-accent-foreground"
              />
            }
          >
            <div className="cuoio:flex cuoio:aspect-square cuoio:size-8 cuoio:items-center cuoio:justify-center cuoio:rounded-lg cuoio:bg-sidebar-primary cuoio:text-sidebar-primary-foreground">
              <activeTeam.logo className="cuoio:size-4" />
            </div>
            <div className="cuoio:grid cuoio:flex-1 cuoio:text-left cuoio:text-sm cuoio:leading-tight">
              <span className="cuoio:truncate cuoio:font-medium">{activeTeam.name}</span>
              <span className="cuoio:truncate cuoio:text-xs">{activeTeam.plan}</span>
            </div>
            <ChevronsUpDown className="cuoio:ml-auto" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="cuoio:w-(--radix-dropdown-menu-trigger-width) cuoio:min-w-56 cuoio:rounded-lg"
            align="start"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="cuoio:text-xs cuoio:text-muted-foreground">
                Teams
              </DropdownMenuLabel>
              {teams.map((team, index) => (
                <DropdownMenuItem
                  key={team.name}
                  onClick={() => setActiveTeam(team)}
                  className="cuoio:gap-2 cuoio:p-2"
                >
                  <div className="cuoio:flex cuoio:size-6 cuoio:items-center cuoio:justify-center cuoio:rounded-md cuoio:border">
                    <team.logo className="cuoio:size-3.5 cuoio:shrink-0" />
                  </div>
                  {team.name}
                  <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="cuoio:gap-2 cuoio:p-2">
                <div className="cuoio:flex cuoio:size-6 cuoio:items-center cuoio:justify-center cuoio:rounded-md cuoio:border cuoio:bg-transparent">
                  <Plus className="cuoio:size-4" />
                </div>
                <div className="cuoio:font-medium cuoio:text-muted-foreground">Add team</div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

function Demo_NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: React.ElementType
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            defaultOpen={item.isActive}
            className="cuoio:group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger render={<SidebarMenuButton tooltip={item.title} />}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
                <ChevronRight className="cuoio:group-Demo_data-[state=open]/collapsible:rotate-90 cuoio:ml-auto cuoio:transition-transform cuoio:duration-200" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton render={<a href={subItem.url} />}>
                        <span>{subItem.title}</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

function Demo_NavProjects({
  projects,
}: {
  projects: {
    name: string
    url: string
    icon: React.ElementType
  }[]
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="cuoio:group-Demo_data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton render={<a href={item.url} />}>
              <item.icon />
              <span>{item.name}</span>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger render={<SidebarMenuAction showOnHover />}>
                <MoreHorizontal />
                <span className="cuoio:sr-only">More</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="cuoio:w-48 cuoio:rounded-lg"
                side={isMobile ? 'bottom' : 'right'}
                align={isMobile ? 'end' : 'start'}
              >
                <DropdownMenuItem>
                  <Folder className="cuoio:text-muted-foreground" />
                  <span>View Project</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Forward className="cuoio:text-muted-foreground" />
                  <span>Share Project</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Trash2 className="cuoio:text-muted-foreground" />
                  <span>Delete Project</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton className="cuoio:text-sidebar-foreground/70">
            <MoreHorizontal className="cuoio:text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}

function Demo_NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton
                size="lg"
                className="cuoio:Demo_data-[state=open]:bg-sidebar-accent cuoio:Demo_data-[state=open]:text-sidebar-accent-foreground"
              />
            }
          >
            <Avatar className="cuoio:h-8 cuoio:w-8 cuoio:rounded-lg">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="cuoio:rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="cuoio:grid cuoio:flex-1 cuoio:text-left cuoio:text-sm cuoio:leading-tight">
              <span className="cuoio:truncate cuoio:font-medium">{user.name}</span>
              <span className="cuoio:truncate cuoio:text-xs">{user.email}</span>
            </div>
            <ChevronsUpDown className="cuoio:ml-auto cuoio:size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="cuoio:w-(--radix-dropdown-menu-trigger-width) cuoio:min-w-56 cuoio:rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="cuoio:p-0 cuoio:font-normal">
                <div className="cuoio:flex cuoio:items-center cuoio:gap-2 cuoio:px-1 cuoio:py-1.5 cuoio:text-left cuoio:text-sm">
                  <Avatar className="cuoio:h-8 cuoio:w-8 cuoio:rounded-lg">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="cuoio:rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="cuoio:grid cuoio:flex-1 cuoio:text-left cuoio:text-sm cuoio:leading-tight">
                    <span className="cuoio:truncate cuoio:font-medium">{user.name}</span>
                    <span className="cuoio:truncate cuoio:text-xs">{user.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

function DemoExample({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <Demo_TeamSwitcher teams={Demo_data.teams} />
        </SidebarHeader>
        <SidebarContent>
          <Demo_NavMain items={Demo_data.navMain} />
          <Demo_NavProjects projects={Demo_data.projects} />
        </SidebarContent>
        <SidebarFooter>
          <Demo_NavUser user={Demo_data.user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="cuoio:group-has-Demo_data-[collapsible=icon]/sidebar-wrapper:h-12 cuoio:flex cuoio:h-16 cuoio:shrink-0 cuoio:items-center cuoio:gap-2 cuoio:transition-[width,height] cuoio:ease-linear">
          <div className="cuoio:flex cuoio:items-center cuoio:gap-2 cuoio:px-4">
            <SidebarTrigger className="cuoio:-ml-1" />
          </div>
        </header>
      </SidebarInset>
    </SidebarProvider>
  )
}

const meta = {
  title: 'UI/Sidebar',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const DemoStory: Story = {
  name: 'Demo',
  render: () => <DemoExample />,
}
