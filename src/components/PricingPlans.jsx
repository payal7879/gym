import React, { useState } from 'react';
import COLORS from '../assets/Styles/color';
import './PricingPlans.css';

const plans = [
  {
    title: 'PRO PLAN',
    price: '99',
    features: [
      'Access To All Of Our Exercise Videos',
      'Progress Tracking',
      'Supportive Online Community',
      'Advanced, Personalized Workout Plans',
      'Comprehensive Nutrition Guidance',
      'Access To Advanced Workout Programs',
      'Body Composition Analysis',
    ],
    description:
      'Our Pro Plan Offers Advanced Workouts And Personalized Nutrition Coaching To Help You Reach Your Goals Faster. Sign Up Right Now!',
  },
  {
    title: 'CUSTOM PLAN',
    price: '149',
    features: [
      'Access To All Of Our Exercise Videos',
      'Progress Tracking',
      'Supportive Online Community',
      'Customized Workout And Nutrition Plan',
      'Weekly Check-Ins With Your Trainer',
      'Access To All Platform Features',
      'Exclusive Gear Discounts',
    ],
    description:
      'Experience A Fully Tailored Fitness Experience With Our Custom Plan. Work One-On-One With A Dedicated Trainer To Achieve Your Goals.',
  },
  {
    title: 'BEGINNER PLAN',
    price: '49',
    features: [
      'Access To All Of Our Exercise Videos',
      'Progress Tracking',
      'Supportive Online Community',
      'Personalized Workout Plans',
      'Basic Nutrition Guidance',
      'Access To Group Fitness Classes',
    ],
    description:
      'Start Your Fitness Journey With Our Beginner Plan. Build A Strong Foundation With Basic Workouts And Essential Nutrition Guidance.',
  },
];

const PricingPlans = () => {
  const [activeTab, setActiveTab] = useState('monthly');

  return (
    <div className="text-center py-5" style={{ background: COLORS.secondary, color: COLORS.white }}>
      <h2>
        Our <span style={{ color: COLORS.primary }}>Plans</span>
      </h2>
      <p style={{ color: COLORS.lightText, maxWidth: '800px', margin: '10px auto' }}>
        Select The Plan That Suits Your Fitness Goals And Let Our Expert Coaches Guide You Every Step Of The Way.
      </p>

      {/* Toggle Button */}
      <div className="d-flex justify-content-center gap-2 mb-4">
        <button
          className={`btn toggle-btn ${activeTab === 'monthly' ? 'btn-danger active' : 'btn-outline-light'} rounded-pill px-4`}
          onClick={() => setActiveTab('monthly')}
        >
          Monthly
        </button>
        <button
          className={`btn toggle-btn ${activeTab === 'annually' ? 'btn-danger active' : 'btn-outline-light'} rounded-pill px-4`}
          onClick={() => setActiveTab('annually')}
        >
          Annually
        </button>
      </div>

      {/* Plans */}
      <div className="row justify-content-center gap-3 px-2">
        {plans.map((plan, index) => (
          <div
            className="col-md-3 p-4 rounded pricing-card"
            key={index}
            style={{
              backgroundColor: COLORS.secondary,
              border: `2px solid ${COLORS.primary}`,
              minWidth: '300px',
            }}
          >
            <div className="pricing-card-content">
              <div style={{ color: COLORS.lightText, fontSize: '14px' }}>Package</div>
              <h4 className="my-2" style={{ color: COLORS.white, fontWeight: 'bold' }}>{plan.title}</h4>
              <div className="my-2" style={{ color: COLORS.lightText, fontSize: '13px' }}>Description</div>
              <p className="text-white" style={{ fontSize: '13px', minHeight: '100px' }}>{plan.description}</p>
              <div className="my-3 text-start">
                <div style={{ color: COLORS.primary, fontWeight: 'bold' }}>Features</div>
                <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '13px' }}>
                  {plan.features.map((f, i) => (
                    <li key={i} style={{ color: COLORS.lightText }}>
                      • {f}
                    </li>
                  ))}
                </ul>
              </div>
              <h3 className="my-2" style={{ color: COLORS.white }}>{plan.price}$<span style={{ fontSize: '14px', color: COLORS.lightText }}>USD</span></h3>
              <button className="btn w-100 rounded-pill pricing-button" style={{ backgroundColor: COLORS.primary, color: COLORS.white }}>
                <span>Choose This Plan</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
