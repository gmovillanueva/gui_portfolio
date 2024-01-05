import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Experience from '@/components/Experience/Experience';
import Hero from '@/components/Hero/Hero';

import Header from '@/components/Header/Header';

import Projects from '@/components/Projects/Projects';
import HomeStyle from '@/pages/_home.module.scss';

export default function Home() {
  return (
    <div id='home'>
      <Header />
      <div id='content'>
        <main className={HomeStyle.fill_height}>
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
