"use client"

import { useEffect, useRef, useState } from "react"
import { ChessIcon } from "@/components/chess-icon"
import { Calendar, MapPin, Code, Zap } from "lucide-react"

const experiences = [
  {
    id: 1,
    company: "SeedataMD",
    role: "Full Stack Developer",
    period: "03/2025 – Present",
    location: "Hybrid",
    type: "Current Position",
    description:
      "Built scalable MERN applications with real-time Socket.io features, CMS extensions, SEO optimizations, and guided junior developers.",
    achievements: [
      "Developed scalable MERN stack applications",
      "Implemented real-time Socket.io features",
      "Extended CMS functionality",
      "Optimized applications for SEO",
      "Mentored junior developers",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Socket.io", "GSC", "Prismic CMS", "Firebase", "Agile"],
    slideDirection: "left",
  },
  {
    id: 2,
    company: "DataDesQ",
    role: "Full Stack Developer",
    period: "01/2024 – 02/2025",
    location: "Remote",
    type: "Previous Role",
    description:
      "Delivered SEO-optimized features, UI/UX improvements, backend APIs, and collaborated in Agile development environments.",
    achievements: [
      "Implemented SEO-optimized features",
      "Enhanced UI/UX design systems",
      "Developed robust backend APIs",
      "Collaborated in Agile methodologies",
      "Improved application performance",
    ],
    technologies: ["React.js", "Node.js", "TypeScript", "MongoDB", "Prismic CMS", "Contentful CMS", "SEO", "REST APIs"],
    slideDirection: "right",
  },
]

export function ExperienceSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = cardRefs.current.findIndex((ref) => ref === entry.target)
            if (cardIndex !== -1 && !visibleCards.includes(cardIndex)) {
              setVisibleCards((prev) => [...prev, cardIndex])
            }
          }
        })
      },
      { threshold: 0.3 },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleCards])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <ChessIcon className="absolute top-20 right-20 w-24 h-24 text-primary animate-rotate-chess" />
        <ChessIcon
          className="absolute bottom-20 left-20 w-32 h-32 text-secondary animate-rotate-chess"
          style={{ animationDelay: "10s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Building innovative solutions and leading development teams across diverse projects
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary rounded-full hidden lg:block" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={`relative transition-all duration-1000 ${visibleCards.includes(index)
                    ? exp.slideDirection === "left"
                      ? "animate-slide-in-left"
                      : "animate-slide-in-right"
                    : "opacity-0 translate-x-12"
                  }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden lg:block">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                </div>

                {/* Card */}
                <div className={`lg:w-1/2 ${exp.slideDirection === "right" ? "lg:ml-auto lg:pl-8" : "lg:pr-8"}`}>
                  <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden">
                    {/* Chess Accent */}
                    <ChessIcon className="absolute -top-2 -right-2 w-6 h-6 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />

                    {/* Company & Role */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.company}
                        </h3>
                        {exp.type === "Current Position" && (
                          <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-full border border-secondary/30">
                            Current
                          </span>
                        )}
                      </div>

                      <h4 className="text-xl font-semibold text-primary mb-4">{exp.role}</h4>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-secondary" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Code className="w-4 h-4 text-primary" />
                        Technologies
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chess Divider */}
        <div className="flex items-center justify-center mt-16">
          <div className="flex items-center gap-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary" />
            <ChessIcon className="w-8 h-8 text-primary animate-rotate-chess" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
