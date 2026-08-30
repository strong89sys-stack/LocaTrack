// import { usePage } from '@inertiajs/react';

import AppLogoIcon from '@/components/app-logo-icon';

export default function AppLogo() {
    // const { name } = usePage().props;

    return (
        <>
            <div className='flex items-baseline'>
                <div className="flex aspect-square size-auto items-center justify-center rounded-md bg-transparent text-sidebar-primary-foreground">
                    <AppLogoIcon className="size-auto fill-current text-white dark:text-black" />
                </div>
                <div className="ml-1 grid flex-1 text-left text-sm">
                    <span className="mb-0.5 truncate leading-tight text-white font-semibold">
                        {/* {name} */}
                        LocaTrack
                    </span>
                </div>
            </div>
        </>
    );
}
