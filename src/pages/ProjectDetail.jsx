import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams(); // id is a string, e.g. "2"

  // project ids are numbers, so id is converted for the comparison
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <section>
        <h1>Project not found</h1>
        <p>No project matches this id.</p>
        <Link to="/projects">Back to Projects</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noreferrer">View on GitHub</a>
      <br />
      <Link to="/projects">Back to Projects</Link>
    </section>
  );
}
