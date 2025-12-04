import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";
import logo from '@/assets/logo1.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t-4 border-primary py-2">
      <div className="container mx-auto px-4 lg:px-1">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column - Logo & Address */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Yatra Tours Logo" 
              className="w-28 h-auto"
            />

            <div className="space-y-2">
              <h4 className="text-primary font-semibold tracking-wider">ADDRESS</h4>
              <div className="space-y-1 text-muted-foreground text-sm uppercase tracking-wide">
                <p>Goa Yatra
                RNR complex,<br />
                office no.69, <br />arpora junction,<br /> Arpora Baga Goa - 403518.
                </p>
                <p>+91 7083471939</p>
                <p>goayatraholiday@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Middle - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-primary font-semibold tracking-wider mb-2">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm font-medium text-foreground">
              <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition">About Us</Link></li>
              <li><Link to="/packages" className="hover:text-primary transition">Tour Packages</Link></li>
              <li><Link to="/services" className="hover:text-primary transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Right Column - Social Networks */}
          <div className="md:text-right space-y-4">
            <h4 className="text-primary font-semibold tracking-wider mb-4">SOCIAL NETWORKS</h4>

            <div className="space-y-3">
              <a href="#" className="flex md:justify-end items-center gap-2 text-foreground hover:text-primary transition">
                <Facebook className="w-5 h-5 text-[#1877F2]" />
                <span className="text-sm font-medium">FACEBOOK</span>
              </a>

              <a href="https://www.instagram.com/goayatra.in?igsh=am84MXVseTQ3cjM0" className="flex md:justify-end items-center gap-2 text-foreground hover:text-primary transition">
                <Instagram className="w-5 h-5 text-[#E4405F]" />
                <span className="text-sm font-medium">INSTAGRAM</span>
              </a>

              <a href="#" className="flex md:justify-end items-center gap-2 text-foreground hover:text-primary transition">
                <Youtube className="w-5 h-5 text-[#FF0000]" />
                <span className="text-sm font-medium">YOUTUBE</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-4 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Yatra Tours. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
