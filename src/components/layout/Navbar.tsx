import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import axios from "axios";

interface NavbarItem {
  name: string;
  path: string;
}

interface NavbarResponse {
  logo: string | null;
  links: NavbarItem[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState<string | null>(null);
  const [navLinks, setNavLinks] = useState<NavbarItem[]>([]);
  const location = useLocation();

  // 🔥 Correct backend fetch
  useEffect(() => {
    axios
      .get<NavbarResponse>("http://localhost:5000/api/navbar")
      .then((res) => {
        setNavLinks(res.data.links || []);
        setLogo(res.data.logo || null);
      })
      .catch((err) => {
        console.error("Navbar Load Error", err);
        setNavLinks([]);
      });
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={
                logo
                  ? `http://localhost:5000/${logo}`
                  : "/logo1.png"
              }
              alt="Logo"
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium tracking-wider transition-colors duration-200 hover:text-primary",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-black"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-base font-medium py-2 tracking-wider",
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
