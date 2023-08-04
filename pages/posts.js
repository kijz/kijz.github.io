import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";

import { GridItem } from "../components/grid-item";

import thumbnail from "../public/images/content/under_construction.png";

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        What i&apos;m thinking about...
      </Heading>
      <Section delay={0.2}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Under construction! Meanwhile..."
            thumbnail={thumbnail}
            href="https://kjz.itch.io/"
          />
          <GridItem
            title="Under construction! Meanwhile..."
            thumbnail={thumbnail}
            href="https://kjz.itch.io/"
          />
        </SimpleGrid>
      </Section>
      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Under construction! Meanwhile..."
            thumbnail={thumbnail}
            href="https://kjz.itch.io/"
          />
          <GridItem
            title="Under construction! Meanwhile..."
            thumbnail={thumbnail}
            href="https://kjz.itch.io/"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
