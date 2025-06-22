"use client"

import Container from "@/components/ui/Container"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+971586017709"
    const message = "Hello! I'd like to discuss a construction project."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo-cropped.png"
                alt="Qusoor Al Wadi Logo"
                width={160}
                height={80}
                className="h-16 w-auto"
              />
              <span className="text-2xl font-bold">Qusoor Al Wadi</span>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              Building the future with precision and passion. Your trusted partner in construction from concept to completion.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:col-span-2">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-200">Services</h4>
              <ul className="space-y-3 text-base text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Commercial</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Residential</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Renovation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Management</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-200">Company</h4>
              <ul className="space-y-3 text-base text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Our Team</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">News</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-200">Contact</h4>
              <ul className="space-y-3 text-base text-gray-400">
                <li>
                  <button onClick={handleWhatsAppClick} className="hover:text-white transition-colors cursor-pointer text-left">
                    +971 586017709
                  </button>
                </li>
                <li>
                  <a href="mailto:info@qusooralwadi.com" className="hover:text-white transition-colors">qusooralwadi@gmail.com</a>
                </li>
                <li className="leading-snug">
                  Qusoor Al Wadi Contracting<br/>Sharjah,Fujairah, UAE
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Qusoor Al Wadi. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </Container>
    </footer>
  )
} 