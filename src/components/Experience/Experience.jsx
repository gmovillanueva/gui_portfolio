import { readCache } from '@/api/fetchContentfulAPI.mjs';
import ExperienceStyle from '@/components/Experience/experience.module.scss';
import { clsx } from 'clsx';

export default async function Experience() {
  const experience = await readCache().then((workEntry) => {
    return workEntry;
  });

  /*  const [activeTab, setActiveTab] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabRef = useRef([]);
  const revealContainer = useRef(null);*/

  return (
    <section
      id='experience'
      className={ExperienceStyle.jobsection}
    >
      <h2 className={ExperienceStyle.base_heading}>Where I have worked</h2>
      <div
        id='container'
        className={ExperienceStyle.jobsection_innersection}
      >
        <div
          className={ExperienceStyle.container__tablist}
          role='tablist'
        >
          {experience &&
            experience.map((workEntry, index) => {
              return (
                <button
                  className={clsx(
                    ExperienceStyle.button,
                    ExperienceStyle.button__hover,
                    ExperienceStyle.button__focus,
                    ExperienceStyle.button__active,
                  )}
                  key={index}
                >
                  {workEntry.companyName}
                </button>
              );
            })}
        </div>
        <div
          id='tabpanesl'
          className={ExperienceStyle.tabpanels_panel}
        >
          <div
            id='panel_1'
            role='tabpanel'
            className={ExperienceStyle.tabpanels_panel}
          >
            <h3>
              <span>Senior Fullstack Software Engineer</span>
              <span>
                @<a>Lykka Village</a>
              </span>
            </h3>
            <p>2021 - Current</p>
            <div>
              <ul className={ExperienceStyle.infolist}>
                <li
                  className={clsx(
                    ExperienceStyle.infolist_infoitem,
                    ExperienceStyle.infolist_infoitem__before,
                  )}
                >
                  Owned the CI/CD pipeline implementation
                </li>
                <li
                  className={clsx(
                    ExperienceStyle.infolist_infoitem,
                    ExperienceStyle.infolist_infoitem__before,
                  )}
                >
                  Designed and implemented a scalable profile service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
