import React, { useRef } from 'react';
import {
  FaCalculator,
  FaWeight,
  FaAppleAlt,
  FaDumbbell,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';
import './FitnessTools.css';

const toolsData = [
  { title: 'CALORIE CALCULATOR', icon: <FaCalculator size={50} /> },
  { title: 'BMI CALCULATOR', icon: <FaWeight size={50} /> },
  { title: 'MACRONUTRIENT CALCULATOR', icon: <FaAppleAlt size={50} /> },
  { title: 'GOAL SETTING TOOL', icon: <FaDumbbell size={50} /> },
  { title: 'MACRONUTRIENT CALCULATOR', icon: <FaAppleAlt size={50} /> },
];

const FitnessToolsSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 220; // width of one card + gap
    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="fitness-section py-5 px-3 text-white">
      <div className="text-center mb-4">
        <h2 className="section-title">
          Our Fitness <span className="highlight-text">Tools</span>
        </h2>
        <p className="section-subtitle">
          Access A Variety Of Tools To Help You Reach Your Fitness Goals More Effectively
        </p>
      </div>

      <div className="scroll-wrapper">
        <button className="scroll-btn left" onClick={() => scroll('left')}>
          <FaArrowLeft />
        </button>

        <div className="scroll-container" ref={scrollRef}>
          {toolsData.map((tool, index) => (
            <div key={index} className="tool-card p-3 rounded">
              <div className="text-center mb-3 tool-icon">{tool.icon}</div>
              <h5 className="text-center mb-3 tool-title">{tool.title}</h5>
              <div className="learn-more text-center">
                <a href="#" className="learn-link">
                  Learn More <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll('right')}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default FitnessToolsSection;
