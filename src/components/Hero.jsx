import * as HeroStyle from '@/styles/components/_hero.module.scss';
export default function Hero() {
  return (
    <div>
      <section
        id='hero'
        className={HeroStyle.hero}
      >
        <h1 className={HeroStyle.hero__headings__h1}>Hello! My name is </h1>
        <h2 className={HeroStyle.hero__headings__h2}>Willam Newton</h2>
        <h3 className={HeroStyle.hero__headings__h3}>I do things</h3>
        <p className={HeroStyle.hero__text__paragraph}>
          Hello, fellow coffee drinker! Thank you for showing such keen interest
          in me. I am guessing you want to know more about me?
        </p>
      </section>
    </div>
  );
}
