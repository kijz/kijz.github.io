import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  // SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

import Layout from "../components/layouts/article";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
// import { GridItem } from "../components/grid-item";
import {
  IoGameControllerSharp,
  IoLogoDiscord,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
} from "react-icons/io5";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          textAlign="center"
        >
          Hello, I&apos;m Filip 👋
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Filip Kajzer
            </Heading>
            <p>Professional Unity Developer, Hobby Godot enjoyer 🤖</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={1}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile_2.jpeg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <List spacing={3} mt={2}>
            <ListItem>
              ⚙️ Currently building next-gen golf training experiences at{" "}
              <Link href="https://www.puttview.com/" isExternal>
                PuttView <ExternalLinkIcon mx="2px" />
              </Link>
              , including refactoring and expanding <strong>PuttView X</strong>,
              real-time ball tracking (YOLO + CUDA/TensorRT), and optimized physics systems.
            </ListItem>
            <ListItem>
              ⚡ Pushing the limits of <strong>GPU programming</strong>: CUDA + Metal
              compute shaders, ray tracing explorations, and high-performance inference stacks
              (100+ FPS tracking on RTX 3080).
            </ListItem>
            <ListItem>
              🥽 Experimenting with <strong>Apple Vision Pro development</strong> using
              Xcode, ARKit, and RealityKit. Focusing on highly optimized algorithms
              and fast-running Metal shaders for immersive AR applications.
            </ListItem>
            <ListItem>
              🎮 Exploring{" "}
              <Link href="https://godotengine.org/" isExternal>
                Godot <ExternalLinkIcon mx="2px" />
              </Link>{" "}
              as a hobby engine while keeping Unity as my main professional tool.
            </ListItem>
            <ListItem>
              🛠 Favorite solo project:{" "}
              <NextLink href="/projects/virtual-operating-theatre">
                <Link>Virtual Operating Theatre</Link>
              </NextLink>
              , a VR planning tool for surgeons.
            </ListItem>
          </List>

          <Box align="center" my={6}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Showcase
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>Dec 2022</BioYear>
            Started working as a Fullstack Unity Developer at Viewlicity GmbH.
          </BioSection>
          <BioSection>
            <BioYear>Jun 2021</BioYear>
            Started working as a XR Developer at antwerpes AG.
          </BioSection>
          <BioSection>
            <BioYear>Oct 2020</BioYear>
            Completed the Master&apos;s Program of Information Science at
            RWTH-Aachen University.
          </BioSection>
          <BioSection>
            <BioYear>Oct 2017</BioYear>
            Completed the Bachelor&apos;s Program of Information Science at HHU
            Düsseldorf.
          </BioSection>
          <BioSection>
            <BioYear>Jul 2016</BioYear>
            Started working as a Web Developer at eSagu GmbH.
          </BioSection>
          <BioSection>
            <BioYear>Feb 1993</BioYear>
            Born in Haan, Germany.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I 🫶
          </Heading>
          <Paragraph>
            neovim, Art, Music,{"  "}
            <Link href="https://kjz.itch.io">
              GameDev&nbsp;<ExternalLinkIcon mx="2px" />
            </Link>
            , Augmented and Virtual Reality, Machine Learning
          </Paragraph>
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Socials
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/kijz" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @kijz
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://x.com/kijzYAP" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @kijzYAP
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://discord.gg/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  @drkeule
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://kijz.itch.io" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoGameControllerSharp} />}
                >
                  @kijz -- itch.io
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/filip-kajzer-a65574140/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @Filip Kajzer
                </Button>
              </Link>
            </ListItem>
          </List>
          {
            // <SimpleGrid columns={[1, 2, 2]} gap={6}>
            //   <GridItem
            //     href="https://www.youtube.com/okayzer"
            //     title="Okayzer - GameDev"
            //     thumbnail={thumbnailYouTube}
            //   />
            //   <GridItem
            //     href="https://www.youtube.com/okayzer"
            //     title="Okayzer - GameDev"
            //     thumbnail={thumbnailYouTube}
            //   />
            // </SimpleGrid>
          }
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
