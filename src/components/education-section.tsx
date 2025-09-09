"use client"

import { useEffect, useRef, useState } from "react"
import { ChessIcon } from "@/components/chess-icon"
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react"

export function EducationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [timelineProgress, setTimelineProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate timeline growth
          setTimeout(() => {
            setTimelineProgress(100)
          }, 500)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <ChessIcon className="absolute top-20 right-10 w-16 h-16 text-primary animate-rotate-chess" />
        <ChessIcon
          className="absolute bottom-20 left-10 w-20 h-20 text-secondary animate-rotate-chess"
          style={{ animationDelay: "12s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Education
              </span>
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Academic foundation that shaped my analytical and problem-solving skills
            </p>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-8 top-0 w-1 bg-border rounded-full overflow-hidden">
            <div
              className="w-full bg-gradient-to-b from-primary to-secondary transition-all duration-2000 ease-out"
              style={{ height: `${timelineProgress}%` }}
            />
          </div>

          {/* Education Card */}
          <div
            className={`relative pl-20 transition-all duration-1000 ${
              isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-8"
            }`}
            style={{ animationDelay: "800ms" }}
          >
            {/* Timeline Node */}
            <div className="absolute left-6 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background z-10">
              <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
            </div>

            {/* Education Card */}
            <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden">
              {/* Chess Accent */}
              <ChessIcon className="absolute -top-2 -right-2 w-6 h-6 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />

              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:animate-pulse-glow transition-all duration-300">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    Bachelor of Science in Statistics
                  </h3>

                  <h4 className="text-lg font-semibold text-secondary mb-4">Indira Gandhi College of arts and science</h4>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      2019 – 2022
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Pondicherry, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
                Comprehensive study of statistical methods, data analysis, and mathematical modeling. Developed strong
                analytical thinking and problem-solving skills that form the foundation of my programming approach.
              </p>

              {/* Key Subjects */}
              <div className="mb-6">
                <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-secondary" />
                  Key Areas of Study
                </h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Statistical Analysis",
                    "Data Modeling",
                    "Probability Theory",
                    "Research Methods",
                    "Mathematical Statistics",
                  ].map((subject, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full border border-secondary/20 hover:bg-secondary/20 transition-colors"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                <p className="text-sm text-muted-foreground italic">
                  &quot;The analytical mindset and statistical foundation gained during my studies directly influences my
                  approach to software development, data-driven decision making, and problem-solving in complex
                  technical scenarios.&quot;
                </p>
              </div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
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
