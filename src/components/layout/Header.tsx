import { useState } from "react";
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
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-wide flex h-16 md:h-20 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link to="/school" className="flex items-center gap-3 group">
          <img src="/images/main logo.png" alt="Sundarban Child Campus" className="w-12 h-12" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-muted-foreground hover:text-foreground hover:bg-muted flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Foundation
          </Link>
          <div className="w-px h-6 bg-border mx-2" />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                location.pathname === link.href
                  ? "text-primary bg-sage/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="ml-4" size="sm">
            <Link to="/school/contact">Support a Child</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-wide px-4 py-4 flex flex-col gap-1">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-base font-medium rounded-md transition-colors text-primary hover:bg-muted flex items-center gap-2"
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
                  "px-4 py-3 text-base font-medium rounded-md transition-colors",
                  location.pathname === link.href
                    ? "text-primary bg-sage/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-4">
              <Link to="/school/contact" onClick={() => setIsOpen(false)}>
                Support a Child
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
