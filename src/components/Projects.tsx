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
  const projects: Project[] = [{
    id: '1',
    title: 'Meta Mixed Reality SDK',
    description: 'Interactive web app for visualizing deep learning architectures with real-time training animations.',
    category: 'software',
    tags: ['React', 'D3.js', 'TensorFlow', 'WebGL'],
    image: '/lovable-uploads/79911f12-3d0b-4919-bc0b-94005128ea4f.png',
    status: 'completed'
  }, {
    id: '2',
    title: 'Xreal Light Glasses, Controller, Computing Unit',
    description: 'Smart gardening system with sensors, automated watering, and mobile app control.',
    category: 'hardware',
    tags: ['Arduino', 'ESP32', 'React Native', 'MQTT'],
    image: '/lovable-uploads/02c6eeb3-50ef-4910-94c2-d6721db0fb3d.png',
    status: 'in-progress'
  }, {
    id: '3',
    title: 'fashion design',
    description: 'AI-powered installation that creates ambient soundscapes based on environmental data.',
    category: 'art',
    tags: ['Python', 'Max/MSP', 'Machine Learning', 'Audio'],
    status: 'completed'
  }, {
    id: '4',
    title: 'Xreal SDK',
    description: 'Real-time system monitoring tool with a futuristic terminal interface.',
    category: 'software',
    tags: ['Rust', 'TUI', 'System Programming', 'WebAssembly'],
    image: '/lovable-uploads/bb049d97-fb52-45d7-bbe6-121bb4d16001.png',
    status: 'completed'
  }, {
    id: '6',
    title: 'poetry',
    description: 'Algorithmic art series exploring data corruption as aesthetic medium.',
    category: 'art',
    tags: ['Processing', 'Glitch Art', 'Digital Media', 'Algorithms'],
    status: 'concept'
  }, {
    id: '7',
    title: 'Nebula OS on Xreal',
    description: 'Intelligent coding companion that provides real-time suggestions and automated refactoring using machine learning.',
    category: 'software',
    tags: ['Python', 'LLMs', 'VSCode Extension', 'NLP'],
    image: '/lovable-uploads/d9aadfa4-40ff-427a-a1f6-171b9fd38a44.png',
    status: 'in-progress'
  }, {
    id: '8',
    title: 'Spatial OS on Meta Quest',
    description: 'High-performance distributed system for processing large-scale data workloads across multiple nodes.',
    category: 'software',
    tags: ['Go', 'Kubernetes', 'Microservices', 'Docker'],
    image: '/lovable-uploads/276bf3be-a4d7-43fa-a607-48114688f4bd.png',
    status: 'completed'
  }, {
    id: '9',
    title: 'Hippo AR',
    description: 'AR location-based social App, let users create and share AR contents in 3D space.',
    category: 'software',
    tags: ['AR', 'Unity', 'React Native', 'Geolocation'],
    status: 'completed'
  }, {
    id: '10',
    title: 'short films',
    description: 'Creative storytelling through visual narratives exploring human emotions and digital experiences.',
    category: 'art',
    tags: ['Cinematography', 'Editing', 'Sound Design', 'Storytelling'],
    status: 'completed'
  }];
  const filteredProjects = activeCategory === 'all' ? projects : projects.filter(project => project.category === activeCategory);
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return 'text-primary';
      case 'in-progress':
        return 'text-secondary';
      case 'concept':
        return 'text-accent';
      default:
        return 'text-muted-foreground';
    }
  };
  const getStatusSymbol = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return '✓';
      case 'in-progress':
        return '⟳';
      case 'concept':
        return '◦';
      default:
        return '?';
    }
  };
  return <section className="py-20 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4 text-glow">
            projects
          </h2>
          <div className="w-20 h-px bg-gradient-cyber mx-auto mb-8"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(['all', 'software', 'hardware', 'art'] as ProjectCategory[]).map(category => <Button key={category} variant={activeCategory === category ? "default" : "outline"} onClick={() => setActiveCategory(category)} className={`font-mono ${activeCategory === category ? 'bg-primary text-primary-foreground border-glow' : 'bg-card border-primary text-primary hover:bg-primary hover:text-primary-foreground border-glow'}`}>
              {category}
            </Button>)}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <Card key={project.id} className="p-6 card-glow bg-card/50 backdrop-blur-sm hover:card-glow hover:scale-105 transition-all duration-300 group">
              <div className="w-full h-48 bg-muted/20 border border-border rounded-md mb-4 flex items-center justify-center overflow-hidden">
                {project.image ? <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> : <span className="text-muted-foreground font-mono text-sm">Project Image</span>}
              </div>
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-cyber font-bold text-foreground group-hover:text-glow transition-all">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

            </Card>)}
        </div>

        {filteredProjects.length === 0 && <div className="text-center py-12">
            <p className="text-muted-foreground font-mono">
              <span className="text-destructive">Error:</span> No projects found in /{activeCategory}/
            </p>
          </div>}
      </div>
    </section>;
};
export default Projects;