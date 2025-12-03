import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t-4 border-primary">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Logo & Address */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground tracking-wider">LOGO</h3>
            
            <div className="space-y-4">
              <h4 className="text-primary font-semibold tracking-wider">ADDRESS</h4>
              <div className="space-y-2 text-muted-foreground text-sm uppercase tracking-wide">
                <p>BOOKING YATRA SONIKAS PARADISE PINTOS</p>
                <p>VADDO, CANDOLIM, GOA 403515</p>
                <p>9172994022</p>
                <p>TEAMYATRATOURS@GMAIL.COM</p>
              </div>
            </div>
          </div>

          {/* Right Column - Social Networks */}
          <div className="md:text-right">
            <h4 className="text-primary font-semibold tracking-wider mb-6">SOCIAL NETWORKS</h4>
            <div className="flex md:justify-end gap-4">
              <a
                href="#"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-6 h-6 text-[#1877F2]" />
                <span className="text-sm font-medium">FACEBOOK</span>
              </a>
            </div>
            <div className="flex md:justify-end gap-4 mt-3">
              <a
                href="#"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6 text-[#E4405F]" />
                <span className="text-sm font-medium">INSTAGRAM</span>
              </a>
            </div>
            <div className="flex md:justify-end gap-4 mt-3">
              <a
                href="#"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Youtube className="w-6 h-6 text-[#FF0000]" />
                <span className="text-sm font-medium">YOUTUBE</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Yatra Tours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
