import { Card } from '@/components/ui/card';
const About = () => {
  const skills = [{
    category: 'Hardware',
    items: ['AR Glasses', 'Industrial Design', 'Electronic Design', 'Fast Prototype', '3D Printing', 'Supply Chain']
  }, {
    category: 'Software',
    items: ['OS', 'SDK', 'AR Application', 'Scene Understanding', 'Computer Vision', 'Contextual AI']
  }, {
    category: 'Art & Design',
    items: ['film', 'fashion design', 'poetry', 'visual arts']
  }];
  return <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4 text-glow">
             whoami
          </h2>
          <div className="w-20 h-px bg-gradient-cyber mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">&#8250;</span> Initializing bio.exe...
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
                    <p className="text-foreground/80">Leading spatial computing initiatives and AR product development at Meta's Reality Labs division.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div className="w-px h-16 bg-border"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">2019 - 2021</div>
                    <h4 className="font-cyber font-bold text-lg text-primary mb-2">Head of Product @ Xreal</h4>
                    <p className="text-foreground/80">Spearheaded product strategy and development for next-generation AR glasses and mixed reality experiences.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">2016 - 2018</div>
                    <h4 className="font-cyber font-bold text-lg text-primary mb-2">Co-founder @ Hippo</h4>
                    <p className="text-foreground/80">Co-founded and built innovative solutions bridging hardware and software in the emerging tech space.</p>
                  </div>
                </div>
              </div>

              <div className="font-mono text-sm text-secondary mt-8">
                <span className="text-primary">&#8250;</span> Status: Creating the future, one project at a time
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {skills.map((skillGroup, index) => <Card key={skillGroup.category} className="p-6 card-glow bg-card/50 backdrop-blur-sm hover:card-glow transition-all duration-300">
                <div className="w-full h-56 bg-muted/20 border border-border rounded-md mb-4 flex items-center justify-center overflow-hidden">
                  {skillGroup.category === 'Software' ? <img src="/lovable-uploads/c8e82494-32eb-4d4a-ae2d-6cad9ef5bb98.png" alt="Software" className="w-full h-full object-cover" /> : <span className="text-muted-foreground font-mono text-sm">Image Placeholder</span>}
                </div>
                <h3 className="font-cyber font-bold text-xl mb-4 text-primary">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map(skill => <span key={skill} className="px-3 py-1 text-sm bg-muted/30 border border-border rounded-md font-mono hover:border-primary transition-colors">
                      {skill}
                    </span>)}
                </div>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;