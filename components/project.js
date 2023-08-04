import NextLink from "next/link";
import { AspectRatio, Badge, Box, Heading, Image, Link } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const Title = ({ children }) => (
  <>
    <Box>
      <NextLink href="/projects">
        <Link>Projects</Link>
      </NextLink>
    </Box>

    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </>
);

export const ProjectImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);

export const ProjectYoutube = ({ embedId }) => (
  <AspectRatio borderRadius="lg" maxW="full" ratio={1}>
    <iframe
      title={`video-${embedId}`}
      src={`https://www.youtube.com/embed/${embedId}`}
      allowFullScreen
    />
  </AspectRatio>
);
