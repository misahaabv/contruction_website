"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Home, Wrench, Building, FolderOpen, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const navigationItems = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#services", label: "Services", icon: Wrench },
  { href: "#about", label: "About Us", icon: Building },
  { href: "#projects", label: "Projects", icon: FolderOpen },
  { href: "#contact", label: "Contact Us", icon: Phone },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleGetQuote = () => {
    const phoneNumber = "+971 586017706"
    const message = "Hello! I'm interested in getting a quote for a construction project."
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur z-40 border-b shadow-sm transition">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 leading-[1.7rem] my-px">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo-cropped.png"
              alt="Qusoor Al Wadi Logo"
              width={200}
              height={100}
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-[#2596be] transition-colors font-medium text-base"
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
            <Button 
              onClick={handleGetQuote}
              className="bg-[#2596be] hover:bg-[#1e7a9e] text-white font-semibold px-6 py-2"
            >
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-700 hover:text-[#2596be] transition-colors font-medium text-base"
                  >
                    <IconComponent className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
              <Button 
                onClick={handleGetQuote}
                className="bg-[#2596be] hover:bg-[#1e7a9e] text-white w-fit font-semibold px-6 py-2"
              >
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 