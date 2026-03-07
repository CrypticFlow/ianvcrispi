import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ConvexClientProvider } from './components/convex-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ian V Crispi - Serial Entrepreneur, Musician, Poet',
  description: 'Ian V Crispi builds software businesses, produces music, designs cocktails, and writes poetry. 10 businesses in 60 days. 15 years in music. Based in Los Angeles.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.birds.min.js" defer></script>
      </head>
      <body className={inter.className}>
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  )
}
