"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const handleStartProject = () => {
    const phoneNumber = "+971586017709"
    const message = "Hello! I'd like to start a construction project. Can you help me?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section
      id="home"
      className="relative text-white py-28 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(20, 30, 40, 0.85), rgba(30, 40, 50, 0.5)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text Content */}
          <div className="bg-black/10 backdrop-blur-sm p-8 rounded-lg">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Building Your Dreams Into Reality
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              Professional construction services with over 20 years of experience. From residential homes to
              commercial buildings, we deliver excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#2596be] hover:bg-[#1e7a9e] text-white font-bold px-8 py-6 flex items-center gap-2 group"
                onClick={handleStartProject}
              >
                Start Your Project
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-[#2596be] font-bold px-8 py-6"
              >
                View Our Work
              </Button>
            </div>
          </div>

          {/* Right Side: Image with 3D Tilt Effect */}
          <div 
            className="group [perspective:1000px]"
          >
            <div
              className="relative rounded-lg overflow-hidden shadow-2xl transition-transform duration-500 ease-in-out group-hover:[transform:rotateY(-15deg)]"
            >
              <Image
                src="/luxury-villa.jpeg"
                alt="Luxury Villa Project"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 