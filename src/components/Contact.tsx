import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const Contact = () => {
  const contactMethods = [{
    label: 'Email',
    value: 'weilyupku@gmail.com',
    command: 'mailto:weilyupku@gmail.com'
  }, {
    label: 'GitHub',
    value: '@coolhacker',
    command: 'https://github.com/coolhacker'
  }, {
    label: 'LinkedIn',
    value: '/in/coolhacker',
    command: 'https://linkedin.com/in/coolhacker'
  }, {
    label: 'Twitter',
    value: '@hackercool',
    command: 'https://twitter.com/hackercool'
  }];
  return <section className="py-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4 text-glow">
            contact me
          </h2>
          <div className="w-20 h-px bg-gradient-cyber mx-auto mb-8"></div>
          <p className="text-muted-foreground font-mono mb-6">
            <span className="text-primary">&#8250;</span> Establishing secure connection...
          </p>
          
          <div className="space-y-2 font-mono text-foreground">
            <div className="flex items-center justify-center gap-2">
              <span className="text-primary">email:</span>
              <a href="mailto:weilyupku@gmail.com" className="text-secondary hover:text-glow transition-colors">
                weilyupku@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-primary">phone:</span>
              <a href="tel:3472005684" className="text-secondary hover:text-glow transition-colors">
                347-200-5684
              </a>
            </div>
          </div>
        </div>

        

        <div className="text-center mt-12">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">user@matrix</span>
            <span>:</span>
            <span className="text-secondary">~/portfolio</span>
            <span>$ echo "Let's work together to augment human."</span>
          </p>
        </div>
      </div>
    </section>;
};
export default Contact;