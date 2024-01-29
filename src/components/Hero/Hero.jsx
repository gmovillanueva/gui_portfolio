import HeroStyle from '@/components/Hero/hero.module.scss';
export default function Hero() {
  return (
    <section
      id='hero'
      className={HeroStyle.section}
    >
      <h1 className={HeroStyle.heading_h1}>Hello! I am </h1>
      <h2 className={HeroStyle.heading_h2}>Willam Newton</h2>
      <h3 className={HeroStyle.heading_h3}>I do things</h3>
      <p className={HeroStyle.text}>
        I am a software engineer who loves building and designing digital
        applications. My current focus is building human-friendly products and
        growing as a software engineer, with the possibility of learning new
        technology here and there.
      </p>
    </section>
  );
}
