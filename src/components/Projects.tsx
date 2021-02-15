import React from 'react';
import Slideshow, { VideoSource } from './Slideshow';

interface Project {
  name: string;
  description: string[];
  videos: VideoSource[];
  technologies: string[];
}

const PROJECTS: Project[] = [
  {
    name:
      'Pre-operative Planning in Virtual Reality with Head Mounted Displays for Oral and Maxillofacial Surgery',
    description: [
      'Collaboration between the Visual Computing Department of the RWTH Aachen and the Oral and Maxillofacial derpartment of the University Hospital Aachen',
      'Use only natural hand gestures like grabbing and pointing for usability',
      'Most common procedures can be played out on visualized medical imaging of patients',
      'Ability to save planned procedures and view / share them',
      'In a collaboration with a fellow graduate student, planned procedures can be viewed while operating in Augmented Reality',
      'Reduced time and strain on surgeons in the preparation phase for surgery',
    ],
    videos: [
      {
        poster: 'https://www.webmfiles.org/wp-content/uploads/2010/05/webm-file.jpg',
        source: 'https://www.youtube.com/watch?v=4VpZ6AjulGo',
      },
      {
        poster: 'https://www.webmfiles.org/wp-content/uploads/2010/05/webm-files.jpg',
        source: 'https://www.youtube.com/watch?v=4VpZ6AjulGo',
      },
      {
        poster: 'https://www.webmfiles.org/wp-content/uploads/2010/05/webm-files.jpg',
        source: 'https://www.youtube.com/watch?v=4VpZ6AjulGo',
      },
      {
        poster: 'https://www.webmfiles.org/wp-content/uploads/2010/05/webm-files.jpg',
        source: 'https://www.youtube.com/watch?v=4VpZ6AjulGo',
      },
    ],
    technologies: ['OpenVR', 'Unity', 'Valve Index'],
  },
  {
    name: '1 Hour Prototype Challenge',
    description: ['Zombie Wave Game', 'DueDate: 20.2.'],
    videos: [
      {
        poster: 'https://www.webmfiles.org/wp-content/uploads/2010/05/webm-file.jpg',
        source: 'http://dl5.webmfiles.org/big-buck-bunny_trailer.webm',
      },
      {
        poster: 'https://www.webmfiles.org/wp-content/uploads/2010/05/webm-files.jpg',
        source: 'http://dl5.webmfiles.org/elephants-dream.webm',
      },
    ],
    technologies: ['Open VR', 'Unity', 'Oculus Quest 2'],
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects">
      {PROJECTS.map(project => (
        <section key={project.name}>
          <h2>{project.name}</h2>
          <ul>
            {project.description.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
          <Slideshow entries={project.videos} />

          <p style={{ opacity: 0.5, textAlign: 'center' }}>{project.technologies.join(' • ')}</p>
        </section>
      ))}
    </div>
  );
};

export default Projects;
