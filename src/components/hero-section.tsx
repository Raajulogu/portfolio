"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChessIcon } from "@/components/chess-icon"
import { ChevronDown, Download, Mail } from "lucide-react"

export function HeroSection() {
  const [typewriterText, setTypewriterText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Software Developer | Creative Technologist"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 1000)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20" />

      {/* Floating Chess Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ChessIcon
          className="absolute top-20 left-10 w-12 h-12 text-primary/30 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <ChessIcon
          className="absolute top-40 right-20 w-8 h-8 text-secondary/40 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <ChessIcon
          className="absolute bottom-40 left-20 w-10 h-10 text-primary/20 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <ChessIcon
          className="absolute bottom-20 right-10 w-14 h-14 text-secondary/30 animate-float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="mb-8 animate-float">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">R</span>
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-balance">
          <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            RAJESHKUMAR.R
          </span>
        </h1>

        {/* Role with Typewriter Effect */}
        <div className="mb-6 h-16 flex items-center justify-center">
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
            {typewriterText}
            {showCursor && <span className="animate-pulse text-primary">|</span>}
          </h2>
        </div>

        {/* Subline */}
        <p
          className="text-lg md:text-xl text-muted-foreground mb-12 animate-fade-in-up text-balance"
          style={{ animationDelay: "0.5s" }}
        >
          Code. Collaborate. Elevate.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
            onClick={scrollToContact}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Get In Touch
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group relative overflow-hidden border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 animate-fade-in-up bg-transparent"
            style={{ animationDelay: "1.2s" }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fade-in-up w-full flex justify-center" style={{ animationDelay: "1.5s" }}>
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            {/* Mouse outline */}
            <div className="relative">
              {/* Mouse outline */}
              <div className="w-6 h-10 border-2 border-current rounded-full relative overflow-hidden">
                {/* Animated scroll dot */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-current rounded-full animate-scroll-dot" />
              </div>
              {/* Animated chevrons */}
              <div className="flex flex-col items-center mt-2 space-y-1">
                <ChevronDown />
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Large Chess Piece Background */}
      <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
        <ChessIcon className="w-96 h-96 text-primary animate-rotate-chess" />
      </div>
    </section>
  )
}
