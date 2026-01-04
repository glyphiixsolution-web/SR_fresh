import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary to-accent border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="font-semibold text-lg">Excellence Academy</div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering students to achieve excellence through quality education, 
              innovative teaching methods, and holistic development.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="text-muted-foreground hover:text-primary transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="text-muted-foreground hover:text-primary transition-colors">Admissions</Link></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="mb-4">Important</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/facilities" className="text-muted-foreground hover:text-primary transition-colors">Facilities</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Fee Structure</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Results</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>123 Education Street, Knowledge City, State - 110001</span>
              </li>
              <li className="flex gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>info@excellenceacademy.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 Excellence Academy. All rights reserved. Designed with ❤️ for education.</p>
        </div>
      </div>
    </footer>
  );
}
