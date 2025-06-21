import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qusoor Al Wadi',
  description: 'Build by misahabv',
  generator: 'misahabv',
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
