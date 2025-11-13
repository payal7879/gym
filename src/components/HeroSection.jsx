// import React from 'react';
// import Button from './Button';
// import COLORS from '../assets/Styles/color';

// const HeroSection = () => {
//   return (
//     <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-5" style={{ backgroundColor: COLORS.secondary, color: COLORS.white }}>
//       <div className="text-section">
//         <h2>Achieve Your <span style={{ color: COLORS.primary }}>Fitness Goals</span> <br />With FitMaker</h2>
//         <p className="my-3">Join The Fitmaker Community And Transform Your Fitness Journey. Our Expert Coaches And Personalized Programs Are Designed To Help You Achieve Your Goals And Exceed Your Expectations.</p>
//         <div className="d-flex gap-3">
//           <Button text="Start Your Journey" />
//           <Button text="Explore Programs" variant="outline" />
//         </div>
//       </div>
//       <img src='https://images.unsplash.com/photo-1747134392453-751dfaed2aa3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8' alt="Hero" className="img-fluid mt-4 mt-md-0" style={{ maxHeight: '400px' }} />
//     </div>
//   );
// };

// export default HeroSection;
import React from 'react';
import Button from './Button';
import COLORS from '../assets/Styles/color';
import './HeroSection.css'; 

const HeroSection = () => {
  return (
    <div
      className="d-flex flex-column flex-md-row align-items-center justify-content-between px-5 py-5 position-relative"
      style={{ backgroundColor: COLORS.secondary, color: COLORS.white }}
    >
      {/* Left Section */}
      <div className="text-section" style={{ maxWidth: '550px' }}>
        <h2 style={{ fontWeight: '700' }}>Achieve Your</h2>
        <h2
          style={{
            fontWeight: '700',
            color: COLORS.primary,
            textTransform: 'uppercase',
          }}
        >
          Fitness Goals
        </h2>
        <h2 style={{ fontWeight: '600' }}>With ATS Fitness</h2>
        <p className="my-3" style={{ color: COLORS.lightText, fontSize: '14px' }}>
          Join The ATS Fitness Community And Transform Your Fitness Journey. Our
          Expert Coaches And Personalized Programs Are Designed To Help You
          Achieve Your Goals And Exceed Your Expectations. Ready To Make A
          Change?
        </p>
        <div className="d-flex gap-3 mt-3">
          <Button text="Start Your Journey" />
          <Button text="Explore Programs" variant="outline" />
        </div>
      </div>

      {/* Right Section */}
      <div className="position-relative mt-5 mt-md-0" style={{ zIndex: 1 }}>
        {/* Glow background effect */}
        <div className="glow-circle"></div>

        {/* Hero Image */}
        <img
          src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Hero"
          className="img-fluid"
          style={{ borderRadius: '12px', maxHeight: '450px' }}
        />

        {/* Floating Stat Boxes */}

      </div>
    </div>
  );
};

export default HeroSection;
