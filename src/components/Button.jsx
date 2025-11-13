// import React from 'react';
// import COLORS from '../assets/Styles/color';

// const Button = ({ text, variant = 'primary', onClick }) => {
//   return (
//     <button
//       className={`btn btn-${variant}`}
//       style={{
//         backgroundColor: variant === 'primary' ? COLORS.primary : 'transparent',
//         color: variant === 'primary' ? COLORS.white : COLORS.primary,
//         border: `1px solid ${COLORS.primary}`,
//         borderRadius: '25px',
//         padding: '10px 20px',
//         fontWeight: '600',
//       }}
//       onClick={onClick}
//     >
//       {text}
//     </button>
//   );
// };

// export default Button;

import React from 'react';
import COLORS from '../assets/Styles/color';
import './Button.css';

const Button = ({ text, variant = 'primary', onClick }) => {
  const buttonClass = variant === 'primary' ? 'btn-primary' : 'btn-outline';
  
  return (
    <button
      className={`btn ${buttonClass}`}
      style={{
        backgroundColor: variant === 'primary' ? COLORS.primary : 'transparent',
        color: variant === 'primary' ? COLORS.white : COLORS.primary,
        border: `1px solid ${COLORS.primary}`,
        borderRadius: '25px',
        padding: '10px 25px',
        fontWeight: '600',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
      onClick={onClick}
    >
      <span style={{ position: 'relative', zIndex: 2 }}>{text}</span>
    </button>
  );
};

export default Button;