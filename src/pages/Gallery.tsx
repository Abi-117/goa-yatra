import { useState } from "react";
import { X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import resort1 from "@/assets/resort-1.jpg";
import aboutRestaurant from "@/assets/about-restaurant.jpg";
import heroBeach from "@/assets/hero-beach.jpg";

const galleryImages = [
  { id: 1, src: gallery1, alt: "Luxury Hotel Room", category: "Accommodation" },
  { id: 2, src: gallery2, alt: "Resort Pool", category: "Amenities" },
  { id: 3, src: gallery3, alt: "Beach Sunset", category: "Beach" },
  { id: 4, src: gallery4, alt: "Boat Tour", category: "Activities" },
  { id: 5, src: gallery5, alt: "Scuba Diving", category: "Adventure" },
  { id: 6, src: gallery6, alt: "Spa Treatment", category: "Wellness" },
  { id: 7, src: resort1, alt: "Luxury Resort", category: "Resort" },
  { id: 8, src: aboutRestaurant, alt: "Ocean View Dining", category: "Dining" },
  { id: 9, src: heroBeach, alt: "Tropical Beach", category: "Beach" },
];

const categories = ["All", "Accommodation", "Beach", "Activities", "Adventure", "Amenities", "Wellness", "Resort", "Dining"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-accent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
              Our Gallery
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-accent-foreground mb-6">
              Explore The Gallery
            </h1>
            <p className="text-lg text-accent-foreground/80">
              Glimpses of unforgettable moments from our travelers' journeys
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-card border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer card-travel"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/60 transition-all duration-300 flex items-end">
                  <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                      {image.category}
                    </span>
                    <h3 className="text-lg font-display font-semibold text-accent-foreground">
                      {image.alt}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-accent/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-accent-foreground/10 flex items-center justify-center text-accent-foreground hover:bg-accent-foreground/20 transition-colors"
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
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Reviews
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-elegant border border-border text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-display font-bold text-primary">MJ</span>
              </div>
              <p className="text-xl md:text-2xl font-display text-foreground mb-6 leading-relaxed">
                "Amazing experience from start to finish! Everything was handled so smoothly, the itinerary was well-planned, the hotel choices were excellent, and the local guides were knowledgeable and friendly."
              </p>
              <div className="text-primary font-semibold">@MONICA_JOHN</div>
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
              <button className="mt-8 text-primary font-medium hover:underline">
                View More Reviews
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-accent-foreground mb-4">
            Create Your Own Memories
          </h2>
          <p className="text-accent-foreground/70 mb-8 max-w-2xl mx-auto">
            Start your journey today and let us capture unforgettable moments for you.
          </p>
          <a href="/packages" className="btn-hero inline-flex">
            Book Your Trip
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
