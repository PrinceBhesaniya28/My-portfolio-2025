"use client"

import Navigation from "@/components/navigation"

const skillCategories = [
  {
    title: "Frontend Technologies",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "Next.js", level: 90, color: "bg-black" },
      { name: "TypeScript", level: 88, color: "bg-blue-600" },
      { name: "Vue.js", level: 85, color: "bg-green-500" },
      { name: "JavaScript", level: 95, color: "bg-yellow-500" },
      { name: "HTML5", level: 98, color: "bg-orange-500" },
      { name: "CSS3", level: 95, color: "bg-blue-400" },
    ],
  },
  {
    title: "Styling & Design",
    skills: [
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "Sass/SCSS", level: 88, color: "bg-pink-500" },
      { name: "Styled Components", level: 85, color: "bg-purple-500" },
      { name: "Material-UI", level: 80, color: "bg-blue-600" },
      { name: "Figma", level: 75, color: "bg-purple-600" },
      { name: "Adobe XD", level: 70, color: "bg-pink-600" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: 82, color: "bg-green-600" },
      { name: "Express.js", level: 80, color: "bg-gray-600" },
      { name: "MongoDB", level: 75, color: "bg-green-500" },
      { name: "PostgreSQL", level: 78, color: "bg-blue-700" },
      { name: "Firebase", level: 85, color: "bg-orange-600" },
      { name: "Supabase", level: 80, color: "bg-green-600" },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", level: 90, color: "bg-orange-600" },
      { name: "Webpack", level: 75, color: "bg-blue-500" },
      { name: "Vite", level: 85, color: "bg-purple-500" },
      { name: "Docker", level: 70, color: "bg-blue-600" },
      { name: "Vercel", level: 88, color: "bg-black" },
      { name: "Netlify", level: 85, color: "bg-teal-500" },
    ],
  },
]

const certifications = [
  {
    title: "React Developer Certification",
    issuer: "Meta",
    year: "2023",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    title: "Frontend Developer Professional",
    issuer: "Google",
    year: "2023",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: "2022",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2023",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="px-6 md:px-8 pt-12 md:pt-20 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-light leading-none mb-8 text-black">
              Skills & <span className="block">Technologies</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
              A comprehensive overview of my technical expertise and the tools I use to create exceptional digital
              experiences.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl font-medium mb-8 text-black">{category.title}</h2>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-light mb-12 text-black">Experience</h2>
            <div className="space-y-8">
              {[
                {
                  year: "2023 - Present",
                  title: "Senior Frontend Developer",
                  company: "Tech Innovations Inc.",
                  description:
                    "Leading frontend development for multiple client projects, mentoring junior developers, and implementing modern web technologies.",
                },
                {
                  year: "2021 - 2023",
                  title: "Frontend Developer",
                  company: "Digital Solutions Ltd.",
                  description:
                    "Developed responsive web applications using React and Vue.js, collaborated with design teams, and optimized application performance.",
                },
                {
                  year: "2020 - 2021",
                  title: "Junior Web Developer",
                  company: "StartUp Hub",
                  description:
                    "Built landing pages and web applications, learned modern development practices, and contributed to open-source projects.",
                },
                {
                  year: "2019 - 2020",
                  title: "Freelance Developer",
                  company: "Self-Employed",
                  description:
                    "Worked with various clients to create custom websites and web applications, focusing on user experience and performance.",
                },
              ].map((job, index) => (
                <div key={index} className="flex flex-col md:flex-row md:space-x-8">
                  <div className="md:w-48 flex-shrink-0 mb-4 md:mb-0">
                    <div className="text-lg font-medium text-gray-500">{job.year}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium text-black mb-2">{job.title}</h3>
                    <div className="text-lg text-gray-600 mb-3">{job.company}</div>
                    <p className="text-gray-600 leading-relaxed">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-4xl md:text-6xl font-light mb-12 text-black">Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img src={cert.image || "/placeholder.svg"} alt={cert.title} className="w-12 h-12 object-contain" />
                  </div>
                  <h3 className="text-lg font-medium text-black mb-2">{cert.title}</h3>
                  <div className="text-gray-600 text-sm mb-1">{cert.issuer}</div>
                  <div className="text-gray-500 text-sm">{cert.year}</div>
                </div>
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
