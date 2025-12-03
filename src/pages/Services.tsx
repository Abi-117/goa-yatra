import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Hotel, 
  MapPin, 
  Compass, 
  Clock, 
  Utensils, 
  Users, 
  Car, 
  Headphones 
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import resort1 from "@/assets/resort-1.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const services = [
  {
    icon: Hotel,
    title: "Luxury Hotel Stays",
    description: "Stay in handpicked luxury properties and resorts that offer world-class amenities and breathtaking views.",
  },
  {
    icon: MapPin,
    title: "Sightseeing Tours",
    description: "Explore iconic landmarks and hidden gems with our expertly curated sightseeing tours tailored to your group size.",
  },
  {
    icon: Compass,
    title: "Adventure Activities",
    description: "From water sports to mountain treks, experience thrilling adventures with our trusted service providers.",
  },
  {
    icon: Car,
    title: "Airport Transfers",
    description: "Enjoy hassle-free arrival and departure with our premium pickup and drop-off services.",
  },
  {
    icon: Users,
    title: "Tour Guide Services",
    description: "Knowledgeable local guides who bring destinations to life with their expertise and insights.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your journey for a worry-free travel experience.",
  },
];

const hotelServices = [
  {
    icon: Utensils,
    title: "Breakfast",
    time: "7:00 AM - 9:00 AM",
    location: "In Hotel",
  },
  {
    icon: Utensils,
    title: "Dinner",
    time: "8:30 PM - 9:30 PM",
    location: "Hotel or Outside",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-accent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-accent-foreground mb-6">
              Premium Travel Services
            </h1>
            <p className="text-lg text-accent-foreground/80">
              Hotel in Yatra Tours - Luxury Properties & Similar
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Comprehensive Travel Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The itinerary & adventure activities as per service provider charge (chargeable)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-elegant border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Hotel Services
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Dining & Accommodation
              </h2>
              
              <div className="space-y-6 mb-8">
                {hotelServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{service.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{service.time}</span>
                        <span className="text-primary">• {service.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <h4 className="font-semibold text-foreground mb-4">Additional Services</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Assistance at the time of arrival and departure
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Services of professional tour guide
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Sightseeing tours as per group size
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={gallery1}
                alt="Hotel Room"
                className="rounded-xl shadow-elegant w-full h-48 object-cover"
              />
              <img
                src={gallery2}
                alt="Resort Pool"
                className="rounded-xl shadow-elegant w-full h-48 object-cover mt-8"
              />
              <img
                src={resort1}
                alt="Luxury Resort"
                className="rounded-xl shadow-elegant w-full h-48 object-cover col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resort */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-accent rounded-2xl overflow-hidden shadow-elegant">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={resort1}
                  alt="Gulmohar Beach Resort"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block self-start px-3 py-1 mb-4 text-xs font-medium rounded-full bg-primary/20 text-primary">
                  Featured Resort
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-accent-foreground mb-4">
                  Gulmohar Beach Resort
                </h2>
                <p className="text-accent-foreground/80 mb-6 leading-relaxed">
                  If you're looking for a family-friendly small hotel in Shrivardhan, look no further than Gulmohar Family Resort. Experience the perfect blend of comfort, hospitality, and natural beauty.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-accent-foreground/70">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Beachfront Location
                  </li>
                  <li className="flex items-center gap-2 text-accent-foreground/70">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Family-Friendly Amenities
                  </li>
                  <li className="flex items-center gap-2 text-accent-foreground/70">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Authentic Local Cuisine
                  </li>
                </ul>
                <button className="btn-hero self-start">
                  Book Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">
              Cancellation Policy
            </h3>
            <p className="text-muted-foreground">
              If cancelled as per the hotel policy - non-refundable for cab, no shows, or early check-out. 
              Please contact us for detailed terms and conditions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-accent-foreground mb-4">
            Ready to Experience Our Services?
          </h2>
          <p className="text-accent-foreground/70 mb-8 max-w-2xl mx-auto">
            Contact us today to plan your perfect trip with our premium services.
          </p>
          <Link to="/packages" className="btn-hero">
            View Packages
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
