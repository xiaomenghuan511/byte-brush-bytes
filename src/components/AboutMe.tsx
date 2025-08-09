const AboutMe = () => {
  return (
    <section className="py-20 px-6" id="about-me">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-cyber font-bold text-glow mb-2">
              me & my products {'>>>'}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Meta & Y Combinator Alumni
            </p>
            
            <div className="space-y-4 text-foreground/90">
              <p className="text-lg leading-relaxed">
                I aim to define the ultimate interface between AI and humans—AI that aligns with personal goals, empathizes with real-life experiences, and helps people become their best selves.
              </p>
              
              <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4 leading-relaxed">
                "My life goal is to achieve enlightenment and reduce human suffering."
              </blockquote>
              
              <div className="font-mono text-sm text-secondary mt-6">
                <span className="text-primary">{'>'}</span> Focus: Wearable, AI, XR
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/b7e4ad18-f35f-4949-9f1c-2d83b3ce9c60.png" 
                alt="Me with AR/VR products and devices" 
                className="w-full h-auto object-cover rounded-md scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;