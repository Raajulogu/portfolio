"use client"

import { useEffect, useRef, useState } from "react";
import { ChessIcon } from "@/components/chess-icon";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiMongodb,
  SiSocketdotio,
  SiTwilio,
  SiGit,
  SiPrismic,
  SiPython,
} from 'react-icons/si';


const skills = [
  { name: "React", category: "Frontend", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", category: "Language", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML/CSS", category: "Frontend", icon: SiHtml5, color: "#E34F26" },
  { name: "Tailwind", category: "Styling", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MUI", category: "UI Library", icon: SiMui, color: "#007FFF" },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", category: "Database", icon: SiMongodb, color: "#47A248" },
  { name: "Socket.io", category: "Real-time", icon: SiSocketdotio, color: "#010101" },
  { name: "Twilio", category: "Communication", icon: SiTwilio, color: "#F22F46" },
  { name: "Git", category: "Version Control", icon: SiGit, color: "#F05032" },
  { name: "Prismic CMS", category: "CMS", icon: SiPrismic, color: "#48494B" },
  { name: "Python", category: "Language", icon: SiPython, color: "#3776AB" },
];



export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Chess Pattern */}
      <div className="absolute inset-0 opacity-5">
        <ChessIcon className="absolute top-10 left-10 w-16 h-16 text-primary animate-rotate-chess" />
        <ChessIcon
          className="absolute bottom-10 right-10 w-20 h-20 text-secondary animate-rotate-chess"
          style={{ animationDelay: "5s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Technical{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              {/* Skill Icon */}
              <div className="text-3xl mb-3 group-hover:animate-pulse-glow transition-all duration-300">
                <skill.icon color={skill.color} />
              </div>

              {/* Skill Name */}
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {skill.name}
              </h3>

              {/* Skill Category */}
              <p className="text-sm text-muted-foreground group-hover:text-secondary transition-colors">
                {skill.category}
              </p>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Chess Piece Corner Accent */}
              <ChessIcon className="absolute -top-2 -right-2 w-4 h-4 text-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
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
