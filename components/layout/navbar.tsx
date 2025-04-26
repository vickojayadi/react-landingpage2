"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { siteConfig, navigationLinks } from "@/lib/content"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  
  useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm">
        <div className="container h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight flex items-center">
            <span>{siteConfig.logo.text}</span>
            <span className="text-primary ml-1">{siteConfig.logo.highlight}</span>
          </Link>
        </div>
      </header>
    )
  }

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tight flex items-center"
        >
          <span>{siteConfig.logo.text}</span>
          <span className="text-primary ml-1">{siteConfig.logo.highlight}</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.title}
            </Link>
          ))}
          <Button asChild>
            <Link href="#contact">Get Started</Link>
          </Button>
        </nav>

        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "md:hidden absolute left-0 right-0 bg-background shadow-md transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-[500px] py-4" : "max-h-0"
        )}
      >
        <div className="container flex flex-col space-y-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <Button asChild onClick={() => setIsOpen(false)}>
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}