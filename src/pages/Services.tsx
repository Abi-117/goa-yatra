import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import gallery1 from "@/assets/gallery-1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const servicesData = [
  {
    title: "North Goa Sightseeing (AC Coach Tour)",
    timing: "8:30 AM – 5:00 PM",
    places: [
      "Fort Aguada",
      "Sinquerim Fort",
      "Sinquerim Beach",
      "Baga Beach",
      "Vagator Beach",
      "Anjuna Beach",
      "Snow Park (Entry Ticket Extra)",
      "Thunder World (Entry Ticket Extra)",
    ],
    image: gallery1,
  },

  {
    title: "South Goa Sightseeing (AC Coach Tour)",
    timing: "8:30 AM – 7:30 PM",
    places: [
      "Dona Paula",
      "Miramar Beach",
      "Old Goa Churches",
      "Mangueshi Temple",
      "Balaji Temple",
      "St. Augustine Tower",
      "Dolphin Trip (Entry Ticket Extra)",
      "Evening Cruise (Entry Ticket Extra)",
    ],
    image: gallery1,
  },

  {
    title: "Scuba Diving & Water Sports – Grand Island",
    timing: "7:30 AM – 5:00 PM",
    includes: [
      "Pickup & Drop",
      "Breakfast",
      "Lunch (Veg / Non-Veg)",
      "Mineral Water",
      "Pre-Training Session",
      "Shallow Water Dive",
      "Expert Dive Guidance",
      "Underwater Video & Photos",
      "Beer & Soft Drinks",
      "Dolphin Sightseeing",
    ],
    image: gallery1,
  },

  {
    title: "Romantic Dinner Cruise Party",
    timing: "7:30 PM – 12:30 AM",
    includes: [
      "Pickup & Drop",
      "Upper Deck Open Air",
      "Live DJ Music",
      "3 Hours Cruising",
      "Middle Deck Bar & Dining",
      "Bollywood DJ Party",
      "2 Soft Drinks",
      "2 Beer / Hard Drinks",
      "2 Tequila Shots",
    ],
    image: gallery1,
  },

  {
    title: "Dudhsagar Waterfalls Trip",
    timing: "7:00 AM – 4:00 PM",
    includes: [
      "Pickup & Drop",
      "AC Transport",
      "Jeep Safari",
      "Buffet Lunch",
      "Mineral Water",
      "Spice Plantation Visit",
      "Old Goa Church Visit",
      "Life Jacket",
    ],
    image: gallery1,
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center uppercase tracking-wider mb-12">
            Services
          </h2>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {servicesData.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="bg-card rounded-xl overflow-hidden shadow-elegant border border-border h-full">
                  <div className="relative h-56">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {service.title}
                    </h3>

                    {service.timing && (
                      <p className="text-muted-foreground mb-4">
                        Timing: {service.timing}
                      </p>
                    )}

                    <ul className="space-y-2 text-sm text-foreground/90">
                      {(service.places || service.includes)?.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary">•</span> {item}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="btn-hero mt-5 inline-flex items-center gap-2"
                    >
                      Book Now <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
