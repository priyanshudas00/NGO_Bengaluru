import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/school", label: "Home" },
  { href: "/school/about", label: "About" },
  { href: "/school/impact", label: "Our Impact" },
  { href: "/school/needs", label: "What We Need" },
  { href: "/school/teachers", label: "Teachers" },
  { href: "/school/future", label: "Future Plans" },
  { href: "/school/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [lastMouseY, setLastMouseY] = useState(0);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < lastMouseY && e.clientY < 100) {
        // Mouse moving up and in top area
        setIsVisible(true);
      }
      setLastMouseY(e.clientY);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY, lastMouseY]);

  return (
    <>
      {/* Fixed Logo */}
      <div className="fixed top-4 left-4 z-50">
        <Link to="/school" className="flex items-center gap-3">
          <img src="/images/school logo.png" alt="Sundarban Child Campus" className="w-50 h-20" />
        </Link>
      </div>

      {/* Sticky Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="flex items-center justify-center py-2">
          <div className="flex items-center justify-between w-full max-w-7xl px-4">
            {/* Logo space placeholder */}
            <div className="w-32"></div>

            <nav className="hidden lg:flex items-center gap-1 bg-green-50/80 backdrop-blur-md rounded-full px-6 py-3 border border-green-200/30 shadow-lg">
              <Link
                to="/"
                className="px-3 py-2 text-sm font-medium rounded-full transition-colors text-muted-foreground hover:text-foreground hover:bg-secondary flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                Foundation
              </Link>
              <div className="w-px h-6 bg-border mx-2" />
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive(link.href)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button asChild size="sm" className="rounded-full">
                <Link to="/school/contact">
                  <Heart className="mr-2 h-4 w-4" />
                  Support a Child
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden fixed top-4 right-4 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 bg-green-50/80 backdrop-blur-md rounded-full border border-green-200/30 shadow-lg text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
            <nav className="flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-base font-medium rounded-xl transition-colors text-primary hover:bg-muted flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Foundation
              </Link>
              <div className="h-px bg-border my-2" />
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-xl transition-colors",
                    isActive(link.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 rounded-full">
                <Link to="/school/contact" onClick={() => setIsOpen(false)}>
                  <Heart className="mr-2 h-4 w-4" />
                  Support a Child
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
