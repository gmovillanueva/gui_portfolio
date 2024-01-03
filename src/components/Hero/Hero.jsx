import * as HeroStyle from '@/components/Hero/hero.module.scss';
export default function Hero() {
  return (
    <div>
      <section
        id='hero'
        className={HeroStyle.base}
      >
        <h1 className={HeroStyle.headings_h1}>Hello! My name is </h1>
        <h2 className={HeroStyle.headings_h2}>Willam Newton</h2>
        <h3 className={HeroStyle.headings_h3}>I do things</h3>
        <p className={HeroStyle.text}>
          Hello, fellow coffee drinker! Thank you for showing such keen interest
          in me. I am guessing you want to know more about me?
        </p>
      </section>
    </div>
  );
}
