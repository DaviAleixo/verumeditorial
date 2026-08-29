import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config/site'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://verum-grupo.vercel.app'),
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: '/logo-verum.png',
    shortcut: '/logo-verum.png',
    apple: '/logo-verum.png',
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: 'article',
    locale: 'pt_BR',
    siteName: 'Grupo Verum | Cases',
    images: [
      {
        url: '/fotoeditorial.png',
        width: 1200,
        height: 675,
        alt: 'Construção Civil e Auditoria Bancária — Case Grupo Verum',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/fotoeditorial.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#132842',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="bg-white text-slate-800 antialiased selection:bg-blue-100 selection:text-slate-900 font-sans">
        {children}
      </body>
    </html>
  )
}
