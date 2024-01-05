import { readCache } from '@/api/fetchContentfulAPI.mjs';
import ExperienceStyle from '@/components/Experience/experience.module.scss';
import ExperienceCards from '@/components/Experience/ExperienceCards';

export default async function Experience() {
  let experience = await readCache('experience').then((workEntry) => {
    return workEntry;
  });

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
      {/*<div
        id='container'
        className={ExperienceStyle.carousel_container}
      >
        <div className={ExperienceStyle.carousel_track}>
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
      </div>*/}
    </section>
  );
}
