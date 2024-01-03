import { Flex, Image, Text, VStack } from "@chakra-ui/react";

export default function SkillSet({ skills, title }) {
  return (
    <VStack rounded={"md"} align={"center"} justify={"center"}>
      <Text
        className="raleway"
        fontSize={{ base: "20px", md: "26px" }}
        fontWeight={"semibold"}
        textAlign={"center"}
      >
        {title}
      </Text>
      <Flex
        wrap={"wrap"}
        gap={{ base: "10px", md: "18px" }}
        padding={{ base: "0px", md: "18px" }}
        justify={"center"}
        align={"center"}
        overflow={"hidden"}
      >
        {skills.map((skill, index) => (
          <VStack
            className="skill-box"
            key={index}
            rounded={"md"}
            w={{ base: "80px", md: "100px" }}
            h={{ base: "80px", md: "100px" }}
            bg={"white"}
            color={"black"}
            align={"center"}
            justify={"center"}
            padding={{ base: "4px", md: "8px" }}
          >
            <Image
              alt={skill.name}
              src={skill.url}
              w={{ base: "40px", md: "50px" }}
            />
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight={"semibold"}
            >
              {skill.name}
            </Text>
          </VStack>
        ))}
      </Flex>
    </VStack>
  );
}
