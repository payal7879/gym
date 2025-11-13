import React, { useRef } from 'react';
import './MeetOurTrainers.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const trainersData = [
  {
    name: 'Sam Cole',
    role: 'Personal Trainer',
    img: 'https://images.unsplash.com/photo-1579758682665-53a1a614eea6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGd5bSUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Michael Harris',
    role: 'Personal Trainer',
    img: 'https://images.unsplash.com/photo-1604480133435-25b86862d276?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGd5bSUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'John Anderson',
    role: 'Personal Trainer',
    img: 'https://images.unsplash.com/photo-1584952811565-c4c4031805a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bSUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Tom Blake',
    role: 'Personal Trainer',
    img: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3ltJTIwdHJhaW5lcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Jake Miller',
    role: 'Personal Trainer',
    img: 'https://images.unsplash.com/photo-1711006366881-5076ba350008?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGd5bSUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D',
  },
];

const MeetOurTrainers = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const amount = 260;
    scrollRef.current.scrollLeft += dir === 'left' ? -amount : amount;
  };

  return (
    <div className="trainer-section py-5 px-3 text-white">
      <div className="text-center mb-4">
        <h2 className="section-title">
          Meet Our <span className="highlight-text">Trainers</span>
        </h2>
        <p className="section-subtitle">
          At This Part You Can See Few Of The Many Positive Reviews Of Our Customers.
        </p>
      </div>

      <div className="scroll-wrapper">
        <button className="scroll-btn left" onClick={() => scroll('left')}>
          <FaArrowLeft />
        </button>

        <div className="scroll-container" ref={scrollRef}>
          {trainersData.map((trainer, index) => (
            <div key={index} className="trainer-card">
              <img src={trainer.img} alt={trainer.name} className="trainer-img" />
              <div className="trainer-info text-center p-2">
                <h5 className="trainer-name">{trainer.name}</h5>
                <p className="trainer-role">{trainer.role}</p>
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

      <div className="text-center mt-4">
        <button className="view-all-btn">
          <span>View All <FaArrowRight style={{ marginLeft: '6px' }} /></span>
        </button>
      </div>
    </div>
  );
};

export default MeetOurTrainers;
