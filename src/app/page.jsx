import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

import Header from '@/components/Header';
import * as RootStyle from '@/styles/_page.module.scss';

export default function Home() {
  return (
    <div
      id='root'
      className={RootStyle.root}
    >
      <div className={RootStyle.root__layout}>
        <Header />
        <div id='content'>
          <main className={RootStyle.root__main}>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
}
