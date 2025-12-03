import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users, Award, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-beach.jpg";
import resort1 from "@/assets/resort-1.jpg";
import thailandPackage from "@/assets/thailand-package.jpg";
import baliPackage from "@/assets/bali-package.jpg";
import maldivesPackage from "@/assets/maldives-package.jpg";

const stats = [
  { icon: MapPin, value: "50+", label: "Destinations" },
  { icon: Users, value: "10K+", label: "Happy Travelers" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Support" },
];

const featuredPackages = [
  {
    id: 1,
    name: "Thailand",
    duration: "5 Days & 4 Nights",
    price: "₹24,450",
    image: thailandPackage,
  },
  {
    id: 2,
    name: "Bali",
    duration: "6 Days & 5 Nights",
    price: "₹32,999",
    image: baliPackage,
  },
  {
    id: 3,
    name: "Maldives",
    duration: "4 Days & 3 Nights",
    price: "₹45,999",
    image: maldivesPackage,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-hero" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
              Premium Travel Experiences
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-accent-foreground leading-tight mb-6">
              Discover Your Next{" "}
              <span className="text-primary">Extraordinary</span> Journey
            </h1>
            <p className="text-lg md:text-xl text-accent-foreground/80 mb-8 max-w-2xl">
              We take pride in helping people from all walks of life achieve the journey and peace they deserve. Let us craft your perfect adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/packages" className="btn-hero">
                Start Your Adventure
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="btn-outline-hero">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-display font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Popular Destinations
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Featured Travel Packages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our handpicked destinations offering unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <div key={pkg.id} className="card-travel group">
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-display font-bold text-accent-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-accent-foreground/70 text-sm mb-3">
                      {pkg.duration}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold text-lg">
                        Starting @ {pkg.price}
                      </span>
                      <span className="text-xs text-accent-foreground/60">
                        Air Fare + Visa Extra
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/packages" className="btn-hero">
              View All Packages
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={resort1}
                alt="Luxury Resort"
                className="rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-gold hidden md:block">
                <div className="text-3xl font-display font-bold">15+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
            <div>
              <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Your Trusted Travel Partner Since 2009
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Yatra Tours, we believe every journey should be extraordinary. With over 15 years of experience in crafting memorable travel experiences, we've helped thousands of travelers discover the world's most beautiful destinations.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From luxury resorts to adventure activities, we handle every detail so you can focus on creating memories that last a lifetime.
              </p>
              <Link to="/about" className="btn-hero">
                Discover Our Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-accent-foreground mb-4">
            Get Started Today!
          </h2>
          <p className="text-accent-foreground/70 mb-8 max-w-2xl mx-auto">
            Join us and discover the world's most extraordinary destinations. Your dream vacation awaits.
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

export default Index;
