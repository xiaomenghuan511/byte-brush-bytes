import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

type ProjectCategory = 'all' | 'software' | 'hardware' | 'art';

interface Project {
  id: string;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, 'all'>;
  tags: string[];
  image?: string;
  status: 'completed' | 'in-progress' | 'concept';
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Neural Network Visualizer',
      description: 'Interactive web app for visualizing deep learning architectures with real-time training animations.',
      category: 'software',
      tags: ['React', 'D3.js', 'TensorFlow', 'WebGL'],
      status: 'completed'
    },
    {
      id: '2',
      title: 'IoT Garden Monitor',
      description: 'Smart gardening system with sensors, automated watering, and mobile app control.',
      category: 'hardware',
      tags: ['Arduino', 'ESP32', 'React Native', 'MQTT'],
      status: 'in-progress'
    },
    {
      id: '3',
      title: 'Generative Music Machine',
      description: 'AI-powered installation that creates ambient soundscapes based on environmental data.',
      category: 'art',
      tags: ['Python', 'Max/MSP', 'Machine Learning', 'Audio'],
      status: 'completed'
    },
    {
      id: '4',
      title: 'Cyberpunk Dashboard',
      description: 'Real-time system monitoring tool with a futuristic terminal interface.',
      category: 'software',
      tags: ['Rust', 'TUI', 'System Programming', 'WebAssembly'],
      status: 'completed'
    },
    {
      id: '5',
      title: 'LED Matrix Display',
      description: 'Large-scale programmable LED installation for interactive art exhibitions.',
      category: 'hardware',
      tags: ['Arduino', 'FastLED', 'PCB Design', 'C++'],
      status: 'completed'
    },
    {
      id: '6',
      title: 'Digital Glitch Art',
      description: 'Algorithmic art series exploring data corruption as aesthetic medium.',
      category: 'art',
      tags: ['Processing', 'Glitch Art', 'Digital Media', 'Algorithms'],
      status: 'concept'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed': return 'text-primary';
      case 'in-progress': return 'text-secondary';
      case 'concept': return 'text-accent';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusSymbol = (status: Project['status']) => {
    switch (status) {
      case 'completed': return '✓';
      case 'in-progress': return '⟳';
      case 'concept': return '◦';
      default: return '?';
    }
  };

  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4 text-glow">
            <span className="text-secondary">$</span> ls projects/
          </h2>
          <div className="w-20 h-px bg-gradient-cyber mx-auto mb-8"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(['all', 'software', 'hardware', 'art'] as ProjectCategory[]).map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`font-mono ${
                activeCategory === category 
                  ? 'bg-primary text-primary-foreground border-glow' 
                  : 'bg-card border-primary text-primary hover:bg-primary hover:text-primary-foreground border-glow'
              }`}
            >
              ./{category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className="p-6 card-glow bg-card/50 backdrop-blur-sm hover:card-glow hover:scale-105 transition-all duration-300 group"
            >
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-cyber font-bold text-foreground group-hover:text-glow transition-all">
                    {project.title}
                  </h3>
                  <span className={`text-sm font-mono ${getStatusColor(project.status)}`}>
                    {getStatusSymbol(project.status)} {project.status}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary"
                    className="text-xs font-mono bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  className="flex-1 font-mono bg-card border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  view
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="flex-1 font-mono bg-card border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  code
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground font-mono">
              <span className="text-destructive">Error:</span> No projects found in /{activeCategory}/
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;