import { Link } from "react-router-dom";
import { ArrowRight, Shield, AlertTriangle, Building2, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import aboutRestaurant from "@/assets/about-restaurant.jpg";
import resort1 from "@/assets/resort-1.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-accent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-accent-foreground mb-6">
              About Your Company
            </h1>
            <p className="text-lg text-accent-foreground/80">
              Discover who we are and our commitment to making your travel dreams come true
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Crafting Extraordinary Journeys Since 2009
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Yatra Tours was founded with a simple vision: to make world-class travel experiences accessible to everyone. Over the years, we have grown from a small team of passionate travelers to one of the most trusted names in the tourism industry.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We take pride in helping people from all walks of life achieve the journey and peace they deserve. Our dedicated team works tirelessly to ensure every trip is perfectly planned, from the moment you book until you return home with unforgettable memories.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-muted rounded-xl">
                  <Users className="w-8 h-8 text-primary mb-3" />
                  <div className="text-2xl font-display font-bold text-foreground">10,000+</div>
                  <div className="text-sm text-muted-foreground">Happy Travelers</div>
                </div>
                <div className="p-6 bg-muted rounded-xl">
                  <Building2 className="w-8 h-8 text-primary mb-3" />
                  <div className="text-2xl font-display font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Partner Hotels</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={aboutRestaurant}
                alt="Ocean View Restaurant"
                className="rounded-2xl shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Disclaimers */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Important Information
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Safety & Disclaimers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your safety is our priority. Please read the following important information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Natural Calamity Disclaimer */}
            <div className="bg-card p-8 rounded-xl shadow-elegant border border-border">
              <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
                <AlertTriangle className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Natural Calamity Disclaimer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Trips to Nature is not responsible for any loss of life or property or valuables, baggage due to any sort of natural calamities like tsunami, earthquake, volcanic eruption, cyclone, typhoon etc.
              </p>
            </div>

            {/* Manmade Disaster Disclaimer */}
            <div className="bg-card p-8 rounded-xl shadow-elegant border border-border">
              <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Manmade Disaster Disclaimer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Trips to Nature is also not responsible for any loss of life or property or valuables, baggage due to manmade disaster like fire, theft, war, riots etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src={resort1}
                alt="Luxury Resort Pool"
                className="rounded-2xl shadow-elegant w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Why Choose Yatra Tours?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Personalized Itineraries</h4>
                    <p className="text-muted-foreground text-sm">Every trip is tailored to your preferences and budget.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">24/7 Support</h4>
                    <p className="text-muted-foreground text-sm">Our team is always available to assist you during your journey.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Best Price Guarantee</h4>
                    <p className="text-muted-foreground text-sm">We offer competitive pricing without compromising quality.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Expert Guides</h4>
                    <p className="text-muted-foreground text-sm">Knowledgeable local guides enhance your travel experience.</p>
                  </div>
                </li>
              </ul>
              <Link to="/packages" className="btn-hero mt-8 inline-flex">
                Explore Packages
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-accent-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-accent-foreground/70 mb-8 max-w-2xl mx-auto">
            Contact us today and let us plan your perfect getaway.
          </p>
          <Link to="/packages" className="btn-hero">
            Book Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
