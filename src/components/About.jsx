import * as AboutStyle from '@/styles/components/_about.module.scss';
import heroImage from '@public/images/heroimage.webp';
import Image from 'next/image';

export default function About() {
  return (
    <section
      id='about'
      className={AboutStyle.about}
    >
      <div id='headings'>
        <h3 className={AboutStyle.about__headings__header3}>About</h3>
        <h4>I am Guillermo</h4>
      </div>
      <div
        id='container'
        className={AboutStyle.about__container}
      >
        <div id='container-text'>
          <div id='paragraphs'>
            <p className={AboutStyle.about__text}>
              Hello, fellow coffee drinker! Thank you for showing such keen
              interest in me. I am guessing you want to know more about me?
              Hmmm... Where to begin...
            </p>
            <p className={AboutStyle.about__text}>
              In a galaxy very far far away...
            </p>
            <p className={AboutStyle.about__text}>
              Alright, all jokes aside. As you probably know by now, I am
              William Newton, a full-stack developer born and raised in Texas,
              United States. No, we do not ride horses everywhere that is only
              reserved for Sundays. What else can I say? I am passionate about
              programming, solving complex problems, and creating random things.
              My interest in programming started when I took my electronics
              apart as a child (yes, I was one of those). The curiosity was
              intense in this one; as I grew older, I started asking questions
              about how the electronics knew what to do. Going down the rabbit
              hole led to learning about binary and Assembly... Since then, I
              have had nightmares about Assembly. After my rough encounter with
              Assembly, I eventually moved to C/C++ and finally to web
              development. Fast-forwarding to today, I have worked at a Tier 1
              university, a start-up and free-lanced. My primary focus is
              building accessible products and digital experiences.
            </p>
          </div>
          <div
            id='current-skills'
            className={AboutStyle.about__skills}
          >
            <li>React</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Node.js</li>
          </div>
        </div>
        <div id='container-image'>
          <Image
            className={AboutStyle.about__image}
            src={heroImage}
            width={400}
            heihgt={400}
            alt='Picture of Will'
          />
        </div>
      </div>
    </section>
  );
}
