import ProjectCard from '@/components/Projects/ProjectCard';
import ProjectsStyle from '@/components/Projects/projects.module.scss';
import fs from 'fs';
import path from 'path';

export default function Projects({ projects }) {
  return (
    <section id='projects'>
      <h2 className={ProjectsStyle.heading}>Cool things I have created</h2>
      <ul className={ProjectsStyle.list}>
        {projects &&
          projects.map((projectEntry, index) => {
            return (
              <ProjectCard
                key={index}
                projectEntry={projectEntry}
              />
            );
          })}
      </ul>
    </section>
  );
}

export async function getStaticProps() {
  /*  const projects = await readCache('projects').then((projectEntry) => {
    return projectEntry;
  });*/
  const cacheFilePath = path.join(
    process.cwd(),
    'src/api/cache/projectsSanitized.json',
  );

  const projects = await new Promise((resolve) => {
    fs.readFile(cacheFilePath, 'utf8', (err, data) => {
      if (err) console.error(`error: `, err);
      resolve(JSON.parse(data));
    });
  });

  return {
    props: { projects: projects },
  };
}
