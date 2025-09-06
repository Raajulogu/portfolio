"use client"

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChessIcon } from "@/components/chess-icon";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7092511841",
    href: "tel:+917092511841",
    color: "text-primary",
  },
  {
    icon: Mail,
    label: "Email",
    value: "rajeshkumarlogu145@gmail.com",
    href: "mailto:rajeshkumarlogu145@gmail.com",
    color: "text-secondary",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pondicherry, India",
    href: "#",
    color: "text-primary",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/rajeshkumar-r",
    color: "text-blue-500",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/rajeshkumar-r",
    color: "text-foreground",
  },
  {
    icon: ExternalLink,
    label: "Portfolio",
    href: "#",
    color: "text-primary",
  },
];

export function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <ChessIcon className="absolute top-10 left-10 w-24 h-24 text-primary animate-rotate-chess" />
        <ChessIcon
          className="absolute bottom-10 right-10 w-32 h-32 text-secondary animate-rotate-chess"
          style={{ animationDelay: "15s" }}
        />
      </div>

      {/* Glowing Chess Watermark */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-10">
        <ChessIcon className="w-48 h-48 text-primary animate-pulse-glow" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Connect</span>
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ready to collaborate on your next project? Let&apos;s discuss how we can bring your ideas to life.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "animate-slide-in-left" : "opacity-0 translate-x-8"
            }`}
            // style={{ animationDelay: "300ms" }}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>

              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon
                  return (
                    <div
                      key={info.label}
                      className="group flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                    >
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-xl ${info.color === "text-primary" ? "bg-primary/10 border-primary/20" : "bg-secondary/10 border-secondary/20"} border flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300`}
                      >
                        <IconComponent className={`w-6 h-6 ${info.color}`} />
                      </div>

                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        <a
                          href={info.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>

                      <ChessIcon className="w-4 h-4 text-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Connect Online</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="icon"
                      className="group relative overflow-hidden border-border hover:border-primary/50 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-transparent"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                        <IconComponent
                          className={`w-5 h-5 ${social.color} group-hover:text-primary transition-colors`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      </a>
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-8"
            }`}
            // style={{ animationDelay: "500ms" }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden">
              {/* Chess Accent */}
              <ChessIcon className="absolute -top-2 -right-2 w-6 h-6 text-primary/20" />

              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground"
                    placeholder="Project discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Button>
              </form>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
            // style={{ animationDelay: "800ms" }}
          >
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Ready to start your next project? Let&apos;s make something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                asChild
              >
                <a href="mailto:rajeshkumarlogu145@gmail.com">
                  <span className="relative z-10 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Start a Project
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group relative overflow-hidden border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 bg-transparent"
                asChild
              >
                <a href="tel:+917092511841">
                  <span className="relative z-10 flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Schedule a Call
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
