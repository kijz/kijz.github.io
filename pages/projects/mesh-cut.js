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
    <Layout title="Mesh Cut VR">
      <Container>
        <Title>
          Mesh Cut VR <Badge>Hobby</Badge>
        </Title>
        <P>Realistic cutting of objects via mesh manipulation</P>
        <P>
          Applied experimentation (with mesh cutting) from the Virtual Operating Theatre resulting in
          a more fun application
        </P>
        <P>Emphasized ease of use and simplicity</P>
        <P>Video captured on Oculus Quest 2</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://kjz.itch.io/meshcutvr">
              https://kjz.itch.io/meshcutvr&nbsp;<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Virtual Reality / Meta Quest2</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Unity, C#, XR Interaction Toolkit, Mesh Cutting, OpenXR, Cross-platform, Simplicity</span>
          </ListItem>
          <ListItem mt={8}>
            <ProjectImage
              src="/images/projects/mesh_cut_02.png"
              alt="Mesh Cut VR Starting Screen"
            />
          </ListItem>
          <ListItem mt={8}>
            <P as="h1">Let&apos;s play</P>
            <ProjectYoutube embedId="GNq_oEOykuI" />
          </ListItem>
          <ListItem mt={8}>
            <P as="h3">Increasing Difficulty!</P>
            <ProjectYoutube embedId="nZTmeLzd_MY" />
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Project;
