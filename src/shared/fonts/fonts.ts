import { Bitter, JetBrains_Mono } from 'next/font/google';

export const bitter = Bitter({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-bitter',
    display: 'swap',
    weight: ['400', '500', '600', '700']
});

export const jetBrains = JetBrains_Mono({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-mono',
    display: 'swap',
    weight: ['400', '500']
});
