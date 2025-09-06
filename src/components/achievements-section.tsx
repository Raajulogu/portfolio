"use client";

import { useEffect, useRef, useState } from "react";
import { ChessIcon } from "@/components/chess-icon";
import { Trophy, Target, Award } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Guvi Codekata Challenge",
    subtitle: "3rd Place",
    description: "Secured 3rd position in competitive programming challenge",
    icon: Trophy,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
  },
  {
    id: 2,
    title: "Problems Solved",
    subtitle: "500+",
    description: "Successfully solved complex algorithmic challenges",
    icon: Target,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    counter: 500,
  },
  {
    id: 3,
    title: "Years of Experience",
    subtitle: "2",
    description: "Professional software development experience",
    icon: Award,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
    counter: 2,
  },
  // {
  //   id: 4,
  //   title: "Projects Delivered",
  //   subtitle: "50+",
  //   description: "Successfully completed and deployed projects",
  //   icon: Code,
  //   color: "text-purple-500",
  //   bgColor: "bg-purple-500/10",
  //   borderColor: "border-purple-500/20",
  //   counter: 50,
  // },
];

export function AchievementsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<{ [key: number]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      achievements.forEach((achievement) => {
        if (achievement.counter) {
          let start = 0
          const end = achievement.counter
          const duration = 2000
          const increment = end / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCounters((prev) => ({ ...prev, [achievement.id]: end }))
              clearInterval(timer)
            } else {
              setCounters((prev) => ({ ...prev, [achievement.id]: Math.floor(start) }))
            }
          }, 16)

          return () => clearInterval(timer)
        }
      })
    }
  }, [isVisible])

  return (
    <section id="achievements" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <ChessIcon className="absolute top-10 left-10 w-20 h-20 text-primary animate-rotate-chess" />
        <ChessIcon
          className="absolute bottom-10 right-10 w-24 h-24 text-secondary animate-rotate-chess"
          style={{ animationDelay: "7s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Key{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Milestones and accomplishments that define my professional journey
            </p>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            const displayValue = achievement.counter
              ? `${counters[achievement.id] || 0}${achievement.counter >= 50 ? "+" : ""}`
              : achievement.subtitle

            return (
              <div
                key={achievement.id}
                className={`group relative bg-card border rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                  achievement.bgColor
                } ${achievement.borderColor} ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${achievement.bgColor} ${achievement.borderColor} border group-hover:animate-pulse-glow transition-all duration-300`}
                >
                  <IconComponent className={`w-8 h-8 ${achievement.color}`} />
                </div>

                {/* Counter/Subtitle */}
                <div className={`text-4xl font-bold mb-2 ${achievement.color}`}>{displayValue}</div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground text-pretty">{achievement.description}</p>

                {/* Chess Accent */}
                <ChessIcon className="absolute -top-2 -right-2 w-4 h-4 text-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
