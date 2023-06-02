'use client'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import Link from 'next/link'
import ButtonScroller from './button-scroller'

export const siteConfig = {
  name: 'PickApp',
  description: 'Tu solución de última milla.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
  ],
  links: {
    developer: 'https://amilcarrey.ar',
  },
}

export function SiteHeader() {
  return (
    <header className="bg-secondary py-4">
      <Container>
        <nav className="relative z-50 flex justify-center md:justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Logo className="h-16 w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            {/* <div className="hidden md:block">
              <Button variant="link">Login</Button>
            </div> */}
            <ButtonScroller text="¡Comenzá hoy!" scrollTo="contact" />
            {/* <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div> */}
          </div>
        </nav>
      </Container>
    </header>
  )
}
