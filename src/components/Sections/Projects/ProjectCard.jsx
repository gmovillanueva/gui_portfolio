import ContentfulImage from '@api/contentfulImage';
import ProjectsStyle from '@components/Sections/Projects/projects.module.scss';
import PropTypes from 'prop-types';
export default function ProjectCard({ projectEntry }) {
  let imageURL = String(projectEntry.projectImage?.fields?.file?.url);

  return (
    <li className={ProjectsStyle.grid}>
      <div
        className={ProjectsStyle.projectContent}
        id='project_content'
      >
        <div>
          <p className={ProjectsStyle.projectOverTitle}>Featured Project</p>

          <h3 className={ProjectsStyle.projectTitle}>
            {projectEntry.projectTitle}
          </h3>

          <div className={ProjectsStyle.projectDescription}>
            {projectEntry.description}
          </div>

          {projectEntry.technology?.length && (
            <ul className={ProjectsStyle.projectTech}>
              {projectEntry.technology.map((technology, index) => (
                <li key={index}>{technology}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className={ProjectsStyle.projectImageWrapper}>
        <div className={ProjectsStyle.projectImageDummy}>
          <ContentfulImage
            className={ProjectsStyle.projectImage}
            alt='Photo'
            width={700}
            height={360}
            src={imageURL}
          />
        </div>
      </div>
    </li>
  );
}

ProjectCard.propTypes = {
  projectEntry: PropTypes.shape({
    projectImage: PropTypes.object,
    projectTitle: PropTypes.string,
    technology: PropTypes.array,
  }),
};
