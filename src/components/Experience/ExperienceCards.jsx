'use client';
import ExperienceStyle from '@/components/Experience/experience.module.scss';
export default function ExperienceCards({ workEntry }) {
  const textArray = workEntry.bulletPoints.split('\n');
  return (
    <article className={ExperienceStyle.carouselCard}>
      <div className={ExperienceStyle.carouselCardBody}>
        <h3 className={ExperienceStyle.carouselCardBodyHeading}>
          <span>{workEntry?.jobTitle}</span>
          <br />
          <span>&nbsp;@&nbsp;</span>
          <br />
          <span>{workEntry?.companyName}</span>
        </h3>
        <p>
          {new Date(workEntry?.startDate).getFullYear()} -{' '}
          {workEntry?.currentlyHere
            ? 'Present'
            : new Date(workEntry?.endDate).getFullYear()}{' '}
        </p>
        <ul>
          {textArray.map((bullet, index) => {
            return <li key={index}>{bullet}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}
