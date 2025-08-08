import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Profile Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="/lovable-uploads/86c27c04-229c-48ee-a523-04dd6911da26.png" 
                alt="Wei Lyu - Professional portrait with AR glasses"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="mb-8">
              <h1 className="heading-large mb-6">
                Hi, I'm Wei Lyu
              </h1>
              <p className="text-lg text-muted-foreground mb-2 font-medium">
                Meta and YC Alumni
              </p>
              <div className="text-lg text-muted-foreground mb-8">
                {'<<< Me & My Products'}
              </div>
              <div className="space-y-2 mb-8">
                <p className="text-xl font-medium text-foreground">
                  Building Next-gen
                </p>
                <p className="text-xl font-medium text-foreground">
                  AI Wearables
                </p>
                <p className="text-xl font-medium text-foreground">
                  & Emotional Technology
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-background border-border hover:bg-muted"
              >
                01_ABOUT ME {'>'} 
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-background border-border hover:bg-muted"
              >
                02_MY PORTFOLIO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;