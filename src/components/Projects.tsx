import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: '1',
      title: 'AR Spatial Computing Platform',
      description: 'Next-generation spatial computing platform for mixed reality experiences, focusing on natural hand tracking and spatial audio.',
      tags: ['Computer Vision', 'Unity', 'C#', 'Mixed Reality'],
      category: 'Product Development'
    },
    {
      id: '2', 
      title: 'Emotional AI Wearable',
      description: 'Wearable device that analyzes emotional states through biometric data and provides real-time feedback and recommendations.',
      tags: ['IoT', 'Machine Learning', 'Biometrics', 'Flutter'],
      category: 'Hardware + Software'
    },
    {
      id: '3',
      title: 'Smart Glasses OS',
      description: 'Custom operating system for smart glasses with voice control, gesture recognition, and contextual computing capabilities.',
      tags: ['Embedded Systems', 'Linux', 'Voice AI', 'Computer Vision'],
      category: 'Systems Engineering'
    },
    {
      id: '4',
      title: 'Neural Interface Framework',
      description: 'Research framework for brain-computer interfaces with focus on non-invasive signal processing and machine learning.',
      tags: ['Neuroscience', 'Signal Processing', 'Python', 'TensorFlow'],
      category: 'Research & Development'
    }
  ];

  return (
    <section className="section-padding" id="projects">
      <div className="container-width">
        <div className="text-center mb-16">
          <div className="section-number mb-4">03_FEATURED PROJECTS</div>
          <h2 className="heading-medium mb-6">
            Selected Work & Innovation
          </h2>
          <div className="section-divider mb-8"></div>
          <p className="body-large max-w-2xl mx-auto">
            A collection of projects spanning AR/VR development, wearable technology, 
            and emotional AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="professional-card p-8 group">
              <div className="mb-6">
                <div className="text-sm text-muted-foreground mb-2 font-mono uppercase tracking-wide">
                  {project.category}
                </div>
                <h3 className="heading-medium mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="professional-text mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary"
                    className="text-xs bg-secondary/50 text-secondary-foreground border-0"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                <Button 
                  size="sm" 
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Details
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  Repository
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;