import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* --------- TOP SECTION --------- */}
      <div className="footer-top">
        <div className="newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact-currency">
          <div className="contact">
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <div className="currency">
            <h4>CURRENCY</h4>
            <p>🇺🇸 • USD</p>
            <small>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </small>
          </div>
        </div>
      </div>

      {/* --------- BOTTOM SECTION --------- */}
      <div className="footer-bottom">
        <div className="footer-col brand-info">
          <h3>mettā muse</h3>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiues</p>
          <p>Contact US</p>
          <p>EU Compliances Docs</p>
        </div>

        <div className="footer-col quick-links">
          <h4>QUICK LINKS</h4>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div className="footer-col social-follow">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <span>🔗</span>
            <span>📸</span>
          </div>
        </div>

        <div className="footer-col payment-info">
          <h4>mettā muse ACCEPTS</h4>
          {/* Payment logos can be added here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
