import About from '@components/Sections/About/About';
import Contact from '@components/Sections/Contact/Contact';
import Experience from '@components/Sections/Experience/Experience';
import Hero from '@components/Sections/Hero/Hero';
import Projects from '@components/Sections/Projects/Projects';
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
