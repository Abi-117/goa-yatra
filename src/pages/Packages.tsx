import { Link } from "react-router-dom";
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
    duration: "5 Days and 4 Nights Tour",
    price: "Rs.24450/-",
    image: thailandPackage,
    note: "Air Fare + visa Extra",
  },
  {
    id: 2,
    name: "Bali",
    duration: "6 Days and 5 Nights Tour",
    price: "Rs.32999/-",
    image: baliPackage,
    note: "Air Fare + visa Extra",
  },
  {
    id: 3,
    name: "Maldives",
    duration: "4 Days and 3 Nights Tour",
    price: "Rs.45999/-",
    image: maldivesPackage,
    note: "Air Fare + visa Extra",
  },
  {
    id: 4,
    name: "Dubai",
    duration: "5 Days and 4 Nights Tour",
    price: "Rs.38999/-",
    image: dubaiPackage,
    note: "Air Fare + visa Extra",
  },
  {
    id: 5,
    name: "Goa",
    duration: "3 Days and 2 Nights Tour",
    price: "Rs.12999/-",
    image: goaPackage,
    note: "Per Person",
  },
  {
    id: 6,
    name: "Singapore",
    duration: "4 Days and 3 Nights Tour",
    price: "Rs.35999/-",
    image: singaporePackage,
    note: "Air Fare + visa Extra",
  },
];

const Packages = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground uppercase tracking-wider">
            Packages
          </h1>
        </div>
      </section>

      {/* Packages Grid - Poster Style */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="relative group cursor-pointer"
              >
                {/* Package Card - Poster Style */}
                <div className="relative bg-gradient-to-b from-primary to-accent rounded-lg overflow-hidden shadow-elegant">
                  {/* Header */}
                  <div className="p-4 text-center">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-background">
                        {pkg.duration.split(' ')[0]} <span className="text-2xl">{pkg.duration.split(' ')[1]}</span> {pkg.duration.split(' ')[2]}
                      </span>
                      <div className="text-right text-background text-xs uppercase">
                        <div>JOY</div>
                        <div>TOURISM</div>
                      </div>
                    </div>
                  </div>

                  {/* Destination Name */}
                  <div className="relative px-4">
                    <h2 className="text-4xl md:text-5xl title-italic text-background text-center">
                      {pkg.name}
                    </h2>
                    <p className="text-background/80 text-xs text-center mt-1">Per Person</p>
                  </div>

                  {/* Price Tag */}
                  <div className="mx-4 mt-4 bg-primary rounded-lg p-3 text-center transform rotate-[-3deg]">
                    <p className="text-xs text-background/80">Starting @</p>
                    <p className="text-xl font-bold text-background">{pkg.price}</p>
                    <p className="text-xs text-background/80">{pkg.note}</p>
                  </div>

                  {/* Image */}
                  <div className="mt-4 relative">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-48 object-cover"
                    />
                    {/* Circular Images Overlay */}
                    <div className="absolute -top-6 left-4 flex gap-2">
                      <div className="w-16 h-16 rounded-full border-4 border-primary overflow-hidden">
                        <img src={pkg.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-16 h-16 rounded-full border-4 border-primary overflow-hidden">
                        <img src={pkg.image} alt="" className="w-full h-full object-cover scale-110" />
                      </div>
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div className="bg-foreground/90 p-4">
                    <h4 className="text-primary font-semibold text-sm mb-2">Inclusions</h4>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>• Hotel Accommodation</p>
                      <p>• Daily Breakfast</p>
                      <p>• Sightseeing Tours</p>
                      <p>• Airport Transfers</p>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-border">
                      <p className="text-primary text-xs font-semibold">Fixed Departure</p>
                      <p className="text-muted-foreground text-xs">Contact: +91 9362556555</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[1, 2, 3, 4, 5].map((dot) => (
              <div
                key={dot}
                className={`w-3 h-3 rounded-full ${dot === 1 ? "bg-foreground" : "bg-muted-foreground"}`}
              />
            ))}
          </div>

          {/* Book Now Button */}
          <div className="text-center mt-8">
            <Link to="/contact" className="btn-teal text-xl px-12">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-primary font-semibold uppercase tracking-widest mb-4">
            Get Started Today!
          </p>
          <h2 className="text-4xl md:text-5xl title-italic text-foreground mb-4">
            Join Us and Discover More!
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact: +919362556555 | Website: www.joytourism.in
          </p>
          <Link to="/contact" className="btn-hero">
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;
