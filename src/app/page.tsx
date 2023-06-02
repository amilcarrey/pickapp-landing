import {
  CallToAction,
  ContactSection,
  Hero,
  PrimaryFeatures,
} from '@/modules/landingpage'

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <PrimaryFeatures />
      <CallToAction />
      <ContactSection />
    </main>
  )
}
