"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="px-6 md:px-8 pt-12 md:pt-20 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <h1 className="text-6xl md:text-8xl font-light leading-none mb-8 text-black">
              Let's <span className="block">Connect</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
              </p>
              <div className="text-right">
                <div className="text-4xl font-light text-black mb-2">24h</div>
                <div className="text-gray-600">Response Time</div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mb-16 bg-white p-8 rounded-lg text-center">
            <div className="text-2xl font-light text-black mb-4">
              "Prince delivered exceptional work on our e-commerce platform. His attention to detail and technical
              expertise exceeded our expectations."
            </div>
            <div className="text-gray-600">— Sarah Johnson, CEO at TechStart</div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-8 text-black">Send me a message</h2>
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
                      className="w-full"
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
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
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
                    rows={6}
                    className="w-full"
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
                <h2 className="text-3xl font-light mb-8 text-black">Get in touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-gray-600" />
                    <div>
                      <div className="font-medium text-black">Email</div>
                      <div className="text-gray-600">princebhesaniya55@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-gray-600" />
                    <div>
                      <div className="font-medium text-black">Phone</div>
                      <div className="text-gray-600">+919904395990</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-gray-600" />
                    <div>
                      <div className="font-medium text-black">Location</div>
                      <div className="text-gray-600">Mumbai, India</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-medium mb-4 text-black">Follow me</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-gray-600" />
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3 text-black">Availability</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Available for new projects</span>
                </div>
                <p className="text-sm text-gray-500">I typically respond within 24 hours</p>
              </div>

              {/* FAQ */}
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4 text-black">Quick FAQ</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-gray-700">What's your typical project timeline?</div>
                    <div className="text-gray-600">Most projects take 2-8 weeks depending on complexity.</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-700">Do you work with international clients?</div>
                    <div className="text-gray-600">Yes, I work with clients worldwide across different time zones.</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-700">What's included in your service?</div>
                    <div className="text-gray-600">Development, testing, deployment, and 30 days of support.</div>
                  </div>
                </div>
              </div>
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
