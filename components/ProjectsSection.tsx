import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Container from "@/components/ui/Container"
import SectionTitle from "@/components/ui/SectionTitle"
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

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="Take a look at some of our recent successful projects"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
      </Container>
    </section>
  )
} 