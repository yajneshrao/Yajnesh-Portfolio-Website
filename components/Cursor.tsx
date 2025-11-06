import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

// Linear interpolation for smooth animations
const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

const Cursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);

  // Target mouse position
  const mouse = useRef({ x: -100, y: -100 });
  // Smoothed positions for rendering
  const posDot = useRef({ x: -100, y: -100 });
  const posBubble = useRef({ x: -100, y: -100 });
  // Smoothed velocity for bubble deformation
  const speed = useRef(0);
  const scale = useRef({ x: 1, y: 1 });
  const rot = useRef(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', onMouseMove);
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, .group, select, textarea'
    );
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  useLayoutEffect(() => {
    let animationFrameId: number;

    const loop = () => {
      // --- Dot Logic (snappy) ---
      const dxDot = mouse.current.x - posDot.current.x;
      const dyDot = mouse.current.y - posDot.current.y;
      posDot.current.x += dxDot * 0.7; // Fast interpolation for precision
      posDot.current.y += dyDot * 0.7;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${posDot.current.x}px, ${posDot.current.y}px)`;
      }

      // --- Bubble Logic (fluid and deforming) ---
      const dxBubble = mouse.current.x - posBubble.current.x;
      const dyBubble = mouse.current.y - posBubble.current.y;
      posBubble.current.x += dxBubble * 0.1; // Slower interpolation for follow effect
      posBubble.current.y += dyBubble * 0.1;
      
      const newSpeed = Math.sqrt(dxBubble * dxBubble + dyBubble * dyBubble);
      const newAngle = Math.atan2(dyBubble, dxBubble) * (180 / Math.PI);
      
      speed.current = lerp(speed.current, newSpeed, 0.1);
      if (speed.current > 0.1) {
        rot.current = lerp(rot.current, newAngle, 0.1);
      }

      // Deform based on speed. The multipliers are small for a subtle effect.
      const scaleFactor = 1 + Math.min(speed.current * 0.01, 0.15);
      scale.current.x = lerp(scale.current.x, scaleFactor, 0.15);
      scale.current.y = lerp(scale.current.y, 2 - scaleFactor, 0.15);

      if (bubbleRef.current) {
        bubbleRef.current.style.transform = `translate(${posBubble.current.x}px, ${posBubble.current.y}px) rotate(${rot.current}deg) scaleX(${scale.current.x}) scaleY(${scale.current.y})`;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      <div
        ref={bubbleRef}
        className={`cursor-bubble ${isHovering ? 'hover' : ''}`}
      />
      <div
        ref={dotRef}
        className={`cursor-dot ${isHovering ? 'hidden' : ''}`}
      />
    </>
  );
};

export default Cursor;