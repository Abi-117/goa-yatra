import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import thailandPackage from "@/assets/thailand-package.jpg";
import baliPackage from "@/assets/bali-package.jpg";
import maldivesPackage from "@/assets/maldives-package.jpg";
import resort1 from "@/assets/resort-1.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

  const goaPackages = [
  {
    id: 1,
    name: "Basic Package – 2N / 3 Days",
    price: "₹10,800 / Couple",
    duration: "2 Nights & 3 Days",
    image: gallery1,
  },
  {
    id: 2,
    name: "Adventure Package – 2N / 3 Days",
    price: "₹15,500 / Couple",
    duration: "2 Nights & 3 Days",
    image: gallery1,
  },
  {
    id: 3,
    name: "Premium Package – 3N / 4 Days",
    price: "₹17,000 / Couple",
    duration: "3 Nights & 4 Days",
    image: gallery1,
  },
];

const Index = () => {
  
  return (
    <Layout>
      {/* Hero Section - Matching PDF Style */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroRestaurant})` }}
        >
          <div className="absolute inset-0 bg-background/60" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl title-italic text-primary leading-tight mb-6">
            Discover Your Next Extraordinary Journey
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 mb-10 max-w-3xl mx-auto italic">
            We take pride in helping travelers explore breathtaking destinations, enjoy seamless trips, and create unforgettable memories.
          </p>
          <Link to="/packages" className="btn-hero">
            Start Your Adventure
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Section - Hotel in Yatra Tours */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${resort1})` }}
      >
        <div className="absolute inset-0 bg-background/85" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wider mb-8">
                What We Offer
              </h2>
              
              <ul className="space-y-4 text-foreground/90 uppercase text-sm tracking-wide">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg">•</span>
                  Premium Hotel Stays
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg">•</span>
                  Sightseeing as per Itinerary
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg">•</span>
                  Exciting Adventure Activities
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg">•</span>
                  Arrival & Departure Support
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg">•</span>
                  Professional Tour Guide

                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg">•</span>
                  Services of tour guideAssistance during arrival & departure
                </li>
                 <li className="flex items-start gap-3">
                  <span className="text-primary text-lg">•</span>
                   Professional tour guide service
                </li>
                

              </ul>

              <Link to="/about" className="btn-outline-hero mt-8 inline-flex">
                About Us
              </Link>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src={resort1} 
                alt="Luxury Resort" 
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
          </div>
          
          <p className="text-center text-foreground/60 text-xs uppercase tracking-wider mt-12">
            If cancelled as per the hotel non refunded/cab policy + processing fees + modify facilities + no refunds for unused nights or early check-out
          </p>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 bg-background">
  <div className="container mx-auto px-4 lg:px-8">
    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center mb-12 uppercase tracking-wider">
      Packages
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {goaPackages.map((pkg) => (
        <div key={pkg.id} className="card-travel group">
          <div className="relative overflow-hidden aspect-[3/4]">
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
              <p className="text-foreground/80 text-sm mb-2">{pkg.duration}</p>
              <p className="text-foreground font-semibold">Starting @ {pkg.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <Link to="/packages" className="btn-teal">View More</Link>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${resort1})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <p className="text-primary font-semibold uppercase tracking-widest mb-4">
            Get Started Today!
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl title-italic text-foreground mb-8">
            Join Us and Discover More!
          </h2>
          <Link to="/packages" className="btn-hero">
            Book Now
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
