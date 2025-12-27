import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-earth text-earth-foreground">
      <div className="container-wide px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">Sundarban Child Campus</h3>
                <p className="text-xs opacity-80">An Asangoham Foundation Initiative</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed max-w-md">
              Educating children of the Sundarbans, one life at a time. A community-driven 
              initiative providing quality education to underprivileged children since 2020.
            </p>
            <div className="mt-4 p-3 rounded-lg bg-primary-foreground/10">
              <p className="text-xs opacity-80">
                <strong>Asangoham Foundation</strong><br />
                Reg. No. IV-00093/2018 (Govt. of West Bengal)
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">About Us</Link>
              <Link to="/impact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Our Impact</Link>
              <Link to="/needs" className="text-sm opacity-80 hover:opacity-100 transition-opacity">What We Need</Link>
              <Link to="/teachers" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Our Teachers</Link>
              <Link to="/future" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Future Plans</Link>
              <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact Us</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 opacity-80" />
                <div>
                  <span className="text-sm opacity-90 font-medium">Head Office:</span><br />
                  <span className="text-xs opacity-80">No.37/2 Swami Vivekananda Road,<br />Kolkata - 700124</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 opacity-80" />
                <div>
                  <span className="text-sm opacity-90 font-medium">Bangalore Office:</span><br />
                  <span className="text-xs opacity-80">No.54, Girija Towers, Ground Floor,<br />Palace Guttahalli Main Road,<br />Malleswaram, Bangalore - 560003</span>
                </div>
              </div>
              <a href="tel:+919620555694" className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4" />
                +91 96205 55694
              </a>
              <a href="mailto:contact@sundarbanchild.org" className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity">
                <Mail className="w-4 h-4" />
                contact@sundarbanchild.org
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs opacity-70">
              © {new Date().getFullYear()} Sundarban Child Campus. All rights reserved.
            </p>
            <p className="text-xs opacity-70">
              Made with <Heart className="w-3 h-3 inline text-accent" /> for the children of Sundarbans
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
