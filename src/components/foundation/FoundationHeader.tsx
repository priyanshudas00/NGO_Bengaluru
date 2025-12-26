import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart } from "lucide-react";

const FoundationHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [lastMouseY, setLastMouseY] = useState(0);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Impact", path: "/impact" },
    { name: "Gallery", path: "/gallery" },
    { name: "How to Help", path: "/help" },
    { name: "Transparency", path: "/transparency" },
    { name: "School", path: "/school" },
    { name: "Contact", path: "/contact" },
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
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/main logo.png" alt="Asangoham Foundation" className="w-50 h-20" />
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

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <nav className="flex flex-col gap-2 mt-8">
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
                      Donate Now
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default FoundationHeader;
