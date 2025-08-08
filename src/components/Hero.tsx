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

  return (
    <section className="min-h-screen flex items-center justify-center relative scan-line">
      <div className="absolute inset-0 matrix-bg"></div>
      
      {/* Hero Section with Image Layout */}
      <div className="flex items-center justify-center z-10 max-w-7xl mx-auto px-6 gap-12">
        {/* Left Side - Text Content */}
        <div className="flex-1 text-left">
          <p className="text-sm uppercase tracking-wider text-secondary/80 font-mono mb-2">Meta & YC Alumni</p>
          <h1 className="text-4xl md:text-6xl font-cyber font-bold mb-4 text-glow">
            Hi, I'm Wei Lyu
          </h1>
          <p className="text-lg text-secondary/80 font-mono mb-2 italic">Me & My Products {'>>'}</p>
          <p className="text-xl md:text-2xl text-primary font-mono text-glow-secondary mb-8">
            Building Next-gen AI Wearables
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" size="lg" className="bg-card border-primary text-primary hover:bg-primary hover:text-primary-foreground border-glow font-mono">
              ABOUT ME {'>'}
            </Button>
            <Button variant="outline" size="lg" className="bg-card border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground border-glow font-mono">
              EXPERIENCE {'>'}
            </Button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center">
          <img 
            src="/lovable-uploads/c8e82494-32eb-4d4a-ae2d-6cad9ef5bb98.png" 
            alt="Wei Lyu with AI wearable products" 
            className="max-w-full h-auto rounded-lg border border-primary/20 shadow-2xl"
          />
        </div>
      </div>

      {/* Original Typing Animation Section */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-10">
        <div className="text-center bg-card/10 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
          <h2 className="text-2xl md:text-4xl font-cyber font-bold mb-2 text-glow">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-sm md:text-lg text-secondary font-mono text-glow-secondary">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-40 right-16 w-1 h-1 bg-secondary rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-accent rounded-full animate-pulse opacity-50"></div>

      {/* Terminal prompt at bottom */}
      <div className="absolute bottom-8 left-8 font-mono text-sm text-muted-foreground">
        
        
        
        
        
      </div>
    </section>
  );
};

export default Hero;