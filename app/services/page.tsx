"use client"

import Navigation from "@/components/navigation"
import { Code, Palette, Smartphone, Globe, Zap, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building modern, responsive web applications using React, Next.js, Vue.js, and other cutting-edge technologies.",
    features: [
      "React & Next.js Development",
      "Vue.js Applications",
      "TypeScript Integration",
      "Performance Optimization",
      "SEO Implementation",
    ],
    color: "text-blue-600",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating beautiful, intuitive user interfaces that provide exceptional user experiences across all devices.",
    features: [
      "User Interface Design",
      "User Experience Research",
      "Prototyping & Wireframing",
      "Design Systems",
      "Accessibility Standards",
    ],
    color: "text-purple-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Developing mobile-first applications and progressive web apps that work seamlessly across all devices.",
    features: [
      "Progressive Web Apps",
      "React Native Development",
      "Mobile-First Design",
      "Cross-Platform Solutions",
      "App Store Optimization",
    ],
    color: "text-green-600",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Full-stack web application development with modern frameworks and cloud deployment solutions.",
    features: [
      "Single Page Applications",
      "E-commerce Platforms",
      "Content Management Systems",
      "API Integration",
      "Database Design",
    ],
    color: "text-orange-600",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing web applications for speed, performance, and search engine visibility.",
    features: [
      "Core Web Vitals Optimization",
      "Bundle Size Reduction",
      "Lazy Loading Implementation",
      "Caching Strategies",
      "Performance Monitoring",
    ],
    color: "text-yellow-600",
  },
  {
    icon: Users,
    title: "Consulting & Training",
    description: "Providing technical consulting and training services for teams and organizations.",
    features: [
      "Technical Architecture Review",
      "Code Review & Auditing",
      "Team Training Programs",
      "Best Practices Implementation",
      "Technology Stack Selection",
    ],
    color: "text-red-600",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="px-6 md:px-8 pt-12 md:pt-20 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-light leading-none mb-8 text-black">
              Services & <span className="block">Expertise</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
              Comprehensive frontend development services to help your business create exceptional digital experiences.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white p-8 rounded-lg hover:shadow-lg transition-all duration-300 group">
                  <IconComponent
                    className={`w-12 h-12 mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <h3 className="text-2xl font-medium mb-4 text-black">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-light mb-12 text-black">My Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Understanding your business goals, target audience, and project requirements.",
                },
                {
                  step: "02",
                  title: "Planning",
                  description: "Creating detailed project roadmap, wireframes, and technical specifications.",
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Building your application with clean, maintainable code and best practices.",
                },
                {
                  step: "04",
                  title: "Launch",
                  description: "Testing, optimization, deployment, and ongoing support for your project.",
                },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl font-light text-gray-300 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-medium mb-3 text-black">{phase.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white p-12 rounded-lg">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-black">Ready to start your project?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with modern web technologies.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 text-lg font-medium"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </div>
  )
}
