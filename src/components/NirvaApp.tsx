const NirvaApp = () => {
  const features = [
    {
      title: "Privacy-First All-Day Sensing Fashion Accessory",
      description: "Captures real-life context and understands you throughout the day. Makes you look better, feel better, live better."
    },
    {
      title: "Life Journals and Understanding",
      description: "Automatically writes stories for you with guided reflection, sharing every big and small moment with you."
    },
    {
      title: "24/7 Companionship and Coaching",
      description: "Guides your life with deep self-awareness and truly personalized insights. Knows you better than your mom, partner, or therapist and is there 24/7."
    },
    {
      title: "Research-backed Mental Sensing",
      description: "Multi-dimensional assessment model, developed with therapists and life coaches. Visualizes mental wellbeing patterns including mood, energy, stress, social interaction, and more."
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/20" id="nirva-app">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4 text-glow">
            Nirva App
          </h2>
          <div className="w-20 h-px bg-gradient-cyber mx-auto mb-8"></div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            The ultimate companion for mental wellness and self-discovery
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* App Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="space-y-3">
                <div className="font-mono text-sm text-muted-foreground">
                  <span className="text-primary">{'>'}</span> Feature {index + 1}
                </div>
                <h3 className="text-2xl font-cyber font-bold text-primary">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* App Screenshot */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/3957ad14-82eb-45bd-b679-f2668b5a425e.png" 
                alt="Nirva App Interface - Heart-to-heart conversations and Life Journals" 
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

export default NirvaApp;