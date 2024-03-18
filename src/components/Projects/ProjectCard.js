import {
  Badge,
  Box,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function ProjectCard({ project, index }) {
  const { title, description, tags, links } = project;

  return (
    <Flex
      direction={{
        base: "column",
        lg: index % 2 === 0 ? "row" : "row-reverse",
      }}
      gap={"30px"}
      overflow={"hidden"}
    >
      <Image
        className="project-image"
        boxShadow={"lg"}
        borderStyle={"solid"}
        borderWidth={"2px"}
        borderColor={"blue.200"}
        rounded={"sm"}
        alt={title}
        src={links.image}
        w={"100%"}
        maxW={"600px"}
        alignSelf={"flex-start"}
      />

      <VStack alignItems={"flex-start"} maxW={"400px"} className="project-info">
        <Text
          className="raleway"
          fontSize={"22px"}
          fontWeight={"semibold"}
          color={"#0075F2"}
        >
          {title}
        </Text>
        <Box
          className="merriweather"
          fontWeight={"thin"}
          borderBottom={"1px solid gray"}
          pb={"30px"}
        >
          <Text> {description}</Text>
          <HStack gap={"4px"} mt={"16px"}>
            <Link isExternal href={links.code}>
            </Link>
            <Link isExternal href={links.preview}>
              Preview
            </Link>
          </HStack>
        </Box>
        <Flex wrap={"wrap"} gap={"4px"}>
          {tags.map((tag, index) => (
            <Badge key={index} variant={"solid"} colorScheme={"blue"}>
              {tag}
            </Badge>
          ))}
        </Flex>
      </VStack>
    </Flex>
  );
}