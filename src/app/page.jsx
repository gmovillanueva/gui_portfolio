import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

import * as PageStyle from '@/styles/_page.module.scss';

export default function Home() {
  return (
    <main className={PageStyle.main}>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
