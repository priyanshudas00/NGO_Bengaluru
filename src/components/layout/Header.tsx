import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart, ArrowLeft } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [lastMouseY, setLastMouseY] = useState(0);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/school" },
    { name: "About", path: "/school/about" },
    { name: "Our Impact", path: "/school/impact" },
    { name: "What We Need", path: "/school/needs" },
    { name: "Teachers", path: "/school/teachers" },
    { name: "Future Plans", path: "/school/future" },
    { name: "Contact", path: "/school/contact" },
  ];

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
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive(link.path)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button asChild size="sm" className="rounded-full">
                <Link to="/help">
                  <Heart className="mr-2 h-4 w-4" />
                  Donate
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="flex flex-col gap-2 mt-8">
                <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <ArrowLeft className="h-5 w-5" />
                  Back to Foundation
                </Link>
                <div className="h-px bg-border" />
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive(link.path)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button asChild className="mt-4 rounded-full">
                  <Link to="/help" onClick={() => setIsOpen(false)}>
                    <Heart className="mr-2 h-4 w-4" />
                    Donate
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};

export { Header };
