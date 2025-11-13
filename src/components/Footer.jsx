import React from 'react';
import COLORS from '../assets/Styles/color';
import './Footer.css';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: COLORS.secondary, color: COLORS.white }} className="pt-5 pb-4 border-top border-1 border-dark">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-md-4">
            <h5 className="footer-brand" style={{ color: COLORS.primary, fontWeight: '700' }}>ATS Fitnesss</h5>
            <p className="mt-2" style={{ color: COLORS.lightText }}>
              Train smart, live strong. Personalized programs, expert coaches, and tools to
              reach your fitness goals.
            </p>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="mb-3" style={{ color: COLORS.white, opacity: 0.9 }}>Company</h6>
            <ul className="list-unstyled small" style={{ color: COLORS.lightText }}>
              <li><a href="#about" className="text-decoration-none footer-link" style={{ color: 'inherit' }}>About</a></li>
              <li><a href="#programs" className="text-decoration-none footer-link" style={{ color: 'inherit' }}>Programs</a></li>
              <li><a href="#membership" className="text-decoration-none footer-link" style={{ color: 'inherit' }}>Membership</a></li>
              <li><a href="#coaching" className="text-decoration-none footer-link" style={{ color: 'inherit' }}>Coaching</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h6 className="mb-3" style={{ color: COLORS.white, opacity: 0.9 }}>Resources</h6>
            <ul className="list-unstyled small" style={{ color: COLORS.lightText }}>
              <li><a href="#tools" className="text-decoration-none footer-link" style={{ color: 'inherit' }}>Fitness Tools</a></li>
              <li><a href="#pricing" className="text-decoration-none footer-link" style={{ color: 'inherit' }}>Pricing</a></li>
              <li><a href="#trainers" className="text-decoration-none footer-link" style={{ color: 'inherit' }}>Trainers</a></li>
              <li><a href="#contact" className="text-decoration-none footer-link" style={{ color: 'inherit' }}>Contact</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            <h6 className="mb-3" style={{ color: COLORS.white, opacity: 0.9 }}>Subscribe</h6>
            <form className="d-flex gap-2">
              <input type="email" className="form-control form-control-sm bg-dark text-white border-0 footer-input" placeholder="Your email" />
              <button type="submit" className="btn btn-sm footer-button" style={{ backgroundColor: COLORS.primary, color: COLORS.white, border: 'none' }}>Join</button>
            </form>
            <p className="small mt-2" style={{ color: COLORS.lightText }}>Get weekly tips and workout plans.</p>
          </div>
        </div>

        <hr className="border-secondary mt-4" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small" style={{ color: COLORS.lightText }}>
          <span>© {new Date().getFullYear()} Artistic Tech Solutions. All rights reserved.</span>
          <div className="d-flex gap-3 mt-2 mt-md-0">
            <a href="#" className="text-decoration-none footer-link" style={{ color: 'inherit' }}>Privacy</a>
            <a href="#" className="text-decoration-none footer-link" style={{ color: 'inherit' }}>Terms</a>
            <a href="#" className="text-decoration-none footer-link" style={{ color: 'inherit' }}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
