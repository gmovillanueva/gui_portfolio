import projects from '@/api/cache/projectsSanitized.json';
import ProjectCard from '@/components/Projects/ProjectCard';
import ProjectsStyle from '@/components/Projects/projects.module.scss';

export default function Projects() {
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
