import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Meta,
  ProjectImage,
  ProjectYoutube,
  Title,
} from "../../components/project";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Project = () => {
  return (
    <Layout title="Zombie VR">
      <Container>
        <Title>
          Zombie VR <Badge>Hobby</Badge>
        </Title>
      <P>Dark and gloomy zombie shooter</P>
      <P>Emphasize on atmosphere and &quot;zombie ambience&quot; through fog, postprocessing, and sound effects</P>
      <P>Dismember system with ragdoll physics for zombies arms</P>
      <P>Video captured on Oculus Quest 2</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://kjz.itch.io/zombiesvr">
              https://kjz.itch.io/zombiesvr&nbsp;<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Virtual Reality / Meta Quest2</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Unity, C#, Postprocessing, Atmosphere</span>
          </ListItem>
          <ListItem mt={8}>
            <ProjectImage
              src="/nextjs-github-pages/images/projects/zombies_02.png"
              alt="Zombie VR Starting Screen"
            />
          </ListItem>
          <ListItem mt={8}>
            <P as="h1">Let&apos;s play</P>
            <ProjectYoutube embedId="TnMEiUp3itc" />
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Project;
