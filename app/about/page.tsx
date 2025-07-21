"use client"

import Navigation from "@/components/navigation"
import Image from "next/image"
import { Coffee, Code, Music, Camera, Gamepad2, Book, Award, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const interests = [
  { icon: Code, label: "Coding", color: "text-blue-600" },
  { icon: Music, label: "Music", color: "text-purple-600" },
  { icon: Camera, label: "Photography", color: "text-green-600" },
  { icon: Gamepad2, label: "Gaming", color: "text-red-600" },
  { icon: Book, label: "Reading", color: "text-yellow-600" },
  { icon: Coffee, label: "Coffee", color: "text-orange-600" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="px-6 md:px-8 pt-12 md:pt-20 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-light leading-none mb-8 text-black">
              About <span className="block">Prince</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
              A passionate frontend developer and UI/UX designer seeking challenging opportunities to expand and utilize
              my skills in creating exceptional digital experiences.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=480"
                  alt="Prince Bhesaniya"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-black">1.5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light mb-6 text-black">Hello, I'm Prince Bhesaniya</h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    I'm a frontend developer and UI/UX designer based in Gujarat, India, with a Bachelor's degree in
                    Information Technology from SVPIT, Anand. My journey in web development combines technical expertise
                    with creative design thinking.
                  </p>
                  <p>
                    During my recent role as Junior Frontend React Developer at Opul Design, I worked extensively with
                    ReactJS and collaborated with dynamic teams to create responsive, user-friendly web applications. I
                    possess excellent communication skills and have an eye for detail.
                  </p>
                  <p>
                    I'm flexible to work in any environment as required and constantly seek opportunities to learn and
                    grow in the ever-evolving field of web development and design.
                  </p>
                </div>
              </div>

              {/* Education Highlight */}
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-medium text-black">Education</h3>
                </div>
                <div className="space-y-2">
                  <div className="font-medium text-gray-700">B.E. Information Technology</div>
                  <div className="text-gray-600">SVPIT, Anand, Gujarat (2019-2023)</div>
                  <div className="text-2xl font-bold text-black">7.71 CGPA</div>
                </div>
              </div>

              {/* Current Status */}
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-black">Currently Available</span>
                </div>
                <p className="text-gray-600 text-sm">Seeking challenging positions in reputable organizations</p>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-xl font-medium mb-4 text-black">When I'm not coding</h3>
                <div className="grid grid-cols-3 gap-4">
                  {interests.map((interest, index) => {
                    const IconComponent = interest.icon
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300"
                      >
                        <IconComponent className={`w-8 h-8 mb-2 ${interest.color}`} />
                        <span className="text-sm text-gray-600">{interest.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-light mb-12 text-black">Professional Journey</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-medium text-black mb-2">Junior Frontend React Developer</h3>
                    <div className="text-lg text-gray-600 mb-2">Opul Design</div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      March 2023 - August 2024
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Recent Role
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Worked extensively with ReactJS and frontend development, collaborating with a dynamic team of
                  developers to design and implement responsive, user-friendly web applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["ReactJS", "Frontend Development", "Team Collaboration", "Responsive Design"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-medium text-black mb-2">UI/UX Designer</h3>
                    <div className="text-lg text-gray-600 mb-2">Freelancing Work</div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Project-based
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    Freelance
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Worked as a UI/UX designer on freelancing projects, using Figma to create user interface and user
                  experience designs for web applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "UI/UX Design", "Web Applications", "Client Communication"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Philosophy */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-light mb-12 text-black">My Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-medium mb-4 text-black">Detail-Oriented</h3>
                <p className="text-gray-600 leading-relaxed">
                  I have an eye for detail and believe that great user experiences are built through careful attention
                  to every element and interaction.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-medium mb-4 text-black">Collaborative</h3>
                <p className="text-gray-600 leading-relaxed">
                  With excellent communication skills, I thrive in team environments and enjoy collaborating with
                  diverse groups to achieve common goals.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-medium mb-4 text-black">Adaptable</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm flexible to work in any environment as required and continuously adapt to new technologies and
                  methodologies in the field.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white p-12 rounded-lg">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-black">Let's work together</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm seeking challenging opportunities to expand and utilize my learning, skills, and knowledge. Let's
              create something amazing together.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 text-lg font-medium"
              >
                Get In Touch
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
