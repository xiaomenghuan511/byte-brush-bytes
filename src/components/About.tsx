import { Card } from '@/components/ui/card';
const About = () => {
  const skills = [{
    category: 'Hardware',
    items: ['AR Glasses', 'Industrial Design', 'Fast Prototype', 'Supply Chain']
  }, {
    category: 'Software',
    items: ['OS', 'SDK', 'AR Application', 'Scene Understanding', 'Contextual AI']
  }, {
    category: 'Art & Design',
    items: ['Film', 'Fashion Design', 'Poetry', 'Visual Arts']
  }];
  return <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4 text-glow">
             about me
          </h2>
          <div className="w-20 h-px bg-gradient-cyber mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">&#8250;</span> My Experiences
            </div>
            
            <div className="prose prose-lg text-foreground">
              {/* Timeline */}
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div className="w-px h-16 bg-border"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">2021 - Present</div>
                    <h4 className="font-cyber font-bold text-lg text-primary mb-2">Lead Product Manager @ Meta Reality Labs - Spatial AI</h4>
                    <p className="text-foreground/80">Joined Meta Reality Labs to lead Spatial AI. Built Spatial and Contextual Understanding capabilities on XR devices from 0→1 — defined the product vision, secured roadmap, and coordinated a 50-engineer team to deliver it.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div className="w-px h-16 bg-border"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">2019 - 2021</div>
                    <h4 className="font-cyber font-bold text-lg text-primary mb-2">Head of Product @ XREAL</h4>
                    <p className="text-foreground/80">As Head of Product at XREAL, led the 0→1 development of full-stack AR glasses (hardware + software), shipped globally. Devices → 350K units sold, company → $1B valuation, community → 30K passionate followers on Reddit. 4 years later, Meta decided to copy our product.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">2016 - 2018</div>
                    <h4 className="font-cyber font-bold text-lg text-primary mb-2">Co-founder @ Hippo</h4>
                    <p className="text-foreground/80">Founded a Y Combinator-backed AR social platform that grew to ~1M users.
 </p>
                  </div>
                </div>
              </div>

              <div className="font-mono text-sm text-secondary mt-8">
                <span className="text-primary">&#8250;</span> Now, I am building something new.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>;
};
export default About;