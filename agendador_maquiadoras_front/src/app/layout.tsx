import { LoginProvider } from '@/data/contexts/LoginContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MakeUpMe - TCC Puc Minas',
  description: 'TCC Puc Minas - Robert Sergio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LoginProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </LoginProvider>
  )
}
