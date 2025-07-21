"use client"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Container from "@/components/ui/Container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <section className="py-20 bg-gray-50 min-h-screen">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Projects</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of completed and ongoing projects.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="w-full h-[420px] flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
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
                  <Button
                    variant="outline"
                    className="border-[#2596be] text-[#2596be] hover:bg-[#2596be] hover:text-white mt-auto"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </>
  )
} 