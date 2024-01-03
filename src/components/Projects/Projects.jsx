import { readCache } from '@/api/fetchContentfulAPI.mjs';
import ProjectCard from '@/components/Projects/ProjectCard';
import ProjectsStyle from '@/components/Projects/projects.module.scss';
export default async function Projects() {
  const projects = await readCache('projects').then((projectEntry) => {
    return projectEntry;
  });

  return (
    <section
      className={ProjectsStyle.jobSection}
      id='projects'
    >
      <h2 className={ProjectsStyle.base_heading}>Cool things I have created</h2>
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
