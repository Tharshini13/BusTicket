import React from "react";
import { Link } from "react-router-dom";
import "../Style/Content.css";
import img from "../assets/bus.jpg";
import route from "../assets/img.png";
import insta from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png"

const Content = () => {
  return (
    <div id="hero">
      {/* Hero Section */}
      <img id="home_bg" src={img} alt="Travel Bus" />
      <div>
        <p id="mainhead">Your Safe Travel Journey <br /> Is Our Main Goal</p>
        <p id="subhead">
          At BlueSky Travels, we prioritize your safety, luxurious seating,
          air-conditioned cabins, and high-quality service at the best prices.
        </p>
        <Link className="link" to="/bookticket">
          <button type="button" className="btn bg-primary" id="bt">
            Book Now
          </button>
        </Link>
      </div>


      {/* Featured Routes Section */}
      <div className="route-container" style={{position:"relative",bottom:"220px",left:"330px",height:"480px"}}>

      <img src={route} id="route" style={{height:"300px", position:"relative",right:"750px",top:"50px"}}></img>
        <h2 className="route-title" style={{position:"relative",bottom:"300px"}}>🚍 Popular Routes</h2>
        <div className="route-grid">
          <div className="route-card" style={{position:"relative",bottom:"290px"}}>
            <i className="route-icon">📍</i>
            <h3 className="route-name">Tenkasi → Chennai</h3>
            <p className="route-desc">Comfortable & Scenic Ride</p>
          </div>

          <div className="route-card" style={{position:"relative",bottom:"290px"}}>
            <i className="route-icon">📍</i>
            <h3 className="route-name">Madurai → Chennai</h3>
            <p className="route-desc">Luxury Travel Experience</p>
          </div>

          <div className="route-card" style={{position:"relative",bottom:"290px"}}>
            <i className="route-icon">📍</i>
            <h3 className="route-name">Coimbatore → Chennai</h3>
            <p className="route-desc">Cross-Border Smooth Journey</p>
          </div>

          <div className="route-card" id="route-card" style={{position:"relative",bottom:"290px"}}>
            <i className="route-icon">📍</i>
            <h3 className="route-name">Chennai → Bangalore</h3>
            <p className="route-desc">Cross-Border Smooth Journey</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="choose-us-section" style={{position:"relative",bottom:"220px"}}>
      <h2 className="choose-us-title">Why Choose Us?</h2>
        <div className="choose-us-cards">
          <div className="choose-us-card">
            <div className="choose-us-icon">🌐</div>
            <h3 className="choose-us-feature">Free Wi-Fi</h3>
            <p className="choose-us-desc">Stay connected on the go</p>
          </div>
          <div className="choose-us-card">
            <div className="choose-us-icon">❄️</div>
            <h3 className="choose-us-feature">Air-Conditioned Buses</h3>
            <p className="choose-us-desc">Comfortable journey in any season</p>
          </div>
          <div className="choose-us-card">
            <div className="choose-us-icon">💰</div>
            <h3 className="choose-us-feature">Affordable Prices</h3>
            <p className="choose-us-desc">Best rates for luxury travel</p>
          </div>
          <div className="choose-us-card">
            <div className="choose-us-icon">📞</div>
            <h3 className="choose-us-feature">24/7 Customer Support</h3>
            <p className="choose-us-desc">Assistance anytime</p>
          </div>
        </div>
      </div>


      {/* Special Offers */}
      <div className="special-offers-section" style={{position:"relative",bottom:"200px"}}>
        <h2 className="special-offers-title">Special Offers</h2>
        <div className="special-offers-cards">
          <div className="special-offer-card">
            <p className="offer-text">🎉 Book early & get <strong>15% off!</strong></p>
          </div>
          <div className="special-offer-card">
            <p className="offer-text">🎓 Students get an exclusive <strong>10% discount!</strong></p>
          </div>
        </div>
      </div>


      {/* FAQ Section */}
      <div className="faq-section" style={{position:"relative",bottom:"200px"}}>
  <h2 className="faq-title">Frequently Asked Questions</h2>
  <div className="faq-accordion">
    <details class="faq-item">
      <summary class="faq-summary">
        <span class="faq-icon">❓</span>
        How can I cancel my booking?
      </summary>
      <div class="faq-content">
        <p>You can cancel your booking from the 'My Bookings' section in your account.</p>
      </div>
    </details>
    <details class="faq-item">
      <summary class="faq-summary">
        <span class="faq-icon">🎒</span>
        What is the baggage policy?
      </summary>
      <div class="faq-content">
        <p>Each passenger is allowed one suitcase and one carry-on bag.</p>
      </div>
    </details>
    <details class="faq-item">
      <summary class="faq-summary">
        <span class="faq-icon">🐾</span>
        Are pets allowed on the bus?
      </summary>
      <div class="faq-content">
        <p>Only service animals are allowed.</p>
      </div>
    </details>
  </div>
</div>


<footer className="footer" style={{position:"relative",bottom:"230px"}}>
  <div className="footer-top">
    <div className="footer-logo">
      <h3>BlueSky Travels</h3>
      <p>Your journey begins here.</p>
    </div>
    <div className="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Terms & Conditions</a></li>
      </ul>
    </div>
    <div className="footer-social">
      <h4>Follow Us</h4>
      <img id="insta" src={insta} style={{height:'30px',position:"relative",top:"35px",right:"160px"}}></img>
      <img id="facebook" src={facebook} style={{height:'30px',position:"relative",top:"35px",right:"170px"}}></img>
      <img id="twitter" src={twitter} style={{height:'30px',position:"relative",top:"35px",right:"180px"}}></img>
      <img id="linkedin" src={linkedin} style={{height:'30px',position:"relative",top:"35px",right:"200px"}}></img>
    </div>
    
  </div>
  <div className="footer-bottom">
    <p style={{position:"relative",right:"90px"}}>&copy; 2025 BlueSky Travels. All rights reserved.</p>
  </div>
</footer>
    </div>
  );
};

export default Content;