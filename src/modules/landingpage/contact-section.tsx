import { Container } from '@/components/Container'
import { Button } from '@/ui/button'

const ContactSection = () => {
  return (
    //a section that use the full witdh, and have two elements inside. Each of them will occupied the 50% of the full viewport size for large screens. The first one will have a black background and the seccond one green

    <section id="contact" className="h-96 bg-light/10 py-20">
      <Container className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-dark font-display text-3xl tracking-tight sm:text-4xl">
          Contactanos
        </h1>
        <p className="z-20 mx-auto max-w-2xl text-lg tracking-tight text-slate-700">
          Dejanos tu correo y te contactamos a la brevedad
        </p>

        <form className="flex items-center justify-between">
          <input
            type="text"
            placeholder="Correo"
            className="m-2 rounded-md border-2 border-black p-2"
          />
          <Button>Enviar</Button>
        </form>
      </Container>
    </section>
  )
}

export default ContactSection
