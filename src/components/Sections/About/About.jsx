import AboutStyle from '@components/Sections/About/about.module.scss';
import heroImage from '@public/images/heroimage.webp';
import Image from 'next/image';

export default function About() {
  const currentSkills = [
    'JavaScript',
    'TypeScript',
    'Next.JS',
    'React',
    'Node.js',
    'C#',
  ];
  return (
    <section
      id='about'
      className={AboutStyle.section}
    >
      <h2 className={AboutStyle.heading}>01. About Me</h2>

      <div className={AboutStyle.grid}>
        <div id='text_content'>
          <div id='paragraphs'>
            <p className={AboutStyle.container_text}>
              Hello everyone! My name is William, and I enjoy creating things,
              whether they live on the internet, in a physical space, or even on
              my hard drive. My passion for software development started in 2003
              when I started using a computer and became curious about how the
              computer knew what the user was doing. That led me down the rabbit
              hole of programming, which taught me a ton of how computers
              operate.
            </p>
            <p className={AboutStyle.container_text}>
              Fast-forwarding today, I have worked at a Tier-1 university, a
              start-up, and free-lanced for corporations, contributing to my
              growth. My current focus is building products and digital
              experiences for various clients.
            </p>
            <p className={AboutStyle.container_text}>
              Below are some technologies I have worked with recently:
            </p>
          </div>

          <ul className={AboutStyle.skillList}>
            {currentSkills &&
              currentSkills.map((skill, index) => (
                <li
                  className={AboutStyle.skillListItem}
                  key={index}
                >
                  {skill}
                </li>
              ))}
          </ul>
        </div>

        <div
          id='image'
          className={AboutStyle.imageContainer}
        >
          <div className={AboutStyle.imageWrapper}>
            <Image
              className={AboutStyle.container_image}
              src={heroImage}
              width={300}
              heihgt={300}
              alt='Picture of Will'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
