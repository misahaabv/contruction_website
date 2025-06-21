import { Card, CardContent } from "@/components/ui/card"
import Container from "@/components/ui/Container"
import SectionTitle from "@/components/ui/SectionTitle"
import { Star } from "lucide-react"

const testimonials = [
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
]

export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Don't just take our word for it - hear from our satisfied clients"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
      </Container>
    </section>
  )
} 