"use client"

import Link from "next/link"
import { Check } from "lucide-react"

import { pricingContent } from "@/lib/content"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-secondary/10">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-3">
            {pricingContent.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {pricingContent.title}
          </h2>
          <p className="text-muted-foreground">
            {pricingContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingContent.plans.map((plan, index) => (
            <div 
              key={index}
              className={cn(
                "relative rounded-lg border p-8",
                plan.popular 
                  ? "border-primary/50 bg-primary/5 shadow-lg" 
                  : "border-border bg-card"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
              >
                <Link href={plan.cta.href}>
                  {plan.cta.text}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}