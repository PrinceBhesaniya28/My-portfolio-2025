"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Works", href: "/works" },
    { name: "Services", href: "/services" },
    { name: "Skills", href: "/skills" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 md:p-8 relative z-30">
        <Link href="/" className="text-2xl font-bold text-black">
          PB
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors ${
                pathname === item.href ? "text-black font-medium" : "text-gray-600 hover:text-black"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button className="flex items-center space-x-2 text-lg z-40" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="text-black">Menu</span>
          {isMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-20 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href ? "text-black font-medium" : "text-gray-600 hover:text-black"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
