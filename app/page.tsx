"use client"

import { ThemeProvider } from "@/components/ui/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <FeaturesSection />
          <PricingSection />
          <ContactSection />
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  )
}