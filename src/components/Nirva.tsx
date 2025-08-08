const Nirva = () => {
  return (
    <section className="py-20 px-6" id="nirva">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4 text-glow">
            I am building...
          </h2>
          <div className="w-20 h-px bg-gradient-cyber mx-auto mb-8"></div>
        </div>

        <a href="https://nirva.life/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity">
          <div className="grid md:grid-cols-2 gap-12 items-center cursor-pointer">
            <div className="space-y-6">
              <div className="font-mono text-sm text-muted-foreground">
                <span className="text-primary">{'>'}</span> Now Building...
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-cyber font-bold text-primary">
                  Nirva
                </h3>
                
                <h4 className="text-xl font-cyber text-foreground/90 mb-4">
                  Fashion Accessory for Mental Wellbeing
                </h4>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Empowering people to know, love, and become themselves.
                </p>
                
                <p className="text-foreground/70 leading-relaxed">
                  Mental wellness and therapy services often fail because they rely on users to explain themselves—but self-awareness is limited and biased, and context is hard to recall. Nirva captures real-life context through an all-day-wear multimodal-sensing fashion accessory, enabling effortless, personalized emotional support, companionship, and life coaching.
                </p>
                
                <div className="font-mono text-sm text-secondary mt-6">
                  <span className="text-primary">{'>'}</span> Status: software and hardware prototype + Stealth Mode
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/d2995631-a794-4b9e-a0dd-212ecde82ae0.png" 
                  alt="Nirva - AI Wearable Companion for Mental Wellbeing" 
                  className="w-full h-auto object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Nirva;