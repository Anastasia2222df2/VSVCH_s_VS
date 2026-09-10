interface HeroProps {
  title: string;
}

export const Hero = ({ title }: HeroProps) => {
  return (
    <section style={{ padding: '2rem 1rem', textAlign: 'center' }}>
      <h1>{title}</h1>
      <p>Добро пожаловать на наш учебный портал!</p>
    </section>
  );
};