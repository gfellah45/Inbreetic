"use client";

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Team from '@/components/Team'
import ValueProposition from '@/components/ValueProposition'
import Footer from '@/components/Footer'
import Stats from '@/components/Stats'
import OurStory from '@/components/OurStory'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero 
        title="We love to make great things, things that matter."
        description="Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure."
      />
      <Stats />
      <OurStory />
      <Team />
      <ValueProposition />

      <CTA />

      <Footer />
    </main>
  )
}
