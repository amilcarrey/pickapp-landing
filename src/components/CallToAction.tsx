import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-light py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-secondary sm:text-4xl">
            Qué es <span className="text-primary">pickapp</span>?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-secondary">
            Somos una empresa que tiene como objetivo proporcionar soluciones de
            almacenamiento seguro y conveniente para el consumidor. Con un
            enfoque en la eficiencia y la flexibilidad, proponemos automatizar
            el proceso de entrega y recepción de paquetes de una manera segura
            para los residentes de una comunidad.
          </p>
        </div>
      </Container>
    </section>
  )
}
