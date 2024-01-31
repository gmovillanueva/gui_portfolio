import ContentfulImage from '@api/contentfulImage';
import ExperienceStyle from '@components/Sections/Experience/experience.module.scss';
import PropTypes from 'prop-types';

export default function ExperienceCard({ workEntry }) {
  let imageURL = String(workEntry.companyImage?.fields?.file?.url);
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
        <ContentfulImage
          className={ExperienceStyle.cardImage}
          alt='Photo'
          width={80}
          height={60}
          src={imageURL}
        />
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

ExperienceCard.propTypes = {
  workEntry: PropTypes.shape({
    companyUrl: PropTypes.string,
    bulletPoints: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    currentlyHere: PropTypes.bool,
    jobTitle: PropTypes.string,
    companyName: PropTypes.string,
    companyImage: PropTypes.object,
  }),
};
