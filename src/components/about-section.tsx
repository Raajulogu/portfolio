"use client";

import { useEffect, useRef, useState } from "react";
import { ChessIcon } from "@/components/chess-icon";
import Image from "next/image";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className={`relative ${isVisible ? "animate-float" : "opacity-0"}`}>
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card border border-border flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for actual profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    {/* <span className="text-6xl font-bold text-primary">R</span> */}
                    <Image
                      src='/images/rajesh.png'
                      alt="Profile Picture"
                      className="w-full h-full object-fit"
                      width={320}
                      height={320}
                    />
                  </div>

                  {/* Floating chess pieces around the image */}
                  <ChessIcon
                    className="absolute -top-4 -right-4 w-8 h-8 text-primary animate-float"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <ChessIcon
                    className="absolute -bottom-4 -left-4 w-6 h-6 text-secondary animate-float"
                    style={{ animationDelay: "1s" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                About{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
                Full Stack Software Developer skilled in <span className="text-primary font-semibold">Next.js</span>,{" "}
                <span className="text-primary font-semibold">React</span>,{" "}
                <span className="text-primary font-semibold">Node.js</span>,{" "}
                <span className="text-primary font-semibold">MongoDB</span>, and{" "}
                <span className="text-primary font-semibold">TypeScript</span>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
                Passionate about building{" "}
                <span className="text-secondary font-semibold">scalable, SEO-optimized applications</span> with sleek
                UI/UX that deliver exceptional user experiences.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                <span className="text-foreground font-semibold">Always curious, always growing.</span> I thrive on
                solving complex problems and turning innovative ideas into reality.
              </p>
            </div>

            {/* Stats */}
            {/* <div
              className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Problems Solved</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
