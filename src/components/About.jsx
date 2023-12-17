import * as AboutStyle from '@/styles/components/_about.module.scss';

export default function About() {
  return (
    <div>
      <section id='about'>
        <div id='headings'>
          <h3 className={AboutStyle.header}>About</h3>
          <h4>I am Guillermo</h4>
        </div>
        <div id='container'>
          <div id='paragraphs'>
            <p>
              Hello, fellow coffee drinker! Thank you for showing such keen
              interest in me. I am guessing you want to know more about me?
              Hmmm... Where to begin...
            </p>
            <p>In a galaxy very far far away...</p>
            <p>
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
          <div id='current-skills'>
            <li>React</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Node.js</li>
          </div>
        </div>
      </section>
    </div>
  );
}
