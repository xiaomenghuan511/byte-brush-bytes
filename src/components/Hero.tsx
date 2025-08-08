import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Hi, I am Wei.';
  const subtitle = 'Building the future through wearables, AI, and emotional technology';
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);
  return <section className="min-h-screen flex items-center justify-center relative scan-line">
      <div className="absolute inset-0 matrix-bg"></div>
      
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-cyber font-bold mb-4 text-glow">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-mono text-glow-secondary">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="outline" size="lg" className="bg-card border-primary text-primary hover:bg-primary hover:text-primary-foreground border-glow font-mono">
            projects
          </Button>
          <Button variant="outline" size="lg" className="bg-card border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground border-glow font-mono">
            arts
          </Button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-40 right-16 w-1 h-1 bg-secondary rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-accent rounded-full animate-pulse opacity-50"></div>
      </div>

      {/* Terminal prompt at bottom */}
      <div className="absolute bottom-8 left-8 font-mono text-sm text-muted-foreground">
        
        
        
        
        
      </div>
    </section>;
};
export default Hero;