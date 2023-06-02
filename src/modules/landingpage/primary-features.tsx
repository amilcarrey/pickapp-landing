'use client'

import { Container } from '@/components/Container'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Clock, Paintbrush, ScanFace, Webcam } from 'lucide-react'

const features = [
  {
    title: 'Recepción 24/7',
    description:
      'La Estación Pick-App permite a los residentes recibir y entregar paquetes en cualquier momento, incluso fuera del horario habitual de entrega.',
    icon: Clock,
  },
  {
    title: 'Personalización',
    description:
      'Los lockers inteligentes de Pick-App se adaptan a las necesidades de los residentes al ofrecer diferentes tamaños, permitiendo recibir paquetes de medidas estándares y asegurando la comodidad en el almacenamiento.',
    icon: Paintbrush,
  },
  {
    title: 'Control de acceso',
    description:
      'Cada residente de la comunidad tiene un código único de identificación para acceder a la estación, lo que garantiza la seguridad en el proceso de entrega. Además, se cuenta con validadores de identidad para repartidores externos, asegurando una trazabilidad desde el ingreso hasta la recepción del paquete.',
    icon: ScanFace,
  },
  {
    title: 'Cámaras de seguridad',
    description:
      'La estación cuenta con cámaras de seguridad que registran el momento en que se recibe o se retira un paquete. Esta información se almacena en la nube, proporcionando una capa adicional de seguridad y seguimiento.',
    icon: Webcam,
  },
]

function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-secondary py-24"
    >
      <Container className="relative">
        <div className="mb-12 max-w-2xl text-center md:mx-auto xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-light sm:text-4xl">
            La <span className="text-primary">solución ideal</span> para tus
            entregas
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {features.map((feature, featureIndex) => (
            <Card key={featureIndex}>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <feature.icon className="mr-2" />
                  {feature.title}
                </CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
export default PrimaryFeatures
