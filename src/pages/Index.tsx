import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import AboutMe from '@/components/AboutMe';
import Nirva from '@/components/Nirva';
import NirvaApp from '@/components/NirvaApp';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <AboutMe />
        <About />
        <Nirva />
        <NirvaApp />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
