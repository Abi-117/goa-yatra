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
           About Booking with GoaYatra
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
                GoaYatra is committed to providing safe, comfortable, and memorable travel experiences. However, we are not responsible for any loss of life, property, valuables, or baggage caused by natural calamities such as tsunamis, earthquakes, volcanic eruptions, cyclones, floods, or other unforeseen natural events.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
               Similarly, GoaYatra will not be liable for any loss of life, property, valuables, or baggage resulting from man-made incidents including fire, theft, accidents, war, strikes, or riots. We strongly recommend travelers to take appropriate travel insurance for their safety and protection.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our goal is to ensure your journey is smooth and enjoyable, but certain situations remain beyond our control.</p>
              
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
                North Goa Sightseeing (AC Coach Tour)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                South Goa Sightseeing (AC Coach Tour)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
               Scuba Diving & Water Sports – Grand Island
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                Romantic Dinner Cruise Party
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                Arrival and depDudhsagar Waterfalls Trip
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                Adventure Boat Cruise
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                Water Sports Combo Pack
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
