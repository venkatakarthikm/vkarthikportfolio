import React, { useEffect, useRef } from 'react';
import '../styles/Lightning.css';

const Lightning = ({ position }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const drawLightning = (x, y) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const branches = 2 + Math.floor(Math.random() * 2); // Fewer branches for smaller lightning

      const drawBranch = (startX, startY, angle, length) => {
        if (length < 5) return; // Stop when branches become too small

        const endX = startX + Math.cos(angle) * length;
        const endY = startY + Math.sin(angle) * length;

        ctx.beginPath();
        ctx.strokeStyle = 'rgba(180, 230, 255, 1)';
        ctx.lineWidth = 1.5; // Thinner lines for smaller effect
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Create branches
        if (Math.random() < 0.4) {
          drawBranch(endX, endY, angle + (Math.random() - 0.5) * 0.6, length * 0.6);
        }
        drawBranch(endX, endY, angle + (Math.random() - 0.5) * 0.5, length * 0.7);
      };

      // Draw fewer and shorter branches
      for (let i = 0; i < branches; i++) {
        const angle = (Math.PI * 2 * i) / branches + Math.random() * 0.3;
        drawBranch(x, y, angle + Math.PI / 2, 40); // Shorter length
      }

      setTimeout(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 300);
    };

    if (position.x >= 0 && position.y >= 0) {
      drawLightning(position.x, position.y);
    }
  }, [position]);

  return <canvas ref={canvasRef} className="lightning-canvas" />;
};

export default Lightning;
