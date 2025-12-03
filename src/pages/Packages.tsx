import { Link } from "react-router-dom";
import { ArrowRight, Check, Plane, Hotel, Utensils, Camera } from "lucide-react";
import Layout from "@/components/layout/Layout";
import thailandPackage from "@/assets/thailand-package.jpg";
import baliPackage from "@/assets/bali-package.jpg";
import maldivesPackage from "@/assets/maldives-package.jpg";
import dubaiPackage from "@/assets/dubai-package.jpg";
import goaPackage from "@/assets/goa-package.jpg";
import singaporePackage from "@/assets/singapore-package.jpg";

const packages = [
  {
    id: 1,
    name: "Thailand",
    duration: "5 Days & 4 Nights",
    price: "₹24,450",
    image: thailandPackage,
    highlights: ["Bangkok City Tour", "Pattaya Beach", "Safari World", "Thai Massage"],
  },
  {
    id: 2,
    name: "Bali",
    duration: "6 Days & 5 Nights",
    price: "₹32,999",
    image: baliPackage,
    highlights: ["Ubud Rice Terraces", "Tanah Lot Temple", "Kuta Beach", "Spa Treatment"],
  },
  {
    id: 3,
    name: "Maldives",
    duration: "4 Days & 3 Nights",
    price: "₹45,999",
    image: maldivesPackage,
    highlights: ["Water Villa Stay", "Snorkeling", "Sunset Cruise", "Island Hopping"],
  },
  {
    id: 4,
    name: "Dubai",
    duration: "5 Days & 4 Nights",
    price: "₹38,999",
    image: dubaiPackage,
    highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Palm Jumeirah"],
  },
  {
    id: 5,
    name: "Goa",
    duration: "3 Days & 2 Nights",
    price: "₹12,999",
    image: goaPackage,
    highlights: ["Beach Hopping", "Old Goa Churches", "Water Sports", "Nightlife"],
  },
  {
    id: 6,
    name: "Singapore",
    duration: "4 Days & 3 Nights",
    price: "₹35,999",
    image: singaporePackage,
    highlights: ["Marina Bay Sands", "Sentosa Island", "Gardens by the Bay", "Night Safari"],
  },
];

const inclusions = [
  { icon: Hotel, label: "Luxury Hotels" },
  { icon: Utensils, label: "Meals Included" },
  { icon: Plane, label: "Transfers" },
  { icon: Camera, label: "Sightseeing" },
];

const Packages = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-accent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
              Our Packages
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-accent-foreground mb-6">
              Explore Our Travel Packages
            </h1>
            <p className="text-lg text-accent-foreground/80">
              Discover curated travel experiences designed for every type of traveler
            </p>
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl font-display font-semibold text-foreground">
              What's Included in Our Packages
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {inclusions.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            * Air Fare + Visa charges are extra for international packages
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="card-travel group bg-card border border-border"
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/30 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="inline-block self-start px-3 py-1 mb-3 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                      {pkg.duration}
                    </span>
                    <h3 className="text-3xl font-display font-bold text-accent-foreground mb-4">
                      {pkg.name}
                    </h3>
                    
                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {pkg.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-accent-foreground/80">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-accent-foreground/20">
                      <div>
                        <span className="text-xs text-accent-foreground/60 block">Starting @</span>
                        <span className="text-2xl font-display font-bold text-primary">
                          {pkg.price}
                        </span>
                      </div>
                      <button className="px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-accent rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-accent-foreground mb-2">
                Can't find what you're looking for?
              </h2>
              <p className="text-accent-foreground/70">
                Contact us for custom packages tailored to your needs.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="tel:+919172994022" className="btn-hero whitespace-nowrap">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-accent-foreground mb-4">
            Join Us and Discover More!
          </h2>
          <p className="text-accent-foreground/70 mb-8 max-w-2xl mx-auto">
            Contact: +91 9362556555 | Website: www.joytourism.in
          </p>
          <Link to="/services" className="btn-hero">
            View Our Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;
