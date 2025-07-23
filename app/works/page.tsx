"use client"

import Navigation from "@/components/navigation"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Figma } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Disney+ Hotstar Clone",
    category: "Web Application",
    description:
      "A complete streaming platform clone built from scratch using HTML, CSS, and JavaScript. Implemented responsive design and modern web development practices.",
    image: "/placeholder.svg?height=400&width=600&text=Disney+Hotstar+Clone",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "#",
    githubUrl: "#",
    type: "Personal Project",
    year: "2023",
  },
  {
    id: 2,
    title: "Sign In/Sign Up Pages",
    category: "UI Design",
    description:
      "Basic sign in and sign-up page designs with an additional login page, focusing on user-friendly authentication flows and modern UI patterns.",
    image: "/placeholder.svg?height=400&width=600&text=Authentication+Pages",
    technologies: ["Figma", "UI Design", "User Flow", "Authentication"],
    liveUrl: "#",
    githubUrl: "#",
    type: "Personal Design",
    year: "2023",
  },
  {
    id: 3,
    title: "Freelance UI/UX Project",
    category: "Web Application Design",
    description:
      "Worked as a UI/UX designer on a freelancing project, creating comprehensive user interface and user experience designs for a web application using Figma.",
    image: "/placeholder.svg?height=400&width=600&text=Freelance+UI+UX+Project",
    technologies: ["Figma", "UI/UX Design", "Client Work", "Web Application"],
    liveUrl: "#",
    githubUrl: "#",
    type: "Freelance Work",
    year: "2023",
  },
  {
    id: 4,
    title: "React Development Projects",
    category: "Frontend Development",
    description:
      "Various React-based projects developed during my tenure at Opul Design, focusing on responsive web applications and modern frontend practices.",
    image: "/placeholder.svg?height=400&width=600&text=React+Development+Projects",
    technologies: ["ReactJS", "JavaScript", "CSS3", "Responsive Design"],
    liveUrl: "#",
    githubUrl: "#",
    type: "Professional Work",
    year: "2023-2024",
  },
]

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="px-6 md:px-8 pt-12 md:pt-20 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <h1 className="text-6xl md:text-8xl font-light leading-none mb-8 text-black">
              My <span className="block">Portfolio</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                A collection of my work spanning web development, UI/UX design, and personal projects that showcase my
                skills and growth as a developer.
              </p>
              <div className="text-right">
                <div className="text-4xl font-light text-black mb-2">5+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Filter Section */}
          <div className="mb-16">
            <div className="flex flex-wrap gap-4 justify-center">
              {["All", "Web Development", "UI/UX Design", "Personal", "Professional"].map((filter) => (
                <button
                  key={filter}
                  className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-black hover:text-white transition-all duration-300"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div className="relative group overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link
                          href={project.liveUrl}
                          className="bg-white text-black p-3 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          {project.category.includes("Design") ? (
                            <Figma className="w-5 h-5" />
                          ) : (
                            <ExternalLink className="w-5 h-5" />
                          )}
                        </Link>
                        <Link
                          href={project.githubUrl}
                          className="bg-white text-black p-3 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm text-gray-500">{project.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-blue-600">{project.type}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-light mb-6 text-black">{project.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Link
                      href={project.liveUrl}
                      className="text-black border-b-2 border-black pb-1 hover:border-gray-600 transition-colors"
                    >
                      {project.category.includes("Design") ? "View Design" : "View Live"} →
                    </Link>
                    <Link
                      href={project.githubUrl}
                      className="text-gray-600 border-b-2 border-gray-300 pb-1 hover:border-gray-600 transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Used Section */}
          <div className="mt-20 bg-white p-8 rounded-lg">
            <h2 className="text-3xl font-light mb-8 text-black text-center">Technologies & Tools Used</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "ReactJS",
                "Figma",
                "UI/UX Design",
                "Responsive Design",
                "Git",
                "GitHub",
                "Node.js",
              ].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
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
