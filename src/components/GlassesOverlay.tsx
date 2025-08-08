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
          <img 
            src="/lovable-uploads/0baa40f7-b39b-4ced-a864-9b11edcb8033.png"
            alt="AR Glasses Frame"
            className="w-full h-auto drop-shadow-[0_0_30px_hsl(170_100%_50%)]"
          />
        </div>
      )}
      
      {showLensFrame && (
        <div className="lens-frame"></div>
      )}
    </>
  );
};

export default GlassesOverlay;