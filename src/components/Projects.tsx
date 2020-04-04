import React from 'react';

interface Project {
  name: string;
  description: string;
  gifUrl: string;
  technologies: string[];
}

const PROJECTS: Project[] = [
  {
    name: 'Little Golden Retriever',
    description:
      'Most of us, as developers we spend plenty of time improving our programming skills: design patterns, meta-programming, good practices, new languages or frameworks, you name it. Furthermore, even deployment and infrastructure can be managed through code. Hence, we could say that most part of our days revolves around code, as a matter of fact when we aren’t writing code we are reading it',
    gifUrl: 'https://assets.rbl.ms/510489/980x.jpg',
    technologies: ['Steam VR 2', 'Unity'],
  },
  {
    name: 'Little Golden Retriever 2',
    description: 'Foo bar',
    gifUrl: 'https://assets.rbl.ms/510489/980x.jpg',
    technologies: [],
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects">
      {PROJECTS.map(project => (
        <section key={project.name}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <img src={project.gifUrl} />

          <p>Technologies: {project.technologies.join(' • ')}</p>
        </section>
      ))}
    </div>
  );
};

export default Projects;
