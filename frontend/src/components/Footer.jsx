import React from 'react';
import { Link } from 'react-router-dom';

// --- Icons are defined locally ---
const FacebookIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.356 2.175 8.741 2.163 12 2.163m0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947C21.727 2.69 19.305.273 14.947.072 13.667.014 13.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
  </svg>
);


const Footer = () => {
  const linkStyles = "text-white/70 hover:text-accent hover:underline transition-colors text-sm";
  const headingStyles = "font-bold text-white mb-4 uppercase tracking-wider";

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-2">BookNest</h3>
            <p className="text-white/70 text-sm max-w-sm">
              BookNest is a unique community platform that connects readers. Our mission is to make reading more accessible for everyone by offering a simple, trustworthy way to buy and sell second-hand books.
            </p>
          </div>

          <div>
            <h4 className={headingStyles}>Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className={linkStyles}>About Us</Link></li>
              <li><Link to="/careers" className={linkStyles}>Careers</Link></li>
              <li><Link to="/team" className={linkStyles}>Our Team</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={headingStyles}>Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/terms" className={linkStyles}>Terms & Conditions</Link></li>
              <li><Link to="/privacy" className={linkStyles}>Privacy Policy</Link></li>
              <li><Link to="/cookies" className={linkStyles}>Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={headingStyles}>Genres</h4>
            <ul className="space-y-3">
              <li><Link to="/genre/fiction" className={linkStyles}>Fiction</Link></li>
              <li><Link to="/genre/non-fiction" className={linkStyles}>Non-Fiction</Link></li>
              <li><Link to="/genre/sci-fi" className={linkStyles}>Science Fiction</Link></li>
              <li><Link to="/genre/fantasy" className={linkStyles}>Fantasy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom section with social links and copyright */}
        <div className="mt-12 border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold text-white uppercase tracking-wider mb-2">Follow Us On</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors"><FacebookIcon /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors"><InstagramIcon /></a>
            </div>
          </div>
          <p className="text-white/60 text-xs">
            © 2025 BookNest. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
