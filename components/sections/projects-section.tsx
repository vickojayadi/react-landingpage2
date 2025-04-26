"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { projectsContent } from "@/lib/content"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  
  return (
    <section id="projects" className="py-20 bg-secondary/10">
      <div className="container" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-3">
            {projectsContent.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {projectsContent.title}
          </h2>
          <p className="text-muted-foreground">
            {projectsContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsContent.projects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-500",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12" 
              )}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              <div className="aspect-video relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 relative">
                <div className="absolute -top-8 left-6 inline-block px-3 py-1 bg-primary text-primary-foreground rounded-md text-xs font-medium">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Button asChild variant="outline" size="sm">
                  <Link href={project.link} className="group">
                    View Project
                    <ExternalLink className="ml-2 h-3 w-3 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}