import type { Metadata } from 'next';
import './globals.css';

import { bitter, jetBrains } from '@/shared/fonts';

export const metadata: Metadata = {
    title: 'Mafia Dashboard',
    description: 'Dashboard that will help the hosts to conduct the game'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${bitter.variable} ${jetBrains.variable} antialiased`}>{children}</body>
        </html>
    );
}
