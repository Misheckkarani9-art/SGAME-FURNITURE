import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo">🎁 Gift Nest</h2>
          <p className="footer-text">
            Discover meaningful gifts, amazing deals, and curated products
            for every occasion. Make every moment special with Gift Nest.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/deals">Deals</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/addproducts">➕ Add Product</Link>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3>Gift Categories</h3>
          <p>🎉 Birthday Gifts</p>
          <p>💝 Anniversary Gifts</p>
          <p>🎄 Holiday Gifts</p>
          <p>🎁 Personalized Gifts</p>
          <p>🏠 Home Gifts</p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@giftnest.com</p>
          <p>Phone: +254 700 000 000</p>
          <p>Location: Nairobi, Kenya</p>
        </div>

        {/* Developer */}
        <div className="footer-section">
          <h3>Developer</h3>
          <p>Built by: Misheck Karani</p>
          <p>Full Stack Developer</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Gift Nest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;