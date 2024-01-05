import ContentfulImage from '@/api/contentfulImage';
import ProjectsStyle from '@/components/Projects/projects.module.scss';
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
      {/*        <div>
          <p className={ProjectsStyle.ite}>Featured Project</p>

          <h3 className={ProjectsStyle.project_title}>
            {projectEntry.projectTitle}
          </h3>

          <div className={ProjectsStyle.project_description} />

          {projectEntry.technology?.length && (
            <ul className={ProjectsStyle.project_tech_list}>
              {projectEntry.technology.map((technology, index) => (
                <li key={index}>{technology}</li>
              ))}
            </ul>
          )}

          <div className={ProjectsStyle.project_links}>
            <a
              href={projectEntry.github}
              aria-label='Github Link'
            ></a>
          </div>
        </div>
      </div>*/}

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
