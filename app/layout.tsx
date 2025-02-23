import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}

export default RootLayout
