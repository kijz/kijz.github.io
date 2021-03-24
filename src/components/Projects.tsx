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
        title: '1',
        videoId: 'N1gX0VAoZWs',
      },
      {
        title: '2',
        videoId: 'bL7_-8S9mqI',
      },
      {
        title: '3',
        videoId: '4VpZ6AjulGo',
      },
      {
        title: '4',
        videoId: 'mEpib14ejKo',
      },
    ],
    technologies: ['OpenVR', 'Unity', 'Valve Index'],
  },
  {
    name: 'Realistic Cutting By Cutting Through Fruits!',
    description: [
      'Fruit Ninjaesque Game',
      'Experimenting with Mesh Cutting in the Virtual OT resulting in a (more) fun application!',
      'Emphasized ease of use, simplicity',
      'Video captured on Oculus Quest 2',
    ],
    videos: [
      {
        title: '1',
        videoId: 'GNq_oEOykuI',
      },
      {
        title: '2',
        videoId: 'nZTmeLzd_MY',
      },
    ],
    technologies: ['UX', 'Mesh Cutting', 'Simplicity'],
  },
  {
    name: 'Zombie Shooter',
    description: [
      'Dark / glooming zombie shooter',
      'Emphasized on atmosphere, "zombie" ambience through fog and postprocessing',
      'Dismember system for zombies arms',
      'On zombie death (Head or Leg dismembered), activate ragdoll',
      'Video captured on Oculus Quest 2',
    ],
    videos: [
      {
        title: '1',
        videoId: 'TnMEiUp3itc',
      },
      {
        title: '2',
        videoId: 'FU4Ahk_vcDs',
      },
    ],
    technologies: ['Atmosphere', 'Postprocessing', 'Ambience'],
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
