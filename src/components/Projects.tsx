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
        source: 'http://dl5.webmfiles.org/big-buck-bunny_trailer.webm',
      },
      {
        poster: 'https://www.webmfiles.org/wp-content/uploads/2010/05/webm-files.jpg',
        source: 'http://dl5.webmfiles.org/elephants-dream.webm',
      },
    ],
    technologies: ['Steam VR 2', 'Unity', 'Valve Index'],
  },
  {
    name: 'Virtual Reality Lab (University project)',
    description: [
      'Recreate realistic or abstract interiors',
      'Navigate and interact with environment by different means of ray casting',
      'Choose from a set of textures, assets and colors to customize interior',
      'Move into Sandbox environment and chose which asset to take with you and place freely in room',
      'Showed that even a VR novice can build a room within ~20 min, experienced users ~5',
    ],
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
    technologies: ['Steam VR', 'Unity', 'HTC Vive'],
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

          <p style={{ opacity: 0.5 }}>{project.technologies.join(' • ')}</p>
        </section>
      ))}
    </div>
  );
};

export default Projects;
