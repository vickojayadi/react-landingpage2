import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { heroContent } from "@/lib/content"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              {heroContent.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {heroContent.subtitle}
            </p>
            <p className="text-muted-foreground mb-8">
              {heroContent.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg">
                <Link href={heroContent.cta.primary.href}>
                  {heroContent.cta.primary.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={heroContent.cta.secondary.href}>
                  {heroContent.cta.secondary.text}
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative mx-auto lg:mx-0 w-full max-w-2xl">
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src={heroContent.image}
                alt="Web hosting illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}