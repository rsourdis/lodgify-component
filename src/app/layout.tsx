import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'

const SourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lodgify Component',
  description: 'Lodgify Component Test',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${SourceSans3.className}`}>{children}</body>
    </html>
  )
}
