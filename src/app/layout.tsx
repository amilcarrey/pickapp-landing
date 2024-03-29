import { Footer } from '@/components/Footer'
import { cn } from '@/lib/utils'
import { SiteHeader } from '@/modules/navigation/site-header'
import { Inter,Lexend } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const font = Inter({ subsets: ['latin'], variable: '--font-sans' })
const fontDisplay = Lexend({ subsets: ['latin'], variable: '--font-display' })

export const metadata = {
  title: 'PickApp',
  description: 'La solución de entrega de última milla para tu barrio',
  icons: { icon: './favicon.ico' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(
        'font-sans antialiased',
        font.variable,
        fontDisplay.variable
      )}
    >
      <body className="w-100% min-h-screen dark:bg-slate-900 dark:text-slate-100">
        <Providers>
          <SiteHeader />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
