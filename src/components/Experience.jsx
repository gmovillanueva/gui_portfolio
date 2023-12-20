import ExperienceStyle from '@/styles/components/_experience.module.scss';
export default function Experience() {
  return (
    <div>
      <section id='experience'>
        <h2 className={ExperienceStyle.experience__heading__h2}>
          Where I have worked
        </h2>
        <div
          id='container'
          className={ExperienceStyle.experience__container}
        >
          <div
            className={ExperienceStyle.experience__container__tablist}
            role='tablist'
          >
            <button
              className={ExperienceStyle.experience__container__tablist__button}
            >
              Lykka Village
            </button>
            <button
              className={ExperienceStyle.experience__container__tablist__button}
            >
              Lykka Village
            </button>
            <button
              className={ExperienceStyle.experience__container__tablist__button}
            >
              Texas A&M University
            </button>
            <button
              className={ExperienceStyle.experience__container__tablist__button}
            >
              Texas A&M Engineering Experiment Station
            </button>
          </div>
          <div
            id='tabpanesl'
            className={
              ExperienceStyle.experience__container__tabpanels__tabpanel
            }
          >
            <div
              id='panel_1'
              role='tabpanel'
              className={ExperienceStyle.experience__container__tabpanels}
            >
              <h3>
                <span>Fullstack Software Engineer</span>
                <span>
                  @<a>Lykka Village</a>
                </span>
              </h3>
              <p>May - May</p>
              <div>
                <ul>
                  <li>Wrote cool code.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
