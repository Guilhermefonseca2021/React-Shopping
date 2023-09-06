import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Shop Nextjs',
  description: 'first create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
