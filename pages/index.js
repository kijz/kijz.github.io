import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

import Layout from "../components/layouts/article";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";

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
              borderWidth={4}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile.jpeg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            - Currently working on the next level of putting&nbsp;
            <Link href="https://www.puttview.com/">
              @PuttView <ExternalLinkIcon mx="2px" />
            </Link>
            .<br />
          </Paragraph>
          <Paragraph>
            - Learning&nbsp;
            <Link href="https://godotengine.org/">
              Godot&nbsp;<ExternalLinkIcon mx="2px" />
            </Link>
            .<br />
          </Paragraph>
          <Paragraph>
            - Most interesting solo project&nbsp;
            <NextLink href="/projects/virtual-operating-theatre">
              <Link>Virtual Operating Theatre</Link>
            </NextLink>
            .
          </Paragraph>

          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Portfolio
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
            Started working as a Unity Developer at ViewLicity GmbH.
          </BioSection>
          <BioSection>
            <BioYear>Jun 2021</BioYear>
            Started working as a Unity Developer at antwerpes AG.
          </BioSection>
          <BioSection>
            <BioYear>Oct 2020</BioYear>
            Completed the Master&apos;s Program of Information Science at
            RWTH-Aachen University.
          </BioSection>
          <BioSection>
            <BioYear>Oct 2017</BioYear>
            Completed the Bachelor&apos;s Program of Information Science at
            HHU Düsseldorf.
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
            Art, Music,{"  "}
            <Link href="https://kjz.itch.io">
              GameDev&nbsp;<ExternalLinkIcon mx="2px" />
            </Link>
            , Virtual Reality, Machine Learning
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
