import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import gallery1 from "@/assets/gallery1.jpeg";
import gallery2 from "@/assets/gallery2.jpeg";
import gallery3 from "@/assets/gallery3.jpeg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import resort1 from "@/assets/resort-1.jpg";
import aboutRestaurant from "@/assets/about-restaurant.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";

const galleryImages = [
  { id: 1, src: gallery1, alt: "Luxury Hotel Room" },
  { id: 2, src: gallery2, alt: "Resort Pool" },
  { id: 3, src: gallery3, alt: "Beach Sunset" },
  { id: 4, src: gallery4, alt: "Boat Tour" },
  { id: 5, src: gallery5, alt: "Scuba Diving" },
  { id: 6, src: gallery6, alt: "Spa Treatment" },
  { id: 7, src: resort1, alt: "Luxury Resort" },
  { id: 8, src: aboutRestaurant, alt: "Ocean View Dining" },
  { id: 9, src: heroRestaurant, alt: "Beach Restaurant" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground uppercase tracking-wider">
            Explore The Gallery
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-background transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery Image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Reviews Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center uppercase tracking-wider mb-12">
            Reviews
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card p-8 md:p-12 rounded-xl border border-border text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-display font-bold text-primary">MJ</span>
              </div>
              <p className="text-primary font-semibold mb-4">@MONICA_JOHN</p>
              <p className="text-xl md:text-2xl font-display italic text-foreground mb-6 leading-relaxed">
                "Amazing experience from start to finish! Everything was handled so smoothly, the itinerary was well-planned, the hotel choices were excellent, and the local guides were knowledgeable and friendly."
              </p>
              <div className="flex justify-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-primary fill-primary"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <button className="mt-8 text-primary font-medium hover:underline uppercase tracking-wider">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-primary font-semibold uppercase tracking-widest mb-4">
            Get Started Today!
          </p>
          <h2 className="text-4xl md:text-5xl title-italic text-foreground mb-8">
            Create Your Own Memories
          </h2>
          <Link to="/packages" className="btn-hero">
            Book Your Trip
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
