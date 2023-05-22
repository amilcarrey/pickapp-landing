'use client'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/popover'
import clsx from 'clsx'
import { useState } from 'react'

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="stroke-slate-700 h-3.5 w-3.5 overflow-visible"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

const MobileNavigation = () => {
  const [open, setOpen] = useState(false)
  return (
    <Popover>
      <PopoverTrigger
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
        onClick={() => setOpen((prev) => !prev)}
      >
        <MobileNavIcon open={open} />
      </PopoverTrigger>
      <PopoverContent>
        <Button variant="link">Login</Button>
      </PopoverContent>
    </Popover>
  )
}

export default MobileNavigation
