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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">{'>'}</span> Now Building...
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-cyber font-bold text-primary">
                Nirva
              </h3>
              
              <h4 className="text-xl font-cyber text-foreground/90 mb-4">
                AI Wearable Companion for Mental Wellbeing
              </h4>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Empowering people to know, love, and become themselves.
              </p>
              
              <p className="text-foreground/70 leading-relaxed">
                Nirva represents the next evolution in personal AI—a wearable companion 
                that understands your mental state, provides personalized support, and 
                helps you navigate life's challenges with greater self-awareness and resilience.
              </p>
              
              <div className="font-mono text-sm text-secondary mt-6">
                <span className="text-primary">{'>'}</span> Status: In Development • Stealth Mode
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/0578b149-cc2c-4562-a31c-d862246c5d6c.png" 
                alt="Nirva - AI Wearable Companion for Mental Wellbeing" 
                className="w-full h-auto object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nirva;