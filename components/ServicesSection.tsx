import { Card, CardContent } from "@/components/ui/card"
import Container from "@/components/ui/Container"
import SectionTitle from "@/components/ui/SectionTitle"
import { Building, Wrench, HardHat, CheckCircle, Hammer } from "lucide-react"

const services = [
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
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title="Our Services"
          subtitle="We offer comprehensive construction services to meet all your building needs"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
} 