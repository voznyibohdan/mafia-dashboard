'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ISidebarLinkProps {
    pathname: string;
    title: string;
    icon: React.ReactNode;
}

export const SidebarLink = ({ pathname, icon, title }: ISidebarLinkProps) => {
    const activePathname = usePathname();

    console.log({ activePathname });

    return (
        <Link href={pathname}>
            {icon}
            {title}
        </Link>
    );
};
