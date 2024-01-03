import ProjectsStyle from '@/components/Projects/projects.module.scss';
import ContentfulImage from '@/utils/contentfulImage';
export default function ProjectCard({ projectEntry }) {
  let imageURL = String(projectEntry.projectImage?.fields?.file?.url);

  return (
    <li className={ProjectsStyle.grid}>
      <div
        className={ProjectsStyle.project_content}
        id='project_content'
      >
        <div>
          <p className={ProjectsStyle.project_overtitle}>Featured Project</p>

          <h3 className={ProjectsStyle.project_title}>
            {projectEntry.projectTitle}
          </h3>

          <div className={ProjectsStyle.project_description}>
            {projectEntry.description}
          </div>

          {projectEntry.technology?.length && (
            <ul className={ProjectsStyle.project_tech}>
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

      <div className={ProjectsStyle.project_image_wrapper}>
        <div className={ProjectsStyle.project_image_dummy}>
          <ContentfulImage
            className={ProjectsStyle.project_image}
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
