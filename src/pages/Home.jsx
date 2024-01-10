import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Experience from '@/components/Experience/Experience';
import Hero from '@/components/Hero/Hero';

import Navigation from '@/components/Navigation/Navigation';

import Projects from '@/components/Projects/Projects';
import HomeStyle from '@/pages/_home.module.scss';

export default function Home() {
  return (
    <div id='home'>
      <Navigation />
      <div id='content'>
        <main className={HomeStyle.fillHeight}>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}
