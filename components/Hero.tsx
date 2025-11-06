import React, { useState, useEffect } from 'react';

interface HeroProps {
  onNavigate: (page: string, id?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Effect for mouse position
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  // Effect for scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const { innerWidth, innerHeight } = window;
  
  // Mouse parallax calculation
  const movementStrength = 40;
  const moveX = -(mousePos.x - innerWidth / 2) / movementStrength;
  const moveY = -(mousePos.y - innerHeight / 2) / movementStrength;

  // Scroll parallax calculation
  const scrollEnd = innerHeight * 0.7; // End animation after 70% of a viewport scroll
  const progress = Math.min(1, scrollY / scrollEnd);
  const opacity = 1 - progress * 1.5;

  const imageTransform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px)) translateY(-${scrollY * 0.3}px)`;
  const textTransform = `translateY(${scrollY * 0.2}px)`;
  
  // Dynamically change z-index to bring text forward on scroll
  const textZIndex = progress > 0.1 ? 'z-30' : 'z-10';

  return (
    <section id="home" className="h-screen relative flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Animated Text */}
        <div style={{ transform: textTransform, opacity }} className={`relative ${textZIndex}`}>
          <p className="text-center text-sm tracking-[0.3em] mb-4 text-neutral-600 uppercase">
            Based in London, UK
          </p>
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-none">
            CREATIVE
          </h1>
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-none text-right">
            DATA MIND
          </h1>
        </div>
        
        {/* Animated Image */}
        <div
          className="group absolute top-1/2 left-1/2 w-48 h-64 sm:w-64 sm:h-80 md:w-80 md:h-96 lg:w-96 lg:h-[30rem] overflow-hidden shadow-2xl z-20"
          style={{ transform: imageTransform, opacity }}
        >
          <img
            src="/images/hero-profile.png"
            alt="Yajnesh Rao"
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
          />
        </div>

        {/* Floating Buttons */}
        <div style={{ opacity }} className="absolute inset-0 z-30 pointer-events-none">
            {/* Desktop Layout (md and up) */}
            <div className="hidden md:block">
                <button 
                    onClick={() => onNavigate('works')}
                    className="absolute top-[60%] left-[15%] lg:left-[22%] pointer-events-auto bg-white shadow-md backdrop-blur-sm border border-neutral-200 text-[#1a1a1a] px-6 py-3 rounded-full text-sm font-semibold tracking-wider hover:bg-neutral-100 hover:shadow-lg transition-all duration-300 w-60 text-center"
                >
                    View Design Projects
                </button>
                <button 
                    onClick={() => onNavigate('works')}
                    className="absolute top-[38%] right-[15%] lg:right-[22%] pointer-events-auto bg-accent shadow-md backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wider hover:bg-black transition-colors duration-300 w-60 text-center"
                >
                    View Data Projects
                </button>
            </div>

            {/* Mobile Layout (sm and down) */}
            <div className="md:hidden absolute inset-x-0 top-1/2 flex flex-col items-center gap-4 transform translate-y-32 pointer-events-auto">
                <button 
                    onClick={() => onNavigate('works')}
                    className="bg-white shadow-md backdrop-blur-sm border border-neutral-200 text-[#1a1a1a] px-6 py-3 rounded-full text-sm font-semibold tracking-wider hover:bg-neutral-100 hover:shadow-lg transition-all duration-300 w-60 text-center"
                >
                    View Design Projects
                </button>
                <button 
                    onClick={() => onNavigate('works')}
                    className="bg-accent shadow-md backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wider hover:bg-black transition-colors duration-300 w-60 text-center"
                >
                    View Data Projects
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;