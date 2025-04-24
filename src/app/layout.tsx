import type { Metadata } from 'next'
import { Open_Sans, Manrope } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: 'Boldo - Modern Business Landing Page',
  description: 'A modern business landing page built with Next.js and TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className} ${manrope.variable}`}>{children}</body>
    </html>
  )
}
