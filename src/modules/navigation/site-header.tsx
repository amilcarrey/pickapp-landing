'use client'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import MobileNavigation from '@/modules/navigation/mobile-nav'
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
    <header className="py-4 bg-secondary">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            {/* <div className="hidden md:block">
              <Button variant="link">Login</Button>
            </div> */}
            <ButtonScroller text="¡Comenzá hoy!" scrollTo="contact" />
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
