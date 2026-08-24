import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section>
      <h1>Hi, I'm Karl Mark P. Borboran.</h1>
      <p>I'm a Computer Science student who builds small full-stack tools and game-adjacent projects while learning.</p>
      <Link to="/projects" className="cta">View my projects</Link>
    </section>
  );
}
