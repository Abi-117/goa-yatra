import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import resort1 from "@/assets/resort-1.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section - Hotel Services */}
      <section 
        className="relative min-h-[80vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${resort1})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wider mb-8">
                Hotel in Yatra Tours Luxury Properties & Similar
              </h1>
              
              <ul className="space-y-5 text-foreground uppercase text-sm tracking-wide">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg">•</span>
                  Sightseeing tours as per group size the itinerary & vehicle
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg">•</span>
                  Adventure activities charge as per apply service provider charge (chargeable)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg">•</span>
                  Hotel service (Breakfast in hotel at 7AM to 9AM)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg">•</span>
                  Dinner (Available hotel out side at 8:30 PM to 9:30PM)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg">•</span>
                  Assistance at the time of arrival and departure.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg">•</span>
                  Services of tour guide
                </li>
              </ul>

              <Link to="/about" className="btn-outline-hero mt-10 inline-flex">
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
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-6 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-muted-foreground text-xs uppercase tracking-wider">
            If cancelled as per the hotel non refunded/cab policy + processing fees + modify facilities + no refunds for unused nights or early check-out
          </p>
        </div>
      </section>

      {/* Featured Resort */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center uppercase tracking-wider mb-12">
            Services
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-xl overflow-hidden shadow-elegant border border-border">
              <div className="relative h-64 md:h-80">
                <img
                  src={gallery1}
                  alt="Gulmohar Beach Resort"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl md:text-4xl title-italic text-primary mb-4">
                  Gulmohar Beach Resort
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  If you're looking for a family-friendly small hotel in Shrivardhan, look no further than Gulmohar Family Resort. Experience the perfect blend of comfort, hospitality, and natural beauty with stunning ocean views and world-class amenities.
                </p>
                <Link to="/contact" className="btn-hero inline-flex">
                  Book Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-foreground text-center uppercase tracking-wider mb-12">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Luxury Accommodations", desc: "Stay in handpicked luxury properties and resorts" },
              { title: "Sightseeing Tours", desc: "Explore iconic landmarks with expert guides" },
              { title: "Adventure Activities", desc: "Thrilling experiences with trusted providers" },
              { title: "Airport Transfers", desc: "Hassle-free pickup and drop-off services" },
              { title: "Tour Guide Services", desc: "Knowledgeable local guides for your journey" },
              { title: "24/7 Support", desc: "Round-the-clock assistance throughout your trip" },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
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
            Ready to Experience Our Services?
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

export default Services;
