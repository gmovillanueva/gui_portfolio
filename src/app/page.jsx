import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Experience from '@/components/Experience/Experience';
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';
import RootStyle from './page.module.scss';

export default function App() {
  return (
    <main className={RootStyle.fillHeight}>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
