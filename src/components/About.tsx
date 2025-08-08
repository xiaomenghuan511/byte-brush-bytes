import { Card } from '@/components/ui/card';
const About = () => {
  const skills = [{
    category: 'Hardware',
    items: ['AR Glasses', 'Industrial Design', 'Electronic Design', 'Fast Prototype', '3D Printing', 'Supply Chain']
  }, {
    category: 'Software',
    items: ['React', 'Node.js', 'Python', 'Rust', 'Docker', 'Machine Learning']
  }, {
    category: 'Art & Design',
    items: ['film', 'fashion design', 'poetry', 'visual arts']
  }];
  return <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4 text-glow">
            <span className="text-primary">?</span> whoami
          </h2>
          <div className="w-20 h-px bg-gradient-cyber mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">&#8250;</span> Initializing bio.exe...
            </div>
            
            <div className="prose prose-lg text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                I'm a multidisciplinary creator who bridges the gap between technology and art. 
                My passion lies in building innovative solutions that push the boundaries of what's possible.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                From crafting elegant code to designing interactive hardware experiences, 
                I believe in the power of technology to create meaningful connections and 
                inspire wonder in the world around us.
              </p>

              <div className="font-mono text-sm text-secondary">
                <span className="text-primary">&#8250;</span> Status: Creating the future, one project at a time
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {skills.map((skillGroup, index) => <Card key={skillGroup.category} className="p-6 card-glow bg-card/50 backdrop-blur-sm hover:card-glow transition-all duration-300">
                <div className="w-full h-32 bg-muted/20 border border-border rounded-md mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground font-mono text-sm">Image Placeholder</span>
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