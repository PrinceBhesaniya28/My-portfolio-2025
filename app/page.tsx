"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ExternalLink,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Calendar,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"

const featuredProjects = [
  {
    id: 1,
    title: "Disney+ Hotstar Clone",
    category: "Web Application",
    description:
      "A complete streaming platform clone built from scratch with modern web technologies and responsive design.",
    image: "/placeholder.svg?height=400&width=600&text=Disney+Hotstar+Clone",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "#",
    githubUrl: "#",
    type: "Personal Project",
  },
  {
    id: 2,
    title: "Nike E-commerce Design",
    category: "UI/UX Design",
    description: "Modern e-commerce page design for Nike shoes with focus on user experience and visual appeal.",
    image: "/placeholder.svg?height=400&width=600&text=Nike+Ecommerce+Design",
    technologies: ["Figma", "UI/UX Design", "Prototyping"],
    liveUrl: "#",
    githubUrl: "#",
    type: "Design Project",
  },
  {
    id: 3,
    title: "Bluorng Mobile Web Design",
    category: "Mobile Design",
    description:
      "Responsive web page design for clothing company with auto-delay effects optimized for mobile screens.",
    image: "/placeholder.svg?height=400&width=600&text=Bluorng+Mobile+Design",
    technologies: ["Figma", "Mobile Design", "Animation", "UX Research"],
    liveUrl: "#",
    githubUrl: "#",
    type: "Freelance Project",
  },
]

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      setCurrentTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <Navigation />

      {/* Location and Time */}
      <div className="absolute top-16 right-6 sm:top-20 md:top-24 md:right-8 text-right text-gray-500 z-10">
        <div className="text-sm sm:text-base md:text-lg">Gujarat, India</div>
        <div className="text-lg sm:text-xl md:text-2xl font-light">{currentTime} pm</div>
      </div>

      {/* Main Content */}
      <main className="px-6 md:px-8 pt-12 md:pt-20 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-32">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-tight mb-8 text-black">
              <span className="block mb-2 md:mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 md:px-4 py-1 md:py-2 inline-block rounded-2xl border-2 border-white/30 shadow-lg shadow-blue-600/25 backdrop-blur-sm">Prince Bhesaniya</span>
              </span>
              <span className="block">crafts exceptional</span>
              <span className="block">digital experiences</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed mb-12">
              Transforming ideas into pixel-perfect, interactive web applications with React and modern frontend technologies. 
              I bring creativity and technical expertise together to build solutions that users love.
            </p>

            {/* CTA Section */}
            <div className="flex items-center space-x-6 mb-16">
              <a
                href="#contact"
                className="text-xl text-black border-b-2 border-black pb-1 hover:border-gray-600 transition-colors"
              >
                Let's talk →
              </a>

              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Prince Bhesaniya"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-400 border-2 border-white overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Team collaboration"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-gray-600">
                  <div className="text-sm">Flexible to work in</div>
                  <div className="text-sm">any environment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-32">
            <h2 className="text-4xl md:text-6xl font-light mb-12 text-black">Experience</h2>
            <div className="bg-white p-8 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-medium text-black mb-2">Junior Frontend React Developer</h3>
                  <div className="text-lg text-gray-600 mb-2">Opul Design</div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    March 2023 - August 2024 (1 year 6 months)
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Recent Experience
                  </span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Worked extensively with ReactJS and frontend development, collaborating with a dynamic team of
                developers to design and implement responsive, user-friendly web applications. Gained hands-on
                experience in modern frontend technologies and agile development practices.
              </p>
              <div className="flex flex-wrap gap-2">
                {["ReactJS", "Frontend Development", "Team Collaboration", "Responsive Design", "Web Applications"].map(
                  (skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-32">
            <h2 className="text-4xl md:text-6xl font-light mb-12 text-black">Programming Languages</h2>
            
            {/* Infinite Scroll Container */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-seamless">
                {/* First set of icons */}
                <div className="flex items-center space-x-12 shrink-0 px-6">
                  {/* JavaScript */}
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image 
                        src="/javascript.png" 
                        alt="JavaScript" 
                        width={64} 
                        height={64} 
                        className="object-contain"
                      />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">JavaScript</span>
                  </div>

                  {/* HTML5 */}
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image 
                        src="/html5.png" 
                        alt="HTML5" 
                        width={64} 
                        height={64} 
                        className="object-contain"
                      />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">HTML5</span>
                  </div>

                  {/* CSS3 */}
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image 
                        src="/css3.png" 
                        alt="CSS3" 
                        width={64} 
                        height={64} 
                        className="object-contain"
                      />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">CSS3</span>
                  </div>

                  {/* React */}
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image 
                        src="/react.png" 
                        alt="React" 
                        width={64} 
                        height={64} 
                        className="object-contain"
                      />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">React</span>
                  </div>

                  {/* Next.js */}
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image 
                        src="/nextjs.svg" 
                        alt="Next.js" 
                        width={64} 
                        height={64} 
                        className="object-contain"
                      />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">Next.js</span>
                  </div>

                  {/* Node.js */}
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image 
                        src="/node.png" 
                        alt="Node.js" 
                        width={64} 
                        height={64} 
                        className="object-contain"
                      />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">Node.js</span>
                  </div>

                  {/* Express.js */}
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image 
                        src="/expressjs.png" 
                        alt="Express.js" 
                        width={64} 
                        height={64} 
                        className="object-contain"
                      />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">Express.js</span>
                  </div>

                  {/* TypeScript */}
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image 
                        src="/typescript.png" 
                        alt="TypeScript" 
                        width={64} 
                        height={64} 
                        className="object-contain"
                      />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">TypeScript</span>
                  </div>

                  {/* Git */}
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image 
                        src="/git.png" 
                        alt="Git" 
                        width={64} 
                        height={64} 
                        className="object-contain"
                      />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">Git</span>
                  </div>

                  {/* GitHub */}
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image 
                        src="/github.png" 
                        alt="GitHub" 
                        width={64} 
                        height={64} 
                        className="object-contain"
                      />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">GitHub</span>
                  </div>
                </div>

                {/* Second identical set */}
                <div className="flex items-center space-x-12 shrink-0 px-6">
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image src="/javascript.png" alt="JavaScript" width={64} height={64} className="object-contain" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">JavaScript</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image src="/html5.png" alt="HTML5" width={64} height={64} className="object-contain" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">HTML5</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image src="/css3.png" alt="CSS3" width={64} height={64} className="object-contain" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">CSS3</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image src="/react.png" alt="React" width={64} height={64} className="object-contain" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">React</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image src="/nextjs.svg" alt="Next.js" width={64} height={64} className="object-contain" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">Next.js</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image src="/node.png" alt="Node.js" width={64} height={64} className="object-contain" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">Node.js</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image src="/expressjs.png" alt="Express.js" width={64} height={64} className="object-contain" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">Express.js</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image src="/typescript.png" alt="TypeScript" width={64} height={64} className="object-contain" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">TypeScript</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image src="/git.png" alt="Git" width={64} height={64} className="object-contain" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">Git</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image src="/github.png" alt="GitHub" width={64} height={64} className="object-contain" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">GitHub</span>
                  </div>
                </div>

                {/* Third identical set */}
                <div className="flex items-center space-x-12 shrink-0 px-6">
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image src="/javascript.png" alt="JavaScript" width={64} height={64} className="object-contain" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">JavaScript</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image src="/html5.png" alt="HTML5" width={64} height={64} className="object-contain" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">HTML5</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image src="/css3.png" alt="CSS3" width={64} height={64} className="object-contain" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">CSS3</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image src="/react.png" alt="React" width={64} height={64} className="object-contain" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">React</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image src="/nextjs.svg" alt="Next.js" width={64} height={64} className="object-contain" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">Next.js</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image src="/node.png" alt="Node.js" width={64} height={64} className="object-contain" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">Node.js</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image src="/expressjs.png" alt="Express.js" width={64} height={64} className="object-contain" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">Express.js</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image src="/typescript.png" alt="TypeScript" width={64} height={64} className="object-contain" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">TypeScript</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image src="/git.png" alt="Git" width={64} height={64} className="object-contain" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">Git</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image src="/github.png" alt="GitHub" width={64} height={64} className="object-contain" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">GitHub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-32">
            <h2 className="text-4xl md:text-6xl font-light mb-12 text-black">Education</h2>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">
                      Bachelor of Engineering in Information Technology
                    </h3>
                    <div className="text-gray-600 mb-2">
                      Sardar Vallabhbhai Patel Institute of Technology, Anand, Gujarat
                    </div>
                    <div className="text-gray-500 text-sm">July 2019 - August 2023</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-black">7.71</div>
                    <div className="text-gray-600 text-sm">CGPA</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-lg font-medium text-black mb-2">Class 12th - CBSE</h4>
                  <div className="text-gray-600 mb-2">Jawahar Navodaya Vidyalaya, Kodinar, Gujarat</div>
                  <div className="text-gray-500 text-sm mb-2">June 2017 - April 2018</div>
                  <div className="text-xl font-bold text-black">84%</div>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-lg font-medium text-black mb-2">Class 10th - CBSE</h4>
                  <div className="text-gray-600 mb-2">Jawahar Navodaya Vidyalaya, Kodinar, Gujarat</div>
                  <div className="text-gray-500 text-sm mb-2">July 2015 - May 2016</div>
                  <div className="text-xl font-bold text-black">9.4</div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Work Section */}
          <div id="work" className="mb-32">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl md:text-6xl font-light text-black">Featured Projects</h2>
              <Link
                href="/works"
                className="text-black border-b-2 border-black pb-1 hover:border-gray-600 transition-colors flex items-center space-x-2"
              >
                <span>View all projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-20">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="relative group overflow-hidden rounded-lg bg-white">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <a
                            href={project.liveUrl}
                            className="bg-white text-black p-3 rounded-full hover:bg-gray-100 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                          <a
                            href={project.githubUrl}
                            className="bg-white text-black p-3 rounded-full hover:bg-gray-100 transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm text-gray-500">{project.category}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-blue-600">{project.type}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-light mb-6 text-black">{project.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="text-black border-b-2 border-black pb-1 hover:border-gray-600 transition-colors"
                      >
                        View Project →
                      </a>
                      <a
                        href={project.githubUrl}
                        className="text-gray-600 border-b-2 border-gray-300 pb-1 hover:border-gray-600 transition-colors"
                      >
                        View Code →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div id="contact" className="mb-20">
            <h2 className="text-4xl md:text-6xl font-light mb-12 text-black">Let's Connect</h2>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-8 text-black">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border-gray-200 focus:border-black focus:ring-black"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border-gray-200 focus:border-black focus:ring-black"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full border-gray-200 focus:border-black focus:ring-black"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-4 text-lg font-medium"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-light mb-8 text-black">Get in touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium text-black">Email</div>
                        <div className="text-gray-600">prince.bhesaniya@email.com</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium text-black">Phone</div>
                        <div className="text-gray-600">+91 98765 43210</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium text-black">Location</div>
                        <div className="text-gray-600">Gujarat, India</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Availability Status */}
                <div className="bg-white p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-black">Available for opportunities</span>
                  </div>
                  <p className="text-gray-600 text-sm">Open to challenging positions in reputable organizations</p>
                </div>

                {/* Quick Stats */}
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-medium text-black mb-4">Quick Stats</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-black">1.5+</div>
                      <div className="text-xs text-gray-600">Years Exp</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-black">7.71</div>
                      <div className="text-xs text-gray-600">CGPA</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-black">5+</div>
                      <div className="text-xs text-gray-600">Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            {/* Achievement */}
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-4xl font-bold text-black">SVPIT</span>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
              <div className="text-sm text-gray-600">Information Technology Engineering</div>
            </div>

            {/* Start Project Button */}
            <a href="#contact">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 text-lg font-medium"
              >
                Hire Me
              </Button>
            </a>
          </div>
        </div>
      </main>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-purple-100 rounded-full opacity-15 blur-2xl"></div>
      </div>
    </div>
  )
}
