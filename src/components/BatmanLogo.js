import React from 'react';
import '../styles/BatmanLogo.css';

interface BatmanLogoProps {
  position: {
    x: number;
    y: number;
  };
}

const BatmanLogo: React.FC<BatmanLogoProps> = ({ position }) => {
  return (
    <div
      className="batman-logo"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="board">
        <div className="outer-circle">
          <div className="bat">
            <div className="sphere-1"></div>
            <div className="sphere-2"></div>
            <div className="sphere-3"></div>
            <div className="sphere-4"></div>
            <div className="sphere-5"></div>
            <div className="sphere-6"></div>
            <div className="square-1"></div>
            <div className="square-2"></div>
            <div className="trapezoid"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatmanLogo;