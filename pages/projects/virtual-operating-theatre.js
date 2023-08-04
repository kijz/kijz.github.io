import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Meta, ProjectImage, Title } from "../../components/project";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";


const Project = () => {
  return (
    <Layout title="Virtual Operating Theatre">
      <Container>
        <Title>
          Virtual Operating Theatre <Badge>Master Thesis</Badge>
        </Title>
        <P>
          Master Thesis (copy text later)

          Pre-operative Planning in Virtual Reality with Head Mounted Displays
          for Oral and Maxillofacial Surgery.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/">
              https://github.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Virtual Reality/HTC Vive/Valve Index Knuckles</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Unity, C#, SteamVR 2.0</span>
          </ListItem>
          <ListItem mt={8}>
            <ProjectImage src="/images/profile.jpeg" alt="lmao" />
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Project;
