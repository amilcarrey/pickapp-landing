import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Container } from '@/components/Container'
import product from '@/images/image-product.png'
// import screenshotPayroll from '@/images/screenshots/payroll.png'
// import screenshotReporting from '@/images/screenshots/reporting.png'
// import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

const features = [
  {
    title: 'Recepción 24/7',
    description:
      'Permitimos la recepción de paquetes de manera segura y sin necesidad de estar presente en todo momento. De esta manera, los residentes pueden recibir sus paquetes en cualquier momento y nosotros nos aseguramos de que los paquetes se mantengan seguros y protegidos.',
    image: product,
  },
  {
    title: 'Control de acceso',
    description:
      'Nuestro sistema de control de acceso garantiza que solo los usuarios autorizados puedan acceder a los lockers y recibir sus paquetes. De esta manera, nos aseguramos de que solo el destinatario pueda acceder a su paquete.',
    image: product,
  },
  {
    title: 'Alertas en tiempo real',
    description:
      'Enviamos notificaciones en tiempo real para informar a los destinatarios sobre el estado de sus paquetes, lo que permite a los residentes estar al tanto de su entrega sin tener que estar constantemente revisando el locker.',
    image: product,
  },
  {
    title: 'Diseño exclusivo',
    description:
      'Nuestro diseño exclusivo ha sido creado para adaptarse perfectamente a las necesidades de las urbanizaciones privadas, lo que garantiza que nuestros lockers se integren de manera perfecta en su entorno.',
    image: product,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-primary py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            La <span className="text-light">solución ideal</span> para tus
            entregas
          </h2>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-dark lg:bg-light/10 lg:ring-1 lg:ring-inset lg:ring-light/10'
                          : 'hover:bg-light/10 lg:hover:bg-light/5'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-primary lg:text-light'
                              : 'text-light hover:text-light lg:text-light'
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-light'
                            : 'text-light group-hover:text-light'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-light/10 ring-1 ring-inset ring-light/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-light sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={product}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
