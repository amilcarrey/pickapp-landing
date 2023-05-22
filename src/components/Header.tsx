import MobileNavigation from '@/modules/navigation/mobile-nav'
import Link from 'next/link'
import { Container } from './Container'
import { Logo } from './Logo'
import { Button } from './ui/button'

export function Header() {
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
            <div className="hidden md:block">
              <Button variant="link">Login</Button>
            </div>
            <Button>
              <span>¡Comenzá hoy!</span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
