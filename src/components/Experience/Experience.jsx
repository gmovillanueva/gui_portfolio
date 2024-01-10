import ExperienceCards from '@/components/Experience/ExperienceCards';
import ExperienceStyle from '@/components/Experience/experience.module.scss';

export default function Experience({ experience }) {
  experience &&
    experience.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

  return (
    <section id='experience'>
      <h2 className={ExperienceStyle.heading}>Where I have worked</h2>
      <div
        className={ExperienceStyle.grid}
        id='timeline_grid'
      >
        {experience &&
          experience.map((workEntry, index) => {
            return (
              <ExperienceCards
                key={index}
                workEntry={workEntry}
              />
            );
          })}
      </div>
    </section>
  );
}
