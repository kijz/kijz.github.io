import { Text, Box, Divider, Link, Container, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import {
  Meta,
  ProjectYoutube,
  Title,
} from "../../components/project";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Project = () => {
  return (
    <Layout title="Putt View X (PVX)">
      <Container>
        <Title>
          Augmented Reality Golf Training
          <br />
          <Link href="https://www.puttview.com/products/outdoor/puttview-x/" isExternal>
            PuttView X <ExternalLinkIcon mx="2px" />
          </Link>
        </Title>

        <P>
          <strong>PuttView X (PVX)</strong> is a cutting-edge augmented reality training system
          for golf putting, showcased at the <em>PGA Show</em> and used by professionals and
          enthusiasts worldwide. By projecting real-time visual guidance directly onto the
          putting green, PVX helps players practice with precision and data-driven feedback.
        </P>

        <P>
          As a <strong>Fullstack Unity Developer</strong> at
          <Link href="https://puttview.com" isExternal> PuttView</Link>,
          I led and contributed to major developments that improved
          stability, performance, and user experience across the platform.
        </P>

        <Divider mt={4} mb={6} />

        <P>
          PVX supports intuitive control through <strong>one-handed gestures </strong>
          and <strong>voice commands</strong>, integrates with a companion mobile app for
          <strong> setting up</strong> and <strong>screensharing</strong>.
          A highlight is the provided <em>&quot;Aimbot&quot;</em>-like feature, which projects
          the ideal swing speed and angle onto the user’s field of view.
        </P>
        <Box
          bg="gray.100"
          p={6}
          rounded="xl"
          shadow="md"
          textAlign="center"
          mt={6}
        >
          <Text fontStyle="italic" color="gray.600" fontSize="lg">
            “It gets really easy when you have these on.”
          </Text>
          <Text fontSize="sm" color="gray.600" mt={2}>
            – Beta Tester
          </Text>
        </Box>

        <Divider mt={4} mb={6} />

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
            <span>HoloLens 2</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Unity, C#, Mixed Reality Toolkit</span>
          </ListItem>
          <ListItem mt={8}>
            <P as="h3">Announcement</P>
            <ProjectYoutube embedId="VLBZsEJN2ko" />
          </ListItem>
          <ListItem mt={8}>
            <P as="h1">Showcase</P>
            <ProjectYoutube embedId="uQ70cA_0O0o" />
          </ListItem>
          <ListItem mt={8}>
            <P as="h1">Review</P>
            <ProjectYoutube embedId="gfNSoAOkLkI" />
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Project;
