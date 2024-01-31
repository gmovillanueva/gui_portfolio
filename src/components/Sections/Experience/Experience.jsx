import experience from '@api/cache/experienceSanitized.json';
import ExperienceCard from '@components/Sections/Experience/ExperienceCard';
import ExperienceStyle from '@components/Sections/Experience/experience.module.scss';
export default function Experience() {
  experience &&
    experience.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

  return (
    <section id='experience'>
      <h2 className={ExperienceStyle.heading}>02. Where I have worked</h2>
      <div
        className={ExperienceStyle.grid}
        id='timeline_grid'
      >
        {experience &&
          experience.map((workEntry, index) => {
            return (
              <ExperienceCard
                key={index}
                workEntry={workEntry}
              />
            );
          })}
      </div>
    </section>
  );
}
