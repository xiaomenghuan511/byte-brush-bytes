import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'home', href: '#home' },
    { label: 'about', href: '#about' },
    { label: 'projects', href: '#projects' },
    { label: 'contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-cyber font-bold text-xl text-primary text-glow">
            {'<Wei/>'}
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className="font-mono text-sm hover:text-primary hover:bg-card/50 transition-all"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="sm"
            className="md:hidden font-mono text-primary"
          >
            [ menu ]
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;