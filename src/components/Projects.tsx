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
      'Planned procedures can be viewed while operating in Augmented Reality',
      'Reduced time and strain on surgeons in the preparation phase for surgery',
    ],
    videos: [
      {
        title: 'Virtual Patient Overview',
        videoId: 'mEpib14ejKo',
      },
      {
        title: 'Procedure Planning Demonstration',
        videoId: 'N1gX0VAoZWs',
      },
      {
        title: 'Training Planned Procedure Demonstration',
        videoId: 'bL7_-8S9mqI',
      },
      {
        title: 'Visualization Tools Demonstration',
        videoId: '4VpZ6AjulGo',
      },
    ],
    technologies: [
      'Human Computer Interaction',
      'User Interface Design',
      'SteamVR',
      'Unity',
      'Valve Index',
    ],
  },
  {
    name: 'MeshCut VR',
    description: [
      'Realistic cutting of objects via mesh manipulation',
      'Applied experimention from the Virtual Operating Theatre resulting in a more fun application',
      'Emphasized ease of use and simplicity',
      'Video captured on Oculus Quest 2',
    ],
    videos: [
      {
        title: 'Lets Play',
        videoId: 'GNq_oEOykuI',
      },
      {
        title: 'Increasing Difficulty!',
        videoId: 'nZTmeLzd_MY',
      },
    ],
    technologies: ['Mesh Cutting', 'Simplicity', 'OpenXR', 'Unity', 'Cross-platform'],
  },
  {
    name: 'Zombie VR',
    description: [
      'Dark and gloomy zombie shooter',
      'Emphasize on atmosphere and "zombie ambience" through fog, postprocessing, and sound effects',
      'Dismember system with ragdoll physics for zombies arms',
      'Video captured on Oculus Quest 2',
    ],
    videos: [
      {
        title: 'Lets Play',
        videoId: 'TnMEiUp3itc',
      },
    ],
    technologies: ['Postprocessing', 'Atmosphere', 'OpenXR', 'Unity'],
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

          <p className="keywords">
            {project.technologies.map((tech, index) => (
              <>
                <span style={{ display: 'inline-block', fontSize: '16px' }}>{tech}</span>
                {index < project.technologies.length - 1 && ' • '}
              </>
            ))}
          </p>
        </section>
      ))}
    </div>
  );
};

export default Projects;
