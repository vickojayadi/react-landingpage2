"use client"

import { Server, Rocket, Headphones } from "lucide-react"
import { featuresContent } from "@/lib/content"

const iconMap = {
  Server,
  Rocket,
  Headphones,
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-3">
            {featuresContent.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {featuresContent.title}
          </h2>
          <p className="text-muted-foreground">
            {featuresContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresContent.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Server
            
            return (
              <div 
                key={index}
                className="bg-card rounded-lg p-6 border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}