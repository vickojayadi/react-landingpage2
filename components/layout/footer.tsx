"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

import { siteConfig, footerContent, navigationLinks } from "@/lib/content"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-secondary/30 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand and Description */}
          <div className="lg:col-span-2">
            <Link 
              href="/" 
              className="text-xl font-bold tracking-tight inline-flex"
            >
              <span>{siteConfig.logo.text}</span>
              <span className="text-primary ml-1">{siteConfig.logo.highlight}</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              {footerContent.description}
            </p>
            <div className="mt-6 space-x-4 flex">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {footerContent.links.map((group, index) => (
            <div key={index}>
              <h3 className="font-medium mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              {footerContent.copyright}
            </p>
            <div className="mt-4 md:mt-0">
              <Button variant="link" asChild>
                <Link href="#" className="text-sm text-muted-foreground">
                  Privacy Policy
                </Link>
              </Button>
              <Button variant="link" asChild>
                <Link href="#" className="text-sm text-muted-foreground">
                  Terms of Service
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}