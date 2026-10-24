'use client'

import * as React from 'react'

import { ChevronsUpDownIcon, PlusIcon } from 'lucide-react'

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
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ReactNode
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
                className="cuoio:data-open:bg-sidebar-accent cuoio:data-open:text-sidebar-accent-foreground"
              />
            }
          >
            <div className="cuoio:flex cuoio:aspect-square cuoio:size-8 cuoio:items-center cuoio:justify-center cuoio:rounded-lg cuoio:bg-sidebar-primary cuoio:text-sidebar-primary-foreground">
              {activeTeam.logo}
            </div>
            <div className="cuoio:grid cuoio:flex-1 cuoio:text-start cuoio:text-sm cuoio:leading-tight">
              <span className="cuoio:truncate cuoio:font-medium">{activeTeam.name}</span>
              <span className="cuoio:truncate cuoio:text-xs">{activeTeam.plan}</span>
            </div>
            <ChevronsUpDownIcon className="cuoio:ms-auto" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="cuoio:w-fit"
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
                    {team.logo}
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
                  <PlusIcon className="cuoio:size-4" />
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
