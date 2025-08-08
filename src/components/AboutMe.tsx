const AboutMe = () => {
  return (
    <section className="py-20 px-6" id="about-me">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-cyber font-bold text-glow mb-6">
              Me & My Products
            </h2>
            
            <div className="space-y-4 text-foreground/90">
              <p className="text-lg leading-relaxed">
                I want to define the ultimate interface between AI and humans. I want to ensure AI aligns with individuals' personal goals, empathizes with their real-life experiences, and helps people become their best selves.
              </p>
              
              <p className="leading-relaxed">
                My work spans from AR glasses and mixed reality headsets to the software ecosystems 
                that power them. I believe in building products that seamlessly blend digital and 
                physical worlds, creating experiences that feel natural and intuitive.
              </p>
              
              <div className="font-mono text-sm text-secondary mt-6">
                <span className="text-primary">{'>'}</span> Focus: Spatial AI • AR/VR Hardware • Product Strategy
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-lg border border-border bg-card p-4">
              <img 
                src="/lovable-uploads/b7e4ad18-f35f-4949-9f1c-2d83b3ce9c60.png" 
                alt="Me with AR/VR products and devices" 
                className="w-full h-auto object-cover rounded-md"
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