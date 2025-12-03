import { Link } from "react-router-dom";
import { ArrowRight, Shield, AlertTriangle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import aboutRestaurant from "@/assets/about-restaurant.jpg";
import resort1 from "@/assets/resort-1.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutRestaurant})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl title-italic text-primary mb-6">
            About Your Company
          </h1>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wider mb-6">
                Crafting Extraordinary Journeys Since 2009
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Yatra Tours was founded with a simple vision: to make world-class travel experiences accessible to everyone. Over the years, we have grown from a small team of passionate travelers to one of the most trusted names in the tourism industry.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We take pride in helping people from all walks of life achieve the journey and peace they deserve. Our dedicated team works tirelessly to ensure every trip is perfectly planned, from the moment you book until you return home with unforgettable memories.
              </p>
              
              <Link to="/packages" className="btn-hero inline-flex">
                View Packages
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={aboutRestaurant}
                alt="Ocean View Restaurant"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Disclaimers */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center uppercase tracking-wider mb-12">
            Important Disclaimers
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Natural Calamity Disclaimer */}
            <div className="bg-background p-8 rounded-xl border border-border">
              <div className="w-14 h-14 rounded-full bg-destructive/20 flex items-center justify-center mb-6">
                <AlertTriangle className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground uppercase tracking-wider mb-4">
                Natural Calamity Disclaimer
              </h3>
              <p className="text-muted-foreground leading-relaxed uppercase text-sm">
                Loss of life or property or valuables, baggage due to any sort of natural calamities like tsunami, earthquake, volcanic eruption, cyclone, typhoon etc.
              </p>
            </div>

            {/* Manmade Disaster Disclaimer */}
            <div className="bg-background p-8 rounded-xl border border-border">
              <div className="w-14 h-14 rounded-full bg-destructive/20 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground uppercase tracking-wider mb-4">
                Manmade Disaster Disclaimer
              </h3>
              <p className="text-muted-foreground leading-relaxed uppercase text-sm">
                Trips to Nature is also not responsible for any loss of life or property or valuables, baggage due to manmade disaster like fire, theft, war, riots etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${resort1})` }}
      >
        <div className="absolute inset-0 bg-background/85" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wider mb-8">
              Our Services Include
            </h2>
            
            <ul className="space-y-4 text-foreground/90 uppercase text-sm tracking-wide mb-8">
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                Sightseeing tours as per group size
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                Adventure activities (chargeable)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                Hotel service with breakfast
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                Dinner arrangements
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                Arrival and departure assistance
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                Professional tour guide services
              </li>
            </ul>

            <Link to="/services" className="btn-outline-hero inline-flex">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-primary font-semibold uppercase tracking-widest mb-4">
            Get Started Today!
          </p>
          <h2 className="text-4xl md:text-5xl title-italic text-foreground mb-8">
            Ready to Start Your Journey?
          </h2>
          <Link to="/contact" className="btn-hero">
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
