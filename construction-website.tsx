"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Hammer, Building, Wrench, HardHat, CheckCircle, Star, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ConstructionWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white backdrop-blur z-40 border-b shadow-sm transition">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur z-40 border-b shadow-sm transition">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 leading-[1.7rem] my-px">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image
                src="/logo-cropped.png"
                alt="Qusoor Al Wadi Logo"
                width={180}
                height={90}
                className="h-16 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-[#2596be] transition-colors">
                Home
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-[#2596be] transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-[#2596be] transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-gray-700 hover:text-[#2596be] transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-[#2596be] transition-colors">
                Contact
              </Link>
              <Button className="bg-[#2596be] hover:bg-[#1e7a9e] text-white">Get Quote</Button>
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
                <Link href="#home" className="text-gray-700 hover:text-[#2596be] transition-colors">
                  Home
                </Link>
                <Link href="#services" className="text-gray-700 hover:text-[#2596be] transition-colors">
                  Services
                </Link>
                <Link href="#about" className="text-gray-700 hover:text-[#2596be] transition-colors">
                  About
                </Link>
                <Link href="#projects" className="text-gray-700 hover:text-[#2596be] transition-colors">
                  Projects
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-[#2596be] transition-colors">
                  Contact
                </Link>
                <Button className="bg-[#2596be] hover:bg-[#1e7a9e] text-white w-fit">Get Quote</Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative text-white py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(37, 150, 190, 0.8), rgba(30, 122, 158, 0.8)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content */}
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Building Your Dreams Into Reality</h1>
              <p className="text-xl mb-8 text-blue-100">
                Professional construction services with over 20 years of experience. From residential homes to
                commercial buildings, we deliver excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-[#2596be] hover:bg-gray-100">
                  Start Your Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#2596be]"
                >
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="relative z-30">
              <Image
                src="/luxury-villa.jpeg"
                alt="Luxury Villa Project"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive construction services to meet all your building needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building className="h-12 w-12 text-[#2596be]" />,
                title: "Commercial Construction",
                description:
                  "Office buildings, retail spaces, and industrial facilities built to the highest standards.",
              },
              {
                icon: <HardHat className="h-12 w-12 text-[#2596be]" />,
                title: "Residential Construction",
                description: "Custom homes and residential developments designed for modern living.",
              },
              {
                icon: <Wrench className="h-12 w-12 text-[#2596be]" />,
                title: "Renovation & Remodeling",
                description: "Transform your existing space with our expert renovation services.",
              },
              {
                icon: <Hammer className="h-12 w-12 text-[#2596be]" />,
                title: "Project Management",
                description: "End-to-end project management ensuring timely and budget-friendly completion.",
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-[#2596be]" />,
                title: "Quality Assurance",
                description: "Rigorous quality control processes to ensure exceptional results.",
              },
              {
                icon: <Building className="h-12 w-12 text-[#2596be]" />,
                title: "Design & Build",
                description: "Comprehensive design and construction services under one roof.",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/modern-house.jpeg"
                alt="Modern House Construction"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">20+ Years of Excellence</h2>
              <p className="text-lg text-gray-600 mb-6">
                Qusoor Al Wadi has been a trusted name in construction for over two decades. We've built our reputation
                on quality craftsmanship, reliable service, and innovative solutions.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2596be] mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2596be] mb-2">20+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2596be] mb-2">100%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2596be] mb-2">50+</div>
                  <div className="text-gray-600">Expert Team</div>
                </div>
              </div>
              <Button className="bg-[#2596be] hover:bg-[#1e7a9e] text-white">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent successful projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dr. Khawlah Medical Center",
                category: "Commercial",
                image: "/medical-center.jpeg",
              },
              {
                title: "Luxury Residential Villa",
                category: "Residential",
                image: "/luxury-villa.jpeg",
              },
              {
                title: "Modern Family Home",
                category: "Residential",
                image: "/modern-house.jpeg",
              },
              {
                title: "Commercial Office Building",
                category: "Commercial",
                image: "/medical-center.jpeg",
              },
              {
                title: "Contemporary Villa Design",
                category: "Residential",
                image: "/luxury-villa.jpeg",
              },
              {
                title: "Modern Architecture Project",
                category: "Residential",
                image: "/modern-house.jpeg",
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#2596be] text-white px-3 py-1 rounded-full text-sm">{project.category}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <Button
                    variant="outline"
                    className="border-[#2596be] text-[#2596be] hover:bg-[#2596be] hover:text-white"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner",
                content:
                  "Qusoor Al Wadi transformed our vision into reality. The attention to detail and professionalism was outstanding.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Business Owner",
                content:
                  "Our office building was completed on time and within budget. Excellent communication throughout the project.",
                rating: 5,
              },
              {
                name: "Emily Davis",
                role: "Property Developer",
                content:
                  "I've worked with many contractors, but Qusoor Al Wadi stands out for their quality and reliability.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your construction project? Contact us for a free consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-[#2596be]" />
                  <span className="text-gray-700">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-[#2596be]" />
                  <span className="text-gray-700">info@qusooralwadi.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-[#2596be]" />
                  <span className="text-gray-700">123 Construction Ave, Builder City, BC 12345</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h4>
                <div className="space-y-2 text-gray-700">
                  <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                  <div>Saturday: 9:00 AM - 4:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Request a Quote</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#2596be]">
                      <option>Select project type</option>
                      <option>Residential Construction</option>
                      <option>Commercial Construction</option>
                      <option>Renovation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                    <Textarea placeholder="Tell us about your project..." rows={4} />
                  </div>
                  <Button className="w-full bg-[#2596be] hover:bg-[#1e7a9e] text-white">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Find Us</h3>
            <Card>
              <CardContent className="p-0">
                <div className="w-full h-96 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7547!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Qusoor Al Wadi Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo-cropped.png"
                alt="Qusoor Al Wadi Logo"
                width={160}
                height={80}
                className="h-16 w-auto"
              />
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Commercial Construction
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Residential Construction
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Renovation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Project Management
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    News
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(555) 123-4567</li>
                <li>info@qusooralwadi.com</li>
                <li>
                  123 Construction Ave
                  <br />
                  Builder City, BC 12345
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Qusoor Al Wadi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
