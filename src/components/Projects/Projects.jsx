import * as ProjectsStyle from '@/components/Projects/projects.module.scss';
export default function Projects() {
  return (
    <div>
      <section id='projects'>
        <h2 className={ProjectsStyle.header}>Cool things I have created</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 1</li>
          <li>Project 1</li>
        </ul>
      </section>
    </div>
  );
}
