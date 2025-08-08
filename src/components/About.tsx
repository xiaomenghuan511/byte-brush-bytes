import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'MBA in Emotional Technology',
      institution: 'Stanford University, 2020 - 2022'
    },
    {
      degree: 'BSc in Computer Science', 
      institution: 'Harvard University, 2004 - 2008'
    }
  ];

  const skills = [
    'Emotional AI',
    'Wearable Technology', 
    'Augmented Reality',
    'Product Development'
  ];

  return (
    <section className="section-padding" id="about">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Education Section */}
          <div className="professional-card p-8">
            <div className="section-number mb-6">06_EDUCATION</div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="heading-medium text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="professional-text">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Insights Section */}
          <div className="professional-card p-8 relative">
            <div className="section-number mb-6">07_TECHNOLOGY INSIGHTS {'>'}</div>
            <div className="w-full h-48 bg-muted rounded-md mb-4 flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/244268cf-8fed-4bec-9131-8e36ee03a755.png" 
                alt="Technology insights and documentation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Skills Section */}
          <div className="professional-card p-8 bg-foreground text-background">
            <div className="section-number mb-6 text-gray-400">08_SKILLS</div>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-background flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-lg text-background">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default About;