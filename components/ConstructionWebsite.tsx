import Header from "./Header"
import HeroSection from "./HeroSection"
import ServicesSection from "./ServicesSection"
import AboutSection from "./AboutSection"
import ProjectsSection from "./ProjectsSection"
import TestimonialsSection from "./TestimonialsSection"
import ContactSection from "./ContactSection"
import Footer from "./Footer"

export default function ConstructionWebsite() {
  return (
    <div className="min-h-screen bg-white backdrop-blur z-40 border-b shadow-sm transition">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
} 