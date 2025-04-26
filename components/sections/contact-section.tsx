"use client"

import { useState } from "react"
import { Mail, Phone } from "lucide-react"

import { contactContent, siteConfig } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1000)
  }
  
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-3">
            {contactContent.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {contactContent.title}
          </h2>
          <p className="text-muted-foreground">
            {contactContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-secondary/10 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a 
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a 
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-lg border border-border">
            {isSubmitted ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                <p className="text-muted-foreground mb-8">
                  We'll get back to you soon.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    className="min-h-[120px]"
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : contactContent.cta.text}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}