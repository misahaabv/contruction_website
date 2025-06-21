"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Container from "@/components/ui/Container"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactSection() {
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const phoneNumber = "+971586017706"
    const message = "Hello! I'd like to discuss a construction project."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-lg text-gray-500 mt-2">Any question or remarks? Just write us a message!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Form */}
          <Card className="p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <Input id="phone" type="tel" placeholder="Phone Number" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Type your message..." rows={6} />
              </div>
              <Button type="submit" className="w-full bg-[#2596be] hover:bg-[#1e7a9e] text-white font-semibold py-4">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Right Column: Info & Map */}
          <div className="space-y-8">
            <Card className="p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#2596be] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">Qusoor Al Wadi Building Contracting LLC, Fujairah, UAE</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#2596be] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <a
                      href={`https://wa.me/971586017706`}
                      onClick={handleWhatsAppClick}
                      className="text-gray-600 hover:text-[#2596be]"
                    >
                      +971 586017706
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#2596be] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <a href="mailto:info@qusooralwadi.com" className="text-gray-600 hover:text-[#2596be]">
                      info@qusooralwadi.com
                    </a>
                  </div>
                </div>
              </div>
            </Card>
            <div className="rounded-lg overflow-hidden shadow-lg h-[320px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.247976456407!2d56.269550074391354!3d25.59667491540648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef4334a8d2d2299%3A0x1f8fb761429a9c0b!2sQusoor%20Al%20Wadi%20Building%20Contracting%20LLC!5e0!3m2!1sen!2sin!4v1750506915155!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Qusoor Al Wadi Location"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 