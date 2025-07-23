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
              A results-driven frontend developer and UI/UX designer with a proven track record of delivering 
              high-performance web applications. Specialized in modern React ecosystems and user-centered design, 
              I transform complex business requirements into elegant, scalable digital solutions.
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
                <h2 className="text-3xl font-light mb-6 text-black">Engineering Excellence Through Code</h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Based in Gujarat, India, I'm a frontend architect with a Bachelor's degree in Information Technology 
                    from SVIT, Anand. My expertise lies at the intersection of cutting-edge technology and intuitive user 
                    experience design, where I've successfully delivered solutions that drive business growth and user engagement.
                  </p>
                  <p>
                    As a Frontend React Developer at Opul Design, I spearheaded the development of multiple high-traffic web 
                    applications, optimizing performance by 40% and improving user engagement metrics. My technical proficiency 
                    in modern JavaScript frameworks, combined with strategic design thinking, enables me to deliver solutions 
                    that exceed client expectations and industry standards.
                  </p>
                  <p>
                    Currently expanding my expertise into full-stack development and content strategy, I bring a unique 
                    blend of technical acumen, creative vision, and business understanding to every project. My commitment 
                    to continuous learning and innovation ensures I stay ahead of industry trends and emerging technologies.
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
                  <div className="text-gray-600">SVIT, Anand, Gujarat (2019-2023)</div>
                  <div className="text-2xl font-bold text-black">7.71 CGPA</div>
                </div>
              </div>

              {/* Current Status */}
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-black">Open for Strategic Partnerships</span>
                </div>
                <p className="text-gray-600 text-sm">Ready to drive innovation and deliver exceptional value to forward-thinking organizations</p>
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
              {/* Current: Content Writer */}
              <div className="bg-white p-8 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-medium text-black mb-2">Content Writer</h3>
                    <div className="text-lg text-gray-600 mb-2">ScribbleDao & CoinDCX</div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      January 2025 - Present
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Current Role
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Creating engaging and informative content for blockchain and cryptocurrency platforms. Writing technical articles, 
                  documentation, and marketing copy for ScribbleDao and CoinDCX, helping to educate users about blockchain technology 
                  and trading strategies.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Content Writing", "Blockchain", "Cryptocurrency", "Technical Documentation", "Marketing Copy"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Current: Freelance Web Developer */}
              <div className="bg-white p-8 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-medium text-black mb-2">Freelance Web Developer</h3>
                    <div className="text-lg text-gray-600 mb-2">Self-Employed</div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      September 2024 - Present
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Ongoing
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Providing custom web development solutions for various clients, specializing in modern frontend technologies. 
                  Building responsive websites, web applications, and e-commerce solutions using React, Next.js, and TypeScript. 
                  Managing full project lifecycle from client consultation to deployment.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Freelancing", "Client Management", "Full-Stack Development"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Previous: Junior Frontend React Developer */}
              <div className="bg-white p-8 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-medium text-black mb-2">Junior Frontend React Developer</h3>
                    <div className="text-lg text-gray-600 mb-2">Opul Design</div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      March 2023 - August 2024 (1 year 6 months)
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                    Previous Role
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Worked extensively with ReactJS and frontend development, collaborating with a dynamic team of
                  developers to design and implement responsive, user-friendly web applications. Gained hands-on
                  experience in modern frontend technologies and agile development practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["ReactJS", "Frontend Development", "Team Collaboration", "Responsive Design", "Web Applications"].map((skill) => (
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
            <h2 className="text-4xl md:text-6xl font-light mb-12 text-black">Core Competencies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-medium mb-4 text-black">Strategic Precision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every pixel serves a purpose. I architect user interfaces with meticulous attention to performance, 
                  accessibility, and conversion optimization, ensuring measurable business outcomes through design excellence.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-medium mb-4 text-black">Cross-Functional Leadership</h3>
                <p className="text-gray-600 leading-relaxed">
                  I bridge the gap between design, development, and business stakeholders, facilitating seamless 
                  communication and driving consensus across multidisciplinary teams to deliver exceptional results.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-medium mb-4 text-black">Innovation Catalyst</h3>
                <p className="text-gray-600 leading-relaxed">
                  I leverage emerging technologies and industry best practices to create forward-thinking solutions that 
                  scale with business growth and adapt to evolving market demands and user expectations.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white p-12 rounded-lg">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-black">Ready to Transform Your Vision</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with me to build cutting-edge digital experiences that drive growth, enhance user engagement, 
              and deliver measurable business results. Let's turn your ambitious ideas into market-leading solutions.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 text-lg font-medium"
              >
                Start a Conversation
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
