import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ConvexClientProvider } from './components/convex-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ian Vincenzo Crispi',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={inter.className}>
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  )
}
