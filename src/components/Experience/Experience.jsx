import { readCache } from '@/api/fetchContentfulAPI.mjs';
import ExperienceCards from '@/components/Experience/ExperienceCards';
import ExperienceStyle from '@/components/Experience/experience.module.scss';

export default async function Experience() {
  const experience = await readCache().then((workEntry) => {
    return workEntry;
  });

  return (
    <section
      id='experience'
      className={ExperienceStyle.jobsection}
    >
      <h2 className={ExperienceStyle.base_heading}>Where I have worked</h2>
      <div
        id='container'
        className={ExperienceStyle.carouselContainer}
      >
        <div className={ExperienceStyle.carouselTrack}>
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
