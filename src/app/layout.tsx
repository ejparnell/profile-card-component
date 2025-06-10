import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';
import '@/styles/globals.css';

const kumbhSans = Kumbh_Sans({
    variable: '--font-kumbh-sans',
    subsets: ['latin'],
    weight: ['400', '700'],
});

export const metadata: Metadata = {
    title: 'Frontend Mentor | Profile card component',
    keywords: ['Frontend Mentor', 'Next.js', 'React', 'Web Development'],
    authors: [{ name: 'Elizabeth Parnell' }],
    creator: 'Elizabeth Parnell',
    icons: {
        icon: '/favicon-32x32.png',
        apple: '/favicon-32x32.png',
        shortcut: '/favicon-32x32.png',
    },
    description:
        'A profile card component built with Next.js and React, designed for the Frontend Mentor challenge by Elizabeth Parnell.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={kumbhSans.variable}>{children}</body>
        </html>
    );
}
