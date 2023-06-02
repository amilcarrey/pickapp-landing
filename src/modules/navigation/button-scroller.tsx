'use client'
import { Button } from '@/components/ui/button'

const scrollToId = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const ButtonScroller = ({
  text,
  variant = 'default',
  scrollTo,
}: {
  text: string
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null
    | undefined
  scrollTo: string
}) => {
  return (
    <Button
      className="hidden md:block"
      variant={variant}
      onClick={() => scrollToId(scrollTo)}
    >
      <span>{text}</span>
    </Button>
  )
}

export default ButtonScroller
