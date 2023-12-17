import * as HeroStyle from '@/styles/components/_hero.module.scss';
export default function Hero() {
  return (
    <div>
      <section
        id='hero'
        className={HeroStyle.section}
      >
        <h1 className={HeroStyle.headingIntro}>Hello! My name is </h1>
        <h2 className={HeroStyle.headingName}>Willam Newton</h2>
        <h3 className={HeroStyle.headingTitle}>I do things</h3>
        <p className={HeroStyle.text}>
          Hello, fellow coffee drinker! Thank you for showing such keen interest
          in me. I am guessing you want to know more about me? Hmmm... Where to
          begin...
        </p>
      </section>
    </div>
  );
}
