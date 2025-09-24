import { Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react";

import { ProjectGridItem } from "../components/grid-item";
import Section from "../components/section";
import Layout from "../components/layouts/article";

import thumbOperatingTheatre from "../public/images/projects/virtual_operating_theatre_01.png";
import thumbMesh from "../public/images/projects/mesh_cut_01.png";
import thumbZombie from "../public/images/projects/zombie_01.png";
import thumbPVX from "../public/images/projects/pvx-showcase.jpg";

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid colums={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem
              id="pvx"
              title="PuttViewX"
              thumbnail={thumbPVX}
            >
              Augmented Reality Golf Training for the outdoors
            </ProjectGridItem>
            <Divider mt={4} mb={6} />
            <ProjectGridItem
              id="virtual-operating-theatre"
              title="Virtual Operating Theatre"
              thumbnail={thumbOperatingTheatre}
            >
              Pre-operative Planning in Virtual Reality with Head Mounted
              Displays for Oral and Maxillofacial Surgery.
            </ProjectGridItem>
            <Divider mt={4} mb={6} />
            <ProjectGridItem
              id="mesh-cut"
              title="MeshCut VR"
              thumbnail={thumbMesh}
            >
              Realistic cutting of object via mesh manipulation.
            </ProjectGridItem>
            <Divider mt={4} mb={6} />
            <ProjectGridItem
              id="zombie-shooter"
              title="Zombies VR"
              thumbnail={thumbZombie}
            >
              Dark and gloomy zombie shooter.
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Projects;
