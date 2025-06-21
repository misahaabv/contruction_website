import { Button } from "@/components/ui/button"
import Container from "@/components/ui/Container"
import Image from "next/image"

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "20+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "50+", label: "Expert Team" },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <Container>
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
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[#2596be] mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            <Button className="bg-[#2596be] hover:bg-[#1e7a9e] text-white">Learn More About Us</Button>
          </div>
        </div>
      </Container>
    </section>
  )
} 