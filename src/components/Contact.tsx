import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    { label: 'Email', value: 'weilyupku@gmail.com', command: 'mailto:weilyupku@gmail.com', icon: Mail },
    { label: 'LinkedIn', value: '/in/weilyu', command: 'https://linkedin.com/in/weilyu', icon: Linkedin },
    { label: 'GitHub', value: '@weilyu', command: 'https://github.com/weilyu', icon: Github },
    { label: 'Twitter', value: '@weilyu', command: 'https://twitter.com/weilyu', icon: Twitter }
  ];

  return (
    <section className="section-padding" id="contact">
      <div className="container-width">
        <div className="text-center mb-16">
          <div className="section-number mb-4">05_GET IN TOUCH</div>
          <h2 className="heading-medium mb-6">
            Let's Build Something Amazing
          </h2>
          <div className="section-divider mb-8"></div>
          <p className="body-large max-w-2xl mx-auto">
            Interested in collaborating on next-generation technology projects? 
            I'm always excited to explore new opportunities in AR/VR, AI, and wearable technology.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="professional-card p-8 text-center">
            <div className="space-y-6">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => window.open('mailto:weilyupku@gmail.com')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
              
              <div className="flex justify-center gap-6">
                {contactMethods.slice(1).map((method) => (
                  <button
                    key={method.label}
                    onClick={() => window.open(method.command)}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <method.icon className="w-5 h-5" />
                    <span className="hidden sm:inline">{method.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;