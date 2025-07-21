"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Container from "@/components/ui/Container"
import SectionTitle from "@/components/ui/SectionTitle"
import Image from "next/image"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

const projects = [
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
]

export default function ProjectsSection() {
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  )

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="Take a look at some of our recent successful projects"
        />
        <div className="relative">
          <Carousel
            opts={{ loop: true }}
            plugins={[autoplay.current]}
            className="group"
          >
            <CarouselContent
              onMouseOver={() => autoplay.current.stop()}
              onMouseLeave={() => autoplay.current.play()}
            >
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex justify-center">
                  <Card className="w-[350px] h-[420px] flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative w-full h-[200px]">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#2596be] text-white px-3 py-1 rounded-full text-sm">{project.category}</span>
                      </div>
                    </div>
                    <CardContent className="flex-1 flex flex-col justify-between p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <Link href="/projects" className="mt-auto" passHref legacyBehavior>
                        <Button
                          variant="outline"
                          className="w-full border-[#2596be] text-[#2596be] hover:bg-[#2596be] hover:text-white"
                        >
                          View Our Work
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Container>
    </section>
  )
} 