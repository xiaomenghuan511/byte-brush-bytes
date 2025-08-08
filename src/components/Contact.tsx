import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactMethods = [
    { label: 'Email', value: 'weilyupku@gmail.com', command: 'mailto:weilyupku@gmail.com' },
    { label: 'GitHub', value: '@coolhacker', command: 'https://github.com/coolhacker' },
    { label: 'LinkedIn', value: '/in/coolhacker', command: 'https://linkedin.com/in/coolhacker' },
    { label: 'Twitter', value: '@hackercool', command: 'https://twitter.com/hackercool' }
  ];

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4 text-glow">
            <span className="text-accent">$</span> Contact
          </h2>
          <div className="w-20 h-px bg-gradient-cyber mx-auto mb-8"></div>
          <p className="text-muted-foreground font-mono">
            <span className="text-primary">&#8250;</span> Establishing secure connection...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 card-glow bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-cyber font-bold mb-6 text-primary">
              Get In Touch
            </h3>
            
            <div className="space-y-4 font-mono text-sm">
              <p className="text-foreground leading-relaxed">
                Interested in collaborating on cutting-edge projects? 
                Whether it's hardware hacking, software development, or 
                digital art installations, I'm always excited to explore 
                new frontiers.
              </p>
              
              <div className="pt-4 space-y-2">
                <p className="text-secondary">
                  <span className="text-primary">&#8250;</span> Status: Available for projects
                </p>
                <p className="text-secondary">
                  <span className="text-primary">&#8250;</span> Response time: ~24 hours
                </p>
                <p className="text-secondary">
                  <span className="text-primary">&#8250;</span> Encryption: GPG preferred
                </p>
              </div>
            </div>

            <Button 
              className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary-glow font-mono border-glow"
              onClick={() => window.open('mailto:weilyupku@gmail.com')}
            >
              $ send_message.sh
            </Button>
          </Card>

          <Card className="p-8 card-glow bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-cyber font-bold mb-6 text-secondary">
              Network Nodes
            </h3>
            
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <div 
                  key={method.label}
                  className="flex justify-between items-center p-3 bg-muted/20 rounded border border-border hover:border-primary transition-colors cursor-pointer"
                  onClick={() => window.open(method.command)}
                >
                  <div className="font-mono">
                    <span className="text-accent">{method.label}:</span>
                    <span className="text-foreground ml-2">{method.value}</span>
                  </div>
                  <span className="text-muted-foreground text-xs">→</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-terminal-bg border border-border rounded font-mono text-xs">
              <div className="text-primary mb-2">$ cat public_key.asc</div>
              <div className="text-muted-foreground">
                -----BEGIN PGP PUBLIC KEY BLOCK-----<br />
                [Key fingerprint would be here]<br />
                -----END PGP PUBLIC KEY BLOCK-----
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">user@matrix</span>
            <span>:</span>
            <span className="text-secondary">~/portfolio</span>
            <span>$ echo "Let's build something amazing together"</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;