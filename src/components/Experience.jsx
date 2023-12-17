import * as ExperienceStyle from '@/styles/components/_experience.module.scss';
export default function Experience() {
  return (
    <div>
      <section id='experience'>
        <h2 className={ExperienceStyle.header}>Where I have worked</h2>
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
