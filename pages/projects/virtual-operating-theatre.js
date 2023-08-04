import { Badge, Container, List, ListItem } from "@chakra-ui/react";
// import { ExternalLinkIcon } from "@chakra-ui/icons";
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
    <Layout title="Virtual Operating Theatre">
      <Container>
        <Title>
          Pre-operative Planning in Virtual Reality with Head Mounted Displays
          for Oral and Maxillofacial Surgery <Badge>Master Thesis</Badge>
        </Title>
        <P>
          Collaboration between the Visual Computing Department of the RWTH
          Aachen and the Oral and Maxillofacial derpartment of the University
          Hospital Aachen
        </P>
        <P>
          Use only natural hand gestures like grabbing and pointing for
          usability
        </P>
        <P>
          Most common procedures can be played out on visualized medical
          imaging of patients
        </P>
        <P>Ability to save planned procedures and view / share them</P>
        <P>
          Planned procedures can be viewed while operating in Augmented
          Reality
        </P>
        <P>
          Reduced time and strain on surgeons in the preparation phase for
          surgery
        </P>
        <List ml={4} my={4}>
          {
            // <ListItem>
            //   <Meta>Source</Meta>
            //   <Link href="https://github.com/">
            //     https://github.com <ExternalLinkIcon mx="2px" />
            //   </Link>
            // </ListItem>
          }
          <ListItem>
            <Meta>Platform</Meta>
            <span>Virtual Reality / HTC Vive / Valve Index Knuckles</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Unity, C#, SteamVR 2.0</span>
          </ListItem>
          <ListItem mt={8}>
            <ProjectImage
              src="/images/projects/virtual_operating_theatre_01.png"
              alt="Virtual Operating Theatre"
            />
          </ListItem>
          <ListItem mt={8}>
            <P as="h1">Virtual Patient Overview</P>
            <ProjectYoutube embedId="mEpib14ejKo" />
          </ListItem>
          <ListItem mt={8}>
            <P as="h3">Procedure Planning Demonstration</P>
            <ProjectYoutube embedId="N1gX0VAoZWs" />
          </ListItem>
          <ListItem mt={8}>
            <P as="h3">Training Planned Procedure Demonstration</P>
            <ProjectYoutube embedId="bL7_-8S9mqI" />
          </ListItem>
          <ListItem mt={8}>
            <P as="h3">Visualization Tools Demonstration</P>
            <ProjectYoutube embedId="4VpZ6AjulGo" />
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Project;
