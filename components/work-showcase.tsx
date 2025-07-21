"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Application",
    description:
      "A comprehensive e-commerce solution with advanced features like real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    image: "/placeholder.svg?height=500&width=800",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    features: ["Real-time inventory", "Payment integration", "Admin dashboard", "Mobile responsive"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
  },
  {
    id: 2,
    title: "Task Management SaaS",
    category: "SaaS Application",
    description:
      "A collaborative task management platform featuring real-time updates, team collaboration tools, and comprehensive project tracking capabilities.",
    image: "/placeholder.svg?height=500&width=800",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    features: ["Real-time collaboration", "Project tracking", "Team management", "Analytics"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
  },
  {
    id: 3,
    title: "Creative Portfolio",
    category: "Personal Brand",
    description:
      "An interactive portfolio website for a digital artist, featuring smooth animations, interactive galleries, and immersive user experience.",
    image: "/placeholder.svg?height=500&width=800",
    technologies: ["Vue.js", "GSAP", "Three.js", "Netlify", "Contentful"],
    features: ["3D animations", "Interactive galleries", "CMS integration", "Performance optimized"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2023",
  },
]

export default function WorkShowcase() {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const project = projects[currentProject]

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {/* Project Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Navigation */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={prevProject}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextProject}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Project Links */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <a
            href={project.liveUrl}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ExternalLink className="w-5 h-5 text-white" />
          </a>
          <a
            href={project.githubUrl}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <Github className="w-5 h-5 text-white" />
          </a>
        </div>

        {/* Project Info Overlay */}
        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-sm opacity-80">
            {project.category} • {project.year}
          </div>
          <div className="text-2xl font-light">{project.title}</div>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-8">
        <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Key Features</h4>
          <div className="grid grid-cols-2 gap-2">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Navigation Dots */}
        <div className="flex justify-center space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentProject ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
