import { Link } from '@inertiajs/react';
import { BookOpen, FolderGit2, LayoutGrid, MapPin, ScrollText, Grid3X3, BellRing, Wrench } from 'lucide-react';
import { MdPrecisionManufacturing } from 'react-icons/md';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
    {
        title: 'Tableau de bord',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Suivi en temps réel',
        href: '/tracking',
        icon: MapPin,
    },
    {
        title: 'Equipement',
        href: '/equipements',
        icon: MdPrecisionManufacturing,
    },
    {
        title: 'Location',
        href: '/locations',
        icon: ScrollText,
    },
    {
        title: 'Zone geographique',
        href: '/geofences',
        icon: Grid3X3,
    },
    {
        title: 'Alertes',
        href: '/alertes',
        icon: BellRing,
    },
    {
        title: 'Maintenance',
        href: '/maintenance',
        icon: Wrench,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: FolderGit2,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
