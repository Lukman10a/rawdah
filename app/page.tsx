"use client"
import StickyNav from '@/components/sections/StickyNav'
import MobileStickyCTA, { DesktopFloatingCTA } from '@/components/sections/MobileStickyCTA'
import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import Timeline from '@/components/sections/Timeline'
import Achievements from '@/components/sections/Achievements'
import Snapshot from '@/components/sections/Snapshot'
import WhyOneOnOne from '@/components/sections/WhyOneOnOne'
import WhyBayaan from '@/components/sections/WhyBayaan'
import TeachingMethod from '@/components/sections/TeachingMethod'
import Testimonials from '@/components/sections/Testimonials'
import Pricing from '@/components/sections/Pricing'
import EnrollmentForm from '@/components/sections/EnrollmentForm'
import FAQ from '@/components/sections/FAQ'
import AdditionalCourses from '@/components/sections/AdditionalCourses'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/sections/Footer'

export default function Home(){
  return (
    <main className="pb-16 lg:pb-0">
      <StickyNav />
      <Hero />
      <TrustStrip />
      <Timeline />
      <Achievements />
      <Snapshot />
      <WhyOneOnOne />
      <WhyBayaan />
      <TeachingMethod />
      <Testimonials />
      <Pricing />
      <EnrollmentForm />
      <FAQ />
      <AdditionalCourses />
      <FinalCTA />
      <Footer />
      <MobileStickyCTA />
      <DesktopFloatingCTA />
    </main>
  )
}
