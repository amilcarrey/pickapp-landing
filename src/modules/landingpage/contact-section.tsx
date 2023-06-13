'use client'
import { Container } from '@/components/Container'
import { Button } from '@/ui/button'
import { useState } from 'react'

const ContactSection = () => {
  const [email, setEmail] = useState('')
  const [showNotValid, setShowNotValid] = useState(false)
  const [showSend, setShowSend] = useState(false)

  const handleSend = async (e) => {
    e.preventDefault()
    // check if is a valid email address wit regex and if not show a message
    if (!email.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)) {
      setShowNotValid(true)
      return
    }
    setShowNotValid(false)

    await fetch('api/email', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    setShowSend(true)
  }
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

        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="m-2 rounded-md border-2 border-black p-2"
          />
          <Button onClick={(e) => handleSend(e)}>Enviar</Button>
        </div>
        {showNotValid && (
          <p className="text-red-500">
            Por favor, ingresa una dirección de correo valida.
          </p>
        )}
        {showSend && (
          <p className="text-primary">
            Gracias por contactarnos, te responderemos a la brevedad.
          </p>
        )}
      </Container>
    </section>
  )
}

export default ContactSection
