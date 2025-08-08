import { useState, useEffect } from 'react';

const GlassesOverlay = () => {
  const [showGlasses, setShowGlasses] = useState(true);
  const [showLensFrame, setShowLensFrame] = useState(false);

  useEffect(() => {
    // Hide glasses after animation and show lens frame
    const timer1 = setTimeout(() => {
      setShowGlasses(false);
    }, 3000);

    const timer2 = setTimeout(() => {
      setShowLensFrame(true);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {showGlasses && (
        <div className="glasses-overlay">
          <svg
            viewBox="0 0 1000 400"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Glasses frame using neon cyan color */}
            <path
              d="M100 200 C100 120, 160 80, 240 80 L340 80 C420 80, 480 120, 480 200 C480 280, 420 320, 340 320 L240 320 C160 320, 100 280, 100 200 Z"
              fill="none"
              stroke="hsl(170 100% 50%)"
              strokeWidth="12"
              className="drop-shadow-[0_0_20px_hsl(170_100%_50%)]"
            />
            
            {/* Bridge */}
            <path
              d="M480 180 Q500 160, 520 180"
              fill="none"
              stroke="hsl(170 100% 50%)"
              strokeWidth="12"
              className="drop-shadow-[0_0_20px_hsl(170_100%_50%)]"
            />
            
            {/* Right lens */}
            <path
              d="M520 200 C520 120, 580 80, 660 80 L760 80 C840 80, 900 120, 900 200 C900 280, 840 320, 760 320 L660 320 C580 320, 520 280, 520 200 Z"
              fill="none"
              stroke="hsl(170 100% 50%)"
              strokeWidth="12"
              className="drop-shadow-[0_0_20px_hsl(170_100%_50%)]"
            />
            
            {/* Decorative dots on frame */}
            <circle cx="150" cy="120" r="8" fill="hsl(170 100% 50%)" className="drop-shadow-[0_0_10px_hsl(170_100%_50%)]" />
            <circle cx="170" cy="130" r="6" fill="hsl(170 100% 50%)" className="drop-shadow-[0_0_10px_hsl(170_100%_50%)]" />
            <circle cx="850" cy="120" r="8" fill="hsl(170 100% 50%)" className="drop-shadow-[0_0_10px_hsl(170_100%_50%)]" />
            <circle cx="830" cy="130" r="6" fill="hsl(170 100% 50%)" className="drop-shadow-[0_0_10px_hsl(170_100%_50%)]" />
          </svg>
        </div>
      )}
      
      {showLensFrame && (
        <div className="lens-frame"></div>
      )}
    </>
  );
};

export default GlassesOverlay;