import { CallToAction } from '@/components/CallToAction'
import Contact from '@/components/Contact'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <PrimaryFeatures /> */}
      <CallToAction />
      <Contact />
    </main>
  )
}
