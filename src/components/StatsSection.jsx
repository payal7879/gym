import React from 'react';
import COLORS from '../assets/Styles/color';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    {
      value: '96%',
      label: 'Client Satisfaction',
      description: 'Our Members Love Their Results And Experience',
      color: '#FF3C00',
    },
    {
      value: '+5',
      label: 'Years Of Experience',
      description: 'Trust In Our Proven Track Record Of Transforming',
      color: '#FF6600',
    },
    {
      value: '+800',
      label: 'Active Members',
      description: 'Join Our Thriving Fitness Community',
      color: '#FF3C00',
    },
    {
      value: '24/7',
      label: 'Support Available',
      description: 'Expert Assistance Whenever You Need It',
      color: '#FF6600',
    },
  ];

  return (
    <div
      className="py-5 px-4 d-flex justify-content-around flex-wrap text-center"
      style={{
        background: COLORS.secondary,
        color: COLORS.white,
        borderTop: `1px solid ${COLORS.dark}`,
        borderBottom: `1px solid ${COLORS.dark}`,
      }}
    >
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="px-4 mx-3 my-3 stats-card"
          style={{
            borderLeft: idx !== 0 ? '1px solid rgba(255, 60, 0, 0.5)' : 'none',
          }}
        >
          <h4 className="stats-value" style={{ color: stat.color, fontWeight: '700' }}>
            {stat.value}{' '}
            <span style={{ color: COLORS.white, fontWeight: '600' }}>
              {stat.label}
            </span>
          </h4>
          <p style={{ color: COLORS.lightText, fontSize: '14px' }}>{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
