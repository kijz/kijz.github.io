import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'

import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'

import thumbOperatingTheatre from '../public/images/profile.jpeg'
import thumbMesh from '../public/images/profile.jpeg'
import thumbZombie from '../public/images/profile.jpeg'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid colums={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="master-thesis" title="Virtual Operating Theatre" thumbnail={thumbOperatingTheatre}>
            Pre-operative Planning in Virtual Reality with Head Mounted Displays for Oral and Maxillofacial Surgery.
          </WorkGridItem>
          <WorkGridItem id="mesh-cut" title="MeshCut VR" thumbnail={thumbMesh}>
            Realistic cutting of object via mesh manipulation.
          </WorkGridItem>
          <WorkGridItem id="zombie-shooter" title="Zombies VR" thumbnail={thumbZombie}>
            Dark and gloomy zombie shooter.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
