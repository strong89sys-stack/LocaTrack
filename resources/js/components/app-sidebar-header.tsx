import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import type { BreadcrumbItem as BreadcrumbItemType } from '@/types';

export function AppSidebarHeader({
    breadcrumbs = [],
}: {
    breadcrumbs?: BreadcrumbItemType[];
}) {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between border-b-border border-sidebar-border/50 bg-background/95 px-4 md:px-6 backdrop-blur supports-backdrop-filter:bg-background/60 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-16">
            {/* Partie gauche : Trigger + Breadcrumbs */}
            <div className="flex items-center gap-3">
                <SidebarTrigger className="-ml-1 text-muted-foreground hover:text-foreground" />
                <div className="hidden md:block h-4 w-px bg-border" />
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>

            {/* Partie droite : Titre de l'application */}
            <div className="flex items-center">
                <h1 className="text-xs sm:text-sm lg:text-base font-semibold tracking-tight text-foreground truncate max-w-50 sm:max-w-none">
                    Système de Suivi de Matériel en Location
                </h1>
            </div>
        </header>
    );
}