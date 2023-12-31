'use client';
import CarouselStyle from '@/components/Carousel/carousel.module.scss';
export default function Carousel() {
  return (
    <div
      id='carousel_container'
      className={CarouselStyle.carouselContainer}
    >
      <div
        id='carousel_track'
        className={CarouselStyle.carouselTrack}
      >
        {experience &&
          experience.map((workEntry, index) => {
            return (
              <CarouselCards
                key={index}
                workEntry={workEntry}
              />
            );
          })}
      </div>
    </div>
  );
}

function CarouselCards({ workEntry }) {
  const textArray = workEntry.bulletPoints.split('\n');
  return (
    <article className={CarouselStyle.carouselCard}>
      <div className={CarouselStyle.carouselCardBody}>
        <h3 className={CarouselStyle.carouselCardBodyHeading}>
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
