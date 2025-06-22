import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qusoor Al Wadi | Premier Construction Services',
  description: 'Expert construction and renovation services in Fujairah, UAE.',
  keywords: ['construction', 'building', 'renovation', 'fujairah', 'uae', 'contracting', 'qusour al wadi'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
