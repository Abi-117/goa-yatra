import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import axios from "axios";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [bottomNotes, setBottomNotes] = useState([]);
  const [index, setIndex] = useState(0);

  // Load packages + notes from backend
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/packages");
        setPackages(res.data.packages);
        setBottomNotes(res.data.bottomNotes);
      } catch (err) {
        console.error("Packages failed to load", err);
      }
    };
    loadData();
  }, []);

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
              {packages.map((pkg: any, i) => (
                <div key={i} className="min-w-[33%]">
                  <div className="bg-white border shadow-md rounded-xl overflow-hidden h-[550px] flex flex-col">

                    {/* IMAGE */}
                    <img
                      src={pkg.image}
                      className="h-44 w-full object-cover"
                    />

                    {/* CONTENT */}
                    <div className="p-4 flex-1 overflow-auto">

                      <h2 className="text-lg font-bold mb-2 text-[#1a3d5c]">
                        {pkg.title}
                      </h2>

                      <ul className="text-sm text-gray-700 space-y-1 mb-3 leading-relaxed">
                        {pkg.items.map((item: string, idx: number) => (
                          <li key={idx}>
                            <span className="text-primary">•</span> {item}
                          </li>
                        ))}
                      </ul>

                      {/* NOTES */}
                      <div className="border-t pt-3 mt-3 text-gray-500 text-xs space-y-1">
                        {bottomNotes.map((note: string, n: number) => (
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
