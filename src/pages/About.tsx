import { Link } from "react-router-dom";
import { ArrowRight, Shield, AlertTriangle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import resort1 from "@/assets/resort-1.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [about, setAbout] = useState<any>(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await axios.get("http://localhost:5000/about/get"); 
        setAbout(res.data);
      } catch (err) {
        console.log("About Fetch Error:", err);
      }
    };

    fetchAbout();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${about?.heroImage || resort1})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl title-italic text-primary mb-6">
            {about?.heading || "About Booking with GoaYatra"}
          </h1>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wider mb-6">
                {about?.subHeading || "Crafting Extraordinary Journeys Since 2009"}
              </h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {about?.para1 ||
                  "GoaYatra is committed to providing safe, comfortable, and memorable travel experiences."}
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {about?.para2 ||
                  "However, we are not responsible for damages caused by natural events."}
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {about?.para3 ||
                  "Certain situations remain beyond our control, but we try our best to make your journey enjoyable."}
              </p>

              <Link to="/packages" className="btn-hero inline-flex">
                View Packages
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <img
                src={about?.sideImage || resort1}
                alt="About"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Disclaimers */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center uppercase tracking-wider mb-12">
            Important Disclaimers
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-background p-8 rounded-xl border border-border">
              <div className="w-14 h-14 rounded-full bg-destructive/20 flex items-center justify-center mb-6">
                <AlertTriangle className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground uppercase tracking-wider mb-4">
                Natural Calamity Disclaimer
              </h3>
              <p className="text-muted-foreground leading-relaxed uppercase text-sm">
                {about?.naturalDisclaimer ||
                  "Loss caused by natural calamities like tsunami, earthquake, cyclone, etc."}
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border">
              <div className="w-14 h-14 rounded-full bg-destructive/20 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground uppercase tracking-wider mb-4">
                Manmade Disaster Disclaimer
              </h3>
              <p className="text-muted-foreground leading-relaxed uppercase text-sm">
                {about?.manmadeDisclaimer ||
                  "Loss due to fire, theft, riots, war, and manmade causes."}
              </p>
            </div>
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
            Ready to Start Your Journey?
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

export default About;
