import * as ProjectsStyle from '@/styles/components/_projects.module.scss';
export default function Projects() {
  return (
    <div>
      <section id='projects'>
        <h2 className={ProjectsStyle.header}>Cool things I have created</h2>
        <div id='timeline'>
          <button>Lykka Village</button>
          <button>Lykka Village</button>
          <button>Texas A&M University</button>
          <button>Texas A&M Engineering Experiment Station</button>
        </div>
      </section>
    </div>
  );
}
