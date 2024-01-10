import HeroStyle from '@/components/Hero/hero.module.scss';
export default function Hero() {
  return (
    <section
      id='hero'
      className={HeroStyle.section}
    >
      <h1 className={HeroStyle.heading_h1}>Hello! My name is </h1>
      <h2 className={HeroStyle.heading_h2}>Willam Newton</h2>
      <h3 className={HeroStyle.heading_h3}>I do things</h3>
      <p className={HeroStyle.text}>
        Hello, fellow coffee drinker! Thank you for showing such keen interest
        in me. I am guessing you want to know more about me?
      </p>
    </section>
  );
}
