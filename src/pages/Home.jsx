import Navigation from '@/components/Navigation/Navigation';

import HomeStyle from '@/pages/_home.module.scss';

export default function Home() {
  return (
    <div id='home'>
      <Navigation />
      <div id='content'>
        <main className={HomeStyle.fillHeight}>
          {/*          <Hero />
                    <About />
          <Experience />
          <Projects />
          <Contact />*/}
        </main>
      </div>
    </div>
  );
}
