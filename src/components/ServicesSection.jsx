import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import COLORS from '../assets/Styles/color';
import './ServicesSection.css';

const services = [
  {
    title: 'LOSING WEIGHT',
    subtitle: 'Click To Join Our Losing Weight Plans',
    description: `Achieve Sustainable Weight Loss With Our Customized Programs, Designed To Help You Burn Fat And Build A Healthier, Leaner Body. Start Your Journey To A Fitter You Today.`,
    img: '/assets/weight.jpg',
  },
  {
    title: 'BUILDING MUSCLE',
    subtitle: 'Click To Join Our Building Muscle Plans',
    description: `Develop Strength And Define Your Muscles With Tailored Programs Designed To Help You Gain Lean Mass Efficiently. Don’t Miss This Chance.`,
    img: '/assets/muscle.jpg',
  },
  {
    title: 'TRAINING IN HOME',
    subtitle: 'Click To See Our Ultimate Home Plans',
    description: `Stay Fit And Strong With Our Effective Home Workout Plans, Requiring Minimal Equipment. You Can Access A Lot Of Plans By Just Clicking On Learn More.`,
    img: '/assets/home.jpg',
  },
  {
    title: 'GYM PLAN',
    subtitle: 'Click, Enter Your Details, Get Your Plan!',
    description: `Maximize Your Gym Sessions With Structured Plans That Guide You Towards Your Fitness Goals.`,
    img: '/assets/plan.jpg',
  },
];

const ServicesSection = () => {
  return (
    <div style={{ background: COLORS.secondary, padding: '60px 0', color: COLORS.white }}>
      <div className="text-center mb-5">
        <h2 style={{ color: COLORS.white }}>
          Our <span style={{ color: COLORS.primary }}>Services</span>
        </h2>
        <p className="mt-3" style={{ color: COLORS.lightText }}>
          At This Part You Can Easily Access All Of Our Services. Take A Look At Them And Chose Which Ever You Want.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div
                className="card h-100 text-white service-card"
                style={{
                  background: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${service.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '12px',
                  padding: '20px',
                  border: `1px solid ${COLORS.primary}`,
                }}
              >
                <h5 style={{ color: COLORS.primary, fontWeight: 'bold' }}>{service.title}</h5>
                <p style={{ fontSize: '13px', marginBottom: '10px' }}>{service.subtitle}</p>
                <p style={{ fontSize: '12px', color: COLORS.lightText }}>{service.description}</p>
                <div className="mt-2 d-flex align-items-center gap-2 service-learn-more" style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                  Learn More <FaArrowRight size={12} color={COLORS.primary} className="arrow-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
