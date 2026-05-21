import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elmiko Transport | Mezinárodní doprava a logistika',
  description: 'Specialisté na mezinárodní kamionovou dopravu, logistiku, pronájem dodávek a VZV.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className="dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground flex flex-col`}>
        {children}
      </body>
    </html>
  )
}
