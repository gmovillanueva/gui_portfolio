'use client';
import ExperienceStyle from '@/components/Experience/experience.module.scss';
export default function ExperienceCards({ workEntry }) {
  const textArray = workEntry.bulletPoints.split('\n');
  return (
    <article className={ExperienceStyle.card}>
      <div className={ExperienceStyle.card_body}>
        <h3 className={ExperienceStyle.card_body_heading}>
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
