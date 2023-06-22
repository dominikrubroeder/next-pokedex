import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className="flex gap-2 p-4">
          <Link href="/">Home</Link>
          <Link href="/pokedex">Pokédex</Link>
      </header>
      {children}
      </body>
    </html>
  )
}
