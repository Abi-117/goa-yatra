import { Link } from "react-router-dom";
import { Plane, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Plane className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-display font-bold">
                Yatra<span className="text-primary">Tours</span>
              </span>
            </Link>
            <p className="text-accent-foreground/70 text-sm leading-relaxed">
              We take pride in helping people from all walks of life achieve the journey and peace they deserve.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Packages", "Services", "Gallery"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-accent-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-accent-foreground/70">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Sonikas Paradise, Pintos Vaddo, Candolim, Goa 403515</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-accent-foreground/70">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+91 9172994022</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-accent-foreground/70">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>teamyatratours@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Networks */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Social Networks</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/10 mt-12 pt-8 text-center">
          <p className="text-accent-foreground/50 text-sm">
            © {new Date().getFullYear()} Yatra Tours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
