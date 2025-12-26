import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin } from "lucide-react";

const FoundationFooter = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-background" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">Asangoham Foundation</h3>
                <p className="text-xs text-background/70">Reg. No. IV-00093/2018</p>
              </div>
            </div>
            <p className="text-sm text-background/70 max-w-md">
              A people-driven initiative working to uplift underserved communities through 
              education, food security, health support, and empowerment since 2018.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2 text-sm text-background/70">
              <Link to="/about" className="block hover:text-background">About Us</Link>
              <Link to="/programs" className="block hover:text-background">Programs</Link>
              <Link to="/school" className="block hover:text-background">Sundarban Campus</Link>
              <Link to="/help" className="block hover:text-background">Donate</Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Sundarban, West Bengal</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 96205 55694</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@asangoham.org</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-6 text-center text-sm text-background/60">
          <p>© {new Date().getFullYear()} Asangoham Foundation. All rights reserved. | Built by{' '}
            <a
              href="https://www.linkedin.com/in/priyanshudas00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline"
            >
              priyanshudas00
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FoundationFooter;
