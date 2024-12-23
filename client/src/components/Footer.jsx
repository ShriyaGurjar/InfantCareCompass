import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Grid Layout for Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">MyLogo</h3>
            <p>
              Providing exceptional service and care to all our clients. Stay
              connected with us!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-blue-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <span>Email: </span>
                <a
                  href="mailto:support@example.com"
                  className="hover:text-blue-400"
                >
                  support@example.com
                </a>
              </li>
              <li>
                <span>Phone: </span>
                <a href="tel:+1234567890" className="hover:text-blue-400">
                  +1 234 567 890
                </a>
              </li>
              <li>
                <span>Address: </span>123 Main Street, City, Country
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-blue-400"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a
                href="#"
                className="hover:text-blue-400"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a
                href="#"
                className="hover:text-blue-400"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p>&copy; 2024 MyLogo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;