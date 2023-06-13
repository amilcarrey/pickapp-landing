import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="bg-secondary">
      <Container>
        <div className="flex justify-center py-16">
          <Logo className="mx-auto h-16 w-auto" />
        </div>
        <div className="flex flex-col items-center justify-center border-t border-slate-400/10 py-10">
          {/* <div className="flex gap-x-6">
            <Link
              href="https://twitter.com"
              className="group"
              aria-label="TaxPal on Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                className=" icon icon-tabler icon-tabler-brand-twitter h-6 w-6 stroke-light"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
              </svg>
            </Link>
            <Link
              href="https://instagram.com"
              className="group"
              aria-label="TaxPal on Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                className=" icon icon-tabler icon-tabler-brand-instagram h-6 w-6 stroke-light"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </Link>
            <Link
              href="https://twitter.com"
              className="group"
              aria-label="TaxPal on Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                className=" icon icon-tabler icon-tabler-brand-whatsapp h-6 w-6 stroke-light"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
              </svg>
            </Link>
          </div> */}
          <p className="mt-6 text-sm text-light sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} PickApp. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
