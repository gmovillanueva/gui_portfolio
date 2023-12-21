import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Experience from '@/components/Experience/Experience';
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';

import Header from '@/components/Header/Header';

import * as HomeStyle from '@/pages/_home.module.scss';

export default function Home() {
  return (
    <div className={HomeStyle.layout}>
      <Header />
      <div id='content'>
        <main className={HomeStyle.main}>
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
