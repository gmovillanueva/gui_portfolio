'use client';

import ExperienceStyle from '@/components/Experience/experience.module.scss';
import LogoSVG from '@/components/_icons/LogoSVG';
import PropTypes from 'prop-types';

export default function ExperienceCards({ workEntry }) {
  const textArray = workEntry.bulletPoints.split('\n');
  return (
    <article
      className={ExperienceStyle.card}
      id='card'
    >
      <a
        href={workEntry.companyUrl}
        rel='noreferrer noopener'
        target='_blank'
        className={ExperienceStyle.cardLink}
        id={ExperienceStyle.cardLink}
      >
        <LogoSVG />
      </a>
      <div
        className={ExperienceStyle.cardBody}
        id='card_body'
      >
        <h3>
          <span>{workEntry.jobTitle}</span>
          <br />
          <a
            href={workEntry.companyUrl}
            rel='noreferrer noopener'
            target='_blank'
            className={ExperienceStyle.cardInline}
          >
            &nbsp;@{workEntry.companyName}
          </a>
        </h3>
        <p className={ExperienceStyle.cardDate}>
          {new Date(workEntry.startDate).getFullYear()} -{' '}
          {workEntry?.currentlyHere
            ? 'Present'
            : new Date(workEntry.endDate).getFullYear()}{' '}
        </p>
        <ul className={ExperienceStyle.cardText}>
          {textArray.map((bullet, index) => {
            return <li key={index}>{bullet}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}

ExperienceCards.propTypes = {
  workEntry: PropTypes.shape({
    companyUrl: PropTypes.string,
    bulletPoints: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    currentlyHere: PropTypes.bool,
    jobTitle: PropTypes.string,
    companyName: PropTypes.string,
  }),
};
