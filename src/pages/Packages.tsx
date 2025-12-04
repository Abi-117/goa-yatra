import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import gallery1 from "@/assets/gallery-1.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const bottomNotes = [
  "3 Star Resorts with Swimming Pool near Baga & Calangute Beach",
  "All Sightseeing by AC Coach",
  "Instead of 1 Day Tour, 1 Day Bike can be provided",
  "Off Season Discount / Dynamic Pricing Applicable",
  "All activities subject to availability",
  "Resorts can be changed based on availability at the time of booking",
];

const packages = [
  {
    title: "Basic Package – 2N / 3 Days",
    items: [
      "2 Night Stay AC Room",
      "2 Days Breakfast",
      "2 Days Dinner",
      "Pick up & Drop",
      "1 Day South Goa Tour",
      "1 Day North Goa Tour",
      "Couple – 10,800 / couple",
      "Group – 4,800 / person",
    ],
    img: gallery1,
  },
  {
    title: "Adventure Package – 2N / 3 Days",
    items: [
      "2 Night Stay AC Room",
      "2 Days Breakfast",
      "2 Night Dinner",
      "Pick up & Drop",
      "1 Night Club Music Dinner Party",
      "Scuba @ Grand Island Package",
      "1 Day South Goa Tour",
      "1 Day North Goa Tour",
      "Couple – 15,500",
      "Group – 4,500 per person",
    ],
    img: gallery1,
  },
  {
    title: "Premium Package – 3N / 4 Days",
    items: [
      "3 Nights Stay AC Room",
      "3 Days Breakfast",
      "3 Nights Dinner",
      "1 Night Cruise Dinner Party",
      "1 Day Dudhsagar Fall Day Trip",
      "1 Day South Goa Tour",
      "1 Day North Goa Tour",
      "Pick up & Drop",
      "Couple – 17,000",
      "Group Sharing – 7,000",
    ],
    img: gallery1
    ,
  },
  {
    title: "Basic Package – 3N / 4 Days",
    items: [
      "3 Night Stay AC Room",
      "3 Days Breakfast",
      "3 Night Dinner",
      "Pick up & Drop",
      "1 Day South Goa Tour",
      "1 Day North Goa Tour",
      "Couple – 11,500",
      "Group – 4,500",
    ],
    img
    : gallery1,
  },
];

const Packages = () => {
  const [index, setIndex] = useState(0);

  const next = () => index < packages.length - 3 && setIndex(index + 1);
  const prev = () => index > 0 && setIndex(index - 1);

  return (
    <Layout>
      <section className="bg-background">
      <div className="w-full max-w-7xl mx-auto py-10 relative">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center uppercase tracking-wider mb-12">
             Package
          </h2>
        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute top-1/2 -left-12 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 hover:bg-gray-100 transition"
        >
          <ChevronLeft className="text-gray-700" />
        </button>

        {/* SLIDER */}
        <div className="overflow-hidden rounded-xl">
          <div
            className="flex gap-5 transition-transform duration-500"
            style={{ transform: `translateX(-${index * 34}%)` }}
          >
            {packages.map((pkg, i) => (
              <div key={i} className="min-w-[33%]">
                <div className="bg-white border shadow-md rounded-xl overflow-hidden h-[550px] flex flex-col">

                  {/* IMAGE */}
                  <img
                    src={pkg.img}
                    className="h-44 w-full object-cover"
                  />

                  {/* CONTENT */}
                  <div className="p-4 flex-1 overflow-auto">

                    <h2 className="text-lg font-bold mb-2 text-[#1a3d5c]">
                      {pkg.title}
                    </h2>

                    <ul className="text-sm text-gray-700 space-y-1 mb-3 leading-relaxed">
                      {pkg.items.map((item, idx) => (
                        <li key={idx}><span className="text-primary">•</span> {item}</li>
                      ))}
                    </ul>

                    {/* BOTTOM NOTES */}
                    <div className="border-t pt-3 mt-3  text-gray-500 text-xs space-y-1">
                      {bottomNotes.map((note, n) => (
                        <p key={n}>• {note}</p>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="btn-hero mt-5 inline-flex items-center gap-2"
                    >
                      Book Now <ArrowRight className="w-5 h-5" />
                    </Link>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute top-1/2 -right-12 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 hover:bg-gray-100 transition"
        >
          <ChevronRight className="text-gray-700" />
        </button>

      </div>
      </section>
    </Layout>
  );
};

export default Packages;
