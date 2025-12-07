import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

interface FooterLinks {
  home: string;
  about: string;
  packages: string;
  services: string;
  contact: string;
}

interface FooterData {
  logo: string;
  address: string;
  phone: string;
  email: string;
  facebook: string;
  instagram: string;
  youtube: string;
  links: FooterLinks;
}

const Footer = () => {
  const [data, setData] = useState<FooterData | null>(null);

  const API = import.meta.env.VITE_API; // your backend URL

  useEffect(() => {
    fetch(`${API}/api/footer`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => console.log("Footer load error"));
  }, []);

  if (!data) return null; // Loading state avoid flicker

  return (
    <footer className="bg-gray-800 border-t-4 border-primary py-2">
      <div className="container mx-auto px-4 lg:px-1">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Left Column */}
          <div className="space-y-4">
            <img
              src={data.logo || "/logo1.png"}
              alt="Logo"
              className="w-28 h-auto"
            />

            <div className="space-y-2">
              <h4 className="text-primary font-semibold tracking-wider">ADDRESS</h4>

              <div className="space-y-1 text-muted-foreground text-sm uppercase tracking-wide">
                <p
                  dangerouslySetInnerHTML={{ __html: data.address }}
                />
                <p>{data.phone}</p>
                <p>{data.email}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-primary font-semibold tracking-wider mb-2">QUICK LINKS</h4>

            <ul className="space-y-2 text-sm font-medium text-foreground">
              <li><Link to={data.links.home}>Home</Link></li>
              <li><Link to={data.links.about}>About Us</Link></li>
              <li><Link to={data.links.packages}>Tour Packages</Link></li>
              <li><Link to={data.links.services}>Services</Link></li>
              <li><Link to={data.links.contact}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:text-right space-y-4">
            <h4 className="text-primary font-semibold tracking-wider mb-4">SOCIAL NETWORKS</h4>

            <div className="space-y-3">
              <a href={data.facebook} className="flex md:justify-end items-center gap-2">
                <Facebook className="w-5 h-5 text-[#1877F2]" />
                <span className="text-sm font-medium">FACEBOOK</span>
              </a>

              <a href={data.instagram} className="flex md:justify-end items-center gap-2">
                <Instagram className="w-5 h-5 text-[#E4405F]" />
                <span className="text-sm font-medium">INSTAGRAM</span>
              </a>

              <a href={data.youtube} className="flex md:justify-end items-center gap-2">
                <Youtube className="w-5 h-5 text-[#FF0000]" />
                <span className="text-sm font-medium">YOUTUBE</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
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
