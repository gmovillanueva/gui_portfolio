import { readCache } from '@/api/fetchContentfulAPI.mjs';
import ExperienceCards from '@/components/Experience/ExperienceCards';
import ExperienceStyle from '@/components/Experience/experience.module.scss';

export default async function Experience() {
  const experience = await readCache('experience').then((workEntry) => {
    return workEntry;
  });

  return (
    <section
      id='experience'
      className={ExperienceStyle.jobSection}
    >
      <h2 className={ExperienceStyle.base_heading}>Where I have worked</h2>
      <div
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
      </div>
    </section>
  );
}
