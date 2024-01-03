import { Flex, Spinner, Text } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Flex
      className="space"
      bg={"blue.200"}
      backgroundImage={"loadbg.jpg"}
      position={"absolute"}
      zIndex={20}
      height={"100vh"}
      w={"100%"}
      justify={"center"}
      align={"center"}
      gap={"18px"}
      color={"white"}
    >
      <Text fontSize={{ base: "18px", md: "22px" }} fontWeight={"semibold"}>
        Give me a second
      </Text>
      <Spinner size={{ base: "md", md: "lg" }} />
    </Flex>
  );
}
