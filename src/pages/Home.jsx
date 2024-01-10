import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Experience from '@/components/Experience/Experience';
import Hero from '@/components/Hero/Hero';

import Navigation from '@/components/Navigation/Navigation';

import Projects from '@/components/Projects/Projects';
import HomeStyle from '@/pages/_home.module.scss';
import fs from 'fs';
import path from 'path';

export default function Home({ experience, projects }) {
  return (
    <div id='home'>
      <Navigation />
      <div id='content'>
        <main className={HomeStyle.fillHeight}>
          <Hero />
          <About />
          <Experience experience={experience} />
          <Projects projects={projects} />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  /*  let experience = await readCache('experience').then((workEntry) => {
    return workEntry;
  });*/

  const cacheFilePathExperience = path.join(
    process.cwd(),
    'src/api/cache/experienceSanitized.json',
  );

  const cacheFilePathProjects = path.join(
    process.cwd(),
    'src/api/cache/experienceSanitized.json',
  );

  const experience = await new Promise((resolve) => {
    fs.readFile(cacheFilePathExperience, 'utf8', (err, data) => {
      if (err) console.error(`error: `, err);
      resolve(JSON.parse(data));
    });
  });

  const projects = await new Promise((resolve) => {
    fs.readFile(cacheFilePathProjects, 'utf8', (err, data) => {
      if (err) console.error(`error: `, err);
      resolve(JSON.parse(data));
    });
  });

  return {
    props: { experience: experience, projects: projects },
  };
}
