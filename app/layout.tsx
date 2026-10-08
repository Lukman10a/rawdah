import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Amiri } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400','500','600','700','800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const amiri = Amiri({
  subsets: ['arabic','latin'],
  weight: ['400','700'],
  variable: '--font-amiri',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Markazul Bayaan — Rawdatul Atfaal | Memorize Juz Amma in 20 Weeks',
  description: 'A structured 20-week, one-on-one Qur’an memorization program to help students complete Juz Amma with correct Tajweed, pronunciation and consistent guidance. Online worldwide.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${amiri.variable}`}>
      <body className="font-sans bg-ivory text-charcoal antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
